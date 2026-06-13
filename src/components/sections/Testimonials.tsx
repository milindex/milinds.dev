'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import SectionHeadingBg from '@/components/animations/SectionHeadingBg';

gsap.registerPlugin(ScrollTrigger);
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const PLACEHOLDER_TESTIMONIALS = [
  {
    initials: 'PT',
    name: 'Sample Testimonial',
    quote: 'Milind consistently approached problems from both technical and business perspectives. His ability to balance performance, maintainability and user experience made him a valuable part of the team.',
  },
  {
    initials: 'PT',
    name: 'Sample Testimonial',
    quote: 'One of the strongest qualities Milind brings is ownership. From architecture discussions to production releases, he focuses on delivering solutions rather than simply completing tasks.',
  },
  {
    initials: 'PT',
    name: 'Sample Testimonial',
    quote: 'Working with Milind was straightforward and efficient. Communication was clear, timelines were respected and the final implementation exceeded expectations.',
  },
];

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.testimonial-card');
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 70%',
          end: 'top 30%',
          onEnter: () => {
            cards.forEach((c, j) => {
              gsap.to(c, {
                scale: j === i ? 1.02 : 0.95,
                opacity: j === i ? 1 : 0.6,
                duration: 0.4,
                ease: 'power3.out',
              });
            });
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.children;
    if (cards.length < 2) return;

    const ctx = gsap.context(() => {
      const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24;
      const totalWidth = cardWidth * (cards.length / 2);

      gsap.set(track, { x: 0 });
      tweenRef.current = gsap.to(track, {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    }, track);

    const handleMouseEnter = () => tweenRef.current?.timeScale(0);
    const handleMouseLeave = () => tweenRef.current?.timeScale(1);
    const handleTouchStart = () => tweenRef.current?.timeScale(0);
    const handleTouchEnd = () => tweenRef.current?.timeScale(1);
    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);
    track.addEventListener('touchstart', handleTouchStart, { passive: true });
    track.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      ctx.revert();
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <Section
      id="testimonials"
      heading="What People Say"
      subheading="Feedback from clients, colleagues and teams I've worked with throughout my career."
      className="relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-primary/[0.02] via-transparent to-brand-primary/[0.02]" />
      <SectionHeadingBg text="VOICE" />
      <Container>
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-6">
            {[...PLACEHOLDER_TESTIMONIALS, ...PLACEHOLDER_TESTIMONIALS].map(
              (item, i) => (
                  <Card
                  key={i}
                  className="testimonial-card w-[350px] shrink-0 md:w-[400px] bg-[rgba(17,17,17,0.6)] backdrop-blur-[12px]"
                  as="article"
                >
                  <div className="flex flex-col gap-4">
                    <Badge variant="default">Sample Testimonial</Badge>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-sm font-bold text-text-muted">
                        {item.initials}
                      </div>
                      <p className="text-sm font-medium text-text-primary">
                        {item.name}
                      </p>
                    </div>
                    <blockquote className="text-sm leading-relaxed text-text-secondary italic">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Testimonials;
