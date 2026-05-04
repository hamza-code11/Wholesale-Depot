import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

const footerLinks = {
  categories: ['Vegetables', 'Fruits', 'Dairy', 'Bakery', 'Meat', 'Beverages'],
  company: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  support: ['Help Center', 'Track Order', 'Returns', 'Shipping', 'FAQ'],
  social: ['Facebook', 'Instagram', 'Twitter', 'YouTube'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <img src={logo} alt="Wholesale Depot" className="h-9 mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-sm">
              Your trusted wholesale grocery partner. Fresh products, best prices, fast delivery across Pakistan.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2"><MapPin size={14} /> United Status</p>
              <p className="flex items-center gap-2"><Phone size={14} /> +92 300 1234567</p>
              <p className="flex items-center gap-2"><Mail size={14} /> info@wholesaledepot.com</p>
              <p className="flex items-center gap-2"><Clock size={14} /> Mon - Sun: 9AM - 9PM</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight size={12} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Wholesale Depot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, i) => (
              <a key={i} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}