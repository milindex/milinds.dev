'use client';

import Footer from '@/components/layout/Footer';
import FloatingNav from '@/components/layout/FloatingNav';
import FloatingCTA from '@/components/layout/FloatingCTA';
import CustomCursor from '@/components/animations/CustomCursor';
import SectionProgress from '@/components/layout/SectionProgress';

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <FloatingNav />
      <CustomCursor />
      <SectionProgress />
      <FloatingCTA />
      <main className="mx-auto mt-20 px-4 md:px-8">{children}</main>
      <Footer />
    </div>
  );
}

export default AppShell;
