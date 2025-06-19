export default function BackgroundElements() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-yellow/3 rounded-full blur-3xl animate-pulse [animation-delay:0.5s]"></div>
    </div>
  );
} 