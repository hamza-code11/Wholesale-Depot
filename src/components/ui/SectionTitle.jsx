export default function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="text-center mb-12">
      <span className="text-brand text-sm font-bold tracking-[0.3em] uppercase">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">{title}</h2>
      <p className="text-dark-muted max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>
      <div className="w-20 h-1 bg-gradient-to-r from-brand to-brand-light mx-auto mt-6 rounded-full"></div>
    </div>
  );
}

