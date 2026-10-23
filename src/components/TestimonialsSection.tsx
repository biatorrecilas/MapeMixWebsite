import { useEffect, useState } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialIcon from '../assets/testimonials-announcement.svg';
import testimonialSocialIcon from '../assets/testimonials-social.svg';

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps?cid=17729418899676593261&action=openratings&ct=write-review#lrd=0x94c8cf58e3364a6f:0xf60b8c8e0551fc6d,1,,,,';

// Média e total exibidos no perfil "Mape Mix 02" do Google Maps.
const GOOGLE_RATING = { average: '5,0', total: 40 };

// Avaliações reais mais recentes do Google (5 estrelas).
const testimonials = [
  {
    id: 1,
    name: 'Bianca Maria',
    rating: 5,
    comment: 'Para quem precisa de reparos é uma ótima opção! Além de vender os produtos, fui bem orientada para executar de forma correta. E atendimento do Sr. Ademar foi excepcional, muito querido.',
    date: 'Outubro de 2026',
  },
  {
    id: 2,
    name: 'Aline Cordeiro',
    rating: 5,
    comment: 'Estive em Campinas e recebi um excelente atendimento, produto de qualidade e preço ótimo ! Estão de parabéns !',
    date: 'Outubro de 2026',
  },
  {
    id: 3,
    name: 'Bruno De Paula',
    rating: 5,
    comment: 'Excelente atendimento. Parabéns ao trabalho 🤝 …',
    date: 'Outubro de 2026',
  },
  {
    id: 4,
    name: 'Fernando Jesus',
    rating: 5,
    comment: 'Lugar de preço e atendimento de primeira.',
    date: 'Outubro de 2026',
  },
  {
    id: 5,
    name: 'Jessica Moriel Zayit',
    rating: 5,
    comment: 'Ótima loja, grande variedade de itens',
    date: 'Outubro de 2026',
  },
  {
    id: 6,
    name: 'Rodrigo',
    rating: 5,
    comment: 'Lugar sensacional',
    date: 'Outubro de 2026',
  },
  {
    id: 7,
    name: 'Edson C Silva',
    rating: 5,
    comment: 'Loja com tudo a pronta entrega e vendedores excelentes sempre com um sorriso no rosto.',
    date: 'Outubro de 2026',
  },
  {
    id: 8,
    name: 'Silvano Carmo',
    rating: 5,
    comment: 'Loja muito completa com atendimento top rescomendo muito',
    date: 'Outubro de 2026',
  },
  {
    id: 9,
    name: 'Andrew Oliveira',
    rating: 5,
    comment: 'Loja muito boa sempre que preciso vou lá. Funcionários nota 10',
    date: 'Outubro de 2026',
  },
  {
    id: 10,
    name: 'Virlenia Silva',
    rating: 5,
    comment: 'Ótimo atendimento! Sempre atendendo da melhor forma!',
    date: 'Outubro de 2026',
  },
  {
    id: 11,
    name: 'VITOR EMANUEL',
    rating: 5,
    comment: 'Melhor Loja De Materiais De Construção De Campinas, Venham Tomar Um Cafezinho é Conferir',
    date: 'Outubro de 2026',
  },
  {
    id: 12,
    name: 'José Francisco Specian junior',
    rating: 5,
    comment: 'Excelente atendimento, com ampla variedade e bem localizada. Parabéns 👏👏👏👏👏 …',
    date: 'Setembro de 2026',
  },
  {
    id: 13,
    name: 'Marcos Antonio Battistel Mees',
    rating: 5,
    comment: 'Equipe e atendimento Fenomenais. Consegui encontrar todos os itens!',
    date: 'Setembro de 2026',
  },
  {
    id: 14,
    name: 'Adilson Carlos Gagliotti',
    rating: 5,
    comment: 'Muito bom ,ótimo atendimento. Comodidade de estacionar em frente a loja. Nota 10',
    date: 'Setembro de 2026',
  },
  {
    id: 15,
    name: 'Renan Chiminazzo',
    rating: 5,
    comment: 'Fui atendido pelos adilson e ademar! Muito bom atendimento! Super preocupados em ajudar',
    date: 'Setembro de 2026',
  },
  {
    id: 16,
    name: 'Pizzaria Vicenzo',
    rating: 5,
    comment: 'Atendimento excelente ,  praticamente e de tudo para manutenção',
    date: 'Setembro de 2026',
  },
  {
    id: 17,
    name: 'william oliveira',
    rating: 5,
    comment: 'Ótimo lugar',
    date: 'Setembro de 2026',
  },
  {
    id: 18,
    name: 'Luca Agustini',
    rating: 5,
    comment: 'Ótimo atendimento',
    date: 'Setembro de 2026',
  },
  {
    id: 19,
    name: 'Auto Eletrica Tiago',
    rating: 5,
    comment: 'Atendimento ótimo , pessoas muito onesta preço justo',
    date: 'Setembro de 2026',
  },
  {
    id: 20,
    name: 'Lucia Gazzaneo',
    rating: 5,
    comment: 'Amo vcs todos que sempre tem tudo...inclusive um coração enorme',
    date: 'Setembro de 2026',
  },
  {
    id: 21,
    name: 'Tânia Borges',
    rating: 5,
    comment: 'Excelente atendimento, Sr Ademar muito atencioso',
    date: 'Por volta de outubro de 2025',
  },
  {
    id: 22,
    name: 'Carina Marques',
    rating: 5,
    comment: 'Loja excelente e muito organizada. Encontrei tudo que eu precisava e fui muito bem atendida!',
    date: 'Por volta de outubro de 2022',
  },
  {
    id: 23,
    name: 'daniellopes deoliveira',
    rating: 5,
    comment: 'Loja excelente!!!!\nTem tudo que precisar!!',
    date: 'Por volta de outubro de 2022',
  },
  {
    id: 24,
    name: 'Elias Oliveira',
    rating: 5,
    comment: 'Tenho certeza que você será bem atendido...',
    date: 'Por volta de outubro de 2022',
  },
  {
    id: 25,
    name: 'victor barreto',
    rating: 5,
    comment: 'Excelente loja. Tem de tudo e os matérias são de primeira qualidade. Atendimento top!',
    date: 'Por volta de outubro de 2022',
  },
  {
    id: 26,
    name: 'Anjo Quitério Sobral',
    rating: 5,
    comment: 'A loja tem uma ótima estrutura e o atendimento é maravilhoso! Tem grande variedade de produtos e oferecem ótimas condições de pagamento! Indico de olhos fechados!',
    date: 'Por volta de outubro de 2022',
  },
  {
    id: 27,
    name: 'ademar pereira',
    rating: 5,
    comment: 'Excelente atendimento muito bom loja compreta tem todo tipo material hidráulico elétrica ferramentas pinturas reparo registro material pedreiro e material em geral',
    date: 'Por volta de outubro de 2022',
  },
  {
    id: 28,
    name: 'Marcelo Henrique',
    rating: 5,
    comment: 'Loja Maravilhosa,tudo para sua reforma e acabamento,excelente profissionais e ótimos preços !',
    date: 'Por volta de outubro de 2022',
  },
  {
    id: 29,
    name: 'Márcia Piccolo',
    rating: 5,
    comment: 'Loja maravilhosa atendimento 10👏🏻👏🏻👏🏻👏🏻SUCESSOOOO👏🏻👏🏻👏🏻👏🏻 …',
    date: 'Por volta de outubro de 2022',
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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="relative isolate overflow-hidden bg-white py-14 sm:py-20">
      <img
        src={testimonialIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-2 z-0 h-40 w-40 object-contain opacity-[0.08] sm:right-10 sm:top-8 sm:h-72 sm:w-72"
      />
      <img
        src={testimonialSocialIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-0 z-0 h-44 w-44 object-contain opacity-[0.08] sm:bottom-8 sm:left-16 sm:h-72 sm:w-72"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header - Alinhado à esquerda */}
        <div className="mb-10 text-left sm:mb-14">
          <h2 className="mb-4 font-display text-3xl font-bold text-[#001A72] sm:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="mb-4 flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-[#FE5000] sm:h-6 sm:w-6" fill="#FE5000" />
            ))}
            <span className="font-display font-bold text-[#001A72] text-xl ml-2">{GOOGLE_RATING.average}</span>
            <span className="text-gray-400 text-sm">({GOOGLE_RATING.total} avaliações)</span>
          </div>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="grid grid-cols-[44px_minmax(0,1fr)_44px] items-center gap-2 sm:gap-4">
            <button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-[#001A72] transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001A72]"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Card do Depoimento Ativo */}
            <div className="flex min-h-[250px] flex-col justify-center rounded-2xl border border-gray-100 bg-[#f8f9fc] p-5 shadow-sm sm:min-h-[230px] sm:p-10">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div
                  aria-hidden="true"
                  className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#001A72] font-display text-xl font-bold text-white shadow-sm"
                >
                  {initials(activeTestimonial.name)}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-[#001A72]">{activeTestimonial.name}</p>
                  <div className="mt-1 flex items-center gap-0.5">
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

              <p className="text-base italic leading-relaxed text-gray-600 sm:text-lg">
                “{activeTestimonial.comment}”
              </p>

              <span className="mt-5 self-end text-sm font-semibold tabular-nums text-[#001A72]" aria-live="polite">
                {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>

            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-[#001A72] transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001A72]"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* CTA Final - Alinhado à direita */}
        <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
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
