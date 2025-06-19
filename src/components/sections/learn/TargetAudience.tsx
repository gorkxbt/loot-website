import Card from '@/components/ui/Card';

interface AudienceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'green' | 'purple' | 'gradient';
  colSpan?: 'single' | 'double';
  translate?: 'up' | 'down' | 'none';
}

const audienceCards: AudienceCard[] = [
  {
    title: "Smart Shoppers",
    description: "Who want to discover unique, relevant products from emerging brands and crypto-native merchants. Get ahead of trends and find items that truly match your style.",
    icon: (
      <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    variant: "green",
    colSpan: "double",
    translate: "up"
  },
  {
    title: "Content Creators",
    description: "Who care about authentic recommendations and want to earn from their influence.",
    icon: (
      <svg className="w-6 h-6 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    variant: "purple",
    colSpan: "single",
    translate: "down"
  },
  {
    title: "Crypto Users",
    description: "Seeking real-world token utility and Web3 shopping experiences.",
    icon: (
      <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    variant: "green",
    colSpan: "single",
    translate: "none"
  },
  {
    title: "Brand Enthusiasts & Early Adopters",
    description: "Who love discovering new brands before they become mainstream and want to be part of exclusive communities with early access to drops and collaborations.",
    icon: (
      <svg className="w-6 h-6 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    variant: "purple",
    colSpan: "double",
    translate: "up"
  }
];

export default function TargetAudience() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-light mb-12 text-center">Who is LootAI for?</h2>
      <div className="grid lg:grid-cols-3 gap-6">
        {audienceCards.map((card, index) => (
          <Card 
            key={index}
            variant={card.variant}
            translate={card.translate}
            className={`${card.colSpan === 'double' ? 'lg:col-span-2' : 'lg:col-span-1'} ${card.colSpan === 'single' ? 'min-h-[220px]' : 'min-h-[200px]'}`}
          >
            <div className="flex items-start space-x-4 h-full">
              <div className={`w-14 h-14 ${
                card.variant === 'green' ? 'bg-primary-green' :
                card.variant === 'purple' ? 'bg-primary-purple' :
                'bg-gradient-to-r from-primary-green to-primary-green/70'
              } rounded-full flex-shrink-0 mt-1 flex items-center justify-center`}>
                {card.icon}
              </div>
              <div className="flex-1 min-h-0">
                <h3 className={`font-semibold text-light ${card.colSpan === 'double' ? 'text-2xl mb-4' : 'text-xl mb-3'}`}>
                  {card.title}
                </h3>
                <p className={`text-light/70 ${card.colSpan === 'double' ? 'text-lg' : 'text-base'} leading-relaxed`}>
                  {card.description.includes('token utility') ? (
                    <>Seeking real-world <span className="text-primary-purple">token utility</span> and Web3 shopping experiences.</>
                  ) : card.description.includes('authentic') ? (
                    <>Who care about <span className="text-primary-purple">authentic</span> recommendations and want to earn from their influence.</>
                  ) : (
                    card.description
                  )}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 