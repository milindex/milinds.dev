import Link from 'next/link';
import Container from '@/components/ui/Container';

function ContactCTA() {
  return (
    <section className="border-t border-white/[0.05] bg-bg-primary py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-text-primary md:text-5xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Whether you need help building a product, improving performance or
            solving complex technical challenges, let&apos;s start a
            conversation.
          </p>
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
    </section>
  );
}

export default ContactCTA;
