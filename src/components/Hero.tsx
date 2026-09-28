import { useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, MapPin, Truck, Phone } from 'lucide-react';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de conhecer os produtos disponíveis na loja.');
const banners = [
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&h=900&fit=crop&auto=format', alt: 'Materiais para construção e reforma' },
  { image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1800&h=900&fit=crop&auto=format', alt: 'Ferramentas para sua obra' },
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&h=900&fit=crop&auto=format', alt: 'Produtos elétricos para sua casa' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const move = (step: number) => setActive((current) => (current + step + banners.length) % banners.length);
  return (
    <section id="inicio" className="relative min-h-[650px] flex items-center overflow-hidden bg-[#001A72] pt-16">
      {banners.map((banner, index) => (
        <img key={banner.image} src={banner.image} alt={banner.alt} aria-hidden={index !== active}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0'}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001058]/95 via-[#001A72]/80 to-[#001A72]/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 lg:py-28">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-orange-200 font-medium mb-6">Você procura, a Mape Mix tem</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">Encontre tudo o que <span className="text-[#FE5000]">você precisa</span> em um só lugar.</h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">Elétrica, hidráulica, iluminação, ferramentas, pintura, ferragens, materiais para reformas, manutenção, utilidades e muito mais.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="/produtos" className="inline-flex items-center justify-center gap-2 bg-[#FE5000] hover:bg-[#d94300] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-lg">Ver produtos <ArrowRight size={20} /></a>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-lg"><MessageCircle size={20} />Falar no WhatsApp</a>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <MapPin size={16} />, text: 'Loja física em Campinas' },
              { icon: <Phone size={16} />, text: 'Atendimento pelo WhatsApp' },
              { icon: <Truck size={16} />, text: 'Frete para Campinas e região' },
            ].map((badge) => <div key={badge.text} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-blue-100"><span className="text-[#FE5000]">{badge.icon}</span>{badge.text}</div>)}
          </div>
        </div>
      </div>
      <div className="absolute z-20 bottom-10 right-5 sm:right-10 flex items-center gap-3">
        <button type="button" aria-label="Banner anterior" onClick={() => move(-1)} className="w-11 h-11 rounded-full bg-white/90 text-[#001A72] hover:bg-white flex items-center justify-center shadow-lg transition"><ArrowLeft size={20} /></button>
        <div className="flex gap-2">{banners.map((banner, index) => <button key={banner.image} type="button" onClick={() => setActive(index)} aria-label={`Ir para banner ${index + 1}`} className={`h-2.5 rounded-full transition-all ${active === index ? 'w-8 bg-[#FE5000]' : 'w-2.5 bg-white/80'}`} />)}</div>
        <button type="button" aria-label="Próximo banner" onClick={() => move(1)} className="w-11 h-11 rounded-full bg-white/90 text-[#001A72] hover:bg-white flex items-center justify-center shadow-lg transition"><ArrowRight size={20} /></button>
      </div>
    </section>
  );
}
