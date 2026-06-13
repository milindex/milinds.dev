'use client';

import Footer from '@/components/layout/Footer';
import Navigation from '@/components/header/navigation';
import useScrollPosition from '@/hooks/useScrollPosition';

function AppShell({ children }: { children: React.ReactNode }) {
  const isScrolled = useScrollPosition(50);

  return (
    <div>
      <header
        className={`desk-navbar flex h-20 w-full items-center justify-between shadow-md md:shadow-none${
          isScrolled ? ' scrolled' : ''
        }`}
      >
        <Navigation />
      </header>
      <main className="container z-10 mx-auto mt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default AppShell;
