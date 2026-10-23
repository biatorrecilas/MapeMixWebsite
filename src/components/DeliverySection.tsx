import { Truck, MessageCircle, MapPin, Clock } from 'lucide-react';
import entrega from '../assets/entrega.jpeg';
import deliveryWarning from '../assets/delivery-warning.svg';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de consultar o frete para o meu endereço em Campinas e região.');

const deliveryDetails = [
  { icon: Truck, text: 'Frete disponível para Campinas e região' },
  { icon: Clock, text: 'Consulte disponibilidade de agenda' },
  { icon: MessageCircle, text: 'Valores sob consulta pelo WhatsApp' },
  { icon: MapPin, text: 'Entrega direto no seu endereço' },
];

export default function DeliverySection() {
  return (
    <section id="entrega" className="bg-[#f8f9fc] pb-16 pt-8 sm:pb-20 sm:pt-12 lg:[--u:min(1px,calc(100vw/1774))]">
      <div className="mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(var(--u)*1634)]">
        <div className="relative">
          <div className="mb-6 flex items-stretch gap-3 sm:mb-8 sm:gap-4">
            <span aria-hidden="true" className="w-1 shrink-0 rounded-full bg-[#FE5000]" />
            <div className="min-w-0">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#FE5000] sm:text-sm">
                Prefere receber no local?
              </p>
              <h2 className="font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-[#001A72] sm:text-[2.7rem]">
                A Mape Mix vai <span className="text-[#FE5000]">até você.</span>
              </h2>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-[#001A72] shadow-[0_24px_70px_-32px_rgba(0,26,114,0.55)]">
              <div className="grid lg:grid-cols-2">
              <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[560px]">
                <img
                  src={entrega}
                  alt="Caminhão de entrega em frente à loja Mape Mix"
                  className="absolute inset-0 h-full w-full object-cover object-[center_62%]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#001A72]/75 via-transparent to-black/10" />
           
                <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md sm:bottom-7 sm:left-7">
                  Entrega em Campinas e região
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                <p className="mb-7 max-w-xl text-2xl leading-relaxed text-blue-200 sm:text-3xl">
                  A Mape Mix entrega em Campinas e região. <strong className="font-semibold text-white"> Praticidade e conforto para você!</strong>
                </p>

                <div className="mb-8 flex flex-col gap-3 text-sm text-blue-100 sm:text-base">
                  {deliveryDetails.map(({ icon: Icon, text }) => (
                    <p key={text} className="flex items-center gap-2 whitespace-nowrap">
                      <Icon size={18} className="shrink-0 text-[#FE5000]" aria-hidden="true" />
                      <span>{text}</span>
                    </p>
                  ))}
                </div>

                <div className="flex w-full max-w-[17rem] flex-col items-center sm:w-fit sm:max-w-none">
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#FE5000] px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-black/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#d94300] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none sm:w-fit sm:px-8 sm:text-base"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    Consultar pelo WhatsApp
                  </a>
                  <p className="mt-3 w-full text-center text-xs text-blue-200/80">
                    Informe seu endereço para consultar o frete.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
