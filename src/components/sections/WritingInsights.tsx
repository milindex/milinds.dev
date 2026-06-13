import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const ARTICLES = [
  {
    title: 'Improving Core Web Vitals in Large Applications',
    excerpt:
      'A practical guide to identifying performance bottlenecks and implementing optimizations in large-scale web applications.',
    date: 'Coming Soon',
    category: 'Performance',
  },
  {
    title: 'Lessons From Building Fintech Products',
    excerpt:
      'Key technical and architectural lessons learned from building and scaling fintech platforms handling millions of users.',
    date: 'Coming Soon',
    category: 'Engineering',
  },
  {
    title: 'Why Performance Is a Feature',
    excerpt:
      'Why performance should be treated as a core product feature rather than an afterthought in the development process.',
    date: 'Coming Soon',
    category: 'Architecture',
  },
];

function WritingInsights() {
  return (
    <Section
      id="writing"
      heading="Writing & Insights"
      subheading="Thoughts on engineering, architecture, performance and building products."
      className="section-noise"
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <Card key={article.title} as="article">
              <div className="flex flex-col gap-3">
                <Badge variant="warning">{article.category}</Badge>
                <Badge variant="default">Placeholder Content</Badge>
                <h3 className="text-lg font-bold text-text-primary">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary">{article.excerpt}</p>
                <span className="mt-auto pt-2 text-xs text-text-muted">
                  {article.date}
                </span>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
          >
            View All Articles
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default WritingInsights;
