'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';
import Badge from '@/components/ui/Badge';

gsap.registerPlugin(ScrollTrigger);

const ENTRIES = [
  {
    period: '2024 — Present',
    company: 'HDFC Sky (HDFC Securities)',
    role: 'Senior Frontend Developer / Tech Lead',
    achievement: 'Leading frontend architecture, mentoring developers and helping scale one of India\'s fastest-growing trading platforms.',
    technologies: ['Next.js', 'Node.js', 'Docker', 'Redis'],
  },
  {
    period: '2018 — 2024',
    company: 'Angel One',
    role: 'Full Stack Developer',
    achievement: 'Delivered performance optimizations, search improvements and platform enhancements across high-traffic digital properties.',
    technologies: ['WordPress', 'Elasticsearch', 'AMP', 'Gulp'],
  },
  {
    company: 'Kapiva',
    role: 'Full Stack Developer',
    achievement: 'Built custom checkout experiences and payment integrations for a rapidly growing D2C health and wellness brand.',
    technologies: ['VueJS', 'BigCommerce', 'NodeRED'],
  },
  {
    company: 'Atomberg Technologies',
    role: 'Full Stack Developer',
    achievement: 'Modernized digital experiences through custom WordPress development, performance optimization and lead generation systems.',
    technologies: ['WordPress', 'VueJS', 'Critical CSS'],
  },
];

function CareerJourney() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.timeline-dot').forEach((dot) => {
        gsap.fromTo(dot,
          { scale: 0, background: 'transparent' },
          {
            scale: 1,
            background: '#FD5735',
            duration: 0.8,
            scrollTrigger: {
              trigger: dot,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Section id="timeline" heading="Career Journey" subheading="A snapshot of the companies, products and teams I\'ve worked with over the last six years." className="section-beam relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-primary/[0.02] to-transparent" />
      <SectionHeadingBg text="JOURNEY" />
      <Container>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/[0.08] md:left-1/2 md:-translate-x-px" />
          <div className="space-y-8">
            {ENTRIES.map((entry, i) => (
              <div
                key={entry.company}
                data-cursor="explore"
                className={`relative pl-10 md:pl-0 md:odd:pr-[52%] md:even:pl-[52%] ${i >= 2 ? 'hidden md:block' : ''}`}
              >
                <div className="timeline-dot absolute left-[10px] top-1.5 h-3 w-3 rounded-full border-2 border-brand-primary bg-transparent md:left-1/2 md:-translate-x-1/2" />
                <div className="rounded-[20px] bg-surface-1 p-5 border border-white/[0.05]">
                  <p className="text-xs font-medium text-brand-primary">
                    {entry.period}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-text-primary">
                    {entry.company}
                  </h3>
                  <p className="mt-0.5 text-sm text-text-muted">{entry.role}</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {entry.achievement}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/timeline"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
          >
            View Full Timeline
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default CareerJourney;
