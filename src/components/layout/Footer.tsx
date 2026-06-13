'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiteConfig } from '@/constants';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: SiteConfig.social.github, label: 'GitHub' },
  { href: SiteConfig.social.linkedin, label: 'LinkedIn' },
  { href: `mailto:${SiteConfig.email}`, label: 'Email' },
];

const resourceLinks = [
  { href: '/assets/resume.pdf', label: 'Resume' },
  { href: '/uses', label: 'Uses' },
  { href: '/now', label: 'Now' },
  { href: '/experiments', label: 'Lab' },
];

type AccordionSection = 'navigate' | 'connect' | 'resources';

function AccordionGroup({
  label,
  links,
  open,
  onToggle,
}: {
  label: string;
  links: { href: string; label: string; external?: boolean }[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.05] lg:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-xs font-medium uppercase tracking-wider text-text-muted lg:pointer-events-none lg:py-0 lg:pb-4"
        aria-expanded={open}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={`transition-transform duration-200 lg:hidden ${open ? 'rotate-180' : ''}`}
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] pb-4' : 'max-h-0 lg:!max-h-[500px] lg:!pb-0'
        }`}
      >
        <ul className="space-y-3">
          {links.map(({ href, label: linkLabel, external }) =>
            external || href.startsWith('http') || href.startsWith('mailto') ? (
              <li key={linkLabel}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {linkLabel}
                </a>
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {linkLabel}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  const [accordion, setAccordion] = useState<AccordionSection | null>(null);

  const toggle = (section: AccordionSection) =>
    setAccordion(accordion === section ? null : section);

  return (
    <footer className="border-t border-white/[0.05] bg-bg-primary">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
        <div className="lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          {/* Accordion sections on mobile, normal columns on desktop */}
          <div className="lg:contents">
            <AccordionGroup
              label="Navigate"
              links={navLinks}
              open={accordion === 'navigate'}
              onToggle={() => toggle('navigate')}
            />
            <AccordionGroup
              label="Connect"
              links={socialLinks.map((l) => ({ ...l, external: true }))}
              open={accordion === 'connect'}
              onToggle={() => toggle('connect')}
            />
            <AccordionGroup
              label="Resources"
              links={resourceLinks}
              open={accordion === 'resources'}
              onToggle={() => toggle('resources')}
            />
          </div>

          {/* Bio — last on mobile, first on desktop */}
          <div className="pt-6 lg:pt-0 lg:order-first lg:pb-0">
            <p className="text-sm leading-relaxed text-text-secondary max-w-xs">
              {SiteConfig.tagline}
            </p>
            <p className="mt-6 text-xs text-text-muted">
              {SiteConfig.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
