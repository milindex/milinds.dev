'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/ui/Container';

const COMPANIES = ['HDFC Sky', 'Angel One', 'Kapiva', 'Atomberg'];

function CompanyMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll<HTMLElement>('.marquee-item');
      if (!items.length) return;
      const totalWidth = (items[0] as HTMLElement).offsetWidth * items.length;

      gsap.set(el, { x: 0 });
      tweenRef.current = gsap.to(el, {
        x: -totalWidth,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });
    }, el);

    const handleMouseEnter = () => tweenRef.current?.timeScale(0);
    const handleMouseLeave = () => tweenRef.current?.timeScale(1);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="clients" className="border-t border-white/[0.05] bg-bg-primary py-8 md:py-10">
      <Container>
        <p className="mb-4 text-left text-sm font-medium uppercase tracking-[0.15em] text-text-muted">
          Worked With
        </p>
        <div className="overflow-hidden">
          <div ref={ref} className="flex gap-12">
            {[...COMPANIES, ...COMPANIES].map((company, i) => (
              <span
                key={`${company}-${i}`}
                className="marquee-item shrink-0 text-xl font-semibold text-text-secondary md:text-2xl"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CompanyMarquee;
