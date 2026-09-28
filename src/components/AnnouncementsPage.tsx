import { ArrowLeft, BellRing, CalendarDays, Clock3, MapPin, Megaphone, Phone, Sparkles, Tag } from 'lucide-react';

const topics = [
  { icon: CalendarDays, label: 'Feriados e horários' },
  { icon: Sparkles, label: 'Aniversário da loja' },
  { icon: Tag, label: 'Promoções' },
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <a href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#001A72] transition-colors hover:text-[#FE5000]">
            <ArrowLeft size={17} /> Voltar à página inicial
          </a>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE5000]">Informações da loja</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-[#001A72] sm:text-5xl">Novidades da Mape Mix</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Conheça a loja e acompanhe os avisos e novidades importantes.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <section aria-labelledby="about-store-title" className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,35,80,0.06)] sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FE5000]">Perto de você</p>
            <h2 id="about-store-title" className="font-display text-3xl font-extrabold text-[#001A72]">Sobre a Loja</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              A Mape Mix reúne materiais para construção, reforma, manutenção e para o dia a dia, com atendimento próximo em Campinas.
            </p>

            <div className="mt-7 space-y-5 border-t border-gray-100 pt-6">
              <div className="flex items-start gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-[#FE5000]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Endereço</p>
                  <p className="mt-1 font-medium leading-relaxed text-[#001A72]">Av. Francisco de Angelis, 1244 · Vila Paraíso, Campinas/SP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 size={19} className="mt-0.5 shrink-0 text-[#FE5000]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Horário de funcionamento</p>
                  <p className="mt-1 font-medium leading-relaxed text-[#001A72]">Segunda a sexta: 07:30–17:30<br />Sábado: 08:00–13:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={19} className="shrink-0 text-[#FE5000]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Telefone e WhatsApp</p>
                  <a href="tel:+5519984547023" className="mt-1 inline-block font-semibold text-[#001A72] transition-colors hover:text-[#FE5000]">(19) 98454-7023</a>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="featured-announcements-title" className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,35,80,0.06)] sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FE5000]">Fique por dentro</p>
            <h2 id="featured-announcements-title" className="font-display text-3xl font-extrabold text-[#001A72]">Comunicados em Destaque</h2>

            <div className="mt-6 rounded-2xl bg-[#f7f8fb] p-6 sm:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#FE5000] shadow-sm">
                <BellRing size={21} />
              </div>
              <h3 className="font-display text-xl font-bold text-[#001A72]">Novidades em breve</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                Os próximos avisos sobre feriados, aniversário da loja e promoções serão publicados aqui.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {topics.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3.5 py-2 text-xs font-semibold text-[#001A72] sm:text-sm">
                  <Icon size={15} className="text-[#FE5000]" /> {label}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
