'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';

function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        scale: 0.95,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div id="contact" className="relative overflow-hidden border-t border-white/[0.05] bg-bg-primary">
      <SectionHeadingBg text="CONTACT" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[400px] w-[600px] rounded-full bg-brand-primary/5 blur-[120px]" />
      </div>
      <Section
        heading="Let&apos;s Build Something Great"
        subheading="Whether you need help building a product, improving performance or solving complex technical challenges, let&apos;s start a conversation."
        className="relative z-10 py-16 md:py-24"
      >
        <Container>
          <div ref={ref} className="relative">
            <div className="mt-8 flex justify-center">
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
    </div>
  );
}

export default ContactCTA;
