import type { Category } from '../data/products';
import eletricaIcon from '../assets/category-icons/Elétrica.svg';
import hidraulicaIcon from '../assets/category-icons/Hidráulica.svg';
import iluminacaoIcon from '../assets/category-icons/Iluminação.svg';
import ferramentasIcon from '../assets/category-icons/Ferramentas.svg';
import pinturaIcon from '../assets/category-icons/Pintura.svg';
import ferragensIcon from '../assets/category-icons/Ferragens.svg';
import utilidadesIcon from '../assets/category-icons/Utilidades.svg';

interface CategorySectionProps {
  onCategorySelect: (cat: Category) => void;
}

const highlights = [
  { label: 'Elétrica', category: 'Elétrica' as Category, icon: eletricaIcon },
  { label: 'Hidráulica', category: 'Hidráulica' as Category, icon: hidraulicaIcon },
  { label: 'Iluminação', category: 'Iluminação' as Category, icon: iluminacaoIcon },
  { label: 'Ferramentas', category: 'Ferramentas' as Category, icon: ferramentasIcon },
  { label: 'Pintura', category: 'Reformas' as Category, icon: pinturaIcon },
  { label: 'Ferragens', category: 'Manutenção' as Category, icon: ferragensIcon },
  { label: 'Utilidades', category: 'Casa e dia a dia' as Category, icon: utilidadesIcon },
];

export default function CategorySection({ onCategorySelect }: CategorySectionProps) {
  return (
    <section id="categorias" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE5000] mb-3">Do reparo rápido à reforma completa</p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#001A72]">Aqui Você Encontra</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {highlights.map(({ label, category, icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                onCategorySelect(category);
                document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label={`Ver produtos de ${label}`}
              className="group flex flex-col items-center gap-4 rounded-2xl bg-transparent p-1 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center">
                <img src={icon} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-[#001A72]">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
