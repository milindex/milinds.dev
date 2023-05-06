import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
  const [userTheme, setUserTheme] = useState('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setUserTheme(savedTheme);
    } else {
      setUserTheme('system');
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme={userTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
