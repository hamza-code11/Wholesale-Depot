import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';

export default function ProductGrid({
  products = productsData,
  title = "Best Selling Products",
  subtitle = "Trending Now",
  showViewAll = true,
  onAddToCart,
  onAddToWishlist,
  onQuickView
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

        {/* ===== SECTION HEADER ===== */}
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-2">
              <Sparkles size={14} />
              {subtitle}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Shop by <span className="text-brand-red">Products</span>
            </h2>
          </div>

          {showViewAll && (
            <a
              href="/shop"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-blue transition-all group border border-gray-200 hover:border-brand-blue/30 px-4 py-2.5 rounded-full"
            >
              All Products
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>

        {/* ===== PRODUCT GRID ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* View All - Mobile */}
        {showViewAll && (
          <div className="mt-6 text-center sm:hidden">
            <a
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 rounded-full shadow-lg shadow-brand-blue/20 transition-all active:scale-95"
            >
              View All Products
              <ArrowRight size={16} />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}