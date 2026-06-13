import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';

const ENTRIES = [
  {
    period: 'Jun 2024 - Present',
    company: 'HDFC Sky (HDFC Securities)',
    role: 'Senior Frontend Developer / Tech Lead',
    achievement: 'Leading frontend architecture and team for India\'s leading trading platform',
    technologies: ['Next.js', 'Node.js', 'Docker', 'Redis'],
  },
  {
    period: 'Jul 2018 - Jun 2024',
    company: 'Angel One',
    role: 'Full Stack Developer',
    achievement: 'Optimized website to 90+ PageSpeed score, implemented Elasticsearch',
    technologies: ['WordPress', 'Elasticsearch', 'AMP', 'Gulp'],
  },
  {
    period: 'May 2019 - Jul 2021',
    company: 'Kapiva',
    role: 'Full Stack Developer',
    achievement: 'Built custom checkout and payment gateway for BigCommerce store',
    technologies: ['VueJS', 'BigCommerce', 'NodeRED'],
  },
  {
    period: 'Feb 2020 - May 2022',
    company: 'Atomberg Technologies',
    role: 'Full Stack Developer',
    achievement: 'Revamped website with custom WordPress theme and lead management system',
    technologies: ['WordPress', 'VueJS', 'Critical CSS'],
  },
];

function CareerJourney() {
  return (
    <Section id="timeline" heading="Career Journey" className="section-beam">
      <Container>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/[0.08] md:left-1/2 md:-translate-x-px" />
          <div className="space-y-8">
            {ENTRIES.map((entry) => (
              <div
                key={entry.period}
                className="relative pl-10 md:pl-0 md:odd:pr-[52%] md:even:pl-[52%]"
              >
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-brand-primary bg-bg-primary md:left-1/2 md:-translate-x-1/2" />
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
        <div className="mt-8">
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
