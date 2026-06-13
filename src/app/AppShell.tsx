'use client';

import { useEffect, useState } from 'react';

import FooterContent from '@/components/footer/Content';
import Navigation from '@/components/header/navigation';

function AppShell({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      <header
        className={`desk-navbar${
          isScrolled ? ' scrolled' : ''
        } flex h-16 w-full items-center justify-between shadow-md md:shadow-none`}
      >
        <Navigation />
      </header>
      <main className="container z-10 mx-auto mt-[65px]">{children}</main>
      <footer className="">
        <FooterContent />
      </footer>
    </div>
  );
}

export default AppShell;
