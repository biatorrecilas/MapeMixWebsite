import { Play, Heart, MessageCircle, Eye } from 'lucide-react';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Agora com 6 vídeos
const reels = [
  {
    id: 1,
    thumb: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=300&h=500&fit=crop&auto=format',
    views: '12,4 mil',
    likes: '843',
    label: 'Ferramentas em promoção 🔧',
  },
  {
    id: 2,
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=500&fit=crop&auto=format',
    views: '9,1 mil',
    likes: '621',
    label: 'Dicas de instalação elétrica ⚡',
  },
  {
    id: 3,
    thumb: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=500&fit=crop&auto=format',
    views: '18,7 mil',
    likes: '1.240',
    label: 'Novidades de reforma 🏗️',
  },
  {
    id: 4,
    thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=500&fit=crop&auto=format',
    views: '7,3 mil',
    likes: '488',
    label: 'Produtos para casa 🏠',
  },
  {
    id: 5,
    thumb: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=500&fit=crop&auto=format',
    views: '22,1 mil',
    likes: '1.892',
    label: 'Iluminação LED incrível 💡',
  },
  {
    id: 6,
    thumb: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=300&h=500&fit=crop&auto=format',
    views: '15,2 mil',
    likes: '934',
    label: 'Equipamentos de proteção 🦺',
  },
];

const metrics = [
  { value: '[XX mil]', label: 'Seguidores' },
  { value: '[XX milhões]', label: 'Visualizações' },
  { value: '[XX mil]', label: 'Curtidas' },
];

export default function SocialSection() {
  return (
    <section id="redes-sociais" className="relative isolate py-20 bg-[#001A72] overflow-hidden">
      <div aria-hidden="true" className="warning-stripes absolute inset-x-0 top-0 h-4" />
      <div aria-hidden="true" className="warning-stripes absolute inset-x-0 bottom-0 h-4" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Textos e Métricas sem fundo */}
          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              <a 
                href="https://www.instagram.com/mapesolucoes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-1.5 text-white/90 text-sm cursor-pointer"
              >
                <InstagramIcon size={14} />
                @mapesolucoes
              </a>
              <a 
                href="https://www.facebook.com/mapesolucoes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-1.5 text-white/90 text-sm cursor-pointer"
              >
                <FacebookIcon size={14} />
                @mapesolucoes
              </a>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Já acompanha a{' '}
              <span className="text-[#FE5000]">Mape Mix</span> nas redes sociais?
            </h2>
            <p className="text-blue-200 text-lg max-w-xl">
              Confira nossos vídeos, novidades, produtos, dicas e muito mais.
            </p>

            {/* Metrics (Agora sem o fundo) */}
            <div className="flex flex-wrap gap-x-10 gap-y-6 mt-10">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <p className="font-display font-bold text-3xl text-[#FE5000]">{m.value}</p>
                  <p className="text-blue-200 font-medium text-base mt-1">{m.label}</p>
                  <p className="text-white/40 text-xs italic mt-0.5">(substitua pelo dado real)</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Grid de Vídeos em 3 colunas (Formato feed Instagram) */}
          <div className="mx-auto w-full lg:ml-auto lg:mr-0 flex justify-center lg:justify-end">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-[480px] w-full">
              {reels.map((reel) => (
                <a
                  key={reel.id}
                  href="https://www.instagram.com/mapesolucoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '9/16' }}
                >
                  <img
                    src={reel.thumb}
                    alt={reel.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Escuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

                  {/* Play button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <Play size={16} fill="white" className="text-white ml-0.5" />
                  </div>

                  {/* Stats & Label */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-[10px] sm:text-xs font-medium mb-1.5 line-clamp-2 leading-tight hidden sm:block">
                      {reel.label}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-white/90 text-[9px] sm:text-[11px]">
                      <span className="flex items-center gap-1">
                        <Eye size={10} />
                        {reel.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={10} />
                        {reel.likes}
                      </span>
                    </div>
                  </div>

                  {/* Borda laranja no hover */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/10 group-hover:border-[#FE5000]/60 transition-colors pointer-events-none" />
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
