import type { Metadata } from 'next';

import Greetings from '@/components/about/Greetings';
import Mission from '@/components/about/Mission';
import WordpressSection from '@/components/about/Wordpress';

export const metadata: Metadata = {
  title: 'About Milind Sonawane | Full Stack Web Developer',
  description:
    'Meet Milind Sonawane, a full-stack web engineer with expertise in HTML, CSS, JavaScript, and WordPress development. Discover his skills and passion for open-source technologies.',
};

const About = () => (
  <>
    <Greetings />
    <Mission />
    <WordpressSection />
  </>
);

export default About;
