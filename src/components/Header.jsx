import React, { useState } from 'react';
// We'll use lucide-react for icons. You'll need to install it.
// Run this in your terminal: npm install lucide-react
import { ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ setPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // This function handles navigation clicks.
  // It calls 'setPage' (from App.jsx) to change the page
  // and closes the mobile menu.
  const handleNavClick = (pageName) => {
    setPage(pageName);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold text-green-700 transition-colors hover:text-green-800"
            >
              CasaCore
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <NavItem onClick={() => handleNavClick('home')}>Home</NavItem>
            <NavItem onClick={() => handleNavClick('shop')}>Shop</NavItem>
            <NavItem onClick={() => handleNavClick('about')}>Our Story</NavItem>
            <NavItem onClick={() => handleNavClick('contact')}>Contact</NavItem>
          </nav>

          {/* Icons (Desktop) */}
          <div className="hidden items-center space-x-4 md:flex">
            <a href="#" className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
              <ShoppingCart size={22} />
            </a>
            <a
              href="#"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <a href="#" className="mr-2 rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
              <ShoppingCart size={22} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="absolute w-full border-t border-gray-200 bg-white shadow-lg md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <MobileNavItem onClick={() => handleNavClick('home')}>Home</MobileNavItem>
            <MobileNavItem onClick={() => handleNavClick('shop')}>Shop</MobileNavItem>
            <MobileNavItem onClick={() => handleNavClick('about')}>Our Story</MobileNavItem>
            <MobileNavItem onClick={() => handleNavClick('contact')}>Contact</MobileNavItem>
          </div>
          <div className="border-t border-gray-200 px-2 pt-3 pb-4">
            <a
              href="#"
              className="flex items-center justify-between rounded-md bg-green-50 px-3 py-2 text-base font-medium text-green-700 hover:bg-green-100"
            >
              Login
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// Small helper components for navigation links
function NavItem({ children, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      {children}
    </a>
  );
}

function MobileNavItem({ children, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
    >
      {children}
    </a>
  );
}