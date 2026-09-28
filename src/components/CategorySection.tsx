import { Droplets, Lightbulb, PaintRoller, Wrench, Zap, Nut } from 'lucide-react';
import type { Category } from '../data/products';

interface CategorySectionProps {
  onCategorySelect: (cat: Category) => void;
}

const highlights = [
  { label: 'Elétrica', category: 'Elétrica' as Category, icon: Zap, color: '#ffc928', glow: 'rgba(255,201,40,.28)' },
  { label: 'Hidráulica', category: 'Hidráulica' as Category, icon: Droplets, color: '#36a9ff', glow: 'rgba(54,169,255,.25)' },
  { label: 'Iluminação', category: 'Iluminação' as Category, icon: Lightbulb, color: '#ff9638', glow: 'rgba(255,150,56,.26)' },
  { label: 'Ferramentas', category: 'Ferramentas' as Category, icon: Wrench, color: '#ff684a', glow: 'rgba(255,104,74,.24)' },
  { label: 'Pintura', category: 'Reformas' as Category, icon: PaintRoller, color: '#b38aff', glow: 'rgba(179,138,255,.25)' },
  { label: 'Ferragem', category: 'Manutenção' as Category, icon: Nut, color: '#68d6a3', glow: 'rgba(104,214,163,.22)' },
];

export default function CategorySection({ onCategorySelect }: CategorySectionProps) {
  return (
    <section id="categorias" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#001A72]">Aqui você Encontra</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {highlights.map(({ label, category, icon: Icon, color, glow }) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                onCategorySelect(category);
                document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label={`Ver produtos de ${label}`}
              className="group flex w-[calc(33.333%-1rem)] sm:w-[calc(25%-1.5rem)] lg:w-[calc(16.666%-1.25rem)] flex-col items-center gap-4 bg-transparent p-2 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-[2rem] transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105"
                style={{ background: `radial-gradient(circle at 32% 25%, white 0%, ${glow} 48%, rgba(0,26,114,.06) 100%)`, boxShadow: `inset 0 2px 5px rgba(255,255,255,.9), 0 12px 22px ${glow}` }}>
                <span className="absolute inset-2 rounded-[1.5rem] border border-white/80" />
                <Icon size={48} strokeWidth={1.8} style={{ color, filter: 'drop-shadow(0 4px 3px rgba(0,26,114,.16))' }} />
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-[#001A72]">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
