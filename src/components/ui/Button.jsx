import { ArrowRight } from 'lucide-react';

export default function Button({ children, variant = 'primary', icon = false, className = '' }) {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 uppercase";
  
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30 active:scale-95",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/20 active:scale-95",
    ghost: "text-dark-muted hover:text-white hover:bg-dark-surface active:scale-95"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
      {icon && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}

