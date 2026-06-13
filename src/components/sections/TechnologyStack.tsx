'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
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
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div key={category.name}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-text-muted">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3 md:flex-col md:flex-nowrap">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Badge
                      variant={hovered === item.name ? 'brand' : 'default'}
                      className="cursor-default transition-colors"
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
