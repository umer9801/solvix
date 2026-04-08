'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  isVisible?: boolean;
  onComplete?: () => void;
}

export default function SplashScreen({ isVisible = true, onComplete }: SplashScreenProps) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (!isVisible) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated Glow Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-glow-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/15 rounded-full mix-blend-screen filter blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Logo with Animated Glow */}
        <div className="relative">
          {/* Glow Effect Layer 1 */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-3xl animate-glow-pulse" />
          
          {/* Glow Effect Layer 2 */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Logo Container */}
          <div className="relative bg-background rounded-full p-6 shadow-2xl shadow-primary/30">
            <Image
              src="/logo/logo.PNG"
              alt="Solvix Core Logo"
              width={100}
              height={100}
              className="animate-pulse"
              priority
            />
          </div>
        </div>

        {/* Brand Name with Fade In */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 animate-fade-in-up">
            SOLVIX CORE
          </h1>
          <p className="text-sm md:text-base text-foreground/60 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building Your Digital Future
          </p>
        </div>

        {/* Pulsing Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" style={{ animationDelay: '0s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
          <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" style={{ animationDelay: '0.3s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
          <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" style={{ animationDelay: '0.6s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
        </div>

        {/* Loading Text */}
        <p className="text-xs text-foreground/50 mt-4 animate-pulse">Loading...</p>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
