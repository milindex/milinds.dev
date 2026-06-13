import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
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
      heading="Labs & Experiments"
      subheading="Projects, experiments and contributions that help me explore new technologies and ideas."
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {REPOS.map((repo) => (
            <Card key={repo.name} as="article">
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
