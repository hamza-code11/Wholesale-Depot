import { useState } from 'react';
import TopBar from './TopBar';
import MiddleBar from './MiddleBar';
import BottomBar from './BottomBar';
import MobileSidebar from './MobileSidebar';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      <TopBar />
      <MiddleBar onMobileMenuToggle={() => setMobileMenuOpen(true)} />
      <BottomBar />

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
}