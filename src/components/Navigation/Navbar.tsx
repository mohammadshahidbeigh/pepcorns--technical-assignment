import React, { useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import NavigationMenu from './NavigationMenu';
import MobileMenu from './MobileMenu';
import MobileNavigation from './MobileNavigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Logo />
            <div className="hidden md:flex space-x-6">
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Investors
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                Businesses
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <SearchBar />
            <UserMenu />
          </div>

          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
        </div>
      </div>
      
      {isMenuOpen && <NavigationMenu />}
      {isMobileMenuOpen && <MobileNavigation />}
    </nav>
  );
};

export default Navbar;