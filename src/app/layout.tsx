import { CommonHeader } from '@/widgets/header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `Dara's Portfolio Website`,
  description: `Front-End Developer A website where you can see everything about dara's career`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CommonHeader />
        {children}
      </body>
    </html>
  );
}
