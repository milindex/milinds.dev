'use client';

import { useCallback, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface Project {
  slug: string;
  name: string;
  industry: string;
  role: string;
  technologies: string[];
  impact: string[];
}

const PROJECTS: Project[] = [
  {
    slug: 'hdfcsky',
    name: 'HDFC Sky',
    industry: 'Fintech',
    role: 'Tech Lead',
    technologies: ['Node.js', 'Next.js', 'Docker', 'Redis'],
    impact: [
      'Leading full-stack team for HDFC Securities trading platform',
      'Architected scalable infrastructure with Docker + Redis',
    ],
  },
  {
    slug: 'angelone',
    name: 'Angel One',
    industry: 'Fintech',
    role: 'Full Stack Developer',
    technologies: ['WordPress', 'Elasticsearch', 'AMP'],
    impact: [
      'Achieved 90+ Google PageSpeed score',
      'Implemented Elasticsearch for search and AMP pages',
    ],
  },
  {
    slug: 'atomberg',
    name: 'Atomberg 2.0',
    industry: 'E-Commerce',
    role: 'Full Stack Developer',
    technologies: ['WordPress', 'VueJS', 'Critical CSS'],
    impact: [
      'Built custom lead management system',
      'Implemented Critical CSS system for Core Web Vitals',
    ],
  },
];

function FeaturedCaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = (e.target as HTMLElement).closest('[data-tilt]') as HTMLElement | null;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotationX: -y * 6,
      rotationY: x * 6,
      duration: 0.4,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    const card = (e.target as HTMLElement).closest('[data-tilt]') as HTMLElement | null;
    if (!card) return;
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.3)',
    });
  }, []);

  return (
    <Section
      id="work"
      heading="Selected Work"
      subheading="A selection of projects where I helped businesses solve technical challenges, improve performance and deliver better user experiences."
      className="section-radial-glow relative"
    >
      <SectionHeadingBg text="WORK" />
      <Container>
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid gap-6 md:grid-cols-3"
          style={{ perspective: '1000px' }}
        >
          {PROJECTS.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              data-cursor="view"
              data-tilt
              className={`group block ${i >= 2 ? 'hidden md:block' : ''}`}
            >
              <Card variant="interactive" as="article">
                <div className="flex flex-col gap-3">
                  <Badge variant="brand">{project.industry}</Badge>
                  <h3 className="text-xl font-bold text-text-primary">
                    {project.name}
                  </h3>
                  <p className="hidden md:block text-sm text-text-muted">Role: {project.role}</p>
                  <div className="hidden md:flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <ul className="mt-2 space-y-1">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-2 text-sm font-medium text-brand-primary group-hover:underline">
                    View Case Study
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedCaseStudies;
