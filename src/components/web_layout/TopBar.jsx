import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, User, Truck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-brand-blue text-white text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8 sm:h-10">
          
          {/* Left Side - Contact Info */}
          <div className="flex items-center">
            <a 
              href="mailto:info@wholesaledepot.com" 
              className="flex sm:hidden items-center gap-1.5 hover:text-white/80 transition-colors py-1"
            >
              <Mail size={12} />
              <span className="truncate max-w-[180px]">info@wholesaledepot.com</span>
            </a>

            <div className="hidden sm:flex items-center gap-4 md:gap-6">
              <a 
                href="mailto:info@wholesaledepot.com" 
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors py-1"
              >
                <Mail size={12} />
                <span>info@wholesaledepot.com</span>
              </a>
              <a 
                href="tel:+923001234567" 
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors py-1"
              >
                <Phone size={12} />
                <span>+92 300 1234567</span>
              </a>
              <span className="hidden lg:flex items-center gap-1.5 text-white/60 py-1">
                <MapPin size={12} />
                <span>United States</span>
              </span>
            </div>
          </div>

          {/* Right Side - Quick Links */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href="#" 
              className="hidden sm:flex items-center gap-1.5 px-2 py-1 hover:bg-white/10 rounded-md transition-colors"
            >
              <Truck size={12} />
              <span>Track Order</span>
            </a>

            <span className="w-px h-4 bg-white/20 hidden sm:block"></span>

            <a 
              href="/login" 
              className="flex items-center gap-1.5 px-2 py-1 hover:bg-white/10 rounded-md transition-colors font-medium"
            >
              <User size={13} />
              <span>Login / Register</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}