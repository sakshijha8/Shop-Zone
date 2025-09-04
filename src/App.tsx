import React, { useState, useMemo } from 'react';
import { useAppDispatch } from './hooks/redux';
import { addToCart } from './store/cartSlice';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import PaymentModal from './components/PaymentModal';
import AboutModal from './components/AboutModal';
import Footer from './components/Footer';
import { products } from './data/products';
import { Product } from './store/cartSlice';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  
  const dispatch = useAppDispatch();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openPayment = () => {
    setIsCartOpen(false);
    setIsPaymentModalOpen(true);
  };

  const closePayment = () => {
    setIsPaymentModalOpen(false);
  };

  const openAbout = () => {
    setIsAboutModalOpen(true);
  };

  const closeAbout = () => {
    setIsAboutModalOpen(false);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCartClick={openCart}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        <Hero 
          onShopNowClick={scrollToProducts}
          onLearnMoreClick={openAbout}
        />
        
        <div id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
          
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        </div>
      </main>
      
      <Footer />
      
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
        onAddToCart={handleAddToCart}
      />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={closeCart} 
        onCheckout={openPayment}
      />
      
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={closePayment} 
      />
      
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={closeAbout} 
      />
    </div>
  );
};

export default App;