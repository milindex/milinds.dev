'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import useMousePosition from '@/hooks/useMousePosition';

function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  const handleMouseMove = () => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (mouse.x - centerX) / 30;
    const deltaY = (mouse.y - centerY) / 30;

    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="overflow-hidden rounded-3xl shadow-2xl shadow-[0_0_60px_rgba(253,87,53,0.15)] max-lg:w-[280px] lg:w-[400px]"
      >
        <Image
          src="/assets/images/Milind-Sonawane.jpg"
          alt="Milind Sonawane"
          width={400}
          height={500}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default Portrait;
