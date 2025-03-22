import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function HelpCenter() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Help Center</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Phone className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Phone Support</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Available Mon-Fri, 9am-5pm</p>
          <a href="tel:1-800-123-4567" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            1-800-123-4567
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Mail className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Email Support</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">24/7 Response Time</p>
          <a href="mailto:support@shophub.com" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            support@shophub.com
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <MessageCircle className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Live Chat</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Available 24/7</p>
          <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            Start Chat
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                <span>How do I track my order?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="p-4 text-gray-600 dark:text-gray-400">
                You can track your order by going to your account dashboard and selecting "Order History". Click on any order to view its current status and tracking information.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                <span>What is your return policy?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="p-4 text-gray-600 dark:text-gray-400">
                We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some restrictions apply to certain products.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                <span>How can I change my shipping address?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="p-4 text-gray-600 dark:text-gray-400">
                You can update your shipping address in your account settings. For orders that have already been placed, please contact customer support immediately.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}