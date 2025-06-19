interface EarnMethod {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'green' | 'purple' | 'gradient';
  direction: 'left' | 'right';
}

const earnMethods: EarnMethod[] = [
  {
    title: "Write Reviews",
    description: "Earn tokens for authentic product reviews and unboxings. The more detailed and helpful your reviews, the more $LOOT you earn. Quality content is rewarded with bonus multipliers.",
    icon: (
      <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    variant: "green",
    direction: "left"
  },
  {
    title: "Share & Refer",
    description: "Get rewarded for sharing recommendations with friends and growing the community. Earn bonus $LOOT when your referrals make their first purchase or review.",
    icon: (
      <svg className="w-10 h-10 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
      </svg>
    ),
    variant: "purple",
    direction: "right"
  },
  {
    title: "Make Purchases",
    description: "Earn cashback tokens when shopping with partner brands. Higher-tier members get increased cashback rates and exclusive early access to sales.",
    icon: (
      <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    variant: "gradient",
    direction: "left"
  }
];

export default function HowToEarn() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-light mb-12 text-center">How to Earn $LOOT Tokens</h2>
      <div className="space-y-8">
        {earnMethods.map((method, index) => (
          <div key={index} className={`flex flex-col ${method.direction === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 group`}>
            <div className="lg:w-1/4 flex justify-center lg:justify-start">
              <div className={`w-24 h-24 ${
                method.variant === 'green' ? 'bg-primary-green' :
                method.variant === 'purple' ? 'bg-primary-purple' :
                'bg-gradient-to-r from-primary-green to-primary-green/70'
              } rounded-full flex items-center justify-center ${
                method.variant === 'green' ? 'hover:shadow-[0_0_20px_rgba(254,224,114,0.4)]' :
                method.variant === 'purple' ? 'group-hover:shadow-[0_0_20px_rgba(143,124,210,0.4)]' :
                'group-hover:shadow-[0_0_20px_rgba(254,224,114,0.4)]'
              } transition-all duration-300 group-hover:scale-110`}>
                {method.icon}
              </div>
            </div>
            <div className={`lg:w-3/4 bg-light/5 rounded-xl p-8 border border-light/10 backdrop-blur-sm min-h-[180px] flex flex-col justify-center ${
              method.variant === 'green' ? 'group-hover:border-primary-green/30' :
              method.variant === 'purple' ? 'group-hover:border-primary-purple/30' :
              'group-hover:border-primary-green/30'
            } transition-all duration-300`}>
              <h3 className={`font-semibold text-light mb-4 text-2xl ${
                method.variant === 'green' ? 'group-hover:text-primary-green' :
                method.variant === 'purple' ? 'group-hover:text-primary-purple' :
                'group-hover:text-primary-green'
              } transition-colors duration-300`}>
                {method.title === "Make Purchases" ? (
                  <>Make <span className="text-primary-purple">Purchases</span></>
                ) : (
                  method.title
                )}
              </h3>
              <p className="text-light/70 text-lg leading-relaxed">{method.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 