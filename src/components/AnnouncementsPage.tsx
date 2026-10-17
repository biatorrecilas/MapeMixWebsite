import { useState } from 'react';
import {
  ArrowLeft,
  BellRing,
  CalendarDays,
  Clock3,
  Image as ImageIcon,
  MapPin,
  Megaphone,
  Phone,
  Share2,
  Tag,
} from 'lucide-react';
import beginningPhoto from '../assets/about-us/começo.jpg';
import teamPhoto from '../assets/about-us/trio.jpg';
import openingPhoto from '../assets/about-us/20221001_084226.jpg';

const topics = [
  { icon: CalendarDays, label: 'Feriados e horários' },
  { icon: Tag, label: 'Promoções' },
  { icon: BellRing, label: 'Novidades da loja' },
];

const milestones = [
  {
    number: '01',
    year: 'XXXX',
    label: 'O começo',
    title: 'Uma loja pequena, um sonho grande',
    description:
      'A Mape Mix começou com a vontade de ajudar a vizinhança a cuidar da casa e resolver os reparos do dia a dia. O atendimento próximo segue fazendo parte da loja.',
    image: beginningPhoto,
    imageAlt: 'Uma das primeiras lojas Mape Mix, com clientes e produtos ao fundo',
  },
  {
    number: '02',
    year: 'XXXX',
    label: 'Um novo capítulo',
    title: 'A segunda unidade',
    description:
      'A confiança de quem já comprava com a gente abriu caminho para uma nova unidade. Assim, mais clientes puderam encontrar produtos para construção, manutenção e casa.',
    image: openingPhoto,
    imageAlt: 'Comemoração da equipe Mape Mix em uma das lojas',
  },
];

export default function AnnouncementsPage() {
  const [shareStatus, setShareStatus] = useState('');

  const handleShare = async () => {
    const shareData = {
      title: 'Mape Mix · Reparo e Construção',
      text: 'Conheça a Mape Mix e encontre produtos para sua obra, reforma e dia a dia.',
      url: window.location.origin,
    };

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareData.url);
      setShareStatus('Link copiado');
    } catch {
      setShareStatus('Não foi possível compartilhar agora');
    }

    window.setTimeout(() => setShareStatus(''), 2500);
  };

  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-16 pt-36 sm:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <a
          href="/"
          className="mb-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#001A72] transition-colors hover:text-[#FE5000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE5000]"
        >
          <ArrowLeft size={17} aria-hidden="true" /> Início
        </a>

        <section aria-labelledby="page-title" className="grid items-center gap-9 pb-14 sm:gap-12 sm:pb-20 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.19em] text-[#FE5000]">
              <span className="h-2 w-2 rounded-full bg-[#FE5000]" /> Campinas, SP · Nossa história e avisos
            </p>
            <h1 id="page-title" className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#001A72]">
              Novidades da<br className="hidden sm:block" /> Mape Mix
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#48536a]">
              Uma loja feita de gente, trabalho e confiança. Conheça um pouco da nossa trajetória e veja os comunicados importantes para sua visita.
            </p>
            <a
              href="#historia"
              className="mt-7 inline-flex min-h-12 self-start items-center justify-center rounded-full bg-[#FE5000] px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#d94300] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#001A72]"
            >
              Conheça nossa história
            </a>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#e7e2d9] pt-5 text-sm font-semibold text-[#001A72]">
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-[#FE5000]" aria-hidden="true" /> Campinas</span>
              <span className="inline-flex items-center gap-2"><Phone size={16} className="text-[#FE5000]" aria-hidden="true" /> Atendimento direto</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="relative aspect-[1.5/1] overflow-hidden rounded-2xl border border-[#e7e2d9] bg-[#eee9df] p-4 sm:p-6">
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-[#c8bfae] bg-[#f7f4ed] px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#001A72] shadow-sm">
                  <ImageIcon size={24} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#FE5000]">Nossa foto principal</p>
                <p className="mt-1 font-display text-3xl font-bold text-[#001A72]">Em breve</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#596176]">Um registro especial da nossa história chega aqui em breve.</p>
              </div>
              <div className="absolute -bottom-1 -right-1 h-14 w-14 rounded-tl-2xl bg-[#FE5000]" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="historia" aria-labelledby="history-title" className="border-t border-[#e7e2d9] py-14 sm:py-18">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#FE5000]">Da primeira loja à segunda unidade</p>
          <h2 id="history-title" className="mt-2 max-w-2xl font-display text-2xl font-bold leading-tight tracking-[-0.025em] text-[#001A72] sm:text-3xl">Nossa história é feita de confiança</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#596176] sm:text-base">
              Cada nova etapa nasceu do trabalho diário e da relação com quem compra aqui.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-7">
            {milestones.map((milestone) => (
              <article key={milestone.number} className="overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img src={milestone.image} alt={milestone.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#001A72]/65 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FE5000] text-xs font-extrabold">{milestone.number}</span>
                    <span className="text-sm font-bold">{milestone.label}</span>
                  </div>
                  <span className="absolute right-4 top-4 rounded-md bg-white px-3 py-1.5 text-sm font-bold text-[#001A72]">{milestone.year}</span>
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className="font-display text-2xl font-bold text-[#001A72]">{milestone.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#596176] sm:text-base sm:leading-7">{milestone.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid items-center gap-5 rounded-2xl bg-[#f0ede5] p-4 sm:grid-cols-[210px_1fr] sm:gap-8 sm:p-6">
            <img src={teamPhoto} alt="Equipe Mape Mix reunida no balcão da loja" loading="lazy" className="h-44 w-full rounded-xl object-cover sm:h-36" />
            <div className="px-1 pb-1 sm:py-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FE5000]">Hoje, seguimos juntos</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#001A72]">Pode contar com a equipe Mape Mix</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#596176] sm:text-base sm:leading-7">
                Estamos aqui para ajudar você a encontrar o que precisa para sua casa, seus reparos e sua obra.
              </p>
            </div>
          </div>
        </section>

        <section id="comunicados" aria-labelledby="announcements-title" className="border-t border-[#e7e2d9] py-14 sm:py-18">
          <div className="mb-8 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#FE5000]">Informações para sua visita</p>
            <h2 id="announcements-title" className="mt-2 font-display text-2xl font-bold tracking-[-0.025em] text-[#001A72] sm:text-3xl">Comunicados da loja</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7">
            <div className="rounded-2xl border border-[#e7e2d9] bg-white p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0e8] text-[#FE5000]"><Megaphone size={21} aria-hidden="true" /></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FE5000]">Quadro de avisos</p>
                  <h3 className="mt-0.5 font-display text-xl font-bold text-[#001A72]">Fique por dentro</h3>
                </div>
              </div>
              <div className="mt-5 border-l-[3px] border-[#FE5000] bg-[#fbfaf7] px-4 py-4 sm:px-5">
                <p className="font-bold text-[#001A72]">Nenhum comunicado publicado no momento.</p>
                <p className="mt-2 text-sm leading-6 text-[#596176]">
                  Quando houver mudanças de horário, avisos de feriados ou novidades, vamos contar aqui o que muda e em qual data.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {topics.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex min-h-9 items-center gap-2 rounded-full bg-[#f3f1eb] px-3 py-1.5 text-xs font-semibold text-[#263453] sm:text-sm">
                    <Icon size={14} className="text-[#FE5000]" aria-hidden="true" /> {label}
                  </span>
                ))}
              </div>
            </div>

            <aside aria-labelledby="visit-us-title" className="rounded-2xl bg-[#001A72] p-5 text-white sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 id="visit-us-title" className="mt-1 font-display text-2xl font-bold">Informações Mape Mix</h3>
                </div>
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Compartilhar site da Mape Mix"
                  title="Compartilhar site da Mape Mix"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Share2 size={19} aria-hidden="true" />
                </button>
              </div>
              <p role="status" aria-live="polite" className={`mt-2 min-h-5 text-xs text-orange-100 ${shareStatus ? '' : 'sr-only'}`}>
                {shareStatus}
              </p>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#ff8753]" aria-hidden="true" />
                  <p className="text-sm leading-6 text-blue-50">Av. Francisco de Angelis, 1244<br />Vila Paraíso · Campinas/SP</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 size={18} className="mt-0.5 shrink-0 text-[#ff8753]" aria-hidden="true" />
                  <p className="text-sm leading-6 text-blue-50">Segunda a sexta: 07:30–17:30<br />Sábado: 08:00–13:00</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-[#ff8753]" aria-hidden="true" />
                  <a href="tel:+5519984547023" className="inline-flex min-h-11 items-center text-sm font-bold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">(19) 98454-7023</a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
