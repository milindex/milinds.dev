'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'trust', label: 'Trust Bar' },
  { id: 'clients', label: 'Selected Work' },
  { id: 'work', label: 'Case Studies' },
  { id: 'timeline', label: 'Career Journey' },
  { id: 'tech', label: 'Technology' },
  { id: 'writing', label: 'Writing' },
  { id: 'experiments', label: 'Labs' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'availability', label: 'Availability' },
  { id: 'contact', label: 'Contact' },
];

function SectionProgress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Show after scrolling past hero
      ScrollTrigger.create({
        trigger: document.body,
        start: '100px',
        onToggle: (self) => {
          if (self.isActive) setVisible(true);
          else setVisible(false);
        },
      });

      // Track which section is active
      SECTIONS.forEach(({ id }, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(i);
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block" aria-label="Section navigation">
      <div className="relative flex flex-col items-center gap-3">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.08]" />

        {SECTIONS.map(({ id, label }, i) => (
          <button
            key={id}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative flex h-3 w-3 items-center justify-center"
            aria-label={`Navigate to ${label}`}
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'h-2 w-2 bg-brand-primary'
                  : 'h-1.5 w-1.5 bg-white/20'
              }`}
            />
            <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-surface-2 px-2 py-1 text-xs text-text-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default SectionProgress;
