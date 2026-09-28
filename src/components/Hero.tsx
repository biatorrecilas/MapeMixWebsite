import { useEffect, useRef, useState, type TouchEvent } from 'react';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de conhecer os produtos disponíveis na loja.');
const banners = [
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&h=900&fit=crop&auto=format', alt: 'Materiais para construção e reforma' },
  { image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1800&h=900&fit=crop&auto=format', alt: 'Ferramentas para sua obra' },
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&h=900&fit=crop&auto=format', alt: 'Produtos elétricos para sua casa' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % banners.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (startX === null || endX === undefined) return;
    const distance = endX - startX;
    if (Math.abs(distance) < 50) return;

    setActive((current) => (current + (distance < 0 ? 1 : -1) + banners.length) % banners.length);
  };

  return (
    <section
      id="inicio"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[480px] flex items-center overflow-hidden bg-[#001A72] pt-16"
    >
      {banners.map((banner, index) => (
        <img key={banner.image} src={banner.image} alt={banner.alt} aria-hidden={index !== active}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0'}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001058]/90 via-[#001A72]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001058]/35 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-8 lg:py-12">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-orange-200 font-medium mb-4">Você procura, a Mape Mix tem</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-4">Encontre tudo o que <span className="text-[#FE5000]">você precisa</span> em um só lugar.</h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-lg">Elétrica, hidráulica, iluminação, ferramentas, pintura, ferragens, materiais para reformas, manutenção, utilidades e muito mais.</p>
        </div>
      </div>
      <div className="absolute z-20 bottom-6 right-5 sm:right-10 flex items-center gap-2.5">
        {banners.map((banner, index) => <button key={banner.image} type="button" onClick={() => setActive(index)} aria-label={`Ir para banner ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={`h-2.5 rounded-full transition-all ${active === index ? 'w-8 bg-[#FE5000]' : 'w-2.5 bg-white/80 hover:bg-white'}`} />)}
      </div>
    </section>
  );
}
