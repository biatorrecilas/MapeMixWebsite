import { useEffect, useRef } from 'react';

const brands = [
  { name: 'Steck', domain: 'steck.com.br', color: '#d5272f' },
  { name: 'Tigre', domain: 'tigre.com.br', color: '#00539f', logo: '/images/brands/tigre.png' },
  { name: 'Deca', domain: 'deca.com.br', color: '#1d4380' },
  { name: 'Lorenzetti', domain: 'lorenzetti.com.br', color: '#005ba8' },
  { name: 'Papaiz', domain: 'papaiz.com.br', color: '#164c92', logo: '/images/brands/papaiz.png' },
  { name: 'Avant', domain: 'avantlux.com.br', color: '#ec6500' },
  { name: 'Stanley', domain: 'br.stanleytools.global', color: '#171717' },
  { name: 'Suvinil', domain: 'suvinil.com.br', color: '#653a8f' },
  { name: 'Tramontina', domain: 'tramontina.com', color: '#0065aa' },
  { name: 'Votoran', domain: 'votorantimcimentos.com.br', color: '#0058a8' },
];

function BrandList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="brands-list" aria-hidden={hidden || undefined}>
      {brands.map((brand) => (
        <li className="brands-item" key={brand.name} data-brand={brand.name.toLowerCase()}>
          <img
            src={'logo' in brand ? brand.logo : `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`}
            alt={'logo' in brand ? brand.name : ''}
            width="40"
            height="40"
            draggable={false}
            loading={'logo' in brand ? 'eager' : 'lazy'}
            onLoad={'logo' in brand ? (event) => { event.currentTarget.parentElement?.classList.add('brands-logo-loaded'); } : undefined}
            onError={(event) => { event.currentTarget.style.display = 'none'; }}
          />
          <span className="brands-wordmark" style={{ color: brand.color }}>{brand.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BrandsSection({ embedded = false }: { embedded?: boolean }) {
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
    <section className={`overflow-hidden bg-white ${embedded ? 'py-10 sm:py-14' : 'pt-6 pb-10 sm:pt-9 sm:pb-14'}`} aria-labelledby="brands-heading">
      <div className={`mx-auto max-w-7xl ${embedded ? '' : 'px-4 sm:px-6'}`}>
        <h2 id="brands-heading" className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-center">
          <span className="font-display text-2xl font-semibold text-[#FE5000] md:text-3xl">
            Nosso mix de marcas
          </span>
          <span className="hidden font-display text-3xl font-light text-gray-300 md:inline" aria-hidden="true">|</span>
          <span className="w-full font-display text-2xl font-bold text-[#001A72] md:w-auto md:text-3xl">
            Qualidade em cada escolha
          </span>
        </h2>
      </div>
      <div
        ref={marqueeRef}
        className="brands-marquee mt-8"
        aria-label={brands.map((brand) => brand.name).join(', ')}
        onPointerDown={pauseMarquee}
        onPointerUp={resumeMarquee}
        onPointerCancel={(event) => { if (event.pointerType !== 'touch') resumeMarquee(); }}
        onTouchStart={pauseMarquee}
        onTouchEnd={resumeMarquee}
        onTouchCancel={resumeMarquee}
      >
        <div className="brands-track">
          <BrandList />
          <BrandList hidden />
        </div>
      </div>
    </section>
  );
}
