import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const REPOS = [
  {
    name: 'PDF Platform',
    description: 'A modern suite of PDF tools focused on speed, privacy and usability. Built to explore large-scale document processing and conversion workflows.',
    language: 'TypeScript',
    stars: '--',
  },
  {
    name: 'AI Workflow Experiments',
    description: 'A collection of experiments around AI agents, automation workflows and productivity systems designed to reduce repetitive engineering tasks.',
    language: 'TypeScript',
    stars: '--',
  },
  {
    name: 'Performance Toolkit',
    description: 'A set of utilities and internal tools used to audit websites, identify bottlenecks and improve Core Web Vitals across production applications.',
    language: 'TypeScript',
    stars: '--',
  },
];

function LabsExperiments() {
  return (
    <Section
      id="experiments"
      heading="Labs & Experiments"
      subheading="Projects, experiments and contributions that help me explore new technologies and ideas."
      className="section-dot-grid relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/[0.02] to-transparent" />
      <SectionHeadingBg text="BUILD" />
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {REPOS.map((repo, i) => (
            <Card key={repo.name} as="article" className={`transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,87,53,0.1)] hover:brightness-110 ${i >= 2 ? 'hidden md:block' : ''}`}>
              <div className="flex flex-col gap-3">
                <Badge variant="default">In Development</Badge>
                <h3 className="text-lg font-bold text-text-primary">
                  {repo.name}
                </h3>
                <p className="text-sm text-text-secondary">{repo.description}</p>
                <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-text-muted">
                  <span>{repo.language}</span>
                  <span>{repo.stars} stars</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default LabsExperiments;
