import { useState } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialIcon from '../assets/testimonials-announcement.svg';
import testimonialSocialIcon from '../assets/testimonials-social.svg';

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps?cid=17729418899676593261&action=openratings&ct=write-review#lrd=0x94c8cf58e3364a6f:0xf60b8c8e0551fc6d,1,,,,';

// Média e total exibidos no perfil "Mape Mix 02" do Google Maps.
const GOOGLE_RATING = { average: '5,0', total: 37 };

// Avaliações reais mais recentes do Google (5 estrelas).
const testimonials = [
  {
    id: 1,
    name: 'Edson C Silva',
    rating: 5,
    comment: 'Loja com tudo a pronta entrega e vendedores excelentes sempre com um sorriso no rosto.',
    date: 'Outubro 2026',
  },
  {
    id: 2,
    name: 'Andrew Oliveira',
    rating: 5,
    comment: 'Loja muito boa, sempre que preciso vou lá. Funcionários nota 10.',
    date: 'Outubro 2026',
  },
  {
    id: 3,
    name: 'Silvano Carmo',
    rating: 5,
    comment: 'Loja muito completa com atendimento top, recomendo muito.',
    date: 'Outubro 2026',
  },
  {
    id: 4,
    name: 'Fernando Jesus',
    rating: 5,
    comment: 'Lugar de preço e atendimento de primeira.',
    date: 'Outubro 2026',
  },
  {
    id: 5,
    name: 'Jessica Moriel Zayit',
    rating: 5,
    comment: 'Ótima loja, grande variedade de itens.',
    date: 'Outubro 2026',
  },
  {
    id: 6,
    name: 'Virlenia Silva',
    rating: 5,
    comment: 'Ótimo atendimento! Sempre atendendo da melhor forma!',
    date: 'Outubro 2026',
  },
  {
    id: 7,
    name: 'Bruno De Paula',
    rating: 5,
    comment: 'Excelente atendimento. Parabéns ao trabalho 🤝',
    date: 'Outubro 2026',
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="relative isolate overflow-hidden py-20 bg-white">
      <img
        src={testimonialIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5 z-0 h-200 w-200 object-contain opacity-[0.08] sm:right-10 sm:top-8 sm:h-72 sm:w-72"
      />
      <img
        src={testimonialSocialIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-12 z-0 h-250 w-250 object-contain opacity-[0.08] sm:bottom-8 sm:left-16 sm:h-72 sm:w-72"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header - Alinhado à esquerda */}
        <div className="text-left mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#001A72] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-start gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="#FE5000" className="text-[#FE5000]" />
            ))}
            <span className="font-display font-bold text-[#001A72] text-xl ml-2">{GOOGLE_RATING.average}</span>
            <span className="text-gray-400 text-sm">({GOOGLE_RATING.total} avaliações)</span>
          </div>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="max-w-4xl mx-auto mb-14">
          {/* Card do Depoimento Ativo */}
          <div className="bg-[#f8f9fc] rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm min-h-[200px] flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div
                aria-hidden="true"
                className="w-16 h-16 rounded-full flex-shrink-0 border-2 border-white shadow-sm bg-[#001A72] text-white font-display font-bold text-xl flex items-center justify-center"
              >
                {initials(activeTestimonial.name)}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#001A72] text-lg">{activeTestimonial.name}</p>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < activeTestimonial.rating ? '#FE5000' : 'transparent'}
                      className={i < activeTestimonial.rating ? 'text-[#FE5000]' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-400">{activeTestimonial.date}</span>
            </div>
            
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed italic">
              "{activeTestimonial.comment}"
            </p>
          </div>

          {/* Controles: Setas e Bolinhas */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full text-[#001A72] bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-6 h-2.5 bg-[#FE5000]' 
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-2 rounded-full text-[#001A72] bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* CTA Final - Alinhado à direita */}
        <div className="flex flex-col items-end text-right">
          <p className="text-gray-500 mb-4">Quer contar sua experiência?</p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#FE5000] text-[#FE5000] hover:bg-[#FE5000] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
          >
            <MessageCircle size={18} />
            Compartilhar minha avaliação
          </a>
        </div>
        
      </div>
    </section>
  );
}
