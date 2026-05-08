import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShoppingCart, 
  Trash2, 
  ArrowRight,
  ArrowLeft,
  Share2,
  ShoppingBag
} from 'lucide-react';
import { productsData } from '../../data/productsData';
import logo from '../../assets/logo/logo.png';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(() => {
    // Demo: First 6 items as wishlisted
    return productsData.slice(0, 6).map(p => ({
      ...p,
      addedDate: '2025-05-15',
      inStock: p.quantity > 0,
    }));
  });

  const [selectedItems, setSelectedItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const removeItem = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    showNotification('Removed from wishlist');
  };

  const addToCart = (product) => {
    showNotification(`${product.name} added to cart`);
  };

  const toggleSelect = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(wishlistItems.map(i => i.id));
    }
  };

  const removeSelected = () => {
    setWishlistItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
    showNotification('Selected items removed');
  };

  const addSelectedToCart = () => {
    const selected = wishlistItems.filter(item => selectedItems.includes(item.id));
    selected.forEach(p => addToCart(p));
    setSelectedItems([]);
    showNotification(`${selected.length} items added to cart`);
  };

  const shareWishlist = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Wishlist',
        text: 'Check out my wishlist!',
        url: window.location.href,
      });
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          {notification}
        </div>
      )}

      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="inline-block">
            <img src={logo} alt="Wholesale Depot" className="h-8 md:h-10 w-auto" />
          </Link>
          <Link to="/shop" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors flex items-center gap-1">
            <ArrowLeft size={14} />
            Continue Shopping
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        {/* ===== HEADER ===== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Heart size={20} className="text-brand-red fill-brand-red" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                My Wishlist
              </h1>
            </div>
            <p className="text-sm text-gray-500">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>

          {wishlistItems.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={shareWishlist}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand-blue px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Share2 size={16} />
                Share
              </button>
              {selectedItems.length > 0 && (
                <>
                  <button
                    onClick={addSelectedToCart}
                    className="flex items-center gap-1.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark px-4 py-2 rounded-lg transition-all"
                  >
                    <ShoppingCart size={16} />
                    Add ({selectedItems.length})
                  </button>
                  <button
                    onClick={removeSelected}
                    className="flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:bg-red-50 px-4 py-2 rounded-lg transition-all"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* ===== EMPTY STATE ===== */}
        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 md:p-16 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Heart size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-6 text-sm md:text-base">
              Save your favorite products here and come back to them anytime. Start exploring our collection!
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-brand-blue/30"
            >
              <ShoppingBag size={18} />
              Explore Products
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <>
            {/* ===== SELECT ALL BAR ===== */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 sm:px-6 py-3 mb-4 flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedItems.length === wishlistItems.length}
                  onChange={selectAll}
                  className="w-4 h-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue/30"
                />
                <span className="text-sm font-medium text-gray-700">
                  Select All ({wishlistItems.length} items)
                </span>
              </label>
            </div>

            {/* ===== WISHLIST ITEMS ===== */}
            <div className="space-y-3">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-3 sm:p-4"
                >
                  <div className="flex gap-3 sm:gap-4">
                    
                    {/* Checkbox */}
                    <div className="flex items-center flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleSelect(item.id)}
                        className="w-4 h-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue/30"
                      />
                    </div>

                    {/* Product Image */}
                    <Link 
                      to={`/product/${item.id}`}
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 line-clamp-2 hover:text-brand-blue transition-colors">
                          {item.name}
                        </h3>
                      </Link>

                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-base sm:text-lg font-extrabold text-gray-900">
                          ₨{item.price?.toFixed(0)}
                        </span>
                        {item.oldPrice && (
                          <span className="text-xs sm:text-sm text-gray-400 line-through">
                            ₨{item.oldPrice?.toFixed(0)}
                          </span>
                        )}
                      </div>

                      {/* Stock Status */}
                      <div className="flex items-center gap-2 mb-3">
                        {item.inStock ? (
                          <span className="flex items-center gap-1 text-[11px] sm:text-xs text-green-600 font-medium">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            In Stock
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            Out of Stock
                          </span>
                        )}
                        <span className="text-[10px] sm:text-xs text-gray-400">
                          Added {item.addedDate}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          onClick={() => addToCart(item)}
                          disabled={!item.inStock}
                          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark disabled:bg-gray-300 px-3 sm:px-4 py-2 rounded-lg transition-all disabled:cursor-not-allowed"
                        >
                          <ShoppingCart size={14} />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-brand-red px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}