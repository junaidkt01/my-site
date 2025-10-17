'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
      smoothWheel: true,
      smoothTouch: false, // turn on for touch devices if you prefer
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
