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
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const stateRef = useRef<CursorState>('default');

  const updateCursor = useCallback((e: MouseEvent) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0,
      ease: 'none',
    });
    gsap.to(ringRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    });
  }, []);

  const setCursorState = useCallback((state: CursorState) => {
    if (stateRef.current === state) return;
    stateRef.current = state;
    const config = stateConfig[state];

    gsap.to(ringRef.current, {
      width: config.size,
      height: config.size,
      marginLeft: -(config.size / 2),
      marginTop: -(config.size / 2),
      duration: 0.3,
      ease: 'power3.out',
    });

    if (labelRef.current) {
      gsap.to(labelRef.current, {
        opacity: config.label ? 1 : 0,
        duration: 0.2,
      });
      if (config.label) {
        labelRef.current.textContent = config.label;
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

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor') as CursorState | null;
      if (cursorAttr && stateConfig[cursorAttr]) {
        setCursorState(cursorAttr);
      }
    };

    const handleMouseLeave = () => setCursorState('default');

    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            node.querySelectorAll('[data-cursor]').forEach((el) => {
              el.addEventListener('mouseenter', handleMouseEnter as EventListener);
              el.addEventListener('mouseleave', handleMouseLeave);
            });
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updateCursor);
      observer.disconnect();
    };
  }, [updateCursor, setCursorState]);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div
          ref={ringRef}
          className="flex items-center justify-center rounded-full border"
          style={{
            width: 32,
            height: 32,
            borderColor: 'rgba(253, 87, 53, 0.5)',
            marginLeft: -16,
            marginTop: -16,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: '#FD5735',
            }}
          />
        </div>
      </div>
      <span
        ref={labelRef}
        className="pointer-events-none fixed z-[9999] text-sm font-medium opacity-0"
        style={{ color: '#FD5735' }}
      />
    </>
  );
}

export default CustomCursor;
