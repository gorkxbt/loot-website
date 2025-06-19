export default function PhoneMockup() {
  return (
    <div className="mb-16">
      <div className="relative mx-auto w-64 h-96 bg-light/20 rounded-3xl p-2 shadow-2xl backdrop-blur-sm border border-light/30">
        <div className="w-full h-full bg-gradient-to-br from-dark to-dark/80 rounded-2xl p-4 flex flex-col">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-green to-primary-yellow rounded-lg"></div>
            <span className="ml-2 text-lg font-bold text-light">Loot</span>
          </div>
          <div className="bg-light/10 rounded-lg p-3 mb-3 border border-light/20">
            <div className="h-2 bg-light/30 rounded mb-2"></div>
            <div className="h-2 bg-light/30 rounded w-3/4"></div>
          </div>
          <div className="bg-primary-green/20 rounded-lg p-3 mb-3 border border-primary-green/40">
            <div className="h-2 bg-primary-green/60 rounded mb-2"></div>
            <div className="h-2 bg-primary-green/60 rounded w-2/3"></div>
          </div>
          <div className="bg-light/10 rounded-lg p-3 border border-light/20">
            <div className="h-2 bg-light/30 rounded mb-2"></div>
            <div className="h-2 bg-light/30 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 