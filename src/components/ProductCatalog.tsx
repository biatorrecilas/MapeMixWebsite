import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Star, ShoppingBag, Eye, X } from 'lucide-react';
import { products, type Category, type Product } from '../data/products';

const allCategories: Category[] = [
  'Todas',
  'Elétrica',
  'Hidráulica',
  'Iluminação',
  'Ferramentas',
  'Reformas',
  'Manutenção',
  'Casa e dia a dia',
];

const WA_NUMBER = '5519984547023';

interface ProductCatalogProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  onAddToCart: (product: Product) => void;
  cartItems: Product[];
}

function ProductModal({
  product,
  onClose,
  onAddToCart,
  inCart,
}: {
  product: Product;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  inCart: boolean;
}) {
  const waMsg = encodeURIComponent(
    `Olá, Mape Mix! Gostaria de consultar disponibilidade e orçamento para: *${product.name}*. Pode me ajudar?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="grid sm:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 sm:h-full rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none overflow-hidden bg-gray-50">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {!product.available && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="bg-white text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                  Sob consulta
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <span className="inline-block bg-[#001A72]/8 text-[#001A72] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
              {product.category}
            </span>
            <h2 className="font-display font-bold text-[#001A72] text-xl mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>

            {product.features && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Características</p>
                <ul className="space-y-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#FE5000] mt-0.5">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.price && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Preço</p>
                <p className="text-2xl font-display font-bold text-[#FE5000]">{product.price}</p>
                <p className="text-xs text-gray-400 mt-0.5">*Consulte disponibilidade e confirme o preço na loja</p>
              </div>
            )}

            <div className="flex items-center gap-2 mb-5">
              <div
                className={`w-2 h-2 rounded-full ${product.available ? 'bg-green-500' : 'bg-gray-400'}`}
              />
              <span className="text-sm text-gray-600">
                {product.available ? 'Disponível em loja' : 'Disponibilidade sob consulta'}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#FE5000] hover:bg-[#d94300] text-white font-semibold px-4 py-3 rounded-xl transition-colors text-sm"
              >
                Consultar no WhatsApp
              </a>
              <button
                onClick={() => onAddToCart(product)}
                className={`flex items-center justify-center gap-2 border-2 font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm ${
                  inCart
                    ? 'border-green-500 text-green-600 bg-green-50'
                    : 'border-[#001A72] text-[#001A72] hover:bg-[#001A72]/5'
                }`}
              >
                <ShoppingBag size={16} />
                {inCart ? 'Adicionado à lista' : 'Tenho interesse'}
              </button>
              <a
                href="#localizacao"
                onClick={onClose}
                className="flex items-center justify-center gap-2 text-[#001A72] font-medium text-sm py-2 hover:text-[#FE5000] transition-colors"
              >
                Ver localização da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductCatalog({ activeCategory, onCategoryChange, onAddToCart, cartItems }: ProductCatalogProps) {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === 'Todas' || p.category === activeCategory;
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const cartIds = new Set(cartItems.map((p) => p.id));

  return (
    <section id="catalogo" className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#001A72] mb-4">
            Um Mix de Produtos para o que Você Precisa
          </h2>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar produto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#001A72]/30 focus:border-[#001A72] text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#001A72] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#001A72] hover:text-[#001A72]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">Nenhum produto encontrado.</p>
            <p className="text-sm mt-1">Tente outro termo ou entre em contato pelo WhatsApp.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.popular && (
                    <div className="absolute top-2 left-2 bg-[#FE5000] text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Star size={10} fill="white" />
                      Popular
                    </div>
                  )}
                  {!product.available && (
                    <div className="absolute top-2 right-2 bg-gray-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Sob consulta
                    </div>
                  )}
                  {product.available && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Disponível
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs text-[#001A72]/60 font-medium mb-1">{product.category}</span>
                  <h3 className="font-display font-bold text-[#001A72] text-base leading-snug mb-1.5 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{product.description}</p>

                  {product.price && (
                    <p className="text-[#FE5000] font-display font-bold text-xl mb-3">{product.price}</p>
                  )}

                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#001A72] hover:bg-[#0025a8] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                    >
                      <Eye size={14} />
                      Ver produto
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className={`p-2.5 rounded-xl border-2 transition-all ${
                        cartIds.has(product.id)
                          ? 'border-green-500 text-green-600 bg-green-50'
                          : 'border-gray-200 text-gray-500 hover:border-[#FE5000] hover:text-[#FE5000]'
                      }`}
                      title="Adicionar à lista de interesse"
                    >
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          inCart={cartIds.has(selectedProduct.id)}
        />
      )}
    </section>
  );
}
