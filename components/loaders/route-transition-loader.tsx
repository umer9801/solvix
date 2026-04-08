'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface RouteTransitionLoaderProps {
  show?: boolean;
}

export default function RouteTransitionLoader({ show = false }: RouteTransitionLoaderProps) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9997] bg-background/90 backdrop-blur-md flex items-center justify-center pointer-events-none">
      {/* Neon Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-accent/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-neon-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo with Neon Glow */}
        <div className="relative">
          {/* Neon Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/50 blur-sm animate-neon-pulse" style={{ boxShadow: '0 0 20px rgba(0, 188, 212, 0.8)' }} />
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Logo */}
          <Image
            src="/logo/logo.PNG"
            alt="Route Transition"
            width={80}
            height={80}
            className="animate-pulse"
            style={{ filter: 'drop-shadow(0 0 10px rgba(0, 188, 212, 0.8))' }}
          />
        </div>

        {/* Neon Bars */}
        <div className="flex gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full animate-neon-bar" style={{ boxShadow: '0 0 10px rgba(0, 188, 212, 0.8)', animationDelay: '0s' }} />
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full animate-neon-bar" style={{ boxShadow: '0 0 10px rgba(0, 188, 212, 0.8)', animationDelay: '0.2s' }} />
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full animate-neon-bar" style={{ boxShadow: '0 0 10px rgba(0, 188, 212, 0.8)', animationDelay: '0.4s' }} />
        </div>

        {/* Loading Text */}
        <p className="text-sm text-foreground/60 font-medium tracking-wider">Navigating...</p>
      </div>

      <style jsx>{`
        @keyframes neon-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }
        
        @keyframes neon-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes neon-bar {
          0%, 100% {
            transform: scaleY(0.5);
            opacity: 0.4;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        
        .animate-neon-glow {
          animation: neon-glow 3s ease-in-out infinite;
        }
        
        .animate-neon-pulse {
          animation: neon-pulse 2s ease-in-out infinite;
        }
        
        .animate-neon-bar {
          animation: neon-bar 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
