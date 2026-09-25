import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import frenteImg from '../assets/frente.svg';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de informações sobre o horário de funcionamento da loja.');
const MAPS_URL = 'https://maps.app.goo.gl/8WTRhHMXaHHZPaa56';

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#001A72] mb-4">
            Venha nos Visitar!
          </h2>
          <p className="text-gray-500 text-lg">
            Uma loja completa com atendimento de quem entende do assunto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: store image */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-80">
            <img
              src={frenteImg}
              alt="Fachada da loja Mape Mix em Campinas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A72]/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-display font-bold text-white text-xl">Mape Mix</p>
              <p className="text-blue-200 text-sm">Vila Paraiso, Campinas/SP</p>
            </div>
          </div>

          {/* Right: Info, Map & Buttons Container */}
          <div className="bg-[#f8f9fc] rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm border border-gray-100">
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={22} className="text-[#FE5000] flex-shrink-0 mt-1" />
                <p className="font-bold text-[#001A72] text-base leading-snug">
                  Av. Francisco de Angelis, 1244 - Vila Paraiso,
                  Campinas/SP.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={20} className="text-[#FE5000] flex-shrink-0" />
                <p className="text-[#001A72] text-base">
                  Seg a Sex: 07:30 - 17:30 |
                  Sáb: 08:00 - 13:00
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#FE5000] flex-shrink-0" />
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001A72] text-base hover:text-[#FE5000] transition-colors"
                >
                  +55 19 98454-7023
                </a>
            </div>

            {/* Map embed */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0!2d-47.06!3d-22.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Francisco+de+Angelis%2C+1244+-+Vila+Paraiso%2C+Campinas+-+SP!5e0!3m2!1spt-BR!2sbr!4v1699900000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Mape Mix em Campinas"
              />
            </div>

            {/* Original Buttons Restored */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://www.google.com/local/place/fid/0x94c8cf58e3364a6f:0xf60b8c8e0551fc6d/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkM4myKwiTMchJWqcLQLRL1-ITGjI-jlg-FwNsQjYejslG3gVpLKbpBTYKuioynYgODkMZ-1ZCr6keUxK7WEVxFCCIZpSLW7LLZQW8i-WvZXArmXk-RRg4BWUtHQlNO06W5kgbE5g%3Dw160-h106-k-no-pi-0-ya335.6318-ro0-fo100&ik=CAoSF0NJSE0wb2dLRUlDQWdJQy11cUxvMndF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#001A72] hover:bg-[#0025a8] text-white font-semibold px-4 py-3 rounded-full transition-colors text-sm"
              >
                <ExternalLink size={16} />
                Ver loja 360°
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#FE5000] hover:bg-[#d94300] text-white font-semibold px-4 py-3 rounded-full transition-colors text-sm"
              >
                <MapPin size={16} />
                Como Chegar
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}