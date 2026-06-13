'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';
import Badge from '@/components/ui/Badge';

const CATEGORIES = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', years: '5+ yrs' },
      { name: 'Next.js', years: '4+ yrs' },
      { name: 'TypeScript', years: '4+ yrs' },
      { name: 'Tailwind', years: '3+ yrs' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', years: '5+ yrs' },
      { name: 'Express', years: '4+ yrs' },
      { name: 'Supabase', years: '1+ yrs' },
      { name: 'Firebase', years: '2+ yrs' },
    ],
  },
  {
    name: 'DevOps',
    items: [
      { name: 'Cloudflare', years: '3+ yrs' },
      { name: 'Docker', years: '3+ yrs' },
      { name: 'GitHub Actions', years: '3+ yrs' },
    ],
  },
  {
    name: 'CMS',
    items: [
      { name: 'WordPress', years: '6+ yrs' },
      { name: 'Headless CMS', years: '2+ yrs' },
      { name: 'MDX', years: '1+ yrs' },
    ],
  },
];

function TechnologyStack() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section
      id="tech"
      heading="Technologies I Work With"
      subheading="A modern toolkit built around performance, scalability and long-term maintainability."
      className="relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/[0.02] via-transparent to-brand-primary/[0.02]" />
      <SectionHeadingBg text="TECH" />
      <Container>
        <div className="section-particle-container">
          <div className="particle-dot" style={{ top: '20%', left: '15%', animation: 'float-up 6s ease-in-out infinite' }} />
          <div className="particle-dot" style={{ top: '60%', right: '20%', animation: 'float-up 8s ease-in-out infinite 1s' }} />
          <div className="particle-dot" style={{ top: '30%', right: '35%', animation: 'float-up 7s ease-in-out infinite 2s' }} />
          <div className="particle-dot" style={{ top: '70%', left: '25%', animation: 'float-up 9s ease-in-out infinite 0.5s' }} />
        </div>
        <div className="grid gap-4 md:gap-8 md:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div key={category.name}>
              <h3 className="mb-2 md:mb-4 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] text-text-muted">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-3 md:flex-col md:flex-nowrap">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Badge
                      variant={hovered === item.name ? 'brand' : 'default'}
                      className="cursor-default transition-all hover:shadow-[0_0_12px_rgba(253,87,53,0.15)]"
                    >
                      {item.name}
                      {hovered === item.name && (
                        <span className="ml-2 text-[10px] opacity-70">
                          {item.years}
                        </span>
                      )}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TechnologyStack;
