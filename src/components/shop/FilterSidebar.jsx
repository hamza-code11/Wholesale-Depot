import { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

// ===== DATA STRUCTURE (Backend se aayega) =====
const filterData = {
  brands: [
    { name: 'Starbucks', slug: 'starbucks', count: 34 },
    { name: 'Ghirardelli', slug: 'ghirardelli', count: 28 },
    { name: 'Zesty Paws', slug: 'zesty-paws', count: 22 },
    { name: 'Lance', slug: 'lance', count: 45 },
    { name: 'Nutella', slug: 'nutella', count: 31 },
    { name: 'Purina', slug: 'purina', count: 27 },
    { name: 'Alani', slug: 'alani', count: 19 },
    { name: 'Belvita', slug: 'belvita', count: 25 },
  ],
  categories: [
    { name: 'Vegetables', slug: 'vegetables', count: 145 },
    { name: 'Fruits', slug: 'fruits', count: 98 },
    { name: 'Dairy & Eggs', slug: 'dairy-eggs', count: 167 },
    { name: 'Bakery', slug: 'bakery', count: 89 },
    { name: 'Meat & Fish', slug: 'meat-fish', count: 112 },
    { name: 'Rice & Flour', slug: 'rice-flour', count: 76 },
    { name: 'Oil & Ghee', slug: 'oil-ghee', count: 54 },
    { name: 'Beverages', slug: 'beverages', count: 203 },
    { name: 'Snacks', slug: 'snacks', count: 178 },
    { name: 'Spices', slug: 'spices', count: 92 },
    { name: 'Frozen Food', slug: 'frozen-food', count: 67 },
    { name: 'Household', slug: 'household', count: 134 },
  ],
  priceRanges: [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $500', min: 100, max: 500 },
    { label: '$500 - $1,000', min: 500, max: 1000 },
    { label: 'Above $1,000', min: 1000, max: null },
  ],
};

export default function FilterSidebar({ 
  isMobileOpen, 
  onMobileClose,
  filters,
  onFilterChange,
}) {
  const [openSections, setOpenSections] = useState({
    brands: true,
    categories: false,
    price: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const activeFilterCount = [
    filters.brand,
    filters.category,
    filters.priceMin !== null || filters.priceMax !== null,
  ].filter(Boolean).length;

  return (
    <>
      {/* ===== DESKTOP SIDEBAR - Wider ===== */}
      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-24">
          <FilterContent 
            filters={filters}
            onFilterChange={onFilterChange}
            openSections={openSections}
            toggleSection={toggleSection}
            activeFilterCount={activeFilterCount}
          />
        </div>
      </div>

      {/* ===== MOBILE OVERLAY ===== */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={onMobileClose}></div>
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl overflow-y-auto animate-slide-in">
            <div className="p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-bold text-gray-900">Filters</h3>
                  {activeFilterCount > 0 && (
                    <span className="text-[10px] text-brand-red font-medium">{activeFilterCount} active</span>
                  )}
                </div>
                <button onClick={onMobileClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                  <X size={18} />
                </button>
              </div>
              <FilterContent 
                filters={filters}
                onFilterChange={onFilterChange}
                openSections={openSections}
                toggleSection={toggleSection}
                activeFilterCount={activeFilterCount}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

// ===== FILTER CONTENT =====
function FilterContent({ filters, onFilterChange, openSections, toggleSection, activeFilterCount }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Filters</span>
        {activeFilterCount > 0 && (
          <button
            onClick={() => onFilterChange({ type: 'CLEAR_ALL' })}
            className="text-[10px] font-bold text-brand-red hover:text-red-700 transition-colors"
          >
            Reset All
          </button>
        )}
      </div>

      <div className="p-4 space-y-1">
        
        {/* ===== 1. BRANDS DROPDOWN ===== */}
        <AccordionSection 
          title="Brands"
          isOpen={openSections.brands}
          onToggle={() => toggleSection('brands')}
          selectedCount={filters.brand ? 1 : 0}
        >
          <div className="space-y-0.5 max-h-48 overflow-y-auto scrollbar-none">
            {filterData.brands.map((brand) => (
              <button
                key={brand.slug}
                onClick={() => onFilterChange({ 
                  type: 'BRAND', 
                  value: filters.brand === brand.slug ? null : brand.slug 
                })}
                className={`w-full flex items-center justify-between text-left text-[13px] px-3 py-2.5 rounded-lg transition-all ${
                  filters.brand === brand.slug
                    ? 'text-brand-blue bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                <span className="truncate">{brand.name}</span>
                <span className="text-[10px] text-gray-400 ml-2 flex-shrink-0">({brand.count})</span>
              </button>
            ))}
          </div>
        </AccordionSection>

        {/* ===== 2. CATEGORIES DROPDOWN ===== */}
        <AccordionSection 
          title="Categories"
          isOpen={openSections.categories}
          onToggle={() => toggleSection('categories')}
          selectedCount={filters.category ? 1 : 0}
        >
          <div className="space-y-0.5 max-h-48 overflow-y-auto scrollbar-none">
            {filterData.categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => onFilterChange({ 
                  type: 'CATEGORY', 
                  value: filters.category === cat.slug ? null : cat.slug 
                })}
                className={`w-full flex items-center justify-between text-left text-[13px] px-3 py-2.5 rounded-lg transition-all ${
                  filters.category === cat.slug
                    ? 'text-brand-red bg-red-50 font-semibold'
                    : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
                }`}
              >
                <span className="truncate">{cat.name}</span>
                <span className="text-[10px] text-gray-400 ml-2 flex-shrink-0">({cat.count})</span>
              </button>
            ))}
          </div>
        </AccordionSection>

        {/* ===== 3. PRICE RANGE DROPDOWN ===== */}
        <AccordionSection 
          title="Price Range"
          isOpen={openSections.price}
          onToggle={() => toggleSection('price')}
          selectedCount={filters.priceMin !== null || filters.priceMax !== null ? 1 : 0}
        >
          <div className="space-y-0.5">
            <button
              onClick={() => onFilterChange({ type: 'PRICE', value: { min: null, max: null } })}
              className={`w-full text-left text-[13px] px-3 py-2.5 rounded-lg transition-all ${
                filters.priceMin === null && filters.priceMax === null
                  ? 'text-brand-red bg-red-50 font-semibold'
                  : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
              }`}
            >
              All Prices
            </button>
            {filterData.priceRanges.map((range, i) => (
              <button
                key={i}
                onClick={() => onFilterChange({ type: 'PRICE', value: { min: range.min, max: range.max } })}
                className={`w-full text-left text-[13px] px-3 py-2.5 rounded-lg transition-all ${
                  filters.priceMin === range.min && filters.priceMax === range.max
                    ? 'text-brand-red bg-red-50 font-semibold'
                    : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </AccordionSection>

      </div>
    </div>
  );
}

// ===== ACCORDION SECTION =====
function AccordionSection({ title, isOpen, onToggle, selectedCount, children }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 px-2 text-left group hover:bg-gray-50 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-bold text-gray-600 uppercase tracking-wider group-hover:text-brand-blue transition-colors">
            {title}
          </span>
          {selectedCount > 0 && (
            <span className="text-[10px] font-bold text-brand-red bg-red-50 w-4 h-4 rounded-full flex items-center justify-center">
              {selectedCount}
            </span>
          )}
        </div>
        {isOpen ? (
          <ChevronUp size={15} className="text-gray-400 group-hover:text-brand-blue transition-colors flex-shrink-0" />
        ) : (
          <ChevronDown size={15} className="text-gray-400 group-hover:text-brand-blue transition-colors flex-shrink-0" />
        )}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-2' : 'max-h-0'
      }`}>
        {children}
      </div>
    </div>
  );
}