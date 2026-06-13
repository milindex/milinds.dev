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
        { y: '25%' },
        {
          y: '-25%',
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none overflow-hidden"
      style={{ userSelect: 'none' }}
    >
      <span
        className="whitespace-nowrap font-bold leading-none"
        style={{
          fontSize: 'clamp(120px, 20vw, 280px)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255, 90, 54, 0.07)',
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default SectionHeadingBg;
