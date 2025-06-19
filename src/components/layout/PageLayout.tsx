import { ReactNode } from 'react';
import BackgroundElements from '@/components/sections/BackgroundElements';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  hasBackground?: boolean;
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
}

export default function PageLayout({ 
  children, 
  className = '', 
  hasBackground = false,
  title,
  subtitle,
  description
}: PageLayoutProps) {
  return (
    <div className={`pt-16 min-h-screen bg-dark ${hasBackground ? 'relative overflow-hidden' : ''} ${className}`}>
      {hasBackground && <BackgroundElements />}
      
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {(title || subtitle || description) && (
            <div className="text-center mb-16">
              {title && (
                <h1 className="text-4xl md:text-5xl font-bold text-light mb-6">
                  {title}
                </h1>
              )}
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
            </div>
          )}
          {children}
        </div>
      </section>
    </div>
  );
} 