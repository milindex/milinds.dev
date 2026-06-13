'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FloatingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { y: 80, opacity: 0 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: '600px',
        onToggle: (self) => {
          gsap.to(el, {
            y: self.isActive ? 0 : 80,
            opacity: self.isActive ? 1 : 0,
            duration: 0.4,
            ease: 'power3.out',
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col items-end gap-2">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-medium text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-brand-hover hover:scale-[1.02]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Get In Touch
          </Link>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-surface-1/80 px-5 text-sm font-medium text-text-primary backdrop-blur-sm transition-all duration-200 hover:bg-surface-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z"/></svg>
            Download CV
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg transition-all duration-200 hover:bg-brand-hover hover:scale-105 active:scale-95"
        aria-label={open ? 'Close quick actions' : 'Quick actions'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  );
}

export default FloatingCTA;
