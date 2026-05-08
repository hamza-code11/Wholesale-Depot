import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ className = '', inputClassName = '' }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={`flex-1 w-full max-w-2xl mx-auto ${className}`}
    >
      <div className="relative w-full">
        {/* Search Icon - Left Side */}
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <Search size={16} className="lg:w-[18px] lg:h-[18px]" />
        </div>
        
        {/* Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products, brands & more..."
          className={`w-full pl-10 pr-4 py-2.5 lg:py-2.5 bg-gray-50 border-2 border-transparent rounded-xl text-[13px] lg:text-sm focus:outline-none focus:border-brand-blue/30 focus:bg-white focus:shadow-md transition-all duration-300 placeholder:text-gray-400 text-gray-700 ${inputClassName}`}
        />
      </div>
    </form>
  );
}