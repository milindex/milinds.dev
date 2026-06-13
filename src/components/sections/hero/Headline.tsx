'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HEADLINE_TEXT =
  'Building high-performance fintech,\ne-commerce and SaaS products\nused by millions of users.';

function Headline() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent || '';
    el.textContent = '';

    text.split(' ').forEach((word) => {
      const span = document.createElement('span');
      span.textContent = word + '\u00A0';
      span.style.display = 'inline-block';
      el.appendChild(span);
    });

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={ref}
      className="text-4xl font-extrabold leading-tight text-text-primary md:text-5xl lg:text-6xl"
    >
      {HEADLINE_TEXT}
    </h1>
  );
}

export default Headline;
