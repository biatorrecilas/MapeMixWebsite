import { ArrowRight, MessageCircle, MapPin, Truck, Phone } from 'lucide-react';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de conhecer os produtos disponíveis na loja.');

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#001A72] pt-16"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative orange shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <div
          className="absolute right-0 top-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 80% 30%, #FE5000 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-orange-200 font-medium mb-6">
              Você procura, a Mape Mix tem
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Encontre tudo o que{' '}
              <span className="text-[#FE5000]">você precisa</span>{' '}
              em um só lugar.
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              Elétrica, hidráulica, iluminação, ferramentas, pintura, ferragens, materiais para reformas, manutenção, utilidades e muito mais.{' '}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 bg-[#FE5000] hover:bg-[#d94300] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                Ver produtos
                <ArrowRight size={20} />
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <MapPin size={16} />, text: 'Loja física em Campinas' },
                { icon: <Phone size={16} />, text: 'Atendimento pelo WhatsApp' },
                { icon: <Truck size={16} />, text: 'Frete para Campinas e região' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm text-blue-100"
                >
                  <span className="text-[#FE5000]">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&h=600&fit=crop&auto=format"
                alt="Interior de loja de materiais de construção com produtos organizados"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A72]/40 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FE5000]/10 flex items-center justify-center text-2xl">
                🏪
              </div>
              <div>
                <p className="font-display font-bold text-[#001A72] text-sm">Mape Mix</p>
                <p className="text-gray-500 text-xs">Vila Paraiso, Campinas</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FE5000] text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 0C480 0 240 60 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
