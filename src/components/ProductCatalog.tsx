import { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, Star, ShoppingBag, Eye, X, ArrowRight } from 'lucide-react';
import { products, type Category, type Product } from '../data/products';

const allCategories: Category[] = [
  'Elétrica',
  'Hidráulica',
  'Iluminação',
  'Ferramentas',
  'Ferragens',
  'Pintura',
  'Utilidades',
  'Manutenção',
  'Casa e Dia a Dia',
];

const WA_NUMBER = '5519984547023';

interface ProductCatalogProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  onAddToCart: (product: Product) => void;
  cartItems: Product[];
  fullPage: boolean;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[94dvh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:max-h-[90vh]">
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
            <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
              Imagem ilustrativa
            </span>
            {!product.available && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="bg-white text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                  Sob consulta
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
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

            {!product.available && (
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-600">Disponibilidade sob consulta</span>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#FE5000] hover:bg-[#d94300] text-white font-semibold px-4 py-3 rounded-full transition-colors text-sm"
              >
                Consultar no WhatsApp
              </a>
              <button
                onClick={() => onAddToCart(product)}
                className={`flex items-center justify-center gap-2 border-2 font-semibold px-4 py-2.5 rounded-full transition-colors text-sm ${
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

export default function ProductCatalog({ activeCategory, onCategoryChange, onAddToCart, cartItems, fullPage }: ProductCatalogProps) {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (fullPage && activeCategory !== 'Todas') setFiltersOpen(true);
  }, [fullPage, activeCategory]);

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
    <section id="catalogo" className={`${fullPage ? 'pt-32 sm:pt-36 pb-24 sm:pb-28' : 'pt-16 sm:pt-20 pb-24 sm:pb-28'} bg-[#f7f8fb]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 text-left md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE5000] mb-3">Você procura, a Mape Mix tem!</p>
          <h2 className={`font-display font-bold text-[#001A72] ${fullPage ? 'text-3xl sm:text-4xl' : 'max-w-2xl text-3xl sm:text-4xl'}`}>
            {fullPage ? 'Todos os Produtos' : <>Um Mix de Produtos<br className="hidden sm:block" /> para o que Você Precisa</>}
          </h2>
          </div>
          {/* Search */}
        <div className={`relative w-full shrink-0 md:w-72 lg:w-80 [&_input]:rounded-full [&_input]:!pl-20 [&>svg]:!left-12 ${fullPage ? '' : 'md:self-start'}`}>
          <button
            type="button"
            aria-label="Abrir filtros de produtos"
            title="Filtros"
            aria-expanded={filtersOpen}
            onClick={() => setFiltersOpen((open) => !open)}
            className={window.location.pathname === '/' ? 'hidden' : 'absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-[#001A72] transition-colors hover:bg-blue-50'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 6h16M7 12h10m-7 6h4" />
              <circle cx="8" cy="6" r="1" fill="currentColor" />
              <circle cx="15" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="18" r="1" fill="currentColor" />
            </svg>
          </button>
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar produto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#001A72]/30 focus:border-[#001A72] text-gray-800 placeholder-gray-400"
          />
          </div>
        </div>

        {/* Category filters */}
      <div id="product-filters" className={`${filtersOpen ? 'mb-8 flex' : 'hidden'} flex-wrap justify-start gap-3 sm:mb-12`}>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`min-h-11 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
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
          <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 ${fullPage ? '' : '[&>*:nth-child(n+5)]:hidden sm:[&>*:nth-child(n+5)]:block sm:[&>*:nth-child(n+7)]:hidden lg:[&>*:nth-child(n+7)]:block lg:[&>*:nth-child(n+9)]:hidden'}`}>
            {(fullPage ? filtered : filtered.slice(0, 8)).map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(15,35,80,0.05)] hover:shadow-[0_12px_30px_rgba(15,35,80,0.10)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-32 sm:h-36 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-black/65 px-2 py-1 text-[9px] font-medium text-white backdrop-blur-sm sm:text-[10px]">
                    Imagem ilustrativa
                  </span>
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
                </div>

                {/* Content */}
                <div className="p-3 sm:p-3.5 flex flex-col flex-1">
                  <span className="text-xs text-[#001A72]/60 font-medium mb-1">{product.category}</span>
                  <h3 className="font-display font-bold text-[#001A72] text-sm sm:text-base leading-snug mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mb-2 line-clamp-2">{product.description}</p>

                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 flex items-center justify-center gap-1 bg-[#001A72] hover:bg-[#0025a8] text-white text-xs sm:text-sm font-semibold py-2 rounded-full transition-colors"
                    >
                      <Eye size={14} />
                      Ver produto
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className={`p-2 rounded-full border-2 transition-all ${
                        cartIds.has(product.id)
                          ? 'border-green-500 text-green-600 bg-green-50'
                          : 'border-gray-200 text-gray-500 hover:border-[#FE5000] hover:text-[#FE5000]'
                      }`}
                      title="Adicionar à lista de Interesse"
                    >
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!fullPage && (
          <div className="text-center mt-10">
            <a href="/produtos" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FE5000] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d94300] sm:px-8 sm:py-4 sm:text-lg">Ver mais produtos</a>
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
