import { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        
        {/* Card Container */}
        <div className="bg-white p-4 sm:p-5 md:p-8">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
            
            {/* ===== LEFT: Icon + Text ===== */}
            <div className="flex items-center gap-3 sm:gap-4 text-center lg:text-left flex-shrink-0">
              
              {/* Icon - Hidden on small mobile */}
              <div className="hidden sm:flex w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-brand-red/10 rounded-xl items-center justify-center flex-shrink-0">
                <Mail size={20} className="sm:w-[22px] sm:h-[22px] text-brand-red" />
              </div>
              
              {/* Text */}
              <div>
                {/* Badge */}
                <div className="flex items-center gap-1.5 justify-center lg:justify-start mb-0.5">
                  <Sparkles size={12} className="sm:w-[13px] sm:h-[13px] text-brand-red" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-brand-red uppercase tracking-wider">
                    Stay Updated
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900">
                  Subscribe to Our Newsletter
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 max-w-md hidden sm:block">
                  Get updates on new arrivals, exclusive deals & special offers!
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5 sm:hidden">
                  Get updates on new arrivals & special offers!
                </p>
              </div>
            </div>

            {/* ===== RIGHT: Form ===== */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full lg:w-auto gap-2 sm:gap-2.5">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full lg:w-60 xl:w-72 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm bg-gray-50 border-2 border-gray-200 focus:border-brand-red/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all duration-200 placeholder:text-gray-400 text-gray-700"
                required
              />
              <button 
                type="submit"
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 active:scale-95 ${
                  subscribed 
                    ? 'bg-green-500 text-white shadow-md shadow-green-200' 
                    : 'bg-brand-red hover:bg-brand-red-dark text-white shadow-md shadow-brand-red/20 hover:shadow-lg hover:shadow-brand-red/30'
                }`}
              >
                {subscribed ? (
                  <span>✓ Subscribed!</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={12} className="sm:w-[14px] sm:h-[14px]" />
                  </>
                )}
              </button>
            </form>

          </div>

          {/* Trust Text */}
          <p className="text-center lg:text-left text-[10px] sm:text-xs text-gray-400 mt-3 sm:mt-4">
            No spam, unsubscribe anytime. By subscribing you agree to our{' '}
            <a href="#" className="text-brand-red hover:underline font-medium">Privacy Policy</a>.
          </p>

        </div>

      </div>
    </section>
  );
}