import PageLayout from '@/components/layout/PageLayout';
import PhoneMockup from '@/components/sections/app/PhoneMockup';
import DownloadButtons from '@/components/sections/app/DownloadButtons';
import ComingSoonNotice from '@/components/sections/app/ComingSoonNotice';

export default function AppPage() {
  const title = (
    <>
      Download the <span className="bg-gradient-to-r from-primary-green to-primary-green/70 bg-clip-text text-transparent">LootAI</span> App
    </>
  );
  
  const subtitle = (
    <>
      Take your shopping experience <span className="text-primary-purple">mobile</span>. Discover products, earn rewards, and chat with your <span className="text-primary-purple">AI</span> personal shopper anywhere, anytime.
    </>
  );

  return (
    <PageLayout title={title} subtitle={subtitle}>
      <PhoneMockup />
      <DownloadButtons />
      <ComingSoonNotice />
    </PageLayout>
  );
} 