import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  Minus, 
  Plus, 
  ArrowRight,
  ArrowLeft,
  Heart,
  Truck,
  ShieldCheck,
  Tag,
  CreditCard,
} from 'lucide-react';
import { productsData } from '../../data/productsData';
import logo from '../../assets/logo/logo.png';

export default function CartPage() {
  const [cartItems, setCartItems] = useState(() => {
    return productsData.slice(0, 4).map((p, i) => ({
      ...p,
      quantity: i + 1,
      selected: true,
    }));
  });

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleSelect = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const selectAll = () => {
    const allSelected = cartItems.every(item => item.selected);
    setCartItems(prev => prev.map(item => ({ ...item, selected: !allSelected })));
  };

  const applyPromo = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setPromoApplied(true);
      setDiscount(subtotal * 0.1);
    } else if (promoCode.toLowerCase() === 'save20') {
      setPromoApplied(true);
      setDiscount(subtotal * 0.2);
    }
  };

  const removePromo = () => {
    setPromoApplied(false);
    setDiscount(0);
    setPromoCode('');
  };

  const selectedItems = cartItems.filter(item => item.selected);
  const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 2000 ? 0 : 150;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      
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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
            <ShoppingCart size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-sm text-gray-500">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>

        {/* ===== EMPTY CART ===== */}
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 md:p-16 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <ShoppingCart size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-6 text-sm md:text-base">
              Looks like you haven't added anything yet. Start shopping to fill your cart with fresh groceries!
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-brand-blue/30"
            >
              Start Shopping
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* ===== LEFT: Cart Items ===== */}
            <div className="lg:col-span-2 space-y-3">
              
              {/* Select All Bar */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 sm:px-6 py-3 flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cartItems.every(item => item.selected)}
                    onChange={selectAll}
                    className="w-4 h-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue/30"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Select All ({cartItems.length} items)
                  </span>
                </label>
                <button className="text-xs font-medium text-brand-red hover:underline">
                  Delete Selected
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-3 sm:p-4"
                >
                  <div className="flex gap-3 sm:gap-4">
                    
                    {/* Checkbox */}
                    <div className="flex items-center flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={item.selected}
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
                          ₨{(item.price * item.quantity).toFixed(0)}
                        </span>
                        <span className="text-xs text-gray-400">
                          (₨{item.price?.toFixed(0)} each)
                        </span>
                      </div>

                      {/* Quantity + Actions */}
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        
                        {/* Quantity Selector */}
                        <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden bg-gray-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-9 px-3 text-gray-400 hover:text-brand-blue hover:bg-white transition-colors disabled:opacity-30"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="h-9 w-10 text-sm font-bold text-gray-800 bg-white flex items-center justify-center border-x border-gray-100">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-9 px-3 text-gray-400 hover:text-brand-blue hover:bg-white transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {/* Save for later */}}
                            className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-brand-red px-2 py-2 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <Heart size={13} />
                            Save
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-brand-red px-2 py-2 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <Trash2 size={13} />
                            Remove
                          </button>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* ===== RIGHT: Order Summary ===== */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 sticky top-24">
                
                <h3 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h3>
                
                {/* Summary Rows */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal ({selectedItems.length} items)</span>
                    <span className="font-bold text-gray-800">₨{subtotal.toFixed(0)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span className="flex items-center gap-1">
                        Discount
                        <button onClick={removePromo} className="text-[10px] text-red-400 hover:underline ml-1">(remove)</button>
                      </span>
                      <span className="font-bold">-₨{discount.toFixed(0)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Fee</span>
                    {deliveryFee === 0 ? (
                      <span className="font-bold text-green-600">FREE</span>
                    ) : (
                      <span className="font-bold text-gray-800">₨{deliveryFee}</span>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-100 pt-3 flex justify-between text-base">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-extrabold text-gray-900">₨{total.toFixed(0)}</span>
                  </div>

                  {subtotal < 2000 && subtotal > 0 && (
                    <p className="text-[11px] text-brand-red bg-red-50 px-3 py-2 rounded-lg">
                      Add ₨{(2000 - subtotal).toFixed(0)} more for FREE delivery!
                    </p>
                  )}
                </div>

                {/* Promo Code */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code"
                      disabled={promoApplied}
                      className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-brand-blue transition-all disabled:opacity-50"
                    />
                    {promoApplied ? (
                      <button
                        onClick={removePromo}
                        className="px-4 py-2.5 text-xs font-semibold text-brand-red bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={applyPromo}
                        disabled={!promoCode}
                        className="px-4 py-2.5 text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark rounded-xl transition-all disabled:opacity-50"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                  {!promoApplied && (
                    <p className="text-[10px] text-gray-400 mt-1.5">
                      Try: <button onClick={() => setPromoCode('SAVE10')} className="text-brand-blue hover:underline">SAVE10</button> or <button onClick={() => setPromoCode('SAVE20')} className="text-brand-blue hover:underline">SAVE20</button>
                    </p>
                  )}
                </div>

                {/* Checkout Button */}
                <button
                  disabled={selectedItems.length === 0}
                  className="w-full mt-5 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark disabled:bg-gray-300 text-white py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-brand-blue/30 disabled:cursor-not-allowed"
                >
                  <CreditCard size={18} />
                  Proceed to Checkout
                  <ArrowRight size={16} />
                </button>

                {/* Trust Badges */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center text-center p-2">
                    <Truck size={16} className="text-brand-blue mb-1" />
                    <span className="text-[9px] text-gray-500">Free Delivery</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2">
                    <ShieldCheck size={16} className="text-green-600 mb-1" />
                    <span className="text-[9px] text-gray-500">Secure</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2">
                    <Tag size={16} className="text-brand-red mb-1" />
                    <span className="text-[9px] text-gray-500">Best Prices</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}