// Atualiza src/data/instagram.json com os reels mais vistos da conta da loja,
// usando a Instagram API (Instagram Login). Baixa as capas para public/instagram/,
// porque as URLs da CDN do Instagram expiram.
//
// Uso: INSTAGRAM_ACCESS_TOKEN=... node scripts/sync-instagram.mjs
// Sem token, mantém o snapshot atual e sai sem erro (o build continua funcionando).

import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_FILE = path.join(ROOT, 'src/data/instagram.json');
const THUMBS_DIR = path.join(ROOT, 'public/instagram');
const API = 'https://graph.instagram.com/v23.0';
const TOP_REELS = 6;
const MAX_MEDIA = 100;

function loadEnvFile() {
  const envPath = path.join(ROOT, '.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
  }
}

async function get(endpoint, params, token) {
  const url = new URL(`${API}/${endpoint}`);
  for (const [key, value] of Object.entries({ ...params, access_token: token })) url.searchParams.set(key, value);
  const res = await fetch(url);
  const body = await res.json();
  if (!res.ok || body.error) throw new Error(`${endpoint}: ${body.error?.message ?? res.status}`);
  return body;
}

async function fetchMedia(token) {
  const media = [];
  let after;
  while (media.length < MAX_MEDIA) {
    const page = await get(
      'me/media',
      {
        fields: 'id,caption,media_product_type,permalink,thumbnail_url,like_count,comments_count,timestamp',
        limit: '50',
        ...(after ? { after } : {}),
      },
      token,
    );
    media.push(...page.data);
    after = page.paging?.cursors?.after;
    if (!page.paging?.next || !after) break;
  }
  return media.filter((item) => item.media_product_type === 'REELS');
}

async function fetchViews(id, token) {
  try {
    const insights = await get(`${id}/insights`, { metric: 'views' }, token);
    return insights.data?.[0]?.values?.[0]?.value ?? 0;
  } catch {
    return 0;
  }
}

function shortCaption(caption = '') {
  // Primeira linha da legenda, sem hashtags.
  return caption.split('\n')[0].replace(/#\S+/g, '').trim();
}

function shortcode(permalink) {
  return permalink.match(/\/(?:reel|p)\/([^/]+)/)?.[1];
}

async function main() {
  loadEnvFile();
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    console.warn('[instagram] INSTAGRAM_ACCESS_TOKEN não definido; mantendo src/data/instagram.json atual.');
    return;
  }

  const profile = await get('me', { fields: 'username,followers_count' }, token);
  const reels = await fetchMedia(token);
  for (const reel of reels) reel.views = await fetchViews(reel.id, token);
  const top = reels.sort((a, b) => b.views - a.views).slice(0, TOP_REELS);

  await mkdir(THUMBS_DIR, { recursive: true });

  const data = {
    username: profile.username,
    followers: profile.followers_count,
    updatedAt: new Date().toISOString().slice(0, 10),
    reels: [],
  };

  for (const reel of top) {
    const id = shortcode(reel.permalink) ?? reel.id;
    const image = await fetch(reel.thumbnail_url);
    if (!image.ok) throw new Error(`capa do reel ${id}: ${image.status}`);
    await writeFile(path.join(THUMBS_DIR, `${id}.jpg`), Buffer.from(await image.arrayBuffer()));
    data.reels.push({
      id,
      permalink: reel.permalink,
      thumb: `/instagram/${id}.jpg`,
      caption: shortCaption(reel.caption),
      views: reel.views,
      likes: reel.like_count ?? 0,
      comments: reel.comments_count ?? 0,
    });
  }

  await writeFile(DATA_FILE, `${JSON.stringify(data, null, 2)}\n`);

  // Remove capas de reels que saíram do top.
  const current = new Set(data.reels.map((reel) => `${reel.id}.jpg`));
  for (const file of await readdir(THUMBS_DIR)) {
    if (!current.has(file)) await rm(path.join(THUMBS_DIR, file));
  }
  console.log(`[instagram] ${data.reels.length} reels atualizados (${data.followers} seguidores).`);
}

main().catch((error) => {
  // Falha na API não deve derrubar o build: o snapshot anterior continua valendo.
  console.warn(`[instagram] Não foi possível atualizar: ${error.message}`);
});
