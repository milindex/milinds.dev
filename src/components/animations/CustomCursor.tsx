'use client';

import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';

type CursorState = 'default' | 'view' | 'visit' | 'explore' | 'drag' | 'read';

const stateConfig: Record<CursorState, { size: number; label?: string }> = {
  default: { size: 32 },
  view: { size: 48, label: 'View' },
  visit: { size: 48, label: 'Visit' },
  explore: { size: 48, label: 'Explore' },
  drag: { size: 48, label: 'Drag' },
  read: { size: 48, label: 'Read' },
};

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const stateRef = useRef<CursorState>('default');
  const posRef = useRef({ x: -100, y: -100 });

  const updateCursor = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    posRef.current = { x: clientX, y: clientY };

    // Dot follows instantly
    gsap.set(dotRef.current, { x: clientX, y: clientY });

    // Ring follows with slight lag
    gsap.to(ringRef.current, {
      x: clientX,
      y: clientY,
      duration: 0.15,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    // Label follows ring
    gsap.to(labelRef.current, {
      x: clientX + 20,
      y: clientY - 20,
      duration: 0.15,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, []);

  const setCursorState = useCallback((state: CursorState) => {
    if (stateRef.current === state) return;
    stateRef.current = state;
    const config = stateConfig[state];

    gsap.to(ringRef.current, {
      width: config.size,
      height: config.size,
      duration: 0.3,
      ease: 'power3.out',
      overwrite: 'auto',
    });

    gsap.to(labelRef.current, {
      opacity: config.label ? 1 : 0,
      duration: 0.2,
      overwrite: 'auto',
    });

    if (config.label) {
      const el = labelRef.current;
      if (el) el.textContent = config.label;
    }
  }, []);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    document.body.classList.add('custom-cursor-active');
    window.addEventListener('mousemove', updateCursor);

    // Event delegation: listen on document instead of individual elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorEl) {
        const attr = cursorEl.getAttribute('data-cursor') as CursorState | null;
        if (attr && stateConfig[attr]) {
          setCursorState(attr);
          return;
        }
      }
      // If hovering over any link or button without data-cursor, show pointer state
      const interactive = target.closest('a, button, [role="button"]');
      if (interactive && stateRef.current !== 'default') {
        // Keep current state if set by data-cursor
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      // Only reset if not moving to another data-cursor element
      if (!related || !related.closest('[data-cursor]')) {
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
