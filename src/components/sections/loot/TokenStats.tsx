import StatsCard from '@/components/ui/StatsCard';

export default function TokenStats() {
  return (
    <div className="grid lg:grid-cols-4 gap-6 mb-20">
      <StatsCard 
        value="1B"
        label="Total Supply"
        description="Fixed supply with deflationary mechanisms"
        variant="green"
        size="large"
        className="lg:col-span-2 lg:translate-y-4"
      />
      <StatsCard 
        value="5%"
        label="Marketing"
        variant="purple"
        size="medium"
      />
      <StatsCard 
        value="Pump.fun"
        label="Launch Platform"
        variant="gradient"
        size="small"
        className="lg:-translate-y-4"
      />
    </div>
  );
} 