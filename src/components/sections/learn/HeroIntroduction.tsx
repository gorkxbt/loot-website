import Card from '@/components/ui/Card';

export default function HeroIntroduction() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-20">
      <Card translate="up" className="group min-h-[280px]">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold text-light mb-6 group-hover:text-primary-green transition-colors duration-300">What is LootAI?</h2>
            <p className="text-light/80 leading-relaxed text-lg">
              LootAI is an <span className="text-primary-purple drop-shadow-[0_0_6px_rgba(143,124,210,0.3)]">AI-powered</span> shopping companion that helps you discover unique, high-quality products from independent brands, crypto-native merchants, and <span className="text-primary-purple drop-shadow-[0_0_6px_rgba(143,124,210,0.3)]">Solana ecosystem</span> stores.
            </p>
          </div>
        </div>
      </Card>
      
      <Card variant="green" translate="down" className="min-h-[280px]">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold text-light mb-6">Built for Trust</h2>
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-primary-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-light/90 text-lg">Transparent rewards</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-primary-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-light/90 text-lg">Ethical AI recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-primary-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-light/90 text-lg">Vetted partner brands</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 