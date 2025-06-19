interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function HeroSection({ title, subtitle, description, children }: HeroSectionProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-light/80 max-w-2xl mx-auto mb-6">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-lg text-light/60 mb-12 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  );
} 