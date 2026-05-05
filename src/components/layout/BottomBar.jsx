import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Grid3X3, ChevronRight, Search, MoreHorizontal } from 'lucide-react';

const categories = [
  'Vegetables', 'Fruits', 'Dairy & Eggs', 'Bakery', 'Meat & Fish',
  'Rice & Flour', 'Oil & Ghee', 'Beverages', 'Snacks', 'Spices',
  'Frozen Food', 'Household', 'Personal Care', 'Baby Care', 'Pet Food',
  'Cleaning Supplies',
];

const allBrands = [
  'STARBUCKS', 'GHIRARDELLI', 'ZESTY PAWS', 'LANCE', 'NUTELLA', 'PURINA',
  'ALANI', 'BELVITA'
]; 

export default function BottomBar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState('');
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const categoryRef = useRef(null);
  const moreRef = useRef(null);

  // Responsive brand count
  useEffect(() => {
    const updateCount = () => {
      const w = window.innerWidth;
      if (w >= 1280) setVisibleCount(12);
      else if (w >= 1024) setVisibleCount(10);
      else if (w >= 768) setVisibleCount(8);
      else setVisibleCount(6);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  // Fix: Improved Outside Click Handler
  useEffect(() => {
    const handler = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setShowMoreBrands(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setIsCategoryOpen(false);
        setShowMoreBrands(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (mobileSearch.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(mobileSearch.trim())}`;
    }
  };

  const visibleBrands = allBrands.slice(0, visibleCount);
  const hiddenBrands = allBrands.slice(visibleCount);

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========== DESKTOP: Categories + Brands ========== */}
        <div className="hidden md:flex items-center h-11 md:h-12">
          
          {/* Categories Dropdown */}
          <div className="relative flex-shrink-0" ref={categoryRef}>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Stop click from triggering outside-click handler
                setIsCategoryOpen(!isCategoryOpen);
              }}
              className={`flex items-center gap-2 text-xs lg:text-sm font-medium transition-all duration-200 py-2 pr-3 rounded-lg select-none ${
                isCategoryOpen ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
              type="button"
            >
              <Grid3X3 size={16} />
              <span>Categories</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-56 lg:w-60 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 transition-all duration-200 origin-top ${
                isCategoryOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
              }`}
            >
              <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">All Categories</p>
              </div>
              <div className="max-h-64 lg:max-h-72 overflow-y-auto py-1 custom-scrollbar">
                {categories.map((cat, index) => (
                  <a 
                    key={index} 
                    href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between px-4 py-2.5 text-[13px] lg:text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-150 group mx-2 rounded-lg"
                    onClick={() => setIsCategoryOpen(false)}
                  >
                    <span className="font-medium">{cat}</span>
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <span className="w-px h-4 bg-gray-200 flex-shrink-0 mx-3 lg:mx-4"></span>

          {/* Brands List */}
          <div className="flex items-center gap-1 lg:gap-2 flex-1 overflow-hidden">
            {visibleBrands.map((brand, index) => (
              <a 
                key={index} 
                href={`/brand/${brand.toLowerCase()}`}
                className="text-xs lg:text-sm text-gray-500 hover:text-blue-600 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0"
              >
                {brand}
              </a>
            ))}
            
            {/* More Brands */}
            {hiddenBrands.length > 0 && (
              <div className="relative flex-shrink-0" ref={moreRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMoreBrands(!showMoreBrands);
                  }}
                  className={`flex items-center gap-1 text-xs lg:text-sm font-medium py-2 px-2 rounded-md transition-colors whitespace-nowrap ${
                    showMoreBrands ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  type="button"
                >
                  <MoreHorizontal size={16} />
                  <span>More</span>
                </button>

                <div 
                  className={`absolute top-full right-0 mt-2 w-44 lg:w-48 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 transition-all duration-200 origin-top-right ${
                    showMoreBrands ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                  }`}
                >
                  <div className="px-3 py-2.5 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">More Brands</p>
                  </div>
                  <div className="max-h-52 overflow-y-auto p-2 flex flex-wrap gap-1.5 custom-scrollbar">
                    {hiddenBrands.map((brand, index) => (
                      <a 
                        key={index} 
                        href={`/brand/${brand.toLowerCase()}`}
                        className="text-xs text-gray-500 hover:text-blue-600 hover:bg-gray-50 font-medium px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                        onClick={() => setShowMoreBrands(false)}
                      >
                        {brand}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ========== MOBILE: Search Bar ========== */}
        <form onSubmit={handleMobileSearch} className="flex md:hidden items-center h-12">
          <div className="relative w-full">
            <input
              type="text"
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              placeholder="Search for products, brands & more..."
              className="w-full pl-4 pr-12 py-2 bg-gray-50 border border-gray-200 rounded-xl text-[13px] focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
            <button 
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-1.5 rounded-lg"
            >
              <Search size={16} />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}