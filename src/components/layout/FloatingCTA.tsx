'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FloatingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
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
            duration: 0.5,
            ease: 'power3.out',
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const toggle = useCallback(() => {
    if (open) {
      // Close: animate items out then hide
      if (menuRef.current) {
        gsap.to(menuRef.current.children, {
          opacity: 0,
          x: 20,
          duration: 0.2,
          stagger: 0.05,
          ease: 'power2.in',
          onComplete: () => setOpen(false),
        });
      }
    } else {
      setOpen(true);
    }
  }, [open]);

  // Animate items in when open
  useEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(
        menuRef.current.children,
        { opacity: 0, x: 20, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.35,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {open && (
        <div ref={menuRef} className="flex flex-col items-end gap-2">
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center gap-3 rounded-full border border-white/[0.08] bg-[rgba(17,17,17,0.85)] px-6 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-brand-primary/30 hover:bg-[rgba(17,17,17,0.95)] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(253,87,53,0.1)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-brand-primary"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>Get In Touch</span>
          </Link>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center gap-3 rounded-full border border-white/[0.08] bg-[rgba(17,17,17,0.85)] px-6 text-sm font-medium text-text-secondary backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-[rgba(17,17,17,0.95)] hover:text-text-primary hover:scale-[1.02]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z"/></svg>
            <span>Download CV</span>
          </a>
        </div>
      )}
      <button
        onClick={toggle}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-cta-primary text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:scale-110 hover:shadow-[0_0_30px_rgba(253,87,53,0.3)] active:scale-95"
        aria-label={open ? 'Close quick actions' : 'Quick actions'}
      >
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-brand-primary/20 blur-md transition-all duration-300 group-hover:blur-xl group-hover:scale-125" />
        {/* Inner ring */}
        <div className="absolute inset-1 rounded-full border border-white/10" />
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="relative transition-transform duration-500 ease-out"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  );
}

export default FloatingCTA;
