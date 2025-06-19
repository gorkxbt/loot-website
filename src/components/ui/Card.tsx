import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'purple' | 'green';
  hover?: boolean;
  translate?: 'up' | 'down' | 'none';
  fullHeight?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  translate = 'none',
  fullHeight = true
}: CardProps) {
  const baseClasses = "rounded-xl p-8 border backdrop-blur-sm transition-all duration-300";
  
  const variantClasses = {
    default: "bg-light/5 border-light/10",
    gradient: "bg-gradient-to-r from-primary-green/20 to-primary-green/10 border-primary-green/30",
    purple: "bg-gradient-to-r from-primary-purple/20 to-primary-purple/10 border-primary-purple/30",
    green: "bg-gradient-to-r from-primary-green/20 to-primary-green/10 border-primary-green/30"
  };

  const hoverClasses = hover ? "hover:shadow-[0_0_20px_rgba(254,224,114,0.1)] hover:transform hover:scale-105" : "";
  
  const borderHoverClasses = {
    default: "hover:border-primary-green/30",
    gradient: "hover:border-primary-green/50",
    purple: "hover:border-primary-purple/50",
    green: "hover:border-primary-green/50"
  };

  const translateClasses = {
    up: "lg:translate-y-4",
    down: "lg:-translate-y-4",
    none: ""
  };

  const heightClass = fullHeight ? "h-full flex flex-col" : "";

  return (
    <div className={`
      ${baseClasses} 
      ${variantClasses[variant]} 
      ${hover ? borderHoverClasses[variant] : ''} 
      ${hoverClasses} 
      ${translateClasses[translate]}
      ${heightClass}
      ${className}
    `}>
      <div className={fullHeight ? "flex-1 flex flex-col" : ""}>
        {children}
      </div>
    </div>
  );
} 