import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { Wishlist } from './pages/Wishlist';
import { Settings } from './pages/Settings';
import { HelpCenter } from './pages/HelpCenter';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import Account from './pages/Account';
import { CartItem } from './types';
import { Product } from './types/product';
import { SAMPLE_PRODUCTS } from './data/sampleProducts';
import { ThemeProvider } from './context/ThemeContext';
import { WishlistProvider } from './contexts/WishlistContext';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <ThemeProvider>
      <WishlistProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header
              cartItemsCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
              onMenuClick={() => setIsMenuOpen(true)}
            />
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home products={SAMPLE_PRODUCTS} onAddToCart={handleAddToCart} />} />
                <Route path="/products" element={<Products products={SAMPLE_PRODUCTS} onAddToCart={handleAddToCart} />} />
                <Route path="/products/:id" element={<ProductDetails products={SAMPLE_PRODUCTS} onAddToCart={handleAddToCart} />} />
                <Route path="/wishlist" element={<Wishlist onAddToCart={handleAddToCart} />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/account" element={<Account />} />
                <Route
                  path="/cart"
                  element={
                    <Cart
                      items={cartItems}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemoveItem={handleRemoveItem}
                    />
                  }
                />
                <Route path="/checkout" element={<Checkout items={cartItems} />} />
              </Routes>
            </main>
          </div>
        </Router>
      </WishlistProvider>
    </ThemeProvider>
  );
}

export default App;