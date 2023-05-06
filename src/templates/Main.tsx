import { useTheme } from 'next-themes';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import FooterContent from '@/components/footer/Content';
import Navigation from '@/components/header/navigation';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

function Main({ meta, children }: MainProps) {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="">
      {meta}
      <header
        className={`desk-navbar${
          isScrolled ? ' scrolled' : ''
        } flex h-16 w-full items-center justify-between shadow-md md:shadow-none`}
      >
        <Navigation theme={theme} setTheme={setTheme} />
      </header>
      <main className="container mx-auto mt-[65px]">{children}</main>
      <footer className="">
        <FooterContent />
      </footer>
    </div>
  );
}

export { Main };
