import Button from '@/components/ui/Button';

export default function ComingSoonNotice() {
  return (
    <div className="mt-16 bg-gradient-to-r from-primary-green/20 to-primary-green/10 rounded-xl p-8 border border-primary-green/30">
      <h3 className="text-2xl font-bold text-light mb-4">
        <span className="text-primary-purple">Coming Soon</span>
      </h3>
      <p className="text-light/80 mb-6">
        We're putting the finishing touches on our <span className="text-primary-purple">mobile app</span>. Join our waitlist to be notified when it's ready for download!
      </p>
      <Button variant="primary">
        Join the Waitlist
      </Button>
    </div>
  );
} 