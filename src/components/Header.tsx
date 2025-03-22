import React from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount: number;
  onMenuClick: () => void;
}

export function Header({ cartItemsCount, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-gray-900 dark:bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer hover:text-blue-400 transition-colors" onClick={onMenuClick} />
            <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">ShopHub</Link>
          </div>
          
          <div className="flex-1 max-w-3xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/account" className="cursor-pointer flex items-center hover:text-blue-400 transition-colors">
              <User className="h-6 w-6" />
              <span className="ml-2 hidden sm:inline">Account</span>
            </Link>
            <Link to="/cart" className="cursor-pointer flex items-center hover:text-blue-400 transition-colors">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </div>
              <span className="ml-2 hidden sm:inline">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}