import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'green' | 'purple';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseClasses = "font-bold rounded-lg transition-all duration-300 relative overflow-hidden";
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-3 text-lg",
    large: "px-12 py-4 text-xl"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-green to-primary-green/80 text-dark hover:shadow-[0_0_20px_rgba(178,226,79,0.4)] hover:scale-105",
    secondary: "bg-gradient-to-r from-primary-purple to-primary-purple/80 text-light hover:shadow-[0_0_20px_rgba(143,124,210,0.4)] hover:scale-105",
    outline: "border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-dark hover:shadow-[0_0_20px_rgba(178,226,79,0.4)]",
    green: "bg-primary-green text-dark hover:shadow-[0_0_20px_rgba(178,226,79,0.4)] hover:scale-105",
    purple: "bg-primary-purple text-light hover:shadow-[0_0_20px_rgba(143,124,210,0.4)] hover:scale-105"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const allClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={allClasses}
    >
      {children}
    </button>
  );
} 