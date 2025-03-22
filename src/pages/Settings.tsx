import React from 'react';
import { Bell, Lock, User, CreditCard } from 'lucide-react';

export function Settings() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</h2>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <User className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Settings</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              Profile Information
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              Email Preferences
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              Push Notifications
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              Email Notifications
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Lock className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy & Security</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              Password
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              Two-Factor Authentication
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <CreditCard className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              Manage Payment Methods
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300">
              Billing History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}