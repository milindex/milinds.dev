import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const ARTICLES = [
  {
    title: 'Improving Core Web Vitals in Large Applications',
    excerpt:
      'A practical breakdown of how we improved performance across high-traffic websites using critical CSS, asset optimization, caching strategies and modern frontend techniques.',
    date: 'Coming Soon',
    category: 'Performance',
  },
  {
    title: 'Lessons From Building Fintech Products',
    excerpt:
      'What six years of building products in regulated financial environments taught me about reliability, scalability, compliance and user trust.',
    date: 'Coming Soon',
    category: 'Engineering',
  },
  {
    title: 'Why Performance Is a Feature',
    excerpt:
      'Performance is not a technical metric. It directly impacts engagement, conversions and customer satisfaction. Here\'s how I approach performance as a product feature.',
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
      className="section-noise relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-primary/[0.02] to-transparent" />
      <SectionHeadingBg text="WRITE" />
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <Card key={article.title} data-cursor="read" as="article" className={`group relative overflow-hidden ${i >= 2 ? 'hidden md:block' : ''}`}>
              <div className="relative z-10">
                <div className="flex flex-col gap-3">
                  <Badge variant="warning">{article.category}</Badge>
                  <Badge variant="default">Planned Article</Badge>
                  <h3 className="text-lg font-bold text-text-primary">
                    {article.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{article.excerpt}</p>
                  <span className="mt-auto pt-2 text-xs text-text-muted">
                    {article.date}
                  </span>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-brand-primary/10 px-4 py-2 text-xs text-brand-primary transition-transform duration-300 group-hover:translate-y-0">
                5 min read
              </span>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
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
