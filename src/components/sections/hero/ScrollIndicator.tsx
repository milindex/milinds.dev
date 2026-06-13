'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.8 });
      tl.from(ref.current, { opacity: 0, duration: 0.3 })
        .to(ref.current, { opacity: 0.4, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <span className="text-xs tracking-[0.2em] text-text-muted">
        Scroll to Explore
      </span>
    </div>
  );
}

export default ScrollIndicator;
