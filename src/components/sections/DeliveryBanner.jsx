import { Truck, Clock, ShieldCheck, Globe } from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-6 h-6 text-brand-blue" />,
    title: "Free Delivery",
    desc: "On orders over $500"
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-red" />,
    title: "Fast Delivery",
    desc: "Within 24-48 Hours"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Secure Payment",
    desc: "100% Protected"
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />,
    title: "Worldwide",
    desc: "All Over The World"
  }
];

export default function DeliveryBanner() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 md:gap-4 md:border-r last:border-r-0 border-gray-200 px-3 md:px-6 py-4 group hover:bg-gray-50 rounded-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-gray-50 group-hover:bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="font-bold text-gray-800 text-xs sm:text-sm md:text-base uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}