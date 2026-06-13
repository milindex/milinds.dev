'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ScrollStoryOptions = {
  trigger?: string | Element;
  stagger?: number;
  duration?: number;
  y?: number;
  start?: string;
};

export function useScrollStory({
  trigger,
  stagger = 0.08,
  duration = 0.8,
  y = 40,
  start = 'top 85%',
}: ScrollStoryOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const children = el.children;
      if (children.length === 0) return;

      gsap.fromTo(
        children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger: Math.min(stagger, 0.12),
          ease: 'power4.out',
          scrollTrigger: {
            trigger: trigger || el,
            start,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [trigger, stagger, duration, y, start]);

  return ref;
}
