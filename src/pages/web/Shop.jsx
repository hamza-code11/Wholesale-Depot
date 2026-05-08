import { useState } from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../../components/product/ProductCard';
import FilterSidebar from '../../components/shop/FilterSidebar';
import QuickViewModal from '../../components/product/QuickViewModal';
import { productsData } from '../../data/productsData';

export default function ShopPage() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  
  // QuickView States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [filters, setFilters] = useState({
    brand: null,
    category: null,
    priceMin: null,
    priceMax: null,
    rating: null,
    onSale: false,
    inStock: false,
  });

  const handleFilterChange = ({ type, value }) => {
    switch(type) {
      case 'CLEAR_ALL':
        setFilters({ brand: null, category: null, priceMin: null, priceMax: null, rating: null, onSale: false, inStock: false });
        break;
      case 'BRAND': setFilters(prev => ({ ...prev, brand: value })); break;
      case 'CATEGORY': setFilters(prev => ({ ...prev, category: value })); break;
      case 'PRICE': setFilters(prev => ({ ...prev, priceMin: value.min, priceMax: value.max })); break;
      case 'RATING': setFilters(prev => ({ ...prev, rating: value })); break;
      case 'ON_SALE': setFilters(prev => ({ ...prev, onSale: value })); break;
      case 'IN_STOCK': setFilters(prev => ({ ...prev, inStock: value })); break;
    }
  };

  // QuickView Handler
  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Add to Cart Handler
  const handleAddToCart = (product, qty) => {
    console.log('Added to cart:', product.name, 'Qty:', qty);
  };

  const enhancedProducts = productsData.map((p, i) => ({
    ...p,
    price: [25, 75, 150, 450, 750, 1200][i % 6],
    rating: [5, 4.5, 4, 3.5, 3, 4.5][i % 6],
    discount: i % 3 === 0 ? [10, 20, 30][i % 3] : null,
  }));

  const filteredProducts = enhancedProducts.filter(p => {
    if (filters.priceMin && p.price < filters.priceMin) return false;
    if (filters.priceMax && p.price > filters.priceMax) return false;
    if (filters.rating && Math.floor(p.rating) < filters.rating) return false;
    if (filters.onSale && !p.discount) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  const activeFilterCount = Object.values(filters).filter(v => v && v !== false && v !== null).length;

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 md:py-6">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">
              <a href="/" className="hover:text-brand-blue">Home</a> / Shop
            </p>
            <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">
              All Products
              <span className="text-sm font-normal text-gray-400 ml-2">({sortedProducts.length} items)</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 sm:flex-none text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-600 focus:outline-none focus:border-brand-blue cursor-pointer font-medium"
            >
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 text-sm font-semibold text-brand-blue bg-brand-blue/5 px-3 py-2 rounded-lg hover:bg-brand-blue/10 transition-all flex-shrink-0"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-brand-blue text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-5">
          
          <FilterSidebar 
            isMobileOpen={mobileFilterOpen}
            onMobileClose={() => setMobileFilterOpen(false)}
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {sortedProducts.slice(0, 16).map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onAddToCart={handleAddToCart}
                  onQuickView={handleQuickView}
                />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-4xl mb-3">No Results</p>
                <h3 className="text-base font-bold text-gray-900 mb-1">No Products Found</h3>
                <p className="text-gray-500 text-sm mb-4">Try adjusting your filters</p>
                <button 
                  onClick={() => handleFilterChange({ type: 'CLEAR_ALL' })}
                  className="text-sm font-semibold text-brand-red hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && (
              <div className="mt-6 flex items-center justify-center gap-1">
                <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-sm text-gray-400 hover:text-brand-blue hover:border-brand-blue transition-all">‹</button>
                {[1, 2, 3, '...', 8].map((page, i) => (
                  <button key={i} className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                    page === 1 ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20' : 'border border-gray-200 text-gray-600 hover:text-brand-blue hover:border-brand-blue'
                  }`}>{page}</button>
                ))}
                <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-sm text-gray-400 hover:text-brand-blue hover:border-brand-blue transition-all">›</button>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Quick View Modal */}
      <QuickViewModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}