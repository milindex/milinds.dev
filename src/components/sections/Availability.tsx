import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';

const OPPORTUNITIES = ['Freelance', 'Consulting', 'Contract', 'Full Time'];

function Availability() {
  return (
    <Section id="availability" heading="Available For New Opportunities">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-text-secondary">
            I&apos;m currently available for freelance projects, consulting
            engagements and selected full-time opportunities.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            If you&apos;re building something ambitious, I&apos;d love to hear
            about it.
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
              className="inline-flex h-[52px] items-center justify-center rounded-[12px] bg-brand-primary px-8 text-base font-medium text-white transition-all duration-200 hover:bg-brand-hover hover:scale-[1.02]"
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
