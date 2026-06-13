'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SUBHEADLINE_TEXT =
  "I'm Milind Sonawane, a Full Stack Developer with 6+ years of experience building scalable web applications, e-commerce platforms and fintech products for companies including HDFC Sky, Angel One, Kapiva and Atomberg.";

function Subheadline() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: 20, opacity: 0, duration: 0.5, delay: 0.5 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <p
      ref={ref}
      className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
    >
      {SUBHEADLINE_TEXT}
    </p>
  );
}

export default Subheadline;
