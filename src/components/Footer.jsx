import React from 'react';
// We need icons for the footer, too
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          
          {/* Column 1: Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Shop</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Cacti</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Succulents</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Pots & Decor</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">All Products</a></li>
            </ul>
          </div>

          {/* Column 2: CasaCore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">CasaCore</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Our Story</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Our Vision</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Join Our Newsletter</h3>
            <p className="mt-4 text-base text-gray-600">Get updates on new products and special offers.</p>
            <form className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border-gray-300 px-4 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
              <button
                type="submit"
                className="mt-2 rounded-md bg-green-600 px-4 py-2 text-white shadow-sm hover:bg-green-700 sm:mt-0 sm:ml-2"
              >
                Go
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </a>
            </div>
            <p className="mt-4 text-base text-gray-400 md:mt-0">
              &copy; {new Date().getFullYear()} CasaCore. All rights reserved. (Sri Lanka)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}