import { useEffect, useRef } from 'react';

const clients = [
  { name: 'Hospital São Luiz Campinas', sector: 'Saúde', domain: 'rededorsaoluiz.com.br' },
  { name: 'Prado Boulevard', sector: 'Shopping', logo: 'https://www.pradoboulevard.com.br/images/logo-dark.png', logoOnly: true },
  { name: 'Maternidade de Campinas', sector: 'Saúde', domain: 'maternidadedecampinas.com.br' },
  { name: 'Igreja Batista Ágape', sector: 'Religioso', domain: 'agapeglobal.com.br' },
  { name: 'Mercedes-Benz', sector: 'Indústria automotiva', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Logo.svg' },
  { name: 'Hospital PUC-Campinas', sector: 'Educação e saúde', logo: 'https://www.hospitalpuc-campinas.com.br/wp-content/uploads/2026/10/LOGO_HOSPITAL-PUC-HORIZONTAL.png', logoOnly: true },
  { name: 'Cambuí Corporate', sector: 'Prédio comercial', croppedLogo: true, logoOnly: true },
  { name: 'CAMPREV', sector: 'Setor público', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7b/79/93/7b79937f-9891-7358-5fb1-a13b3d14cafa/camprevProdAppIcon-1x_U007emarketing-0-7-0-85-220-0.png/512x512bb.png' },
  { name: 'Puiatti Gestão Condominial', sector: 'Condomínios', domain: 'puiatti.com.br' },
  { name: 'Fette Compacting', sector: 'Indústria', domain: 'fette-compacting.com' },
];

function ClientList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="clients-list" aria-hidden={hidden || undefined}>
      {clients.map(({ name, sector, domain, logo, logoOnly, croppedLogo }) => (
        <li className={`clients-item${logoOnly ? ' clients-item-logo-only' : ''}`} key={name} title={`${name} · ${sector}`}>
          {croppedLogo ? (
            <span className="clients-cambui-logo" role="img" aria-label={name} />
          ) : (domain || logo) && (
            <img
              src={logo ?? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
              alt={logoOnly ? name : ''}
              width="48"
              height="48"
              draggable={false}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                event.currentTarget.parentElement?.classList.remove('clients-item-logo-only');
              }}
            />
          )}
          <span className="clients-wordmark">{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ClientsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const resumeAtRef = useRef(0);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const mobile = window.matchMedia('(max-width: 640px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previousTime = 0;

    const advance = (time: number) => {
      if (mobile.matches && !reducedMotion.matches && !isDraggingRef.current && time >= resumeAtRef.current) {
        const loopWidth = marquee.scrollWidth / 2;
        if (loopWidth > 0 && previousTime) {
          const elapsed = Math.min(time - previousTime, 50);
          marquee.scrollLeft = (marquee.scrollLeft + elapsed * 0.045) % loopWidth;
        }
      }
      previousTime = time;
      frame = window.requestAnimationFrame(advance);
    };

    frame = window.requestAnimationFrame(advance);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const pauseMarquee = () => { isDraggingRef.current = true; };
  const resumeMarquee = () => {
    isDraggingRef.current = false;
    resumeAtRef.current = performance.now() + 2500;
  };

  return (
    <section className="overflow-hidden bg-[#f7f8fb] py-10 sm:py-14" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="clients-heading" className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-center">
          <span className="font-display text-2xl font-semibold text-[#FE5000] md:text-3xl">Alguns dos nossos clientes</span>
          <span className="hidden font-display text-3xl font-light text-gray-300 md:inline" aria-hidden="true">|</span>
          <span className="w-full font-display text-2xl font-bold text-[#001A72] md:w-auto md:text-3xl">
            Confiança em cada parceria
          </span>
        </h2>
      </div>
      <div
        ref={marqueeRef}
        className="clients-marquee mt-8"
        aria-label={clients.map((client) => client.name).join(', ')}
        onPointerDown={pauseMarquee}
        onPointerUp={resumeMarquee}
        onPointerCancel={(event) => { if (event.pointerType !== 'touch') resumeMarquee(); }}
        onTouchStart={pauseMarquee}
        onTouchEnd={resumeMarquee}
        onTouchCancel={resumeMarquee}
      >
        <div className="clients-track">
          <ClientList />
          <ClientList hidden />
        </div>
      </div>
    </section>
  );
}
