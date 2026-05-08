// import { useState } from 'react';
// import { Heart, ShoppingCart, Eye, Star, Minus, Plus, Check } from 'lucide-react';

// export default function ProductCard({ product, onAddToCart, onAddToWishlist, onQuickView }) {
//   const { 
//     id,
//     name, 
//     image, 
//     price, 
//     oldPrice, 
//     rating = 0, 
//     reviews = 0, 
//     discount, 
//     sold = 0, 
//     totalStock = 100,
//     quantity: availableQty = 10,
//   } = product || {};

//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isAddedToCart, setIsAddedToCart] = useState(false);
//   const [cartQty, setCartQty] = useState(1);

//   const soldPercentage = totalStock > 0 ? (sold / totalStock) * 100 : 0;
//   const remaining = totalStock - sold;

//   const handleWishlist = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsWishlisted(!isWishlisted);
//     if (onAddToWishlist) onAddToWishlist(product);
//   };

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsAddedToCart(true);
//     if (onAddToCart) onAddToCart(product, cartQty);
//     setTimeout(() => setIsAddedToCart(false), 1500);
//   };

//   const handleQuickView = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (onQuickView) onQuickView(product);
//   };

//   const increaseQty = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (cartQty < availableQty) setCartQty(prev => prev + 1);
//   };

//   const decreaseQty = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (cartQty > 1) setCartQty(prev => prev - 1);
//   };

//   return (
//     <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 flex flex-col">
      
//       {/* ===== IMAGE SECTION ===== */}
//       <div className="relative aspect-square bg-gray-50 overflow-hidden">
//         {/* Discount Badge */}
//         {discount && (
//           <span className="absolute top-3 left-3 z-10 bg-brand-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
//             -{discount}%
//           </span>
//         )}

//         {/* Product Image */}
//         <img 
//           src={image} 
//           alt={name} 
//           className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
//           loading="lazy"
//         />

//         {/* ===== ACTION ICONS (Hover) ===== */}
//         <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
//           {/* Wishlist */}
//           <button 
//             onClick={handleWishlist}
//             className={`p-2 rounded-full shadow-md transition-all duration-300 ${
//               isWishlisted 
//                 ? 'bg-brand-red text-white' 
//                 : 'bg-white text-gray-500 hover:text-brand-red'
//             }`}
//           >
//             <Heart size={15} fill={isWishlisted ? 'white' : 'none'} />
//           </button>

//           {/* Quick View */}
//           <button 
//             onClick={handleQuickView}
//             className="p-2 bg-white text-gray-500 hover:text-brand-blue rounded-full shadow-md transition-all duration-300 hover:bg-brand-blue hover:text-white"
//           >
//             <Eye size={15} />
//           </button>
//         </div>

//         {/* Quantity Badge */}
//         {/* {availableQty > 0 && (
//           <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
//             {availableQty} available
//           </span>
//         )} */}
//       </div>

//       {/* ===== DETAILS SECTION ===== */}
//       <div className="p-3 md:p-4 flex flex-col flex-1">
        
//         {/* Product Name */}
//         <h3 className="text-[13px] md:text-sm font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[36px] group-hover:text-brand-blue transition-colors">
//           {name}
//         </h3>

//         {/* Rating */}
//         <div className="flex items-center gap-1.5 mb-2">
//           <div className="flex items-center">
//             {[...Array(5)].map((_, i) => (
//               <Star 
//                 key={i} 
//                 size={11} 
//                 fill={i < Math.floor(rating) ? "#F59E0B" : "none"} 
//                 className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-200"}
//               />
//             ))}
//           </div>
//           <span className="text-[10px] text-gray-400">({reviews})</span>
//         </div>

//         {/* Price */}
//         {/* <div className="flex items-baseline gap-2 mb-3">
//           <span className="text-base md:text-lg font-bold text-gray-900">${price?.toFixed(2)}</span>
//           {oldPrice && (
//             <span className="text-xs text-gray-400 line-through">${oldPrice?.toFixed(2)}</span>
//           )}
//         </div> */}

//         {/* ===== STOCK PROGRESS BAR ===== */}
//         <div className="mt-auto space-y-1.5">
//           <div className="flex justify-between text-[10px] font-medium">
//             <span className="text-gray-500">Sold: <span className="text-brand-blue font-bold">{sold}</span></span>
//             <span className="text-gray-500">Left: <span className="text-green-600 font-bold">{remaining}</span></span>
//           </div>
//           <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
//             <div 
//               className="h-full bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-full transition-all duration-700"
//               style={{ width: `${soldPercentage}%` }}
//             />
//           </div>
//         </div>

//         {/* ===== QUANTITY & ADD TO CART ===== */}
//         <div className="mt-3 flex items-center gap-2">
//           {/* Quantity Selector */}
//           <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
//             <button 
//               onClick={decreaseQty}
//               disabled={cartQty <= 1}
//               className="p-1.5 text-gray-500 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
//             >
//               <Minus size={12} />
//             </button>
//             <span className="text-xs font-semibold text-gray-800 px-2 min-w-[24px] text-center">
//               {cartQty}
//             </span>
//             <button 
//               onClick={increaseQty}
//               disabled={cartQty >= availableQty}
//               className="p-1.5 text-gray-500 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
//             >
//               <Plus size={12} />
//             </button>
//           </div>

//           {/* Add to Cart Button */}
//           <button 
//             onClick={handleAddToCart}
//             className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
//               isAddedToCart 
//                 ? 'bg-green-500 text-white' 
//                 : 'bg-brand-blue text-white hover:bg-brand-blue-dark active:scale-95'
//             }`}
//           >
//             {isAddedToCart ? (
//               <>
//                 <Check size={14} />
//                 Added
//               </>
//             ) : (
//               <>
//                 <ShoppingCart size={14} />
//                 Add
//               </>
//             )}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }













import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Minus, Plus, Check, Eye } from 'lucide-react';

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
    weight,
    unit,
  } = product || {};

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartQty, setCartQty] = useState(1);

  const soldPercentage = totalStock > 0 ? (sold / totalStock) * 100 : 0;
  const remaining = totalStock - sold;
  const isLowStock = remaining <= 5 && remaining > 0;

  const handleWishlist = (e) => {
    e.preventDefault(); e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (onAddToWishlist) onAddToWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); e.stopPropagation();
    setIsAddedToCart(true);
    if (onAddToCart) onAddToCart(product, cartQty);
    setTimeout(() => setIsAddedToCart(false), 1500);
  };

  const handleQuickView = (e) => {
    e.preventDefault(); e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-300/40 flex flex-col">
      
      {/* ===== IMAGE SECTION ===== */}
      <Link to={`/product/${id}`} className="relative aspect-[4/3] overflow-hidden p-5">
        
        {/* Discount Badge - Premium Style */}
        {discount && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl px-2.5 py-1.5 shadow-lg">
            <span className="text-brand-red text-[11px] font-extrabold leading-none">-{discount}%</span>
          </div>
        )}

        {/* Low Stock Alert */}
        {isLowStock && (
          <div className="absolute top-4 left-4 z-10" style={discount ? { marginTop: '42px' } : {}}>
            <span className="bg-amber-50 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
              <span className="w-1 h-1 bg-amber-500 rounded-full animate-pulse"></span>
              Only {remaining} left
            </span>
          </div>
        )}

        {/* Action Buttons - Smooth slide in */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-3 group-hover:translate-x-0">
          <button 
            onClick={handleWishlist}
            className={`p-2.5 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
              isWishlisted 
                ? 'bg-brand-red text-white shadow-brand-red/20' 
                : 'bg-white/90 text-gray-500 hover:text-brand-red hover:bg-white border border-gray-100'
            }`}
            title="Add to Wishlist"
          >
            <Heart size={14} fill={isWishlisted ? 'white' : 'none'} strokeWidth={2.5} />
          </button>
          <button 
            onClick={handleQuickView}
            className="p-2.5 bg-white/90 text-gray-500 hover:text-brand-blue hover:bg-white rounded-xl shadow-lg backdrop-blur-sm border border-gray-100 transition-all duration-300 hover:scale-110"
            title="Quick View"
          >
            <Eye size={14} strokeWidth={2} />
          </button>
        </div>

        {/* Product Image - Centered with subtle reflection */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out "
            loading="lazy"
          />
        </div>
      </Link>

      {/* ===== DETAILS SECTION ===== */}
      <div className="px-4 pt-3 pb-4 flex flex-col flex-1">
        
        {/* Category/Weight Row */}
        <div className="flex items-center justify-between mb-1.5">
          {(weight || unit) && (
            <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">
              {weight}{unit}
            </span>
          )}
          {reviews > 0 && (
            <span className="text-[10px] text-gray-400 font-medium">{reviews} sold</span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-[13px] font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[36px] leading-snug group-hover:text-brand-blue transition-colors duration-300">
          {name}
        </h3>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={11} 
                fill={i < Math.floor(rating) ? "#F59E0B" : "none"} 
                strokeWidth={1.5}
                className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-250"}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-medium ml-1">({reviews})</span>
        </div>

        {/* Price Row */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-extrabold text-gray-900 tracking-tight">
            ${price?.toFixed(0)}
          </span>
          {oldPrice && (
            <span className="text-[12px] text-gray-400 line-through font-medium">
              ${oldPrice?.toFixed(0)}
            </span>
          )}
          {discount && (
            <span className="text-[10px] font-bold text-brand-red ml-auto">
              Save ${(oldPrice - price)?.toFixed(0)}
            </span>
          )}
        </div>

        {/* ===== STOCK PROGRESS ===== */}
        <div className="space-y-2 mb-1">
          <div className="flex justify-between text-[9px] font-medium">
            <span className="text-gray-400">
              Sold: <span className="text-gray-700 font-bold">{sold}</span>
            </span>
            <span className="text-gray-400">
              Available: <span className="text-green-600 font-bold">{remaining}</span>
            </span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${Math.min(soldPercentage, 100)}%` }}
            >
              <div className="absolute right-0 top-0 h-full w-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="mt-auto pt-3 flex items-stretch gap-2 h-10">
          
          {/* Quantity Selector */}
          <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 h-full hover:border-gray-200 transition-colors">
            <button 
              onClick={(e) => {
                e.preventDefault(); e.stopPropagation();
                if (cartQty > 1) setCartQty(prev => prev - 1);
              }}
              disabled={cartQty <= 1}
              className="h-full aspect-square flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-white transition-all disabled:opacity-30 rounded-l-lg"
            >
              <Minus size={13} strokeWidth={2.5} />
            </button>
            <span className="text-sm font-bold text-gray-800 w-9 text-center bg-white h-full flex items-center justify-center border-x border-gray-100">
              {cartQty}
            </span>
            <button 
              onClick={(e) => {
                e.preventDefault(); e.stopPropagation();
                if (cartQty < availableQty) setCartQty(prev => prev + 1);
              }}
              disabled={cartQty >= availableQty}
              className="h-full aspect-square flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-white transition-all disabled:opacity-30 rounded-r-lg"
            >
              <Plus size={13} strokeWidth={2.5} />
            </button>
          </div>

          {/* Cart Button */}
          <button 
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-2 rounded-xl transition-all duration-300 active:scale-95 flex-1 h-full font-semibold text-xs ${
              isAddedToCart 
                ? 'bg-green-500 text-white shadow-lg shadow-green-200' 
                : 'bg-gray-900 hover:bg-brand-blue text-white shadow-lg shadow-gray-900/20 hover:shadow-brand-blue/30'
            }`}
          >
            {isAddedToCart ? (
              <>
                <Check size={15} strokeWidth={2.5} />
                {/* Added */}
              </>
            ) : (
              <>
                <ShoppingCart size={15} strokeWidth={2} />
                {/* Add */}
              </>
            )}
          </button>

        </div>

      </div>

    </div>
  );
}