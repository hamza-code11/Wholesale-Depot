import { useState, useEffect, useCallback } from 'react';
import { 
  X, User, Heart, Truck, ChevronDown, 
  ChevronRight, Grid3X3, ShoppingBag, Package,
  Home, Store, Tag, Phone, Mail, Star
} from 'lucide-react';
import logo from "../../assets/logo/logo.png";

const categories = [
  'Vegetables', 'Fruits', 'Dairy & Eggs', 'Bakery', 'Meat & Fish',
  'Rice & Flour', 'Oil & Ghee', 'Beverages', 'Snacks', 'Spices',
  'Frozen Food', 'Household', 'Personal Care', 'Baby Care', 'Pet Food',
  'Cleaning Supplies',
];

const brands = [
  'Dalda', 'Nestle', 'National', 'Shan', 'Olpers', 'Tapal',
  'Engro', 'Unilever', 'Lipton', 'Knorr', 'Rafhan', 'Mehran',
  'Shezan', "Mitchell's", "Young's", 'Dawn', 'Colgate', 'Lifebuoy',
  'Sufi', 'Shangrila',
];

export default function MobileSidebar({ isOpen, onClose }) {
  const [categoryOpen, setCategoryOpen] = useState(false);

  // Close on ESC key
  const handleEsc = useCallback((e) => {
    if (e.key === 'Escape' && isOpen) onClose();
  }, [isOpen, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleEsc]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[300px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 flex-shrink-0">
          <a href="/" onClick={onClose}>
            <img src={logo} alt="Wholesale Depot" className="h-7 w-auto" />
          </a>
          <button 
            onClick={onClose} 
            className="p-2 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none">

          {/* Home */}
          <div className="border-b border-gray-100">
            <a 
              href="/" 
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Home size={18} className="text-gray-400" />
              <span className="font-medium">Home</span>
            </a>
          </div>

          {/* Shop */}
          <div className="border-b border-gray-100">
            <a 
              href="/shop" 
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Store size={18} className="text-gray-400" />
              <span className="font-medium">Shop</span>
            </a>
          </div>

          {/* Wishlist */}
          <div className="border-b border-gray-100">
            <a 
              href="#" 
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Heart size={18} className="text-gray-400" />
                <span className="font-medium">Wishlist</span>
              </div>
              <span className="text-[11px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">3</span>
            </a>
          </div>

        {/* Add to cart */}
          <div className="border-b border-gray-100">
            <a 
              href="#" 
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Heart size={18} className="text-gray-400" />
                <span className="font-medium">Add to Cart</span>
              </div>
              <span className="text-[11px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">2</span>
            </a>
          </div>

          {/* Track Order */}
          <div className="border-b border-gray-100">
            <a 
              href="#" 
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Truck size={18} className="text-gray-400" />
              <span className="font-medium">Track Order</span>
            </a>
          </div>

        {/* Account */}
          <div className="border-b border-gray-100">
            <a 
              href="#" 
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <User size={18} className="text-gray-400" />
              <span className="font-medium">Login / Register</span>
            </a>
          </div>




          {/* Categories - Accordion (Last) */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center justify-between w-full px-4 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              aria-expanded={categoryOpen}
            >
              <div className="flex items-center gap-3">
                <Grid3X3 size={18} className="text-gray-400" />
                <span>Browse Categories</span>
              </div>
              <ChevronDown 
                size={16} 
                className={`text-gray-400 transition-transform duration-200 ${
                  categoryOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              categoryOpen ? 'max-h-[2000px]' : 'max-h-0'
            }`}>
              <div className="pb-3">
                {categories.map((cat, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    onClick={onClose}
                    className="flex items-center justify-between pl-11 pr-4 py-2.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                  >
                    <span>{cat}</span>
                    <ChevronRight size={14} className="text-gray-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Brands List */}
          <div className="border-b border-gray-100">
            <div className="px-4 py-3.5">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Top Brands
              </p>
              <div className="space-y-0.5">
                {brands.map((brand, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    onClick={onClose}
                    className="block px-3 py-2.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  >
                    {brand}
                  </a>
                ))}
              </div>
            </div>
          </div>


          {/* Contact */}
          <div className="p-4 space-y-3">
            <a 
              href="tel:+923001234567" 
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Phone size={16} className="text-gray-400" />
              +92 300 1234567
            </a>
            <a 
              href="mailto:support@wholesaledepot.com" 
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={16} className="text-gray-400" />
              support@wholesaledepot.com
            </a>
          </div>

          {/* View All Products */}
          <div className="px-4 pb-6 pt-2">
            <a 
              href="/shop" 
              onClick={onClose}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark py-3 rounded-xl transition-colors"
            >
              <ShoppingBag size={16} />
              View All Products
            </a>
          </div>

        </div>
      </div>
    </>
  );
}