import { ArrowRight, Sparkles } from 'lucide-react';

const promoData = [
  {
    id: 1,
    tag: 'Daily Fresh',
    title: 'Everyday Fresh & Clean with Our Products',
    subtitle: 'Up to 30% Off',
    image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=600&auto=format&fit=crop&q=60',
    overlay: 'from-amber-900/60 via-amber-800/30 to-amber-700/10',
    link: '/category/vegetables'
  },
  {
    id: 2,
    tag: 'Healthy Life',
    title: 'Make your Breakfast Healthy and Easy',
    subtitle: 'Special Combo Deals',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&auto=format&fit=crop&q=60',
    overlay: 'from-red-900/60 via-red-800/30 to-red-700/10',
    link: '/category/dairy-eggs'
  },
  {
    id: 3,
    tag: '100% Organic',
    title: 'The Best Organic Products Online',
    subtitle: 'Fresh from Farm',
    image: 'https://plus.unsplash.com/premium_photo-1683121938935-118d0a16a469?w=600&auto=format&fit=crop&q=60',
    overlay: 'from-blue-900/60 via-blue-800/30 to-blue-700/10',
    link: '/category/fruits'
  }
];

export default function PromoSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14">
        
        {/* ===== HEADER ===== */}
        <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-1.5 sm:mb-2">
              <Sparkles size={12} className="sm:w-[14px] sm:h-[14px]" />
              Special Offers
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Featured <span className="text-brand-red">Promotions</span>
            </h2>
          </div> 
        </div>

        {/* ===== PROMO CARDS ===== */}
        {/* Mobile: 1 col | Tablet: 2 cols (3rd full width) | Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {promoData.map((promo, index) => (
            <div 
              key={promo.id}
              className={`relative rounded-2xl overflow-hidden group flex flex-col justify-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer
                ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
                min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]
              `}
            >
              {/* ===== FULL BACKGROUND IMAGE ===== */}
              <img 
                src={promo.image} 
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              
              {/* ===== GRADIENT OVERLAY ===== */}
              <div className={`absolute inset-0 bg-gradient-to-br ${promo.overlay}`}></div>

              {/* ===== CONTENT ===== */}
              <div className="relative z-10 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
                
                {/* Top: Discount Badge */}
                <div className="self-end">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-red rounded-full flex flex-col items-center justify-center shadow-lg shadow-brand-red/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-[10px] sm:text-xs md:text-sm font-extrabold leading-none">Sale</span>
                    <span className="text-white text-[7px] sm:text-[8px] md:text-[9px] font-bold leading-none mt-0.5">Up to</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="mt-auto">
                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white mb-1.5 sm:mb-2 leading-snug drop-shadow-lg max-w-[85%] sm:max-w-[75%]">
                    {promo.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-white/90 font-bold mb-3 sm:mb-4 md:mb-5">
                    {promo.subtitle}
                  </p>
                  
                  {/* CTA Button */}
                  <a 
                    href={promo.link}
                    className="group/btn inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-white/20 active:scale-95"
                  >
                    Shop Now
                    <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px] group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}