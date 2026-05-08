import { Sparkles, ArrowRight } from 'lucide-react';
import img1 from '../assets/brands/01.png';
import img2 from '../assets/brands/02.png';
import img3 from '../assets/brands/03.png';
import img4 from '../assets/brands/04.png';
import img5 from '../assets/brands/05.png';
import img6 from '../assets/brands/06.png';
import img7 from '../assets/brands/07.webp';
import img8 from '../assets/brands/08.webp';
import img9 from '../assets/brands/09.png';

export default function BrandCarousel() {
  const brandsData = [
    { id: 1, name: 'STARBUCKS', logo: img1 },
    { id: 2, name: 'GHIRARDELLI', logo: img2 },
    { id: 3, name: 'ZESTY PAWS', logo: img3 },
    { id: 4, name: 'LANCE', logo: img4 },
    { id: 5, name: 'NUTELLA', logo: img5 },
    { id: 6, name: 'PURINA', logo: img6 },
    { id: 7, name: 'ALANI', logo: img7 },
    { id: 8, name: 'BELVITA', logo: img8 },
    { id: 9, name: 'HERSHEY', logo: img9 },
  ];

  const allBrands = [...brandsData, ...brandsData, ...brandsData];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        
        {/* HEADER */}
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-2">
              <Sparkles size={14} />
              Trusted Partners
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Top <span className="text-brand-red">Brands</span> We Carry
            </h2>
          </div>
          
          <a 
            href="/brands" 
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-blue transition-all group border border-gray-200 hover:border-brand-blue/30 px-4 py-2.5 rounded-full"
          >
            All Brands
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden p-4 md:p-6">
          
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-r-2xl"></div>

          {/* Unique class: animate-scroll-brands */}
          <div className="flex gap-3 md:gap-4 animate-scroll-brands group/brands">
            {allBrands.map((brand, index) => (
              <a
                key={`${brand.id}-${index}`}
                href={`/brand/${brand.name.toLowerCase()}`}
                className="group/card relative flex flex-col items-center bg-white p-4 md:p-5 transition-all duration-500 overflow-hidden flex-shrink-0 w-[140px] sm:w-[150px] md:w-[165px]"
                title={brand.name}
              >
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-blue/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-brand-blue/5 rounded-full blur-xl"></div>
                </div>

                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 z-10 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 group-hover/card:border-brand-blue/20 transition-all duration-500 flex items-center justify-center p-3">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover/card:grayscale-0 transition-all duration-500 opacity-70 group-hover/card:opacity-100 group-hover/card:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="text-center z-10">
                  <h3 className="text-[12px] md:text-[13px] font-semibold text-gray-600 group-hover/card:text-gray-900 transition-colors duration-300">
                    {brand.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a 
            href="/brands" 
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 rounded-full shadow-lg shadow-brand-blue/20 transition-all active:scale-95"
          >
            View All Brands
            <ArrowRight size={16} />
          </a>
        </div>

      </div>

      {/* UNIQUE Animation for Brands - Left to Right */}
      <style>{`
        @keyframes scrollBrands {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-brands {
          animation: scrollBrands 35s linear infinite;
        }
        .group\\/brands:hover .animate-scroll-brands {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}