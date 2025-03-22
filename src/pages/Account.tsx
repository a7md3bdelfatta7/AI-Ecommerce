import React, { useState } from 'react';
import { FiUser, FiShoppingBag, FiSettings, FiHeart, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

function Account() {
  const [activeTab, setActiveTab] = useState('profile');
  const { theme, toggleTheme } = useTheme();

  // Mock user data - in a real app, this would come from your auth system
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024',
    orders: [
      {
        id: 'ORD001',
        date: '2024-03-15',
        total: 299.99,
        status: 'Delivered',
        items: ['Wireless Noise-Cancelling Headphones']
      },
      {
        id: 'ORD002',
        date: '2024-03-01',
        total: 199.99,
        status: 'Processing',
        items: ['Smart Fitness Watch']
      }
    ]
  };

  const renderProfile = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Profile Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Name</label>
          <input
            type="text"
            value={user.name}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
          <input
            type="email"
            value={user.email}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Member Since</label>
          <input
            type="text"
            value={user.joinDate}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
            readOnly
          />
        </div>
        <button className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Order History</h3>
      <div className="space-y-4">
        {user.orders.map(order => (
          <div key={order.id} className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium dark:text-white">Order #{order.id}</span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'Delivered' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400' 
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-400'
              }`}>
                {order.status}
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Date: {order.date}</p>
              <p>Items: {order.items.join(', ')}</p>
              <p>Total: ${order.total}</p>
            </div>
            <button className="mt-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Wishlist</h3>
      <p className="text-gray-600 dark:text-gray-400">Your wishlist is empty.</p>
      <button className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
        Browse Products
      </button>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Account Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium dark:text-white">Theme</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Switch between light and dark mode</p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'light' ? (
              <FiMoon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <FiSun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium dark:text-white">Email Notifications</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates about your orders and promotions</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium dark:text-white">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security to your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
        <button className="mt-4 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
          Delete Account
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'profile' 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                }`}
              >
                <FiUser />
                <span>Profile</span>
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'orders' 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                }`}
              >
                <FiShoppingBag />
                <span>Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'wishlist' 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                }`}
              >
                <FiHeart />
                <span>Wishlist</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                }`}
              >
                <FiSettings />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {activeTab === 'profile' && renderProfile()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'wishlist' && renderWishlist()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>
    </div>
  );
}

export default Account; 