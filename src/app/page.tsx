import BackgroundElements from '@/components/sections/BackgroundElements';
import LandingHero from '@/components/sections/LandingHero';

export default function HomePage() {
  return (
    <div className="pt-16 min-h-screen bg-dark relative overflow-hidden">
      <BackgroundElements />
      <LandingHero />
    </div>
  );
} 