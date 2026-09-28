import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductCatalog from './components/ProductCatalog';
import InstagramSection from './components/InstagramSection';
import TestimonialsSection from './components/TestimonialsSection';
import DeliverySection from './components/DeliverySection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Cart from './components/Cart';
import AnnouncementsPage from './components/AnnouncementsPage';
import type { Category, Product } from './data/products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todas');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [productsPage, setProductsPage] = useState(window.location.pathname === '/produtos');
  const [announcementsPage, setAnnouncementsPage] = useState(window.location.pathname === '/comunicados');

  useEffect(() => {
    const updateRoute = () => {
      setProductsPage(window.location.pathname === '/produtos');
      setAnnouncementsPage(window.location.pathname === '/comunicados');
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
            onCategoryChange={setActiveCategory}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            fullPage={productsPage}
          />
          {!productsPage && <LocationSection />}
          {!productsPage && <DeliverySection />}
          {!productsPage && <InstagramSection />}
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
