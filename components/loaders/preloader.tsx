'use client';

import Image from 'next/image';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[10000] bg-background flex items-center justify-center">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Logo Container with Fade Pulse */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Logo with Fade Pulse Animation */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer Glow Layer 1 */}
          <div className="absolute w-40 h-40 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-fade-pulse" />
          
          {/* Outer Glow Layer 2 */}
          <div className="absolute w-48 h-48 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-fade-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Logo with Pulse */}
          <div className="relative z-10 bg-background rounded-full p-6 shadow-2xl">
            <Image
              src="/logo/logo.PNG"
              alt="Preloader"
              width={80}
              height={80}
              className="animate-pulse"
            />
          </div>
        </div>

        {/* Brand Name with Fade In */}
        <div className="text-center space-y-2 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-wider">
            SOLVIX
          </h2>
          <p className="text-xs md:text-sm text-foreground/40 tracking-widest uppercase">
            Core Platform
          </p>
        </div>

        {/* Pulsing Dots */}
        <div className="flex gap-2 mt-4">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fade-pulse {
          animation: fade-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
