import { MessageCircle, Phone } from 'lucide-react';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de tirar uma dúvida ou solicitar um orçamento.');

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-[#f8f9fc]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block bg-[#001A72]/8 text-[#001A72] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Contato
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#001A72] mb-4">
          Fale com a Mape Mix
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
          Tem dúvidas, precisa de um orçamento ou quer consultar a disponibilidade de um produto?
        </p>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 mb-8">
          {/* Phone number display */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 bg-[#FE5000]/10 rounded-2xl flex items-center justify-center">
              <Phone size={24} className="text-[#FE5000]" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400 font-medium">Telefone / WhatsApp</p>
              <a
                href="tel:+5519984547023"
                className="font-display font-bold text-[#001A72] text-2xl hover:text-[#FE5000] transition-colors"
              >
                (19) 98454-7023
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FE5000] hover:bg-[#d94300] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="tel:+5519984547023"
              className="flex items-center justify-center gap-2 border-2 border-[#001A72] text-[#001A72] hover:bg-[#001A72] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              <Phone size={20} />
              Ligar agora
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/mapesolucoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-[#E1306C] transition-colors text-sm font-medium"
          >
            <InstagramIcon size={18} />
            Instagram
          </a>
          <span className="text-gray-200">|</span>
          <a
            href="https://www.facebook.com/mapesolucoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-[#1877F2] transition-colors text-sm font-medium"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
          <span className="text-gray-200">|</span>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-[#25D366] transition-colors text-sm font-medium"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
