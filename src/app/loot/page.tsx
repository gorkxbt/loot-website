import PageLayout from '@/components/layout/PageLayout';
import TokenStats from '@/components/sections/loot/TokenStats';
import HowToEarn from '@/components/sections/loot/HowToEarn';
import TokenUtility from '@/components/sections/loot/TokenUtility';
import BlockchainInfo from '@/components/sections/loot/BlockchainInfo';

export default function LootPage() {
  const title = (
    <>
      <span className="bg-gradient-to-r from-primary-green to-primary-green/70 bg-clip-text text-transparent">$LOOT</span> Token
    </>
  );
  
  const subtitle = (
    <>
      The <span className="text-primary-purple">utility token</span> powering the LootAI ecosystem. Earn rewards for authentic engagement and unlock exclusive benefits.
    </>
  );

  return (
    <PageLayout title={title} subtitle={subtitle}>
      <TokenStats />
      <HowToEarn />
      <TokenUtility />
      <BlockchainInfo />
    </PageLayout>
  );
} 