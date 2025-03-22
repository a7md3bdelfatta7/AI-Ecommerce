import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { Product } from '../types/product';
import { useWishlist } from '../contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount.percentage / 100)
    : product.price;

  return (
    <Link to={`/products/${product.id}`} className="block h-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="relative">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          )}
          <button
            onClick={handleWishlistClick}
            className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
          >
            <Heart
              className={`h-5 w-5 ${
                isInWishlist(product.id)
                  ? 'text-red-500 fill-current'
                  : 'text-gray-400'
              }`}
            />
          </button>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              ({product.reviews})
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${discountedPrice.toFixed(2)}
              </span>
              {product.discount && (
                <span className="ml-2 text-sm text-red-500">
                  {product.discount.percentage}% off
                </span>
              )}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              disabled={!product.inStock}
              className={`px-4 py-2 rounded-md text-white transition-colors ${
                product.inStock
                  ? 'bg-primary-600 hover:bg-primary-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}