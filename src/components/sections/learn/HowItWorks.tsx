interface Step {
  number: number;
  title: string;
  description: string;
  variant: 'green' | 'purple' | 'gradient';
  direction: 'left' | 'right';
}

const steps: Step[] = [
  {
    number: 1,
    title: "Discover Products",
    description: "Our AI curates brands that match your style, budget, and values. Get personalized recommendations based on your preferences and shopping history.",
    variant: "green",
    direction: "left"
  },
  {
    number: 2,
    title: "Review and Share",
    description: "Write authentic reviews and share recommendations with friends. Help build a trusted community of shoppers and creators.",
    variant: "purple",
    direction: "right"
  },
  {
    number: 3,
    title: "Earn $LOOT",
    description: "Get rewarded with tokens for meaningful contributions to the community. Every review, referral, and purchase earns you $LOOT tokens.",
    variant: "gradient",
    direction: "left"
  }
];

export default function HowItWorks() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-light mb-12 text-center group-hover:text-primary-green transition-colors duration-300">
        How LootAI Works
      </h2>
      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.number} className={`flex flex-col ${step.direction === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 group`}>
            <div className="lg:w-1/3">
              <div className={`relative w-16 h-16 ${
                step.variant === 'green' ? 'bg-primary-green' :
                step.variant === 'purple' ? 'bg-primary-purple' :
                'bg-gradient-to-r from-primary-green to-primary-green/70'
              } rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center ${
                step.variant === 'purple' ? 'text-light' : 'text-dark'
              } font-bold text-xl transition-all duration-300 group-hover:scale-110 ${
                step.variant === 'green' ? 'group-hover:shadow-[0_0_20px_rgba(254,224,114,0.5)]' :
                step.variant === 'purple' ? 'group-hover:shadow-[0_0_20px_rgba(143,124,210,0.4)]' :
                'group-hover:shadow-[0_0_20px_rgba(254,224,114,0.4)]'
              }`}>
                {step.number}
                <div className="absolute inset-0 bg-primary-yellow/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
            <div className={`lg:w-2/3 bg-light/5 rounded-xl p-6 border border-light/10 backdrop-blur-sm ${
              step.variant === 'green' ? 'group-hover:border-primary-green/30' :
              step.variant === 'purple' ? 'group-hover:border-primary-purple/30' :
              'group-hover:border-primary-green/30'
            } transition-all duration-300`}>
              <h3 className={`font-semibold text-light mb-3 text-xl ${
                step.variant === 'green' ? 'group-hover:text-primary-green' :
                step.variant === 'purple' ? 'group-hover:text-primary-purple' :
                'group-hover:text-primary-green'
              } transition-colors duration-300`}>
                {step.title === "Earn $LOOT" ? (
                  <>Earn <span className="text-primary-purple drop-shadow-[0_0_6px_rgba(143,124,210,0.3)]">$LOOT</span></>
                ) : (
                  step.title
                )}
              </h3>
              <p className="text-light/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 