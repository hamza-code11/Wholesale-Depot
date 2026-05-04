import { ArrowRight, Sparkles } from 'lucide-react';
import { categoriesData } from '../../data/categoriesData';

export default function Categories() {
  const allCategories = [...categoriesData, ...categoriesData, ...categoriesData];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        
        {/* HEADER */}
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-2">
              <Sparkles size={14} />
              Categories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Shop by <span className="text-brand-red">Categories</span>
            </h2>
          </div>
          
          <a 
            href="/categories" 
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-blue transition-all group border border-gray-200 hover:border-brand-blue/30 px-4 py-2.5 rounded-full"
          >
            All Categories
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden p-4 md:p-6">
          
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-r-2xl"></div>

          {/* Unique class: animate-scroll-categories */}
          <div className="flex gap-3 md:gap-4 animate-scroll-categories group/categories">
            {allCategories.map((category, index) => (
              <a
                key={`${category.id}-${index}`}
                href={category.link}
                className="group/card relative flex flex-col items-center bg-white p-4 md:p-5 transition-all duration-500 overflow-hidden flex-shrink-0 w-[150px] sm:w-[160px] md:w-[175px]"
              >
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-blue/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-brand-blue/5 rounded-full blur-xl"></div>
                </div>

                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 z-10">
                  <div className="absolute inset-0 rounded-full border-2 border-gray-100 group-hover/card:border-brand-blue/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-brand-blue/0 group-hover/card:border-brand-blue/30 scale-90 group-hover/card:scale-100 transition-all duration-500"></div>
                  <div className="absolute inset-[6px] rounded-full overflow-hidden bg-gray-100 group-hover/card:bg-gray-50 transition-colors duration-500">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="text-center z-10">
                  <h3 className="text-[12px] md:text-[13px] font-semibold text-gray-600 group-hover/card:text-gray-900 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a 
            href="/categories" 
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 rounded-full shadow-lg shadow-brand-blue/20 transition-all active:scale-95"
          >
            View All Categories
            <ArrowRight size={16} />
          </a>
        </div>

      </div>

      {/* UNIQUE Animation for Categories */}
      <style>{`
        @keyframes scrollCategories {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-categories {
          animation: scrollCategories 40s linear infinite;
        }
        .group\\/categories:hover .animate-scroll-categories {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}