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
  { label: 'Pintura', category: 'Pintura' as Category, icon: pinturaIcon },
  { label: 'Ferragens', category: 'Ferragens' as Category, icon: ferragensIcon },
  { label: 'Utilidades', category: 'Utilidades' as Category, icon: utilidadesIcon },
];

export default function CategorySection({ onCategorySelect }: CategorySectionProps) {
  return (
    <section id="categorias" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-9 text-center sm:mb-14">
          <p className="mb-3 text-[0.625rem] font-bold uppercase leading-snug tracking-[0.14em] text-[#FE5000] sm:text-xs sm:tracking-[0.2em]">Do reparo rápido à reforma completa</p>
          <h2 className="font-display text-3xl font-bold text-[#001A72] sm:text-4xl">Aqui Você Encontra</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8">
          {highlights.map(({ label, category, icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => onCategorySelect(category)}
              aria-label={`Ver produtos de ${label}`}
              className="group flex w-[calc((100%_-_0.75rem)/2)] flex-col items-center gap-3 rounded-2xl bg-transparent p-1 text-center transition-transform duration-300 hover:-translate-y-1 sm:w-[calc((100%_-_3rem)/3)] sm:gap-4 lg:w-[calc((100%_-_4.5rem)/4)] xl:w-[calc((100%_-_9rem)/7)]"
            >
              <span className="flex h-24 w-24 items-center justify-center sm:h-32 sm:w-32 lg:h-36 lg:w-36">
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
