'use client';

import { useEffect, useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<'case-study' | 'recruiter' | 'client'>('case-study');

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

      {/* Tab Navigation */}
      <div className="sticky top-20 z-10 border-b border-white/[0.05] bg-bg-primary/80 backdrop-blur-xl">
        <Container>
          <div className="flex gap-0">
            {[
              { id: 'case-study', label: 'Case Study' },
              { id: 'recruiter', label: 'For Recruiters' },
              { id: 'client', label: 'For Clients' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-brand-primary text-text-primary'
                    : 'border-transparent text-text-muted hover:text-text-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {activeTab === 'case-study' && (
      <>
      <section className="reveal-section border-t border-white/[0.05] py-16 md:py-24">
        <Container>
          <Section heading="About Angel One" subheading={about}>
            <></>
          </Section>
        </Container>
      </section>

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
      <section className="border-t border-white/[0.05] py-12">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="brand">{tag}</Badge>
            ))}
          </div>
        </Container>
      </section>
      </>
      )}

      {/* Recruiter View */}
      {activeTab === 'recruiter' && (
        <div className="py-16 md:py-24">
          <Container>
            <Section heading="For Recruiters" subheading="A quick overview of the Angel One engagement for recruiters and hiring managers.">
              {/* 2-Minute Summary */}
              <Card className="mt-8 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">2-Minute Summary</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.recruiterSummary.twoMinute}</p>
              </Card>

              {/* 5-Minute Summary */}
              <details className="group mt-4 rounded-[16px] border border-white/[0.05] bg-surface-1">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-text-primary md:p-6">
                  5-Minute Summary
                  <svg className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="border-t border-white/[0.05] px-5 pb-5 md:px-6 md:pb-6">
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">{project.recruiterSummary.fiveMinute}</p>
                </div>
              </details>

              {/* Resume Bullets */}
              <Card className="mt-6 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Resume Bullets</h3>
                <ul className="mt-3 space-y-2">
                  {project.recruiterSummary.resumeBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Technologies */}
              <Card className="mt-6 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Technologies</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.recruiterSummary.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>

              {/* Achievements */}
              <Card className="mt-6 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Key Achievements</h3>
                <ul className="mt-3 space-y-2">
                  {project.recruiterSummary.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-success" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Interview Topics */}
              <Card className="mt-6 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">Interview Topics</h3>
                <p className="mt-1 text-xs text-text-muted">These topics are indexed for interview preparation but not publicly displayed.</p>
                <div className="mt-4 space-y-3">
                  {project.recruiterSummary.interviewTopics.map((topic) => (
                    <details key={topic.topic} className="group rounded-[12px] border border-white/[0.05] bg-surface-2">
                      <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary">
                        {topic.topic}
                        <svg className="h-3 w-3 shrink-0 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="border-t border-white/[0.05] px-4 pb-3">
                        <p className="mt-2 text-xs text-text-muted">{topic.description}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </Card>
            </Section>
          </Container>
        </div>
      )}

      {/* Client View */}
      {activeTab === 'client' && (
        <div className="py-16 md:py-24">
          <Container>
            <Section heading="For Clients" subheading="How my experience at Angel One can help your business.">
              {/* Business Overview */}
              <Card className="mt-8 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Business Overview</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.clientSummary.businessOverview}</p>
              </Card>

              {/* Challenges Solved */}
              <h3 className="mt-10 text-lg font-bold text-text-primary">Challenges Solved</h3>
              <div className="mt-4 space-y-3">
                {project.clientSummary.challengesSolved.map((item) => (
                  <Card key={item.challenge} variant="interactive" className="p-5">
                    <p className="text-sm font-medium text-text-primary">{item.challenge}</p>
                    <p className="mt-1 text-sm text-text-secondary">{item.solution}</p>
                  </Card>
                ))}
              </div>

              {/* Value Delivered */}
              <Card className="mt-8 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Value Delivered</h3>
                <ul className="mt-3 space-y-2">
                  {project.clientSummary.valueDelivered.map((value) => (
                    <li key={value} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-success" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {value}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Relevant Experience */}
              <Card className="mt-6 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Relevant Experience</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.clientSummary.relevantExperience.map((exp) => (
                    <Badge key={exp}>{exp}</Badge>
                  ))}
                </div>
              </Card>

              {/* CTA */}
              <div className="mt-10 rounded-[20px] border border-white/[0.05] bg-surface-1 p-8 text-center">
                <p className="text-lg font-medium text-text-primary">{project.clientSummary.cta.text}</p>
                <a href={project.clientSummary.cta.link} className="mt-4 inline-flex h-[52px] items-center justify-center rounded-[12px] bg-cta-primary px-8 text-base font-medium text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]">
                  {project.clientSummary.cta.button}
                </a>
              </div>
            </Section>
          </Container>
        </div>
      )}

    </div>
  );
}

export default ProjectPage;
