import { Search } from 'lucide-react';

interface SearchAndFilterProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    priceRange: { min: number; max: number };
    onPriceRangeChange: (range: { min: number; max: number }) => void;
    categories: string[];
}

export function SearchAndFilter({
    searchQuery,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    categories,
}: SearchAndFilterProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex-1">
                    <select
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Price Range Filter */}
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            placeholder="Min"
                            value={priceRange.min}
                            onChange={(e) => onPriceRangeChange({ ...priceRange, min: Number(e.target.value) })}
                            className="w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        <span className="text-gray-500 dark:text-gray-400">-</span>
                        <input
                            type="number"
                            placeholder="Max"
                            value={priceRange.max}
                            onChange={(e) => onPriceRangeChange({ ...priceRange, max: Number(e.target.value) })}
                            className="w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 