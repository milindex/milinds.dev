import type { Metadata } from 'next';

import Timeline from '@/components/experience/Timeline';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience',
};

const Experience = () => <Timeline />;

export default Experience;
