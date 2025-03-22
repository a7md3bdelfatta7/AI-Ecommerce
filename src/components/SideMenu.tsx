import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, Package, Heart, Settings, HelpCircle, User } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/products', icon: Package, label: 'Products' },
    { path: '/wishlist', icon: Heart, label: 'Wishlist' },
    { path: '/account', icon: User, label: 'Account' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/help', icon: HelpCircle, label: 'Help Center' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map(({ path, icon: Icon, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    location.pathname === path
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={onClose}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}