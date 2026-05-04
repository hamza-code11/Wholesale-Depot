import { Mail, Phone, MapPin, User, Truck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-brand-blue text-white text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8 sm:h-9">
          
          {/* Left Side - Contact Info */}
          <div className="flex items-center">
            {/* Mobile: Only Email */}
            <a 
              href="mailto:info@wholesaledepot.com" 
              className="flex sm:hidden items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Mail size={12} />
              <span className="truncate max-w-[180px]">info@wholesaledepot.com</span>
            </a>

            {/* Desktop: Full Contact Info */}
            <div className="hidden sm:flex items-center gap-3 md:gap-5">
              <a 
                href="mailto:info@wholesaledepot.com" 
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <Mail size={12} />
                <span>info@wholesaledepot.com</span>
              </a>
              <a 
                href="tel:+923001234567" 
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <Phone size={12} />
                <span>+92 300 1234567</span>
              </a>
              <span className="hidden lg:flex items-center gap-1.5 text-white/60">
                <MapPin size={12} />
                <span>United States</span>
              </span>
            </div>
          </div>

          {/* Right Side - Quick Links */}
          <div className="flex items-center gap-1 sm:gap-3">
            {/* Track Order - Desktop Only */}
            <a 
              href="#" 
              className="hidden sm:flex items-center gap-1.5 px-2 py-1 hover:bg-white/10 rounded-md transition-colors"
            >
              <Truck size={12} />
              <span>Track Order</span>
            </a>

            <span className="w-px h-3 sm:h-4 bg-white/20 hidden sm:block"></span>

            {/* Login / Register - Always Visible */}
            <a 
              href="#" 
              className="flex items-center gap-1.5 px-2 py-1 hover:bg-white/10 rounded-md transition-colors font-medium"
            >
              <User size={13} />
              <span className="hidden xs:inline">Login / Register</span>
              <span className="xs:hidden">Login</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}