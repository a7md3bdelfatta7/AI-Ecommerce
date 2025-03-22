import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchAndFilter } from '../components/SearchAndFilter';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface HomeProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function Home({ products, onAddToCart }: HomeProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  // Get featured products (products with high ratings or special discounts)
  const featuredProducts = useMemo(() => {
    return products.filter(product => 
      product.rating >= 4.5 || // High-rated products
      (product.discount && product.discount.percentage >= 15) // Products with significant discounts
    );
  }, [products]);

  // Get unique categories from featured products
  const categories = useMemo(() => {
    const uniqueCategories = new Set(featuredProducts.map(product => product.category));
    return Array.from(uniqueCategories);
  }, [featuredProducts]);

  // Filter featured products based on search query, category, and price range
  const filteredProducts = useMemo(() => {
    return featuredProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [featuredProducts, searchQuery, selectedCategory, priceRange]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <Link 
          to="/products" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View All Products →
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <p className="text-blue-800">
          Featured products include items with ratings of 4.5+ stars or special discounts of 15% or more!
        </p>
      </div>

      <SearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        categories={categories}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No featured products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}