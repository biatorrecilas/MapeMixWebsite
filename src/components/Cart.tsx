import { X, ShoppingBag, MessageCircle, MapPin, Trash2 } from 'lucide-react';
import type { Product } from '../data/products';

const WA_NUMBER = '5519984547023';

interface CartProps {
  items: Product[];
  onRemove: (id: number) => void;
  onClose: () => void;
}

export default function Cart({ items, onRemove, onClose }: CartProps) {
  const productList = items.map((p) => `• ${p.name}`).join('%0A');
  const waMsg = encodeURIComponent(
    `Olá! Gostaria de consultar disponibilidade e orçamento dos seguintes produtos:\n${items.map((p) => `• ${p.name}`).join('\n')}`
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-sm h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#001A72]" />
            <h2 className="font-display font-bold text-[#001A72] text-lg">Lista de interesse</h2>
            {items.length > 0 && (
              <span className="bg-[#FE5000] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Notice */}
        <div className="mx-4 mt-4 bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700 leading-relaxed">
          Os produtos são apresentados no catálogo. Para confirmar preço, disponibilidade e realizar a compra, entre em contato pelo WhatsApp ou visite nossa loja.
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 py-12">
              <ShoppingBag size={48} className="mb-4 opacity-20" />
              <p className="font-medium">Sua lista está vazia.</p>
              <p className="text-sm mt-1">Navegue pelo catálogo e adicione produtos.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#001A72] text-sm line-clamp-2 leading-snug">{item.name}</p>
                  {item.price && <p className="text-[#FE5000] font-bold text-sm mt-0.5">{item.price}</p>}
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="flex-shrink-0 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Actions */}
        {items.length > 0 && (
          <div className="p-4 border-t border-gray-100 space-y-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FE5000] hover:bg-[#d94300] text-white font-semibold px-4 py-3.5 rounded-xl transition-colors w-full"
            >
              <MessageCircle size={18} />
              Solicitar orçamento no WhatsApp
            </a>
            <a
              href="#localizacao"
              onClick={onClose}
              className="flex items-center justify-center gap-2 border-2 border-[#001A72] text-[#001A72] font-semibold px-4 py-3 rounded-xl transition-colors hover:bg-[#001A72]/5 w-full text-sm"
            >
              <MapPin size={16} />
              Prefiro ir à loja
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
