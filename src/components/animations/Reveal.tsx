'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span' | 'p';
  delay?: number;
  duration?: number;
  y?: number;
};

function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  duration = 0.5,
  y = 20,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: 'power3.out',
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, duration, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export default Reveal;
