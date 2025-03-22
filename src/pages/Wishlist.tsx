import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types/product';

interface WishlistProps {
  onAddToCart: (product: Product) => void;
}

export function Wishlist({ onAddToCart }: WishlistProps) {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Wishlist</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md text-center">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-gray-400 dark:text-gray-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Start adding items you love to your wishlist!</p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="relative group">
            <ProductCard product={product} onAddToCart={onAddToCart} />
            <button
              onClick={() => removeFromWishlist(product.id)}
              className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 className="h-5 w-5 text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}