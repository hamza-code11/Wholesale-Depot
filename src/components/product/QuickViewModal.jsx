import { useState, useEffect, useCallback } from 'react';
import {
  X, Heart, ShoppingCart, Minus, Plus, Star, Check, ChevronRight
} from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const flavors = [
    { name: 'Original', size: '12 FL OZ (Pack of 12)', options: 6, price: 24.99 },
    { name: 'Strawberry', size: '12 FL OZ (Pack of 12)', options: 4, price: 27.99 },
    { name: 'Blueberry', size: '12 FL OZ (Pack of 12)', options: 5, price: 26.99 },
  ];
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);

  const {
    name = 'Product Name',
    image = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=600&fit=crop',
    images = [],
    price = 0,
    oldPrice,
    discount,
    rating = 4,
    reviews = 0,
    sold = 0,
    totalStock = 100,
    quantity: availableQty = 10,
    brand = 'Wholesale Depot',
    category = 'General',
  } = product || {};

  const allImages = images.length > 0 ? images : [image];
  const productImages = allImages.length >= 5 ? allImages : [
    allImages[0],
    allImages[0]?.replace('w=400', 'w=400&sat=-50'),
    allImages[0]?.replace('w=400', 'w=400&blur=1'),
    allImages[0]?.replace('w=400', 'w=400&sepia=20'),
    allImages[0]?.replace('w=400', 'w=400&grayscale=50'),
  ];

  const remaining = totalStock - sold;
  const isLowStock = remaining <= 5 && remaining > 0;

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

  useEffect(() => {
    setQuantity(1);
    setIsAdded(false);
    setSelectedImage(0);
    setSelectedFlavor(flavors[0]);
  }, [product]);

  const handleAddToCart = () => {
    setIsAdded(true);
    if (onAddToCart) onAddToCart(product, quantity);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-2 sm:p-4 pt-12 sm:pt-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] sm:max-h-[95vh] overflow-hidden flex flex-col animate-modal-in">

        {/* Close + Wishlist Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] sm:text-xs font-semibold text-brand-blue">Brand Name</span>
            <ChevronRight size={11} className="text-gray-300" />
            <span className="text-[11px] sm:text-xs text-gray-500">Category Name</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsWishlisted(!isWishlisted)} className="p-1.5 transition-all hover:scale-110">
              <Heart size={18} className={`sm:w-5 sm:h-5 transition-all ${isWishlisted ? 'fill-brand-red text-brand-red' : 'text-brand-red'}`} strokeWidth={2} />
            </button>
            <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex flex-col md:flex-row overflow-y-auto flex-1">

          {/* ===== LEFT: IMAGE GALLERY ===== */}
          <div className="md:w-[60%] p-4 sm:p-6 flex-shrink-0">
            <div className="flex gap-2 sm:gap-3 h-[250px] sm:h-[300px] md:h-[380px] lg:h-[420px]">

              {/* Thumbnails */}
              <div className="grid grid-rows-5 gap-1.5 sm:gap-2 flex-shrink-0 h-full">
                {productImages.slice(0, 5).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-brand-blue shadow-sm' : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 h-full rounded-xl overflow-hidden relative border border-gray-100">
                {discount && (
                  <span className="absolute top-2 left-2 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-md z-10">
                    -{discount}% OFF
                  </span>
                )}
                <img src={productImages[selectedImage]} alt={name} className="w-full h-full object-contain p-3 sm:p-4" />
              </div>

            </div>
          </div>

          {/* ===== RIGHT: PRODUCT INFO ===== */}
          <div className="md:w-[40%] p-4 sm:p-6 flex flex-col border-t md:border-t-0 md:border-l border-gray-100">

            {/* Product Name */}
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 leading-snug">{name}</h2>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="sm:w-3.5 sm:h-3.5" fill={i < Math.floor(rating) ? "#F59E0B" : "none"} className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-200"} />
                ))}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-700">{rating}</span>
              <span className="text-[10px] text-gray-400">({reviews})</span>
              <span className="text-[10px] text-brand-red font-medium hidden sm:inline">| {sold}+ sold</span>
            </div>

            {/* Flavor Selector */}
            <div className="mb-3">
              <span className="text-[10px] sm:text-xs font-bold text-gray-700 block mb-1.5">
                Flavor: <span className="text-brand-blue font-medium">{selectedFlavor.name}</span>
              </span>
              <div className="flex gap-1.5">
                {flavors.map((flavor) => (
                  <button
                    key={flavor.name}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`flex-1 text-left px-2 sm:px-2.5 py-1.5 border-2 transition-all ${selectedFlavor.name === flavor.name ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <p className={`text-[10px] sm:text-[11px] font-extrabold leading-tight ${selectedFlavor.name === flavor.name ? 'text-brand-blue' : 'text-gray-700'}`}>{flavor.name}</p>
                    <p className="text-[9px] text-gray-500 leading-tight">{flavor.size}</p>
                    <p className="text-[8px] text-gray-400 leading-tight">{flavor.options} options</p>
                    <p className={`text-xs font-extrabold leading-tight mt-0.5 ${selectedFlavor.name === flavor.name ? 'text-brand-blue' : 'text-gray-900'}`}>${flavor.price}</p>
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-100 my-2" />

            {/* Price */}
            <div className="mb-2">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-xs text-gray-400 line-through">${(selectedFlavor.price * 1.5).toFixed(2)}</span>
                <span className="text-lg sm:text-xl font-bold text-brand-blue">${selectedFlavor.price}</span>
                <span className="text-[9px] font-bold text-brand-red bg-red-50 px-1.5 py-0.5 rounded-full">Save ${((selectedFlavor.price * 1.5) - selectedFlavor.price).toFixed(2)}</span>
              </div>
            </div>

            {/* Stock */}
            <div className="mb-3">
              {remaining > 0 ? (
                <span className="text-[10px] sm:text-xs font-bold text-green-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> In Stock ({remaining})
                </span>
              ) : (
                <span className="text-[10px] sm:text-xs font-bold text-brand-red">Out of Stock</span>
              )}
              {isLowStock && (
                <span className="text-[9px] text-orange-600 font-medium bg-orange-50 px-1.5 py-0.5 rounded-full ml-1">Only {remaining} left</span>
              )}
            </div>

            {/* Qty + Add to Cart */}
            <div className="flex items-stretch gap-2 mb-2">
              <div className="flex items-center border-2 border-gray-200 overflow-hidden flex-shrink-0 rounded-lg">
                <button onClick={() => quantity > 1 && setQuantity(prev => prev - 1)} disabled={quantity <= 1} className="px-2 sm:px-2.5 py-2 sm:py-2.5 text-gray-400 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-30">
                  <Minus size={12} className="sm:w-3.5 sm:h-3.5" />
                </button>
                <span className="px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold border-x-2 border-gray-200 bg-gray-50 min-w-[35px] sm:min-w-[40px] text-center">{quantity}</span>
                <button onClick={() => quantity < availableQty && setQuantity(prev => prev + 1)} disabled={quantity >= availableQty} className="px-2 sm:px-2.5 py-2 sm:py-2.5 text-gray-400 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-30">
                  <Plus size={12} className="sm:w-3.5 sm:h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 text-[10px] sm:text-xs font-bold transition-all duration-300 border-2 rounded-lg ${isAdded ? 'bg-green-500 border-green-500 text-white' : 'border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white'
                  }`}
              >
                {isAdded ? <><Check size={14} className="sm:w-4 sm:h-4" /> Added</> : <><ShoppingCart size={14} className="sm:w-4 sm:h-4" /> Add to Cart</>}
              </button>
            </div>

            {/* Buy Now */}
            <button className="w-full py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold bg-brand-blue hover:bg-brand-blue-dark text-white transition-all shadow-md rounded-lg">
              Buy Now
            </button>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in { animation: modalIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}