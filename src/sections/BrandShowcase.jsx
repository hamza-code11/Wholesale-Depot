import { ArrowRight, Tag } from 'lucide-react';

const bannerData = [
  {
    id: 1,
    discount: '70%',
    tag: 'Limited Offer',
    title: 'Tasty Snacks & Fast Food',
    subtitle: 'The Flavor Of Something Special',
    image: 'https://m.media-amazon.com/images/I/81lIeZiD8kL._SY450_.jpg',
    overlay: 'from-black/50 via-black/30 to-black/10',
    badgeBg: 'bg-brand-red',
    link: '/category/snacks'
  },
  {
    id: 2,
    discount: '50%',
    tag: 'Fresh Deal',
    title: 'Fresh Fruits & Veggies',
    subtitle: 'A Healthy Meal For Everyone',
    image: 'https://m.media-amazon.com/images/I/81BPO+lOofL._SY450_.jpg',
    overlay: 'from-black/50 via-black/30 to-black/10',
    badgeBg: 'bg-brand-blue',
    link: '/category/fruits'
  }
];

export default function DoubleBanner() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {bannerData.map((banner) => (
            <div 
              key={banner.id}
              className="relative rounded-2xl overflow-hidden group flex items-center min-h-[230px] sm:min-h-[260px] md:min-h-[300px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              
              {/* ===== FULL IMAGE BACKGROUND ===== */}
              <img 
                src={banner.image} 
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* ===== GRADIENT OVERLAY ===== */}
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.overlay}`}></div>

              {/* ===== CONTENT ===== */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-6 md:p-8">
                
                {/* Top Row: Badge + Tag */}
                <div className="flex items-start gap-3">
                  {/* Discount Badge */}
                  {/* <div className={`${banner.badgeBg} text-white rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-xl flex flex-col items-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-lg sm:text-xl md:text-2xl font-extrabold leading-none">{banner.discount}</span>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase leading-none mt-0.5">OFF</span>
                  </div> */}

                  {/* Tag */}
                  {/* <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    <Tag size={10} />
                    {banner.tag}
                  </span> */}
                </div>

                {/* Bottom Content */}
                <div className="max-w-[220px] sm:max-w-[250px] md:max-w-[280px]">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 sm:mb-3 leading-tight drop-shadow-lg">
                    {/* {banner.title} */}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 leading-relaxed font-medium">
                    {/* {banner.subtitle} */}
                  </p>
                  
                  {/* CTA Button */}
                  <a 
                    href={banner.link}
                    className="group/btn inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-white/20 active:scale-95"
                  >
                    Shop Now
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

              {/* Bottom Gradient Line on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}