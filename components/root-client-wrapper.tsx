'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SplashScreen, RouteTransitionLoader } from '@/components/loaders';

export default function RootClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);
  const [showRouteTransition, setShowRouteTransition] = useState(false);
  const [previousPathname, setPreviousPathname] = useState<string | null>(null);

  // Handle initial splash screen
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  // Handle route transitions
  useEffect(() => {
    if (previousPathname && previousPathname !== pathname) {
      setShowRouteTransition(true);
      const transitionTimer = setTimeout(() => {
        setShowRouteTransition(false);
      }, 1000);

      return () => clearTimeout(transitionTimer);
    }

    setPreviousPathname(pathname);
  }, [pathname, previousPathname]);

  return (
    <>
      <SplashScreen isVisible={showSplash} />
      <RouteTransitionLoader show={showRouteTransition} />
      {children}
    </>
  );
}
