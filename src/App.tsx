import { useState } from 'react';
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
import type { Category, Product } from './data/products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todas');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

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
      <Header cartCount={cartItems.length} onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero />
        <CategorySection onCategorySelect={handleCategorySelect} />
        <ProductCatalog
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
        <LocationSection />
        <DeliverySection />
        <InstagramSection />
        <TestimonialsSection />
      </main>

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
