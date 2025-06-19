import PageLayout from '@/components/layout/PageLayout';
import HeroIntroduction from '@/components/sections/learn/HeroIntroduction';
import HowItWorks from '@/components/sections/learn/HowItWorks';
import TargetAudience from '@/components/sections/learn/TargetAudience';

export default function LearnPage() {
  const title = (
    <>
      Learn About <span className="bg-gradient-to-r from-primary-green to-primary-green/70 bg-clip-text text-transparent">LootAI</span>
    </>
  );

  return (
    <PageLayout title={title}>
      <HeroIntroduction />
      <HowItWorks />
      <TargetAudience />
    </PageLayout>
  );
} 