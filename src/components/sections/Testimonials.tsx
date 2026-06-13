'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const PLACEHOLDER_TESTIMONIALS = [
  {
    initials: 'PT',
    name: 'Placeholder Testimonial',
    quote:
      'This section will showcase feedback from clients, colleagues and stakeholders once testimonials are collected.',
  },
  {
    initials: 'PT',
    name: 'Placeholder Testimonial',
    quote:
      'This section will showcase feedback from clients, colleagues and stakeholders once testimonials are collected.',
  },
  {
    initials: 'PT',
    name: 'Placeholder Testimonial',
    quote:
      'This section will showcase feedback from clients, colleagues and stakeholders once testimonials are collected.',
  },
];

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

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
    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Section
      heading="What People Say"
      subheading="Feedback from clients, colleagues and teams I've worked with throughout my career."
    >
      <Container>
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-6">
            {[...PLACEHOLDER_TESTIMONIALS, ...PLACEHOLDER_TESTIMONIALS].map(
              (item, i) => (
                <Card
                  key={i}
                  className="w-[350px] shrink-0 md:w-[400px]"
                  as="article"
                >
                  <div className="flex flex-col gap-4">
                    <Badge variant="default">Coming Soon</Badge>
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
