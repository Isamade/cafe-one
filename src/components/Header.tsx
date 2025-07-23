import React, { useState } from 'react';
import { Coffee, Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <Coffee className="w-6 h-6 text-amber-800" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Tin City Cafe</h1>
                <p className="text-xs text-gray-600">Neighborhood Coffee & Comfort</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Full Menu</a>
            <a href="#about" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Our Story</a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-800 font-medium transition-colors">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition-colors font-medium">
              Order Online
            </button>
            <button className="p-2 text-gray-700 hover:text-amber-800 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">Home</a>
              <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">Full Menu</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">Our Story</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">Contact</a>
              <button className="w-full mt-4 bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition-colors font-medium">
                Order Online
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;