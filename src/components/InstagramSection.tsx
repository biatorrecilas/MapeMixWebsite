import { useEffect, useRef, useState } from 'react';
import { Play, Heart, Eye } from 'lucide-react';
import instagram from '../data/instagram.json';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Gerado por scripts/sync-instagram.mjs (npm run sync:instagram)
const reels = instagram.reels;

const compact = new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 });
const formatCount = (value: number) => compact.format(value);

const totalViews = reels.reduce((sum, reel) => sum + reel.views, 0);
const totalLikes = reels.reduce((sum, reel) => sum + reel.likes, 0);

const metrics = [
  { value: instagram.followers, label: 'Seguidores' },
  { value: totalViews, label: 'Visualizações', prefix: '+' },
  { value: totalLikes, label: 'Curtidas', prefix: '+' },
];

export default function SocialSection() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [counts, setCounts] = useState(() => metrics.map(() => 0));

  useEffect(() => {
    const element = metricsRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setCounts(metrics.map((metric) => metric.value));
      return;
    }

    let frame = 0;
    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCounts(metrics.map((metric) => Math.floor(metric.value * easedProgress)));

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [hasEntered]);

  return (
    <section id="redes-sociais" className="relative isolate overflow-hidden bg-brand-blue py-14 sm:py-20">
      <div aria-hidden="true" className="warning-stripes absolute inset-x-0 top-0 h-1 opacity-70" />
      <div aria-hidden="true" className="warning-stripes absolute inset-x-0 bottom-0 h-1 opacity-70" />
      <div aria-hidden="true" className="social-section-glow pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="social-section-grid pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          
          {/* Painel com perfis, mensagem e métricas */}
          <div className="rounded-[1.75rem] border border-white/20 bg-white/[0.08] p-6 shadow-[0_24px_70px_rgba(0,14,71,0.2)] backdrop-blur-sm sm:p-9 lg:p-10">
            <div className="mb-7 flex flex-nowrap gap-2 sm:gap-3">
              <a 
                href="https://www.instagram.com/mapesolucoes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-2 py-2 text-[10px] font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 min-[360px]:gap-1.5 min-[360px]:px-3 min-[360px]:text-xs sm:gap-2 sm:px-4 sm:text-sm"
              >
                <InstagramIcon size={12} />
                @mapesolucoes
              </a>
              <a 
                href="https://www.facebook.com/mapesolucoes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-2 py-2 text-[10px] font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 min-[360px]:gap-1.5 min-[360px]:px-3 min-[360px]:text-xs sm:gap-2 sm:px-4 sm:text-sm"
              >
                <FacebookIcon size={12} />
                @mapesolucoes
              </a>
            </div>
            
              <h2 className="mb-4 max-w-xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
              Já acompanha a{' '}
              <span className="text-[#FE5000]">Mape Mix</span> nas redes sociais?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-blue-50/90 sm:text-lg">
              Confira nossos vídeos, novidades, produtos, dicas e muito mais.
            </p>

            {/* Métricas de engajamento */}
            <div ref={metricsRef} className="mt-8 grid grid-cols-3 divide-x divide-white/20 border-t border-white/20 pt-6 sm:mt-10 sm:pt-7">
              {metrics.map((m, index) => (
                <div key={m.label} className="min-w-0 px-1 text-center first:pl-0 last:pr-0 sm:px-3">
                  <p className="whitespace-nowrap font-display text-[clamp(0.875rem,4.5vw,1.5rem)] font-bold tracking-tight text-white sm:text-3xl">{m.prefix ?? ''}{formatCount(counts[index])}</p>
                  <p className="mt-1 text-[11px] font-medium text-blue-100/85 sm:text-sm">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Grid de Vídeos em 3 colunas (Formato feed Instagram) */}
          <div className="mx-auto flex w-full justify-center lg:ml-auto lg:mr-0 lg:py-4">
            <div className="grid w-full max-w-[500px] grid-cols-3 gap-2.5 sm:gap-4">
              {reels.map((reel) => (
                <a
                  key={reel.id}
                  href={reel.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full overflow-hidden rounded-2xl border border-white/25 bg-[#001A72] shadow-[0_18px_40px_rgba(0,15,70,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,15,70,0.42)] sm:rounded-[1.35rem]"
                  style={{ aspectRatio: '9/16' }}
                >
                  <img
                    src={reel.thumb}
                    alt={reel.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Escuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

                  {/* Play button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <Play size={16} fill="white" className="text-white ml-0.5" />
                  </div>

                  {/* Stats & Label */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-[10px] sm:text-xs font-medium mb-1.5 line-clamp-2 leading-tight hidden sm:block">
                      {reel.caption}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-white/90 text-[9px] sm:text-[11px]">
                      <span className="flex items-center gap-1">
                        <Eye size={10} />
                        {formatCount(reel.views)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={10} />
                        {formatCount(reel.likes)}
                      </span>
                    </div>
                  </div>

                  {/* Borda laranja no hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/15 transition-colors group-hover:border-[#FE5000]/90 sm:rounded-[1.35rem]" />
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
