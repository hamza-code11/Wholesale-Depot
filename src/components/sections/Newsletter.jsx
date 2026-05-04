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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        <div className="bg-white p-5 sm:p-6 md:p-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
            
            {/* Left: Icon + Text */}
            <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left flex-shrink-0">
              {/* Icon */}
              <div className="hidden sm:flex w-11 h-11 sm:w-12 sm:h-12 bg-brand-red/10 rounded-xl items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-brand-red" />
              </div>
              
              {/* Text */}
              <div>
                <div className="flex items-center gap-1.5 justify-center md:justify-start mb-0.5">
                  <Sparkles size={13} className="text-brand-red" />
                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider">Stay Updated</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-sm text-gray-500 mt-0.5 max-w-md">
                  Get updates on new arrivals, exclusive deals & special offers!
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full md:w-64 lg:w-72 px-4 py-2.5 rounded-xl text-sm bg-gray-50 border-2 border-gray-200 focus:border-brand-red/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all duration-200 placeholder:text-gray-400 text-gray-700"
                required
              />
              <button 
                type="submit"
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 ${
                  subscribed 
                    ? 'bg-green-500 text-white shadow-md shadow-green-200' 
                    : 'bg-brand-red hover:bg-brand-red-dark text-white shadow-md shadow-brand-red/20 hover:shadow-lg hover:shadow-brand-red/30'
                }`}
              >
                {subscribed ? (
                  <span>Subscribed!</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}