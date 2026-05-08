// import { useState, useEffect, useRef } from 'react';
// import { ChevronDown, Grid3X3, ChevronRight, Search, MoreHorizontal } from 'lucide-react';

// const categories = [
//   'Vegetables', 'Fruits', 'Dairy & Eggs', 'Bakery', 'Meat & Fish',
//   'Rice & Flour', 'Oil & Ghee', 'Beverages', 'Snacks', 'Spices',
//   'Frozen Food', 'Household', 'Personal Care', 'Baby Care', 'Pet Food',
//   'Cleaning Supplies',
// ];

// const allBrands = [
//   'STARBUCKS', 'GHIRARDELLI', 'ZESTY PAWS', 'LANCE', 'NUTELLA', 'PURINA',
//   'ALANI', 'BELVITA'
// ]; 

// export default function BottomBar() {
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const [mobileSearch, setMobileSearch] = useState('');
//   const [showMoreBrands, setShowMoreBrands] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(8);

//   const categoryRef = useRef(null);
//   const moreRef = useRef(null);

//   useEffect(() => {
//     const updateCount = () => {
//       const w = window.innerWidth;
//       if (w >= 1280) setVisibleCount(12);
//       else if (w >= 1024) setVisibleCount(10);
//       else if (w >= 768) setVisibleCount(8);
//       else setVisibleCount(6);
//     };
//     updateCount();
//     window.addEventListener('resize', updateCount);
//     return () => window.removeEventListener('resize', updateCount);
//   }, []);

//   useEffect(() => {
//     const handler = (e) => {
//       if (categoryRef.current && !categoryRef.current.contains(e.target)) {
//         setIsCategoryOpen(false);
//       }
//       if (moreRef.current && !moreRef.current.contains(e.target)) {
//         setShowMoreBrands(false);
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === 'Escape') {
//         setIsCategoryOpen(false);
//         setShowMoreBrands(false);
//       }
//     };
//     document.addEventListener('keydown', handler);
//     return () => document.removeEventListener('keydown', handler);
//   }, []);

//   const handleMobileSearch = (e) => {
//     e.preventDefault();
//     if (mobileSearch.trim()) {
//       window.location.href = `/search?q=${encodeURIComponent(mobileSearch.trim())}`;
//     }
//   };

//   const visibleBrands = allBrands.slice(0, visibleCount);
//   const hiddenBrands = allBrands.slice(visibleCount);

//   return (
//     <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ========== DESKTOP ========== */}
//         <div className="hidden md:flex items-center h-12 md:h-14">
          
//           {/* Categories Dropdown */}
//           <div className="relative flex-shrink-0" ref={categoryRef}>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsCategoryOpen(!isCategoryOpen);
//               }}
//               className={`flex items-center gap-2 text-xs lg:text-sm font-medium transition-all duration-200 py-2.5 px-3 rounded-lg select-none ${
//                 isCategoryOpen ? 'text-brand-red bg-red-50' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50'
//               }`}
//               type="button"
//             >
//               <Grid3X3 size={16} />
//               <span>Categories</span>
//               <ChevronDown size={14} className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
//             </button>

//             {/* Dropdown Menu */}
//             <div 
//               className={`absolute top-full left-0 mt-2 w-56 lg:w-60 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 transition-all duration-200 origin-top ${
//                 isCategoryOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
//               }`}
//             >
//               <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
//                 <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">All Categories</p>
//               </div>
//               <div className="max-h-64 lg:max-h-72 overflow-y-auto py-1 scrollbar-none">
//                 {categories.map((cat, index) => (
//                   <a 
//                     key={index} 
//                     href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="flex items-center justify-between px-4 py-2.5 text-[13px] lg:text-sm text-gray-700 hover:text-brand-red hover:bg-red-50 transition-all duration-150 group mx-2 rounded-lg"
//                     onClick={() => setIsCategoryOpen(false)}
//                   >
//                     <span className="font-medium">{cat}</span>
//                     <ChevronRight size={14} className="text-gray-300 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all flex-shrink-0" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <span className="w-px h-5 bg-gray-200 flex-shrink-0 mx-4 lg:mx-5"></span>

//           {/* Brands List */}
//           <div className="flex items-center gap-1 lg:gap-3 flex-1 overflow-hidden">
//             {visibleBrands.map((brand, index) => (
//               <a 
//                 key={index} 
//                 href={`/shop`}
//                 className="text-xs lg:text-sm text-gray-500 hover:text-brand-blue font-medium py-2.5 px-2 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0"
//               >
//                 {brand}
//               </a>
//             ))}
            
//             {hiddenBrands.length > 0 && (
//               <div className="relative flex-shrink-0" ref={moreRef}>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setShowMoreBrands(!showMoreBrands);
//                   }}
//                   className={`flex items-center gap-1 text-xs lg:text-sm font-medium py-2.5 px-2 rounded-md transition-colors whitespace-nowrap ${
//                     showMoreBrands ? 'text-brand-blue bg-blue-50' : 'text-gray-500 hover:text-brand-blue hover:bg-gray-50'
//                   }`}
//                   type="button"
//                 >
//                   <MoreHorizontal size={16} />
//                   <span>More</span>
//                 </button>

//                 <div 
//                   className={`absolute top-full right-0 mt-2 w-44 lg:w-48 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 transition-all duration-200 origin-top-right ${
//                     showMoreBrands ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
//                   }`}
//                 >
//                   <div className="px-3 py-2.5 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
//                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">More Brands</p>
//                   </div>
//                   <div className="max-h-52 overflow-y-auto p-2 flex flex-wrap gap-1.5 scrollbar-none">
//                     {hiddenBrands.map((brand, index) => (
//                       <a 
//                         key={index} 
//                         href={`/brand/${brand.toLowerCase()}`}
//                         className="text-xs text-gray-500 hover:text-brand-blue hover:bg-gray-50 font-medium px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap"
//                         onClick={() => setShowMoreBrands(false)}
//                       >
//                         {brand}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//         </div>

//         {/* ========== MOBILE: Search Bar ========== */}
//         <form onSubmit={handleMobileSearch} className="flex md:hidden items-center h-14">
//           <div className="relative w-full">
//             <input
//               type="text"
//               value={mobileSearch}
//               onChange={(e) => setMobileSearch(e.target.value)}
//               placeholder="Search for products, brands & more..."
//               className="w-full pl-4 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
//             />
//             <button 
//               type="submit"
//               className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-brand-blue text-white p-2 rounded-lg"
//             >
//               <Search size={16} />
//             </button>
//           </div>
//         </form>

//       </div>
//     </div>
//   );
// }















import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { allBrands } from '../../data/bottomBarData';

export default function BottomBar() {
  const [mobileSearch, setMobileSearch] = useState('');
  const [activeBrand, setActiveBrand] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveBrand(null);
        setActiveCategory(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setActiveBrand(null);
        setActiveCategory(null);
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

  const handleBrandClick = (brandSlug) => {
    if (activeBrand === brandSlug) {
      // Close if clicking same brand
      setActiveBrand(null);
      setActiveCategory(null);
    } else {
      // Open new brand, auto-select first category
      setActiveBrand(brandSlug);
      const brand = allBrands.find(b => b.slug === brandSlug);
      setActiveCategory(brand?.categories?.[0]?.name || null);
    }
  };

  const handleCategoryClick = (catName) => {
    setActiveCategory(catName);
  };

  const selectedBrand = allBrands.find(b => b.slug === activeBrand);
  const selectedCategoryProducts = selectedBrand?.categories?.find(c => c.name === activeCategory)?.products || [];

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========== DESKTOP ========== */}
        <div className="hidden md:flex items-center justify-center h-12 md:h-14 relative" ref={menuRef}>
          
          {/* Brands List */}
          <div className="flex items-center gap-1 lg:gap-3">
            {allBrands.map((brand, index) => (
              <button
                key={index}
                onClick={() => handleBrandClick(brand.slug)}
                className={`text-xs lg:text-sm font-semibold py-2 px-2.5 lg:px-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeBrand === brand.slug 
                    ? 'text-brand-red bg-red-50 font-bold' 
                    : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {/* ===== MEGA MENU ===== */}
          {activeBrand && selectedBrand && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden animate-slide-down">
              <div className="flex max-h-[400px]">
                
                {/* Left: Categories */}
                <div className="w-52 lg:w-60 border-r border-gray-100 bg-gray-50/50 p-3 overflow-y-auto scrollbar-none flex-shrink-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">
                    {selectedBrand.name} Categories
                  </p>
                  <div className="space-y-0.5">
                    {selectedBrand.categories.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => handleCategoryClick(cat.name)}
                        className={`w-full text-left px-3 py-2.5 text-xs lg:text-sm rounded-lg transition-all duration-150 font-medium ${
                          activeCategory === cat.name 
                            ? 'text-brand-red bg-red-50' 
                            : 'text-gray-600 hover:text-brand-red hover:bg-white'
                        }`}
                      >
                        {cat.name}
                        <span className="text-[10px] text-gray-400 ml-1">({cat.products.length})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Products - Auto shows first category */}
                <div className="flex-1 p-4 overflow-y-auto scrollbar-none">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                    {activeCategory} Products
                    <span className="text-gray-300 ml-1">({selectedCategoryProducts.length})</span>
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5">
                    {selectedCategoryProducts.map((product, i) => (
                      <a
                        key={i}
                        href={`/shop`}
                        className="text-xs lg:text-sm text-gray-600 hover:text-brand-red hover:bg-red-50 font-medium px-3 py-2 rounded-lg transition-all duration-150 truncate"
                        onClick={() => {
                          setActiveBrand(null);
                          setActiveCategory(null);
                        }}
                      >
                        {product}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* ========== MOBILE: Search Bar ========== */}
        <form onSubmit={handleMobileSearch} className="flex md:hidden items-center h-14">
          <div className="relative w-full">
            <input
              type="text"
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              placeholder="Search for products, brands & more..."
              className="w-full pl-4 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
            />
            <button 
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-brand-blue text-white p-2 rounded-lg"
            >
              <Search size={16} />
            </button>
          </div>
        </form>

      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}