'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EYEBROW_TEXT = 'FULL STACK DEVELOPER';

function Eyebrow() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: 20, opacity: 0, duration: 0.3, delay: 0.2 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <p
      ref={ref}
      className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-primary"
    >
      {EYEBROW_TEXT}
    </p>
  );
}

export default Eyebrow;
