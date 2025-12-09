import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/app/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="bg-gray-700 text-white min-h-screen">{children}</main>
      </body>
    </html>
  );
}
