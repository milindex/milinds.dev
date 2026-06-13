import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';
import Badge from '@/components/ui/Badge';

const OPPORTUNITIES = ['Freelance', 'Consulting', 'Contract', 'Full Time'];

function Availability() {
  return (
    <Section id="availability" heading="Available For New Opportunities" className="section-ambient-glow relative">
      <SectionHeadingBg text="HIRE" />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-text-secondary">
            I&apos;m currently open to selected freelance projects, consulting engagements and senior engineering opportunities.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            I typically work with teams that care deeply about performance, product quality and long-term maintainability.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {OPPORTUNITIES.map((type) => (
              <Badge key={type} variant="success">
                {type}
              </Badge>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center justify-center rounded-[12px] bg-cta-primary px-8 text-base font-medium text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-cta-hover hover:scale-[1.02]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Availability;
