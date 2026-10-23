import { useEffect, useState } from 'react';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de conhecer os produtos disponíveis na loja.');
const banners = [
  { image: '/images/hero/hero-01.jpeg', alt: 'Prateleira de parafusos e ferragens' },
  { image: '/images/hero/hero-02.jpeg', alt: 'Organização de parafusos em caixas azuis' },
  { image: '/images/hero/hero-03.jpeg', alt: 'Balcão da loja com torneiras expostas' },
  { image: '/images/hero/hero-04.jpeg', alt: 'Exposição de torneiras e metais' },
  { image: '/images/hero/hero-05.jpeg', alt: 'Balcão e variedade de produtos da loja' },
  { image: '/images/hero/hero-06.jpeg', alt: 'Prateleiras de conexões hidráulicas' },
  { image: '/images/hero/hero-07.jpeg', alt: 'Corredor de conexões e tubos hidráulicos' },
  { image: '/images/hero/hero-08.jpeg', alt: 'Caixa d’água Fortlev em exposição' },
  { image: '/images/hero/hero-09.jpeg', alt: 'Produtos hidráulicos e mecanismos de descarga' },
  { image: '/images/hero/hero-10.jpeg', alt: 'Escadas, churrasqueiras e itens para casa' },
  { image: '/images/hero/hero-11.jpeg', alt: 'Estoque de sacos de cimento Votoran' },
  { image: '/images/hero/hero-12.jpeg', alt: 'Cimento, ferramentas e materiais de construção' },
  { image: '/images/hero/hero-13.jpeg', alt: 'Vista ampla do interior da loja' },
  { image: '/images/hero/hero-14.jpeg', alt: 'Regadores e ferramentas de jardinagem' },
  { image: '/images/hero/hero-15.jpeg', alt: 'Fachada da Mape Mix e área de materiais' },
  { image: '/images/hero/hero-16.jpeg', alt: 'Tintas e produtos para pintura' },
];

function shuffleBannerOrder(previousLast?: number) {
  const order = banners.map((_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[randomIndex]] = [order[randomIndex], order[index]];
  }

  if (previousLast !== undefined && order[0] === previousLast) {
    const swapIndex = order.findIndex((bannerIndex) => bannerIndex !== previousLast);
    [order[0], order[swapIndex]] = [order[swapIndex], order[0]];
  }

  return order;
}

export default function Hero() {
  const [carousel, setCarousel] = useState(() => ({ order: shuffleBannerOrder(), position: 0 }));
  const active = carousel.order[carousel.position];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCarousel((current) => {
        const nextPosition = current.position + 1;
        if (nextPosition < current.order.length) {
          return { ...current, position: nextPosition };
        }

        return {
          order: shuffleBannerOrder(current.order[current.order.length - 1]),
          position: 0,
        };
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[480px] items-center overflow-hidden bg-[#001A72] pt-20 sm:min-h-[520px] sm:pt-16"
    >
      {banners.map((banner, index) => (
        <img key={banner.image} src={banner.image} alt={banner.alt} aria-hidden={index !== active}
          loading={index < 2 ? 'eager' : 'lazy'}
          className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${index === active ? 'opacity-100' : 'opacity-0'}`} />
      ))}
      <div className="absolute inset-0 z-10 bg-[#001058]/60 sm:hidden" />
      <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-[#001058]/90 via-[#001A72]/55 to-transparent sm:block" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#001058]/35 via-transparent to-transparent" />
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="max-w-2xl text-white">
          <h1 className="mb-4 font-display text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-[1.1]">Encontre tudo<br className="sm:hidden" /> o que<br className="hidden sm:block" /> <span className="text-[#FE5000]">você precisa</span><br className="sm:hidden" /> em um só lugar.</h1>
          <p className="max-w-lg text-base leading-relaxed text-blue-100">Elétrica, hidráulica, iluminação, ferramentas, pintura, ferragens, materiais para reformas, manutenção, utilidades e muito mais.</p>
        </div>
      </div>
    </section>
  );
}
