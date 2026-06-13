'use client';

import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';

type CursorState = 'default' | 'view' | 'visit' | 'explore' | 'drag' | 'read';

const stateConfig: Record<CursorState, { size: number; label?: string }> = {
  default: { size: 32 },
  view: { size: 56, label: 'View' },
  visit: { size: 56, label: 'Visit' },
  explore: { size: 56, label: 'Explore' },
  drag: { size: 56, label: 'Drag' },
  read: { size: 56, label: 'Read' },
};

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const stateRef = useRef<CursorState>('default');
  const posRef = useRef({ x: -100, y: -100 });
  const magneticRef = useRef({ x: 0, y: 0 });

  const updateCursor = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    posRef.current = { x: clientX, y: clientY };

    const targetX = clientX + magneticRef.current.x;
    const targetY = clientY + magneticRef.current.y;

    // Dot follows instantly with magnetic offset
    gsap.set(dotRef.current, { x: targetX, y: targetY });

    // Ring follows with spring physics
    gsap.to(ringRef.current, {
      x: targetX,
      y: targetY,
      duration: 0.4,
      ease: 'elastic.out(1, 0.3)',
      overwrite: 'auto',
    });

    // Label follows
    gsap.to(labelRef.current, {
      x: targetX + 20,
      y: targetY - 20,
      duration: 0.3,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, []);

  const setCursorState = useCallback((state: CursorState) => {
    if (stateRef.current === state) return;
    stateRef.current = state;
    const config = stateConfig[state];

    // Ring size with pulse: briefly overshoot then settle
    const tl = gsap.timeline();
    tl.to(ringRef.current, {
      width: config.size * 1.15,
      height: config.size * 1.15,
      duration: 0.15,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    tl.to(ringRef.current, {
      width: config.size,
      height: config.size,
      duration: 0.4,
      ease: 'elastic.out(1, 0.3)',
    });

    // Dot shrink on hover
    gsap.to(dotRef.current, {
      scale: state === 'default' ? 1 : 0.6,
      duration: 0.3,
      ease: 'power3.out',
      overwrite: 'auto',
    });

    // Label with slide-up
    gsap.to(labelRef.current, {
      opacity: config.label ? 1 : 0,
      y: config.label ? 0 : 8,
      duration: 0.3,
      ease: 'power3.out',
      overwrite: 'auto',
    });

    if (config.label) {
      const el = labelRef.current;
      if (el) {
        el.textContent = config.label;
        gsap.set(el, { y: 8 });
      }
    }
  }, []);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    document.body.classList.add('custom-cursor-active');
    window.addEventListener('mousemove', updateCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorEl) {
        const attr = cursorEl.getAttribute('data-cursor') as CursorState | null;
        if (attr && stateConfig[attr]) {
          // Magnetic pull toward element center
          const rect = cursorEl.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (cx - posRef.current.x) * 0.15;
          const dy = (cy - posRef.current.y) * 0.15;
          magneticRef.current = { x: dx, y: dy };

          setCursorState(attr);
          return;
        }
      }
      magneticRef.current = { x: 0, y: 0 };
      setCursorState('default');
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !related.closest('[data-cursor]')) {
        magneticRef.current = { x: 0, y: 0 };
        setCursorState('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [updateCursor, setCursorState]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 8,
          height: 8,
          background: '#FD5735',
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border"
        style={{
          width: 32,
          height: 32,
          borderColor: 'rgba(253, 87, 53, 0.5)',
        }}
      />

      {/* Label */}
      <span
        ref={labelRef}
        className="absolute text-sm font-medium opacity-0"
        style={{ color: '#FD5735' }}
      />
    </div>
  );
}

export default CustomCursor;
