import { useTheme } from 'next-themes';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import Footer from '@/components/footer/footerContent';
import Navigation from '@/components/header/navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

function Main(props: IMainProps) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return (
    <div className="">
      {props.meta}

      <header className="flex h-16 w-full items-center justify-between">
        <Navigation theme={theme} setTheme={setTheme} />
      </header>

      <main className="container mx-auto">{props.children}</main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export { Main };
