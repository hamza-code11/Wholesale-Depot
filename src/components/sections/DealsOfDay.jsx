import { ArrowRight, Sparkles, Leaf } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { productsData } from '../../data/productsData';

export default function DailyBestSells() {
  const displayProducts = productsData.slice(0, 4);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14">
        
        {/* ===== HEADER ===== */}
        <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-1.5 sm:mb-2">
              <Sparkles size={12} className="sm:w-[14px] sm:h-[14px]" />
              Trending Now
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Daily Best <span className="text-brand-red">Sells</span>
            </h2>
          </div>
          
          <a 
            href="/shop" 
            className="hidden sm:flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-brand-blue transition-all group border border-gray-200 hover:border-brand-blue/30 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full"
          >
            All Products
            <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ===== CONTENT: Banner + Products ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 md:gap-6">
          
          {/* ===== LEFT: Promo Banner ===== */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-full flex flex-col justify-end shadow-md hover:shadow-2xl transition-all duration-500">
            
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&auto=format&fit=crop"
              alt="Fresh Organic Vegetables"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-red/20 to-transparent pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-7 md:p-8">
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-white bg-brand-red shadow-lg shadow-brand-red/30 px-3 py-1.5 rounded-full mb-3 sm:mb-4">
                <Leaf size={12} className="sm:w-[14px] sm:h-[14px]" />
                100% Organic
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 sm:mb-3 leading-tight max-w-[300px] drop-shadow-lg">
                Farm Fresh
                <br />
                <span className="text-yellow-400">Straight to You</span>
              </h3>

              {/* Description */}
              <p className="text-sm text-white/80 mb-5 sm:mb-6 max-w-[280px] leading-relaxed hidden sm:block">
                Fresh organic vegetables picked daily from local farms. Delivered within 24 hours.
              </p>

              {/* CTA Button */}
              <a 
                href="/category/organic"
                className="group/btn inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-white/30 active:scale-95"
              >
                Shop Now
                <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              {/* Offer Tag */}
              <div className="mt-4 flex items-center gap-2 text-white/60 text-xs">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Free delivery on orders above ₨2,000
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Products - 4 Cards Perfect Fit ===== */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
              {displayProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center lg:hidden">
          <a 
            href="/shop" 
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 rounded-full shadow-lg shadow-brand-blue/20 transition-all active:scale-95"
          >
            View All Products
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}