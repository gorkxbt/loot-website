import Card from '@/components/ui/Card';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'green' | 'purple' | 'gradient';
}

const features: Feature[] = [
  {
    title: "Smart Discovery",
    description: "Find products that match your style, budget, and current needs",
    icon: (
      <svg className="w-6 h-6 text-dark transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    variant: "green"
  },
  {
    title: "Outfit Planning",
    description: "Get complete outfit suggestions based on weather and occasion",
    icon: (
      <svg className="w-6 h-6 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    variant: "purple"
  },
  {
    title: "Trend Alerts",
    description: "Stay ahead with early access to emerging brands and exclusive drops",
    icon: (
      <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    variant: "gradient"
  }
];

export default function AIFeatures() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {features.map((feature, index) => (
        <Card key={index} variant={feature.variant} className="group text-center">
          <div className={`relative w-12 h-12 ${
            feature.variant === 'green' ? 'bg-primary-green' :
            feature.variant === 'purple' ? 'bg-primary-purple' :
            'bg-gradient-to-r from-primary-green to-primary-green/70'
          } rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
            feature.variant === 'green' ? 'group-hover:shadow-[0_0_20px_rgba(254,224,114,0.4)]' :
            'group-hover:shadow-[0_0_20px_rgba(143,124,210,0.4)]'
          }`}>
            {feature.icon}
            <div className="absolute inset-0 bg-primary-yellow/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          <h3 className={`font-semibold text-light mb-2 ${
            feature.variant === 'green' ? 'group-hover:text-primary-green' :
            'group-hover:text-primary-purple'
          } transition-colors duration-300`}>
            {feature.title === "Trend Alerts" ? (
              <><span className="text-primary-purple">Trend</span> Alerts</>
            ) : (
              feature.title
            )}
          </h3>
          <p className="text-light/70 text-sm">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
} 