import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'فر',
  description: 'پلتفرم خدمات دیجیتال فر',
  manifest: '/manifest.json',
  
};

export const viewport = {
  themeColor: '#0d9488',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
