'use client';

import Image from 'next/image';

interface FullscreenLoaderProps {
  isVisible: boolean;
  message?: string;
  progress?: number;
}

export default function FullscreenLoader({ 
  isVisible, 
  message = 'Processing...', 
  progress 
}: FullscreenLoaderProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-sm flex items-center justify-center">
      {/* Animated Pulsing Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 animate-pulse-slow" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-md mx-4">
        {/* Logo Section with Pulsing Glow */}
        <div className="relative">
          {/* Pulsing Glow Layers */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 animate-pulse-glow" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 to-primary/30 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />

          {/* Inner Ring */}
          <div className="absolute -inset-1 rounded-full border border-primary/40 animate-pulse-border" />

          {/* Logo */}
          <div className="relative z-10 bg-background rounded-full p-6">
            <Image
              src="/logo/logo.PNG"
              alt="Loading"
              width={100}
              height={100}
              className="animate-pulse"
            />
          </div>
        </div>

        {/* Message */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">{message}</h3>
          <p className="text-sm text-foreground/60">Please wait while we process your request...</p>
        </div>

        {/* Progress Bar with Glow */}
        {progress !== undefined && (
          <div className="w-full space-y-2">
            <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden border border-primary/20">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 shadow-lg"
                style={{ 
                  width: `${progress}%`,
                  boxShadow: `0 0 20px rgba(0, 188, 212, 0.6)`,
                }}
              />
            </div>
            <p className="text-xs text-foreground/50 text-center font-medium">{progress}%</p>
          </div>
        )}

        {/* Pulsing Dots */}
        {progress === undefined && (
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-dot" style={{ animationDelay: '0s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse-dot" style={{ animationDelay: '0.3s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-dot" style={{ animationDelay: '0.6s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
        }
        
        @keyframes pulse-border {
          0%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 0 0 rgba(0, 188, 212, 0);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 15px 5px rgba(0, 188, 212, 0.4);
          }
        }
        
        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.4);
            opacity: 1;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-border {
          animation: pulse-border 2.5s ease-in-out infinite;
        }
        
        .animate-pulse-dot {
          animation: pulse-dot 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
