interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  variant?: 'green' | 'purple' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function StatsCard({ 
  value, 
  label, 
  description, 
  variant = 'green',
  size = 'medium',
  className = ''
}: StatsCardProps) {
  const valueColorClasses = {
    green: "text-primary-green group-hover:text-primary-green group-hover:drop-shadow-[0_0_10px_rgba(178,226,79,0.3)]",
    purple: "text-primary-purple group-hover:drop-shadow-[0_0_10px_rgba(143,124,210,0.3)]",
    gradient: "bg-gradient-to-r from-primary-green to-primary-green/70 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_rgba(178,226,79,0.3)]"
  };

  const borderColorClasses = {
    green: "hover:border-primary-green/30",
    purple: "hover:border-primary-purple/30",
    gradient: "hover:border-primary-green/30"
  };

  const sizeClasses = {
    small: "text-2xl",
    medium: "text-3xl",
    large: "text-4xl"
  };

  return (
    <div className={`
      group bg-light/5 rounded-xl p-6 border border-light/10 backdrop-blur-sm text-center 
      ${borderColorClasses[variant]} transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(254,224,114,0.1)] hover:transform hover:scale-105
      ${className}
    `}>
      <div className={`${sizeClasses[size]} font-bold mb-2 transition-all duration-300 ${valueColorClasses[variant]}`}>
        {value}
      </div>
      <div className="text-light/70 group-hover:text-light/90 transition-colors duration-300">
        {label}
      </div>
      {description && (
        <p className="text-light/60 text-sm mt-2">{description}</p>
      )}
    </div>
  );
} 