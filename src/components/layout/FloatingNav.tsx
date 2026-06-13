'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '@/components/svg/Logo';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
];

function FloatingNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.to(nav, {
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(24px)',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: '80px',
          end: '81px',
          scrub: true,
        },
      });
    }, nav);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed left-1/2 top-4 z-100 flex h-14 w-[calc(100%-32px)] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-[999px] border border-transparent bg-transparent px-6"
    >
      <Link href="/" className="flex items-center">
        <Logo />
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === href
                ? 'text-brand-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <button
        className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`h-[2px] w-5 bg-text-primary transition-all duration-200 ${
          mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''
        }`} />
        <span className={`h-[2px] w-5 bg-text-primary transition-all duration-200 ${
          mobileOpen ? 'opacity-0' : ''
        }`} />
        <span className={`h-[2px] w-5 bg-text-primary transition-all duration-200 ${
          mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''
        }`} />
      </button>
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[72px] mx-auto w-[calc(100%-32px)] max-w-[1200px] md:hidden">
          <nav className="rounded-[20px] border border-white/[0.08] bg-[rgba(10,10,10,0.95)] p-4 backdrop-blur-2xl">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                  pathname === href
                    ? 'text-brand-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default FloatingNav;
