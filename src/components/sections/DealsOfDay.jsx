import { ArrowRight, Sparkles, Leaf } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { productsData } from '../../data/productsData';

export default function DailyBestSells() {
  // Sirf 4 products - ek row ke liye
  const displayProducts = productsData.slice(0, 4);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

        {/* ===== HEADER ===== */}
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-2">
              <Sparkles size={14} />
              Trending Now
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Daily Best <span className="text-brand-red">Sells</span>
            </h2>

          </div>

          <a
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-blue transition-all group border border-gray-200 hover:border-brand-blue/30 px-4 py-2.5 rounded-full"
          >
            All Products
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ===== CONTENT: Banner + Products ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">

          {/* ===== LEFT: Promo Banner - 1 col wide ===== */}
          <div className="lg:col-span-1 relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 p-6 md:p-8 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] group cursor-pointer border border-green-100 hover:shadow-xl transition-all duration-500">

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-200/40 rounded-full blur-2xl -ml-8 -mb-8"></div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-green-700 bg-white/70 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
                  <Leaf size={13} />
                  Organic
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-800 leading-tight mb-2 sm:mb-3">
                  Bring Nature Into Your Home
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden md:block">
                  100% organic fresh products straight from farm.
                </p>
              </div>

              <a
                href="/category/organic"
                className="group/btn inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30 active:scale-95 w-fit mt-4"
              >
                Shop Now
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Floating Image */}
            <div className="absolute right-0 bottom-0 w-3/4 h-3/4 opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-4.png"
                alt="Organic"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* ===== RIGHT: 4 Products ===== */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {displayProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>

        {/* View All - Mobile */}
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