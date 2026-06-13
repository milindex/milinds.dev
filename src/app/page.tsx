import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import CompanyMarquee from '@/components/sections/CompanyMarquee';
import FeaturedCaseStudies from '@/components/sections/FeaturedCaseStudies';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import TechnologyStack from '@/components/sections/TechnologyStack';
import WritingInsights from '@/components/sections/WritingInsights';
import OpenSource from '@/components/sections/OpenSource';
import Testimonials from '@/components/sections/Testimonials';
import Availability from '@/components/sections/Availability';
import ContactCTA from '@/components/sections/ContactCTA';

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CompanyMarquee />
      <FeaturedCaseStudies />
      <ExperienceTimeline />
      <TechnologyStack />
      <WritingInsights />
      <OpenSource />
      <Testimonials />
      <Availability />
      <ContactCTA />
    </>
  );
};

export default Index;
