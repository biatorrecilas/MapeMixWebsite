import { Truck, MessageCircle, MapPin, Clock } from 'lucide-react';
import entrega from '../assets/loja.svg';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de consultar o frete para o meu endereço em Campinas e região.');

export default function DeliverySection() {
  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#001A72] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative h-64 lg:h-auto min-h-64">
              <img
                src={entrega}
                alt="Caminhão de entrega para Campinas e região"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#001A72]/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Truck size={64} className="mx-auto mb-4 text-[#FE5000]" />
                  <p className="font-display font-bold text-2xl">Entregamos</p>
                  <p className="text-blue-200 text-lg">em Campinas e região</p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <h2 className="font-display text-4xl font-bold text-white mb-4">
                Precisa receber em casa?
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                A <strong className="text-white">Mape Mix</strong> realiza frete para{' '}
                <strong className="text-[#FE5000]">Campinas e Região</strong>.
                Praticidade e conforto para você.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  { icon: <Truck size={18} />, text: 'Frete disponível para Campinas e região' },
                  { icon: <Clock size={18} />, text: 'Consulte disponibilidade de agenda' },
                  { icon: <MessageCircle size={18} />, text: 'Valores sob consulta pelo WhatsApp' },
                  { icon: <MapPin size={18} />, text: 'Entrega direto no seu endereço' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-blue-100">
                    <span className="text-[#FE5000]">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FE5000] hover:bg-[#d94300] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Consultar frete pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
