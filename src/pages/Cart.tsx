import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, change: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shopping Cart</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Your cart is empty</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {items.map(item => (
                <li key={item.id} className="p-6">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                      <div className="mt-2 flex items-center">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                        >
                          <Minus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </button>
                        <span className="mx-3 min-w-[2rem] text-center text-gray-900 dark:text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Plus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="mt-2 flex items-center text-sm text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                <span className="text-gray-900 dark:text-white">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Tax</span>
                <span className="text-gray-900 dark:text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t dark:border-gray-700 pt-3">
                <div className="flex justify-between font-medium">
                  <span className="text-gray-900 dark:text-white">Total</span>
                  <span className="text-gray-900 dark:text-white">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block w-full bg-primary-600 text-white py-2 px-4 rounded-md text-center font-medium hover:bg-primary-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}