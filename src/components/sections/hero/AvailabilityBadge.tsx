'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function AvailabilityBadge() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { opacity: 0, duration: 0.3, delay: 1.1 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-8 flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
      </span>
      <span className="text-sm text-text-secondary">Available for Select Projects</span>
    </div>
  );
}

export default AvailabilityBadge;
