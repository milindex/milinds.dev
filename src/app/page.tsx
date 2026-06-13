import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import CompanyMarquee from '@/components/sections/CompanyMarquee';
import FeaturedCaseStudies from '@/components/sections/FeaturedCaseStudies';
import CareerJourney from '@/components/sections/CareerJourney';
import TechnologyStack from '@/components/sections/TechnologyStack';
import WritingInsights from '@/components/sections/WritingInsights';
import LabsExperiments from '@/components/sections/LabsExperiments';
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
      <CareerJourney />
      <TechnologyStack />
      <WritingInsights />
      <LabsExperiments />
      <Testimonials />
      <Availability />
      <ContactCTA />
    </>
  );
};

export default Index;
