import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Cart', href: '/cart' },
    { name: 'Wishlist', href: '/wishlist' },
  ],
  brands: [
    { name: 'Starbucks', href: '/brand/starbucks' },
    { name: 'Ghirardelli', href: '/brand/ghirardelli' },
    { name: 'Zesty Paws', href: '/brand/zesty-paws' },
    { name: 'Lance', href: '/brand/lance' },
    { name: 'Nutella', href: '/brand/nutella' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Track Order', href: '/track-order' },
    { name: 'Returns & Refunds', href: '/returns' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-16 pb-6">
        
        {/* ===== TOP GRID ===== */}
        {/* Mobile: 1 col | Tablet: 3 cols | Desktop: 5 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6 mb-8 md:mb-10">
          
          {/* ===== Company Info ===== */}
          <div className="sm:col-span-3 lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img src={logo} alt="Wholesale Depot" className="h-8 sm:h-9 brightness-0 invert" />
            </a>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mb-4 sm:mb-5">
              Your trusted wholesale grocery partner. Fresh products, best prices, fast delivery across Pakistan.
            </p>
            
          </div>

          {/* ===== Company Links ===== */}
          <div>
            <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 pb-1.5 sm:pb-2 border-b border-gray-800">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.company.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-[11px] sm:text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Top Brands ===== */}
          <div>
            <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 pb-1.5 sm:pb-2 border-b border-gray-800">
              Top Brands
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.brands.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-[11px] sm:text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Support Links ===== */}
          <div>
            <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 pb-1.5 sm:pb-2 border-b border-gray-800">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.support.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-[11px] sm:text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div>
            <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 pb-1.5 sm:pb-2 border-b border-gray-800">
              Contact Us
            </h4>
            <div className="space-y-2 sm:space-y-3 text-gray-400">
              <p className="flex items-center gap-2 text-[11px] sm:text-xs md:text-sm">
                <MapPin size={12} className="sm:w-3.5 sm:h-3.5 text-brand-red flex-shrink-0" />
                <span>United States</span>
              </p>
              <a href="tel:+923001234567" className="flex items-center gap-2 text-[11px] sm:text-xs md:text-sm hover:text-white transition-colors">
                <Phone size={12} className="sm:w-3.5 sm:h-3.5 text-brand-red flex-shrink-0" />
                <span>+92 300 1234567</span>
              </a>
              <a href="mailto:info@wholesaledepot.com" className="flex items-center gap-2 text-[11px] sm:text-xs md:text-sm hover:text-white transition-colors">
                <Mail size={12} className="sm:w-3.5 sm:h-3.5 text-brand-red flex-shrink-0" />
                <span className="truncate">info@wholesaledepot.com</span>
              </a>
              <p className="flex items-center gap-2 text-[11px] sm:text-xs md:text-sm">
                <Clock size={12} className="sm:w-3.5 sm:h-3.5 text-brand-red flex-shrink-0" />
                <span>Mon - Sun: 9AM - 9PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Newsletter */}
        <div className="sm:hidden mb-6 pb-6 border-b border-gray-800">
          <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-2">
            Subscribe to Newsletter
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-red/50 transition-colors"
              required
            />
            <button 
              type="submit"
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all flex-shrink-0 ${
                subscribed 
                  ? 'bg-green-600 text-white' 
                  : 'bg-brand-red hover:bg-brand-red-dark text-white'
              }`}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-gray-800 pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          <p className="text-[10px] sm:text-xs text-gray-500 order-2 sm:order-1">
            &copy; 2026 <span className="text-white font-semibold">Wholesale Depot</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 order-1 sm:order-2">
            <span className="hidden sm:inline">We Accept:</span>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-semibold">Visa</span>
              <span className="bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-semibold">Mastercard</span>
              <span className="bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-semibold">COD</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 order-3">
            {['Privacy Policy', 'Terms of Service'].map((item, i) => (
              <a key={i} href="#" className="text-[10px] sm:text-xs text-gray-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}