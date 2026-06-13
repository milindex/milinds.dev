import Link from 'next/link';
import Container from '@/components/ui/Container';

function ContactCTA() {
  return (
    <section id="contact" className="border-t border-white/[0.05] bg-bg-primary py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[400px] w-[600px] rounded-full bg-brand-primary/5 blur-[120px]" />
      </div>
      <Container>
        <div className="mx-auto max-w-2xl text-center relative z-10">
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
