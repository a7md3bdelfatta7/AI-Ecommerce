import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, Shield, CheckCircle, Heart } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../contexts/WishlistContext';

interface ProductDetailsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductDetails({ products, onAddToCart }: ProductDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Product not found</h2>
        <Link to="/products" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-4 inline-block">
          Return to Products
        </Link>
      </div>
    );
  }

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount.percentage / 100)
    : product.price;

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={handleWishlistClick}
            className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
          >
            <Heart
              className={`h-6 w-6 ${
                isInWishlist(product.id)
                  ? 'text-red-500 fill-current'
                  : 'text-gray-400'
              }`}
            />
          </button>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
          <div className="mt-2 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600 dark:text-gray-400">({product.reviews} reviews)</span>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${discountedPrice.toFixed(2)}
              </span>
              {product.discount && (
                <span className="ml-2 text-sm text-red-600">
                  {product.discount.percentage}% off
                </span>
              )}
            </div>
            {product.discount && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Original price: ${product.price.toFixed(2)}
              </p>
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Description</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{product.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Features</h2>
            <ul className="mt-2 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Specifications</h2>
            <dl className="mt-2 grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{key}</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className={`flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <Truck className="h-6 w-6 mx-auto text-gray-400 dark:text-gray-500" />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {product.shipping.free ? 'Free Shipping' : 'Standard Shipping'}
              </p>
            </div>
            <div>
              <Shield className="h-6 w-6 mx-auto text-gray-400 dark:text-gray-500" />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{product.warranty}</p>
            </div>
            <div>
              <CheckCircle className="h-6 w-6 mx-auto text-gray-400 dark:text-gray-500" />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Customer Reviews</h2>
        <div className="mt-6 space-y-8">
          {product.customerReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-8">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{review.userName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
                </div>
                {review.verifiedPurchase && (
                  <span className="ml-4 text-sm text-green-600">Verified Purchase</span>
                )}
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">{review.comment}</p>
              <div className="mt-4 flex items-center">
                <button className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {product.relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Related Products</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedId) => {
              const relatedProduct = products.find(p => p.id === relatedId);
              if (!relatedProduct) return null;
              return (
                <Link
                  key={relatedId}
                  to={`/product/${relatedId}`}
                  className="group"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    {relatedProduct.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} 