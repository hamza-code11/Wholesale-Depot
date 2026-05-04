import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../product/ProductGrid';
import { productsData } from '../../data/productsData';
import QuickViewModal from '../../components/product/QuickViewModal';

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product, qty) => {
    console.log('Added to cart:', product.name, 'Qty:', qty);
  };

  const handleWishlist = (product) => {
    console.log('Wishlisted:', product.name);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Breadcrumb / Page Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a href="/" className="hover:text-brand-blue transition-colors">Home</a>
            <ArrowRight size={12} />
            <span className="text-gray-700 font-medium">Shop</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid 
        products={productsData}
        title="Featured Products"
        subtitle="Fresh Picks For You"
        showViewAll={true}
        onAddToCart={handleAddToCart}
        onWishlist={handleWishlist}
        onQuickView={handleQuickView}
      />

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