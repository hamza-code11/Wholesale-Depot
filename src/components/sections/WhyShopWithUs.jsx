import { 
  Leaf, 
  Truck, 
  BadgePercent, 
  ShieldCheck, 
  RotateCcw, 
  Headphones,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Leaf,
    title: '100% Organic Sourcing',
    description: 'Fresh from certified farms directly to your doorstep.',
    color: 'text-green-600',
    bgColor: 'bg-green-50 group-hover:bg-green-100',
  },
  {
    id: 2,
    icon: Truck,
    title: 'Direct from Farm',
    description: 'No middlemen, delivered within 24 hours of harvest.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 group-hover:bg-blue-100',
  },
  {
    id: 3,
    icon: BadgePercent,
    title: 'Wholesale Prices',
    description: 'Save up to 40% with our bulk wholesale pricing.',
    color: 'text-red-600',
    bgColor: 'bg-red-50 group-hover:bg-red-100',
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Quality Guarantee',
    description: '100% satisfaction or your money back guarantee.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 group-hover:bg-purple-100',
  },
  {
    id: 5,
    icon: RotateCcw,
    title: 'Easy 7-Day Returns',
    description: 'Hassle-free pickup and instant refund on returns.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 group-hover:bg-orange-100',
  },
  {
    id: 6,
    icon: Headphones,
    title: '24/7 Live Support',
    description: 'Call, chat, or email—we\'re always here to help.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 group-hover:bg-teal-100',
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        
        {/* ===== FULL WIDTH BANNER ===== */}
        <div className="relative  overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12">
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/3 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/3 rounded-full blur-3xl -ml-16 -mb-16"></div>

          {/* ===== HEADER ===== */}
          <div className="relative z-10 text-center mb-10 md:mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-3">
              <Sparkles size={14} />
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Why Shop <span className="text-brand-red">With Us</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              Fresh products, best prices, and exceptional service—all in one place.
            </p>
          </div>

          {/* ===== FEATURES GRID - 6 Columns ===== */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="group flex flex-col items-center text-center bg-white rounded-2xl p-4 md:p-5 border border-gray-100 hover:border-brand-blue/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={22} className={`${feature.color} md:w-6 md:h-6`} />
                </div>

                {/* Title */}
                <h3 className="text-xs md:text-sm font-bold text-gray-800 mb-1.5 leading-snug">
                  {feature.title}
                </h3>

                {/* Description - Hidden on Mobile */}
                <p className="hidden md:block text-[11px] md:text-xs text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* ===== BOTTOM TRUST STRIP ===== */}
          {/* <div className="relative z-10 mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 py-3 px-6 w-fit mx-auto">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[9px] font-bold text-gray-500">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-700">10,000+ Happy Customers</span>
            </div>
            <span className="hidden sm:block w-px h-5 bg-gray-200"></span>
            <div className="flex items-center gap-1.5">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700">4.8 Rating</span>
            </div>
            <span className="hidden sm:block w-px h-5 bg-gray-200"></span>
            <a 
              href="/about" 
              className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors group/link"
            >
              About Us
              <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
            </a>
          </div> */}

        </div>

      </div>
    </section>
  );
}