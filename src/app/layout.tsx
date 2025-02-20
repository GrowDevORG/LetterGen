import { Inter } from 'next/font/google';
import { DefaultSeo } from 'next-seo';
import SEOConfig from '@/next-seo.config'; // Adjust based on the actual location
import './globals.css';
import { Providers } from '@/providers/Providers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <DefaultSeo {...SEOConfig} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
