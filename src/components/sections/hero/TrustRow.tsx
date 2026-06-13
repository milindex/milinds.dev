'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const COMPANIES = ['HDFC Sky', 'Angel One', 'Kapiva', 'Atomberg'];

function TrustRow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: 10, opacity: 0, duration: 0.4, delay: 1.3 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-10">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
        Worked With
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {COMPANIES.map((company) => (
          <span key={company} className="text-sm font-medium text-text-secondary">
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrustRow;
