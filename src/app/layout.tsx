import '../styles/global.css';

import type { Metadata } from 'next';

import { AppConfig } from '@/utils/AppConfig';
import AppShell from './AppShell';

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
  },
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    locale: AppConfig.locale,
    siteName: AppConfig.site_name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <body className="dark">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
