import Card from '@/components/ui/Card';

export default function BlockchainInfo() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card translate="up">
        <h2 className="text-2xl font-bold text-light mb-4">
          Built on <span className="text-primary-purple">Solana</span>
        </h2>
        <p className="text-light/80 mb-6">
          $LOOT is built on the <span className="text-primary-purple">Solana blockchain</span>, ensuring fast, low-cost, and eco-friendly transactions for all users.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-primary-green rounded-full"></div>
            <span className="text-light/90">Sub-second transactions</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-primary-purple rounded-full"></div>
            <span className="text-light/90">Ultra-low fees (&lt;$0.01)</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-gradient-to-r from-primary-green to-primary-green/70 rounded-full"></div>
            <span className="text-light/90">Carbon neutral network</span>
          </div>
        </div>
      </Card>

      <Card variant="purple" translate="down">
        <h3 className="text-xl font-bold text-light mb-4">Token Economics</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-light/80">Community Rewards</span>
            <span className="text-primary-green font-semibold">60%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-light/80">Team & Development</span>
            <span className="text-primary-purple font-semibold">20%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-light/80">Liquidity & Treasury</span>
            <span className="text-primary-green font-semibold">15%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-light/80">Marketing</span>
            <span className="text-primary-purple font-semibold">5%</span>
          </div>
        </div>
      </Card>
    </div>
  );
} 