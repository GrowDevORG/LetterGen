// import type { Metadata } from 'next';
import Head from 'next/head';
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
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
      <Head>
        {/* Basic SEO */}
        <title>LetterGen</title>
        <meta
          name="description"
          content="Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!"
        />
        <meta
          name="keywords"
          content="cover letter, cover letter generate, ai, cv generator, lettergen, resume, cover letter"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LetterGen" />
        <meta property="og:title" content="LetterGen" />
        <meta
          property="og:description"
          content="Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!"
        />
        <meta property="og:url" content="https://lettergen.kreyon.in" />
        <meta property="og:image" content="https://ibb.co/gbBB96sj" />
        <meta property="og:image:alt" content="alt" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://x.com/Krey_yon" />
        <meta name="twitter:creator" content="https://x.com/Krey_yon" />
        <meta name="twitter:image" content="https://ibb.co/gbBB96sj" />

        {/* Structured Data for SaaS Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'LetterGen',
            url: 'https://lettergen.kreyon.in',
            description:
              'Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!',
            image: 'https://ibb.co/gbBB96sj',
            author: {
              '@type': 'Person',
              name: 'Vikas',
            },
          })}
        </script>
      </Head>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
