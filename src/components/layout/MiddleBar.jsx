import { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu } from 'lucide-react';
import logo from "../../assets/logo/logo.png";

export default function MiddleBar({ onMobileMenuToggle }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 gap-2 md:gap-4">
          
          {/* ===== LEFT: Hamburger + Logo ===== */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Hamburger - Mobile & Tablet Only */}
            <button 
              onClick={onMobileMenuToggle}
              className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-brand-blue rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <a href="/" className="flex-shrink-0 block">
              <img 
                src={logo}
                alt="Wholesale Depot" 
                className="h-8 md:h-10 lg:h-11 w-auto object-contain"
              />
            </a>
          </div>

          {/* ===== CENTER: Search Bar - Desktop Only ===== */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands & more..."
                className="w-full pl-4 pr-20 lg:pr-24 py-2.5 lg:py-3 bg-gray-50 border-2 border-transparent rounded-xl text-[13px] lg:text-sm focus:outline-none focus:border-brand-blue/30 focus:bg-white focus:shadow-md transition-all duration-300 placeholder:text-gray-400 text-gray-700"
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-brand-blue hover:bg-brand-blue-dark text-white px-3 lg:px-4 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 hover:shadow-md"
              >
                <Search size={14} className="lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </form>

          {/* ===== RIGHT: Icons ===== */}
          <div className="flex items-center gap-0.5 md:gap-1.5 flex-shrink-0">
            
            {/* Wishlist */}
            <button 
              className="relative p-2 text-gray-600 hover:text-brand-blue transition-colors rounded-lg hover:bg-blue-50/60 group"
              aria-label="Wishlist"
            >
              <Heart size={20} className="md:w-[21px] md:h-[21px]" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[14px] h-[14px] bg-brand-blue text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white group-hover:scale-110 transition-transform leading-none">
                3
              </span>
            </button>

            {/* Cart */}
            <button 
              className="relative flex items-center p-2 text-gray-600 hover:text-brand-blue transition-colors rounded-lg hover:bg-blue-50/60 group"
              aria-label="Cart"
            >
              <div className="relative">
                <ShoppingCart size={20} className="md:w-[21px] md:h-[21px]" />
                <span className="absolute -top-2.5 -right-2 min-w-[14px] h-[14px] bg-brand-blue text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white group-hover:scale-110 transition-transform leading-none">
                  5
                </span>
              </div>
              {/* Cart Amount - Desktop Only */}
              <span className="hidden lg:block ml-2 text-left leading-tight">
                {/* <span className="text-[10px] text-gray-400 block">Cart</span> */}
                {/* <span className="text-[13px] font-bold text-gray-900">₨4,250</span> */}
              </span>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}