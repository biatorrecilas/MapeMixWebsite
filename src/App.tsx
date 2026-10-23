import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductCatalog from './components/ProductCatalog';
import BrandsSection from './components/BrandsSection';
import InstagramSection from './components/InstagramSection';
import TestimonialsSection from './components/TestimonialsSection';
import ClientsSection from './components/ClientsSection';
import DeliverySection from './components/DeliverySection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Cart from './components/Cart';
import AnnouncementsPage from './components/AnnouncementsPage';
import type { Category, Product } from './data/products';

const validCategories: Category[] = [
  'Todas',
  'Elétrica',
  'Hidráulica',
  'Iluminação',
  'Ferramentas',
  'Ferragens',
  'Pintura',
  'Utilidades',
  'Manutenção',
  'Casa e Dia a Dia',
];

function getCategoryFromUrl(): Category {
  const category = new URLSearchParams(window.location.search).get('categoria');
  return category && validCategories.includes(category as Category) ? (category as Category) : 'Todas';
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>(getCategoryFromUrl);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [productsPage, setProductsPage] = useState(window.location.pathname === '/produtos');
  const [announcementsPage, setAnnouncementsPage] = useState(window.location.pathname === '/comunicados');

  useEffect(() => {
    const updateRoute = () => {
      setProductsPage(window.location.pathname === '/produtos');
      setAnnouncementsPage(window.location.pathname === '/comunicados');
      setActiveCategory(getCategoryFromUrl());
    };
    window.addEventListener('popstate', updateRoute);
    return () => window.removeEventListener('popstate', updateRoute);
  }, []);

  const openAnnouncementsPage = () => {
    if (window.location.pathname !== '/comunicados') {
      window.history.pushState({}, '', '/comunicados');
      setProductsPage(false);
      setAnnouncementsPage(true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCategorySelect = (cat: Category) => {
    setActiveCategory(cat);
    window.history.pushState({}, '', `/produtos?categoria=${encodeURIComponent(cat)}`);
    setProductsPage(true);
    setAnnouncementsPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductCategoryChange = (cat: Category) => {
    const nextCategory = activeCategory === cat ? 'Todas' : cat;
    setActiveCategory(nextCategory);
    const query = nextCategory === 'Todas' ? '' : `?categoria=${encodeURIComponent(nextCategory)}`;
    window.history.replaceState({}, '', `/produtos${query}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={cartItems.length}
        onCartOpen={() => setCartOpen(true)}
        productsPage={productsPage}
        announcementsPage={announcementsPage}
        onAnnouncementsOpen={openAnnouncementsPage}
      />

      {announcementsPage ? (
        <AnnouncementsPage />
      ) : (
        <main>
          {!productsPage && <Hero />}
          {!productsPage && <CategorySection onCategorySelect={handleCategorySelect} />}
          <ProductCatalog
            activeCategory={activeCategory}
            onCategoryChange={handleProductCategoryChange}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            fullPage={productsPage}
          />
          {!productsPage && <BrandsSection />}
          {!productsPage && <LocationSection />}
          {!productsPage && <DeliverySection />}
          {!productsPage && <InstagramSection />}
          {!productsPage && <ClientsSection />}
          {!productsPage && <TestimonialsSection />}
        </main>
      )}

      <Footer />
      <WhatsAppFloat />

      {cartOpen && (
        <Cart
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onClose={() => setCartOpen(false)}
        />
      )}
    </div>
  );
}
