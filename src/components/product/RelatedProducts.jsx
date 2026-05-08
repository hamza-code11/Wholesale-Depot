import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';

export default function RelatedProducts({ products = [], title = "Customers Also Bought" }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!products.length) return null;

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product, qty) => {
    console.log('Added to cart:', product.name, 'Qty:', qty);
  };

  return (
    <>
      <div className="mt-10 md:mt-14">
        <hr className="border-gray-200 mb-6" />
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">{title}</h2>
          <Link to="/shop" className="text-sm text-brand-blue hover:underline">
            See more
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {products.map(p => (
            <ProductCard 
              key={p.id} 
              product={p}
              onAddToCart={handleAddToCart}
              onQuickView={handleQuickView}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}