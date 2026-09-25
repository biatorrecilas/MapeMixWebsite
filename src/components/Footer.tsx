import { Clock, MessageCircle, MapPin, Phone } from 'lucide-react';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
import logoSrc from '../assets/LogoIconChapeu.svg';

const WA_NUMBER = '5519984547023';

export default function Footer() {
  return (
    <footer id="sobre" className="bg-[#001A72] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoSrc} alt="Mape Mix" className="h-12 mb-4" />
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Materiais para sua obra, reforma, manutenção e para o seu dia a dia.
              Loja física em Campinas com atendimento pelo WhatsApp.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mapesolucoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#E1306C] rounded-xl flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/mapesolucoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#1877F2] rounded-xl flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:ml-16">
            <h3 className="font-display font-bold text-white mb-5">Navegação</h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Produtos', href: '#catalogo' },
                { label: 'Instagram', href: '#instagram' },
                { label: 'Localização', href: '#localizacao' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-[#FE5000] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-white mb-5">Redes Sociais</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/mapesolucoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-200 hover:text-[#FE5000] text-sm transition-colors"
                >
                  <InstagramIcon size={14} />
                  @mapesolucoes
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mapesolucoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-200 hover:text-[#FE5000] text-sm transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  /mapesolucoes
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-200 hover:text-[#FE5000] text-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  (19) 98454-7023
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-5">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FE5000] flex-shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm leading-relaxed">
                  Av. Francisco de Angelis, 1244<br />
                  Vila Paraiso,
                  Campinas/SP.<br />
                  13043-370
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#FE5000] flex-shrink-0" />
                <a href="tel:+5519984547023" className="text-blue-200 hover:text-white text-sm transition-colors">
                  +55 (19) 98454-7023
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#FE5000] flex-shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm leading-relaxed">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 13h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © 2026 Mape Mix. Todos os direitos reservados.
          </p>
          <p className="text-blue-300 text-sm">
            Reparo & Construção | Campinas/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
