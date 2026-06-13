'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from '@/components/animations/MagneticButton';

function HeroCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.8,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-8 flex flex-wrap gap-4">
      <MagneticButton
        as="a"
        href="/projects"
        className="inline-flex h-[52px] items-center justify-center rounded-[12px] bg-brand-primary px-6 text-base font-medium text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition-colors hover:bg-brand-hover active:bg-brand-active"
      >
        View Case Studies
      </MagneticButton>
      <a
        href="/assets/resume.pdf"
        className="inline-flex h-[52px] items-center justify-center rounded-[12px] border border-white/20 bg-white/[3%] px-6 text-base font-medium text-text-primary backdrop-blur-sm transition-colors hover:bg-surface-1"
      >
        Download Resume
      </a>
    </div>
  );
}

export default HeroCTA;
