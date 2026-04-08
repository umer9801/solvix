'use client';

import Image from 'next/image';

interface PageLoaderProps {
  isVisible?: boolean;
  message?: string;
}

export default function PageLoader({ isVisible = false, message = 'Loading...' }: PageLoaderProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9998] bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Logo with Glow Aura */}
        <div className="relative">
          {/* Glow Layer 1 */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-3xl animate-glow-expand" />
          
          {/* Glow Layer 2 */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-2xl animate-glow-expand" style={{ animationDelay: '0.3s' }} />
          
          {/* Logo Container */}
          <div className="relative bg-background rounded-full p-4 shadow-lg">
            <Image
              src="/logo/logo.PNG"
              alt="Loading"
              width={60}
              height={60}
              className="animate-pulse"
            />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-foreground/70 text-sm font-medium">{message}</p>

        {/* Glow Loading Bar */}
        <div className="w-48 h-1 bg-foreground/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50"
            style={{
              animation: 'glow-slide 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes glow-expand {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        
        @keyframes glow-slide {
          0% {
            transform: translateX(-100%);
            box-shadow: 0 0 0 0 rgba(0, 188, 212, 0);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(0, 188, 212, 0.5);
          }
          100% {
            transform: translateX(100%);
            box-shadow: 0 0 0 0 rgba(0, 188, 212, 0);
          }
        }
        
        .animate-glow-expand {
          animation: glow-expand 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
