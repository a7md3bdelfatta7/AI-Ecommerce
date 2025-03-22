import { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchAndFilter } from '../components/SearchAndFilter';
import { Product } from '../types';

interface ProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function Products({ products, onAddToCart }: ProductsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(product => product.category));
    return Array.from(uniqueCategories);
  }, [products]);

  // Filter products based on search query, category, and price range
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchQuery, selectedCategory, priceRange]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">All Products</h2>

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
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
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