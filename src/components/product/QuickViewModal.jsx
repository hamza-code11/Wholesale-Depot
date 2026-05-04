import { useState, useEffect, useCallback } from 'react';
import { 
  X, Heart, ShoppingCart, Star, Minus, Plus, 
  Share2, Truck, ShieldCheck, RefreshCw, ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const {
    name = 'Product Name',
    image = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=600&fit=crop',
    images = [],
    price = 0,
    oldPrice,
    discount,
    rating = 0,
    reviews = 0,
    sold = 0,
    totalStock = 100,
    quantity: availableQty = 10,
    description = 'No description available.',
    sku = 'N/A',
    category = 'N/A',
    brand = 'N/A',
  } = product || {};

  const allImages = images.length > 0 ? images : [image];
  const remaining = totalStock - sold;
  const soldPercentage = totalStock > 0 ? (sold / totalStock) * 100 : 0;

  // Close on ESC key
  const handleEsc = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEsc]);

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setIsAdded(false);
    setSelectedImage(0);
  }, [product]);

  const handleAddToCart = () => {
    setIsAdded(true);
    if (onAddToCart) onAddToCart(product, quantity);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const increaseQty = () => {
    if (quantity < availableQty) setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-modal-in">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg text-gray-500 hover:text-gray-800 transition-all"
        >
          <X size={18} />
        </button>

        {/* ===== LEFT: IMAGE SECTION ===== */}
        <div className="md:w-1/2 bg-gray-50 relative flex items-center justify-center p-6 md:p-8">
          {/* Discount Badge */}
          {discount && (
            <span className="absolute top-4 left-4 z-10 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              -{discount}%
            </span>
          )}

          {/* Main Image */}
          <div className="w-full aspect-square rounded-xl overflow-hidden bg-white flex items-center justify-center">
            <img 
              src={allImages[selectedImage]} 
              alt={name}
              className="w-full h-full object-contain p-4"
            />
          </div>

          {/* Image Navigation Arrows */}
          {allImages.length > 1 && (
            <>
              <button 
                onClick={() => setSelectedImage(prev => prev === 0 ? allImages.length - 1 : prev - 1)}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 text-gray-500 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => setSelectedImage(prev => prev === allImages.length - 1 ? 0 : prev + 1)}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 text-gray-500 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Thumbnail Images */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-brand-blue shadow-md' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ===== RIGHT: DETAILS SECTION ===== */}
        <div className="md:w-1/2 flex flex-col overflow-y-auto">
          <div className="p-6 md:p-8">
            
            {/* Category & SKU */}
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
              <span className="bg-gray-100 px-2 py-0.5 rounded-full">{category}</span>
              <span>SKU: {sku}</span>
            </div>

            {/* Product Name */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
              {name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(rating) ? "#F59E0B" : "none"} 
                    className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-200"}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">{rating}</span>
              <span className="text-sm text-gray-400">({reviews} reviews)</span>
              <span className="text-sm text-brand-blue font-medium ml-1">| {sold} sold</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-2xl md:text-3xl font-bold text-gray-900">₨{price?.toFixed(2)}</span>
              {oldPrice && (
                <span className="text-lg text-gray-400 line-through">₨{oldPrice?.toFixed(2)}</span>
              )}
              {discount && (
                <span className="text-sm font-bold text-brand-red bg-red-50 px-2 py-0.5 rounded-full">
                  Save ₨{(oldPrice - price)?.toFixed(2)}
                </span>
              )}
            </div>

            {/* Stock Progress */}
            <div className="mb-5 space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-gray-500">
                  Available: <span className="text-green-600 font-bold">{remaining}</span>
                </span>
                <span className="text-gray-500">
                  Sold: <span className="text-brand-blue font-bold">{sold}</span>
                </span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-full transition-all duration-700"
                  style={{ width: `${soldPercentage}%` }}
                />
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                <button 
                  onClick={decreaseQty}
                  disabled={quantity <= 1}
                  className="p-2.5 text-gray-500 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm font-bold text-gray-800 px-4 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={increaseQty}
                  disabled={quantity >= availableQty}
                  className="p-2.5 text-gray-500 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isAdded 
                    ? 'bg-green-500 text-white' 
                    : 'bg-brand-blue text-white hover:bg-brand-blue-dark active:scale-95'
                }`}
              >
                {isAdded ? (
                  <>✓ Added to Cart</>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    Add to Cart
                  </>
                )}
              </button>

              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  isWishlisted 
                    ? 'bg-red-50 border-red-200 text-red-500' 
                    : 'border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200'
                }`}
              >
                <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Features Icons */}
            <div className="grid grid-cols-3 gap-3 mb-5 p-4 bg-gray-50 rounded-xl">
              <div className="flex flex-col items-center gap-1 text-center">
                <Truck size={18} className="text-brand-blue" />
                <span className="text-[10px] text-gray-500 font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <ShieldCheck size={18} className="text-green-500" />
                <span className="text-[10px] text-gray-500 font-medium">Quality Guarantee</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <RefreshCw size={18} className="text-orange-500" />
                <span className="text-[10px] text-gray-500 font-medium">Easy Returns</span>
              </div>
            </div>

            {/* Tabs: Description / Info */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex gap-4 mb-3">
                {['description', 'info'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-semibold pb-2 border-b-2 transition-all capitalize ${
                      activeTab === tab 
                        ? 'border-brand-blue text-brand-blue' 
                        : 'border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab === 'info' ? 'Additional Info' : tab}
                  </button>
                ))}
              </div>
              
              {activeTab === 'description' && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {description}
                </p>
              )}
              
              {activeTab === 'info' && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-400">Brand</span>
                    <span className="font-medium text-gray-700">{brand}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-400">Category</span>
                    <span className="font-medium text-gray-700">{category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-400">SKU</span>
                    <span className="font-medium text-gray-700">{sku}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-400">Stock</span>
                    <span className="font-medium text-green-600">{remaining} remaining</span>
                  </div>
                </div>
              )}
            </div>

            {/* Share Button */}
            <button className="mt-4 flex items-center gap-2 text-sm text-gray-400 hover:text-brand-blue transition-colors">
              <Share2 size={14} />
              Share this product
            </button>

          </div>
        </div>

      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-in {
          animation: modalIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}