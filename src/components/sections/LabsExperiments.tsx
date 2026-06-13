import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const REPOS = [
  {
    name: 'Repository Placeholder',
    description: 'A description of an open source project or tool will appear here.',
    language: 'TypeScript',
    stars: '--',
  },
  {
    name: 'Experiment Placeholder',
    description: 'A lab experiment or creative coding project will be showcased here.',
    language: 'TypeScript',
    stars: '--',
  },
  {
    name: 'Tool Placeholder',
    description: 'A developer tool or utility library will be featured here.',
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
      <SectionHeadingBg text="BUILD" />
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {REPOS.map((repo) => (
            <Card key={repo.name} as="article" className="transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,87,53,0.1)] hover:brightness-110">
              <div className="flex flex-col gap-3">
                <Badge variant="default">Placeholder Content</Badge>
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
