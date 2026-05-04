import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, Minus, Plus, Check } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onAddToWishlist, onQuickView }) {
  const { 
    id,
    name, 
    image, 
    price, 
    oldPrice, 
    rating = 0, 
    reviews = 0, 
    discount, 
    sold = 0, 
    totalStock = 100,
    quantity: availableQty = 10,
  } = product || {};

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartQty, setCartQty] = useState(1);

  const soldPercentage = totalStock > 0 ? (sold / totalStock) * 100 : 0;
  const remaining = totalStock - sold;

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (onAddToWishlist) onAddToWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAddedToCart(true);
    if (onAddToCart) onAddToCart(product, cartQty);
    setTimeout(() => setIsAddedToCart(false), 1500);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  const increaseQty = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartQty < availableQty) setCartQty(prev => prev + 1);
  };

  const decreaseQty = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartQty > 1) setCartQty(prev => prev - 1);
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 flex flex-col">
      
      {/* ===== IMAGE SECTION ===== */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {/* Discount Badge */}
        {discount && (
          <span className="absolute top-3 left-3 z-10 bg-brand-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
            -{discount}%
          </span>
        )}

        {/* Product Image */}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        {/* ===== ACTION ICONS (Hover) ===== */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {/* Wishlist */}
          <button 
            onClick={handleWishlist}
            className={`p-2 rounded-full shadow-md transition-all duration-300 ${
              isWishlisted 
                ? 'bg-brand-red text-white' 
                : 'bg-white text-gray-500 hover:text-brand-red'
            }`}
          >
            <Heart size={15} fill={isWishlisted ? 'white' : 'none'} />
          </button>

          {/* Quick View */}
          <button 
            onClick={handleQuickView}
            className="p-2 bg-white text-gray-500 hover:text-brand-blue rounded-full shadow-md transition-all duration-300 hover:bg-brand-blue hover:text-white"
          >
            <Eye size={15} />
          </button>
        </div>

        {/* Quantity Badge */}
        {/* {availableQty > 0 && (
          <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
            {availableQty} available
          </span>
        )} */}
      </div>

      {/* ===== DETAILS SECTION ===== */}
      <div className="p-3 md:p-4 flex flex-col flex-1">
        
        {/* Product Name */}
        <h3 className="text-[13px] md:text-sm font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[36px] group-hover:text-brand-blue transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={11} 
                fill={i < Math.floor(rating) ? "#F59E0B" : "none"} 
                className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-200"}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400">({reviews})</span>
        </div>

        {/* Price */}
        {/* <div className="flex items-baseline gap-2 mb-3">
          <span className="text-base md:text-lg font-bold text-gray-900">₨{price?.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-xs text-gray-400 line-through">₨{oldPrice?.toFixed(2)}</span>
          )}
        </div> */}

        {/* ===== STOCK PROGRESS BAR ===== */}
        <div className="mt-auto space-y-1.5">
          <div className="flex justify-between text-[10px] font-medium">
            <span className="text-gray-500">Sold: <span className="text-brand-blue font-bold">{sold}</span></span>
            <span className="text-gray-500">Left: <span className="text-green-600 font-bold">{remaining}</span></span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-full transition-all duration-700"
              style={{ width: `${soldPercentage}%` }}
            />
          </div>
        </div>

        {/* ===== QUANTITY & ADD TO CART ===== */}
        <div className="mt-3 flex items-center gap-2">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            <button 
              onClick={decreaseQty}
              disabled={cartQty <= 1}
              className="p-1.5 text-gray-500 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Minus size={12} />
            </button>
            <span className="text-xs font-semibold text-gray-800 px-2 min-w-[24px] text-center">
              {cartQty}
            </span>
            <button 
              onClick={increaseQty}
              disabled={cartQty >= availableQty}
              className="p-1.5 text-gray-500 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Plus size={12} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
              isAddedToCart 
                ? 'bg-green-500 text-white' 
                : 'bg-brand-blue text-white hover:bg-brand-blue-dark active:scale-95'
            }`}
          >
            {isAddedToCart ? (
              <>
                <Check size={14} />
                Added
              </>
            ) : (
              <>
                <ShoppingCart size={14} />
                Add
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}