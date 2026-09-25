import { ArrowRight } from 'lucide-react';
import { categories, type Category } from '../data/products';

interface CategorySectionProps {
  onCategorySelect: (cat: Category) => void;
}

export default function CategorySection({ onCategorySelect }: CategorySectionProps) {
  return (
    <section id="categorias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#001A72] mb-4">
            Aqui você Encontra
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tudo para sua obra, reforma, manutenção e para facilitar o seu dia a dia.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onCategorySelect(cat.id);
                document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.id}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${cat.color}33, transparent 60%)` }}
                />
                {/* Icon badge */}
                <div
                  className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-md"
                  style={{ backgroundColor: cat.color + '22', backdropFilter: 'blur(8px)' }}
                >
                  {cat.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-bold text-[#001A72] text-lg mb-1">{cat.id}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{cat.description}</p>
                <span className="inline-flex items-center gap-1.5 text-[#FE5000] text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Ver produtos
                  <ArrowRight size={14} />
                </span>
              </div>

              {/* Orange accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FE5000] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
