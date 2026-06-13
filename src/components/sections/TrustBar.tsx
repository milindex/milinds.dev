'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 4, suffix: '+', label: 'Enterprise Brands' },
  { value: 42, suffix: 'M+', label: 'Users Reached' },
];

function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counters = el.querySelectorAll<HTMLSpanElement>('[data-count]');

    const ctx = gsap.context(() => {
      counters.forEach((counter) => {
        const target = Number(counter.dataset.count);
        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.2,
            ease: 'power3.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="border-t border-white/[0.05] bg-bg-primary py-8 md:py-12">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <span className="block text-4xl font-bold text-text-primary md:text-5xl">
                <span data-count={metric.value}>0</span>
                {metric.suffix}
              </span>
              <span className="mt-1 block text-sm text-text-muted">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustBar;
