import type { Metadata } from 'next';
import './globals.css';
const title = 'harisinstagram — A beneficial feed within halal boundaries';
const description = 'Scroll with intention. Discover Islamic reminders, Quran reflections, beautiful places, and beneficial inspiration curated with halal boundaries in mind. No login needed.';
export const metadata: Metadata = {
  title, description,
  applicationName: 'harisinstagram',
  keywords: ['Islamic feed', 'beneficial content', 'halal boundaries', 'Quran reminders', 'mindful scrolling', 'harisinstagram'],
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  openGraph: { title, description, siteName: 'harisinstagram', type: 'website' },
  twitter: { card: 'summary', title, description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
