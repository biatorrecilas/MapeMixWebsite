import { useState } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de compartilhar minha experiência com a loja.');

const testimonials = [
  {
    id: 1,
    name: '[Nome do cliente]',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    comment: '[Depoimento editável] Atendimento excelente e sempre encontro o que preciso. Loja muito bem organizada e com ótimos preços!',
    date: 'Outubro 2024',
  },
  {
    id: 2,
    name: '[Nome do cliente]',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    comment: '[Depoimento editável] Encontrei tudo para minha reforma em um lugar só. Recomendo a Mape Mix para todo mundo de Campinas!',
    date: 'Setembro 2024',
  },
  {
    id: 3,
    name: '[Nome do cliente]',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    comment: '[Depoimento editável] Pessoal muito atencioso e prestativo. Me ajudaram a escolher os produtos certos para a minha instalação elétrica.',
    date: 'Agosto 2024',
  },
  {
    id: 4,
    name: '[Nome do cliente]',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    comment: '[Depoimento editável] Produto de qualidade e entrega rápida para casa. Preço justo e ótimo atendimento pelo WhatsApp.',
    date: 'Agosto 2024',
  },
  {
    id: 5,
    name: '[Nome do cliente]',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&auto=format',
    rating: 4,
    comment: '[Depoimento editável] Variedade incrível de produtos. Sempre que preciso de material de construção ou manutenção, a primeira opção é a Mape Mix.',
    date: 'Julho 2024',
  },
];

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header - Alinhado à esquerda */}
        <div className="text-left mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#001A72] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-start gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="#FE5000" className="text-[#FE5000]" />
            ))}
            <span className="font-display font-bold text-[#001A72] text-xl ml-2">[X,X]</span>
            <span className="text-gray-400 text-sm">([XX] avaliações)</span>
          </div>
          <p className="text-gray-400 text-sm italic">(substitua os dados de avaliação pelos dados reais)</p>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="max-w-4xl mx-auto mb-14">
          {/* Card do Depoimento Ativo */}
          <div className="bg-[#f8f9fc] rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm min-h-[200px] flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
              />
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
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#FE5000] text-[#FE5000] hover:bg-[#FE5000] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            <MessageCircle size={18} />
            Compartilhar minha avaliação
          </a>
        </div>
        
      </div>
    </section>
  );
}