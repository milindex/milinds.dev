'use client';

import { useCallback, useRef } from 'react';
import gsap from 'gsap';

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  [key: string]: unknown;
};

function MagneticButton({
  children,
  className = '',
  as: Tag = 'button',
  href,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power3.out',
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {Tag === 'a' ? (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      ) : (
        <button className={className} {...props}>
          {children}
        </button>
      )}
    </div>
  );
}

export default MagneticButton;
