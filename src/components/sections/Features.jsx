import { Truck, ShieldCheck, RefreshCw, Headphones, Clock, Tag } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    desc: 'On orders above ₨2,000',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guarantee',
    desc: '100% fresh products',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    desc: '7 days return policy',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    desc: 'Within 24-48 hours',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Tag,
    title: 'Best Prices',
    desc: 'Wholesale rates daily',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Always here to help',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Features() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 md:p-5 group hover:bg-gray-50 rounded-2xl transition-all duration-300">
              <div className={`w-12 h-12 md:w-14 md:h-14 ${feature.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={22} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}