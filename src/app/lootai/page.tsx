import PageLayout from '@/components/layout/PageLayout';
import ChatInterface from '@/components/sections/lootai/ChatInterface';
import AIFeatures from '@/components/sections/lootai/AIFeatures';

export default function LootAIPage() {
  const title = (
    <>
      <span className="bg-gradient-to-r from-primary-green to-primary-green/70 bg-clip-text text-transparent">LootAI</span> Personal Shopper
    </>
  );
  
  const subtitle = (
    <>
      Your <span className="text-primary-purple">AI-powered</span> shopping companion for discovering unique brands and products
    </>
  );

  return (
    <PageLayout title={title} subtitle={subtitle} className="py-12">
      <ChatInterface />
      <AIFeatures />
    </PageLayout>
  );
} 