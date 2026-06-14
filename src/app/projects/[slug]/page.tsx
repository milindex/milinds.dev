'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import angelOneData from '@/content/projects/angel-one';
import Custom404 from '@/components/Custom404';

gsap.registerPlugin(ScrollTrigger);

const projectData: Record<string, typeof angelOneData> = {
  'angel-one': angelOneData,
};

function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      document.querySelectorAll('.reveal-section').forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  if (!project) {
    return <Custom404 />;
  }

  const { name, subtitle, role, duration, industry, team, heroSummary, about, challenges, responsibilities, engineeringHighlights, engineeringDecisions, results, techStack, lessons, tags, featuredQuote } = project;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg-primary pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-primary/[0.04] blur-[120px]" />
        </div>
        <Container>
          <div className="max-w-4xl">
            <Badge variant="brand">{industry}</Badge>
            <h1 className="mt-4 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mt-3 text-xl text-text-secondary md:text-2xl">
              {subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-muted">
              <span>Role: {role}</span>
              <span className="text-white/10">|</span>
              <span>{duration}</span>
              <span className="text-white/10">|</span>
              <span>{team}</span>
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary">
              {heroSummary}
            </p>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="About Angel One" subheading={about}>
            <></>
          </Section>
        </Container>
      </section>

      {/* The Challenge */}
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="The Challenge">
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {challenges.map((challenge) => (
                <Card key={challenge.title} variant="interactive" className="p-6">
                  <h3 className="text-lg font-bold text-brand-primary">{challenge.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{challenge.description}</p>
                </Card>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      {/* Responsibilities */}
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="My Responsibilities" subheading="Throughout the engagement I contributed across multiple engineering disciplines.">
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {responsibilities.map((resp) => (
                <Card key={resp.area} variant="interactive" className="p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">{resp.area}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {resp.items.map((item) => (
                      <li key={item} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      {/* Engineering Highlights */}
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="Engineering Highlights">
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {engineeringHighlights.map((highlight) => (
                <Card key={highlight.title} variant="interactive" className="p-6">
                  <h3 className="text-lg font-bold text-text-primary">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{highlight.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {highlight.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      {/* Engineering Decisions */}
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="Engineering Decisions" subheading="Key technical choices made throughout the project and the reasoning behind them.">
            <div className="mt-8 space-y-4">
              {engineeringDecisions.map((decision) => (
                <details key={decision.title} className="group rounded-[16px] border border-white/[0.05] bg-surface-1 transition-all duration-300 open:border-brand-primary/20">
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-text-primary transition-colors hover:text-brand-primary md:p-6">
                    {decision.title}
                    <svg className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="border-t border-white/[0.05] px-5 pb-5 md:px-6 md:pb-6">
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Problem</p>
                        <p className="mt-1 text-sm text-text-secondary">{decision.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Decision</p>
                        <p className="mt-1 text-sm font-medium text-text-primary">{decision.decision}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Why</p>
                        <ul className="mt-1 space-y-1">
                          {decision.why.map((reason) => (
                            <li key={reason} className="flex items-start gap-2 text-sm text-text-secondary">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-success" />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Trade-offs</p>
                        <ul className="mt-1 space-y-1">
                          {decision.tradeoffs.map((trade) => (
                            <li key={trade} className="flex items-start gap-2 text-sm text-text-secondary">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warning" />
                              {trade}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Outcome</p>
                        <p className="mt-1 text-sm font-medium text-text-primary">{decision.outcome}</p>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      {/* Results */}
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="Results" subheading="Engineering outcomes and business impact delivered throughout the engagement.">
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {results.map((result) => (
                <Card key={result.area} variant="interactive" className="p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">{result.area}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {result.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-text-secondary">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-success" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  {result.businessValue && (
                    <p className="mt-3 text-xs text-text-muted">{result.businessValue}</p>
                  )}
                </Card>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="Technology Stack">
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {techStack.map((cat) => (
                <Card key={cat.category} variant="interactive" className="p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">{cat.category}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      {/* Lessons Learned */}
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="Lessons Learned">
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {lessons.map((lesson) => (
                <div key={lesson} className="flex items-start gap-3 rounded-[16px] border border-white/[0.05] bg-surface-1 p-5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                  <p className="text-sm text-text-secondary">{lesson}</p>
                </div>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      {/* Quote */}
      <section className="border-t border-white/[0.05] bg-surface-1 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <svg className="mx-auto h-8 w-8 text-brand-primary/30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>
            <blockquote className="mt-6 text-lg leading-relaxed text-text-secondary italic md:text-xl">
              &ldquo;{featuredQuote}&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Tags */}
      <section className="border-t border-white/[0.05] py-12">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="brand">{tag}</Badge>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ProjectPage;
