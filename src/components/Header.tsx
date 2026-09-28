import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ShoppingBag } from 'lucide-react';
import logoSrc from '../assets/Logo.svg';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Localização', href: '/#localizacao' },
  { label: 'Contato', href: '/#contato' },
];

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de informações sobre produtos do catálogo.');

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  productsPage: boolean;
}

export default function Header({ cartCount, onCartOpen, productsPage }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logoSrc} alt="Mape Mix — Reparo e Construção" className="h-26 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.label === 'Produtos' && productsPage ? (event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } : undefined}
              className="px-3 py-2 text-sm font-medium text-[#001A72] hover:text-[#FE5000] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Cart */}
          <button
            onClick={onCartOpen}
            className="relative p-2 text-[#001A72] hover:text-[#FE5000] transition-colors"
            aria-label="Lista de interesse"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FE5000] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#001A72]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-[#001A72] hover:text-[#FE5000] hover:bg-orange-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#FE5000] text-white font-semibold px-4 py-3 rounded-full"
            >
              <MessageCircle size={18} />
              Fale no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
