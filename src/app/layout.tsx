import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
