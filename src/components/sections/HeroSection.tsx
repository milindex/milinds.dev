'use client';

import GradientMesh from '@/components/animations/GradientMesh';
import Eyebrow from '@/components/sections/hero/Eyebrow';
import Headline from '@/components/sections/hero/Headline';
import Subheadline from '@/components/sections/hero/Subheadline';
import HeroCTA from '@/components/sections/hero/HeroCTA';
import Portrait from '@/components/sections/hero/Portrait';
import AvailabilityBadge from '@/components/sections/hero/AvailabilityBadge';
import TrustRow from '@/components/sections/hero/TrustRow';
import ScrollIndicator from '@/components/sections/hero/ScrollIndicator';
import { useScrollStory } from '@/hooks/useScrollStory';

function HeroSection() {
  const storyRef = useScrollStory({
    trigger: '#hero',
    stagger: 0.1,
  });

  return (
    <section id="hero" className="relative min-h-[90svh] overflow-hidden bg-bg-primary pt-24 pb-12">
      <GradientMesh />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 40px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(253,87,53,0.15), transparent 70%)',
        }}
      />

      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 animate-blob-float rounded-full bg-brand-primary/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-48 w-48 animate-blob-float rounded-full bg-accent/10 blur-[80px]" style={{ animationDelay: '-7s' }} />

      <div ref={storyRef} className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <Eyebrow />
          <Headline />
          <Subheadline />
          <HeroCTA />
          <AvailabilityBadge />
          <TrustRow />
        </div>

        <div className="hidden lg:block lg:flex-shrink-0">
          <Portrait />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default HeroSection;
