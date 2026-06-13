'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type SectionHeadingBgProps = {
  text: string;
};

function SectionHeadingBg({ text }: SectionHeadingBgProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { y: '40%' },
        {
          y: '-40%',
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-end pr-8 select-none will-change-transform"
      style={{ userSelect: 'none' }}
    >
      <span
        className="font-extrabold leading-none"
        style={{
          writingMode: 'vertical-rl',
          fontSize: 'clamp(80px, 12vw, 180px)',
          color: 'rgba(253, 87, 53, 0.04)',
          WebkitTextStroke: '2px rgba(253, 87, 53, 0.25)',
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default SectionHeadingBg;
