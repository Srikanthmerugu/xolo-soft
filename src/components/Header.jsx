// components/Header.jsx
import { useState } from 'react';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://www.zoho.com/content/dam/zoho/images/home-2019/zoho-logo.svg" 
              alt="Zoho" 
              className="h-8 w-auto"
            />
          </div>

          {/* Main Navigation - Exact Zoho Style */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button 
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center text-gray-700 hover:text-zoho-blue font-medium text-sm py-2"
              >
                Products
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProductsOpen && (
                <div 
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="absolute top-full left-0 w-96 bg-white shadow-xl border border-gray-200 rounded-lg py-4 mt-1"
                >
                  <div className="px-6 py-2">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">BY CATEGORY</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-3">
                        <a href="#" className="block text-gray-600 hover:text-zoho-blue">Sales & Marketing</a>
                        <a href="#" className="block text-gray-600 hover:text-zoho-blue">Email & Collaboration</a>
                        <a href="#" className="block text-gray-600 hover:text-zoho-blue">Finance & Accounting</a>
                      </div>
                      <div className="space-y-3">
                        <a href="#" className="block text-gray-600 hover:text-zoho-blue">CRM</a>
                        <a href="#" className="block text-gray-600 hover:text-zoho-blue">Mail</a>
                        <a href="#" className="block text-gray-600 hover:text-zoho-blue">Books</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {['Solutions', 'Pricing', 'Support'].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-zoho-blue font-medium text-sm py-2">
                {item}
              </a>
            ))}
          </nav>

          {/* Auth Buttons - Exact Zoho Style */}
          <div className="flex items-center space-x-4">
            <button className="text-zoho-blue hover:text-zoho-dark font-medium text-sm py-2">
              Sign In
            </button>
            <button className="bg-zoho-blue hover:bg-zoho-dark text-white px-5 py-2 rounded text-sm font-medium transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </div>

      
    </header>
  );
};

export default Header;