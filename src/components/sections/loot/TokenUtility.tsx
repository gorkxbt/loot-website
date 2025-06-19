import Card from '@/components/ui/Card';

interface UtilityFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'green' | 'purple';
  colSpan?: 'single' | 'double';
  translate?: 'up' | 'down' | 'none';
}

const utilityFeatures: UtilityFeature[] = [
  {
    title: "Discounts at Partner Merchants",
    description: "Use tokens to get exclusive discounts and deals from our growing network of partner brands. Stack discounts with seasonal promotions for maximum savings.",
    icon: (
      <svg className="w-6 h-6 text-dark" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    variant: "green",
    colSpan: "double",
    translate: "up"
  },
  {
    title: "Access to Exclusive Drops",
    description: "Early access to limited edition products and private sales events.",
    icon: (
      <svg className="w-6 h-6 text-light" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    variant: "purple",
    colSpan: "single",
    translate: "down"
  },
  {
    title: "Tipping Top Reviewers",
    description: "Reward helpful reviewers and content creators with direct tips.",
    icon: (
      <svg className="w-6 h-6 text-dark" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    variant: "green",
    colSpan: "single",
    translate: "none"
  },
  {
    title: "Premium AI Features",
    description: "Unlock advanced personalization, style analysis, and predictive recommendations. Get AI-powered outfit suggestions and trend forecasting.",
    icon: (
      <svg className="w-6 h-6 text-light" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    variant: "purple",
    colSpan: "double",
    translate: "up"
  }
];

export default function TokenUtility() {
  return (
    <div className="bg-gradient-to-r from-primary-green/20 to-primary-green/10 rounded-xl p-8 mb-12 border border-primary-green/30">
      <h2 className="text-3xl font-bold text-light mb-8 text-center">Token Utility</h2>
      <div className="grid lg:grid-cols-3 gap-6">
        {utilityFeatures.map((feature, index) => (
          <Card
            key={index}
            variant={feature.variant}
            translate={feature.translate}
            className={`${feature.colSpan === 'double' ? 'lg:col-span-2' : 'lg:col-span-1'} ${feature.colSpan === 'single' ? 'min-h-[220px]' : 'min-h-[200px]'}`}
          >
            <div className="flex items-start space-x-4 h-full">
              <div className={`w-14 h-14 ${
                feature.variant === 'green' ? 'bg-primary-green' : 'bg-primary-purple'
              } rounded-full flex-shrink-0 mt-1 flex items-center justify-center`}>
                {feature.icon}
              </div>
              <div className="flex-1 min-h-0">
                <h3 className={`font-semibold text-light ${feature.colSpan === 'double' ? 'text-2xl mb-4' : 'text-xl mb-3'}`}>
                  {feature.title === "Access to Exclusive Drops" ? (
                    <>Access to <span className="text-primary-purple">Exclusive</span> Drops</>
                  ) : feature.title === "Premium AI Features" ? (
                    <>Premium <span className="text-primary-purple">AI</span> Features</>
                  ) : (
                    feature.title
                  )}
                </h3>
                <p className={`text-light/70 ${feature.colSpan === 'double' ? 'text-lg' : 'text-base'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 