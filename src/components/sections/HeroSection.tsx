'use client';

import GradientMesh from '@/components/animations/GradientMesh';
import Eyebrow from '@/components/sections/hero/Eyebrow';
import Headline from '@/components/sections/hero/Headline';
import Subheadline from '@/components/sections/hero/Subheadline';
import HeroCTA from '@/components/sections/hero/HeroCTA';
import Portrait from '@/components/sections/hero/Portrait';
import AvailabilityBadge from '@/components/sections/hero/AvailabilityBadge';
import TrustRow from '@/components/sections/hero/TrustRow';
import HeroMetrics from '@/components/sections/hero/HeroMetrics';
import ScrollIndicator from '@/components/sections/hero/ScrollIndicator';

function HeroSection() {
  return (
    <section className="relative min-h-[90svh] overflow-hidden bg-bg-primary px-4 py-20 md:px-8">
      <GradientMesh />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <Eyebrow />
          <Headline />
          <Subheadline />
          <HeroCTA />
          <AvailabilityBadge />
          <TrustRow />
          <HeroMetrics />
        </div>

        <div className="lg:flex-shrink-0">
          <Portrait />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default HeroSection;
