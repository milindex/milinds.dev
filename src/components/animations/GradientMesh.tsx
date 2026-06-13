'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function GradientMesh() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        backgroundPosition: '100% 100%',
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(600px circle at 20% 30%, rgba(253, 87, 53, 0.08), transparent 50%), radial-gradient(400px circle at 80% 70%, rgba(253, 87, 53, 0.04), transparent 50%)',
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%',
      }}
    />
  );
}

export default GradientMesh;
