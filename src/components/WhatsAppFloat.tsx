import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de informações sobre produtos e serviços da loja.');

export default function WhatsAppFloat() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Expanded bubble */}
      {expanded && (
        <div className="w-[min(16rem,calc(100vw_-_2rem))] rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl animate-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle size={18} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-[#001A72] text-sm">Mape Mix</p>
              <p className="text-green-500 text-xs">● Online agora</p>
            </div>
          </div>
          <p className="text-gray-600 text-xs bg-gray-50 rounded-xl p-3 mb-3 leading-relaxed">
            Olá! Como posso ajudar? Consulte produtos, preços, frete ou orçamentos pelo WhatsApp. 
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea854] text-white font-semibold px-4 py-2.5 rounded-full transition-colors text-sm w-full"
          >
            <MessageCircle size={16} />
            Iniciar conversa
          </a>
        </div>
      )}

      {/* Float button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ea854] hover:shadow-green-500/30 sm:h-16 sm:w-16"
        aria-label="Abrir WhatsApp"
      >
        {expanded ? <X size={24} /> : <MessageCircle size={28} />}

        {/* Pulse ring */}
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        )}
      </button>
    </div>
  );
}
