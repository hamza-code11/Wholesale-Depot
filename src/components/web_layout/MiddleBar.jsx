import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Menu } from 'lucide-react';
import logo from "../../assets/logo/logo.png";
import SearchBar from './SearchBar';

export default function MiddleBar({ onMobileMenuToggle }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4 md:gap-6">
          
          {/* ===== LEFT: Hamburger + Logo ===== */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button 
              onClick={onMobileMenuToggle}
              className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-brand-blue rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <a href="/" className="flex-shrink-0 block py-1">
              <img 
                src={logo}
                alt="Wholesale Depot" 
                className="h-9 md:h-11 lg:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* ===== CENTER: Search Bar ===== */}
          <div className="hidden md:flex flex-1 justify-center">
            <SearchBar />
          </div>

          {/* ===== RIGHT: Icons ===== */}
          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            
            {/* Wishlist */}
            <Link 
              to="/wishlist"
              className="relative p-2.5 text-gray-600 hover:text-brand-blue transition-colors rounded-lg hover:bg-blue-50/60 group"
              aria-label="Wishlist"
            >
              <Heart size={21} className="md:w-[22px] md:h-[22px]" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[15px] h-[15px] bg-brand-blue text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white group-hover:scale-110 transition-transform leading-none">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link 
              to="/cart"
              className="relative flex items-center p-2.5 text-gray-600 hover:text-brand-blue transition-colors rounded-lg hover:bg-blue-50/60 group"
              aria-label="Cart"
            >
              <div className="relative">
                <ShoppingCart size={21} className="md:w-[22px] md:h-[22px]" />
                <span className="absolute -top-2.5 -right-2 min-w-[15px] h-[15px] bg-brand-blue text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white group-hover:scale-110 transition-transform leading-none">
                  5
                </span>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}