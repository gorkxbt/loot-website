import SplineAnimation from '@/components/ui/SplineAnimation';
import Button from '@/components/ui/Button';

export default function LandingHero() {
  return (
    <section className="py-32 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative">
          <h1 className="text-6xl md:text-8xl font-bold text-light mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary-green to-primary-green/70 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(178,226,79,0.3)]">
              LootAI
            </span>
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-yellow/10 to-transparent rounded-full blur-xl opacity-30 animate-pulse"></div>
        </div>
        
        <p className="text-2xl md:text-3xl text-light/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.3s]">
          <span className="text-primary-purple drop-shadow-[0_0_8px_rgba(143,124,210,0.4)]">Smarter</span> Shopping. <span className="text-primary-purple drop-shadow-[0_0_8px_rgba(143,124,210,0.4)]">Real</span> Rewards.
        </p>
        
        <p className="text-lg text-light/60 mb-12 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.5s]">
          Discover emerging brands, review products, and earn rewards — powered by <span className="text-primary-purple drop-shadow-[0_0_6px_rgba(143,124,210,0.3)]">AI</span> and the Solana blockchain.
        </p>

        {/* Spline Animation */}
        <div className="mb-12 animate-fade-in-up [animation-delay:0.6s]">
          <SplineAnimation />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:0.8s]">
          <button className="group bg-primary-green text-dark px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(254,224,114,0.4)] relative overflow-hidden">
            <span className="relative z-10">Join the Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="group border-2 border-primary-green text-primary-green px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-green hover:text-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(254,224,114,0.3)] relative">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-primary-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </button>
        </div>
      </div>
    </section>
  );
} 