import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import { FormProvider } from '@/context/formcontext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'LetterGen',
  description:
    'Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!',
  keywords: [
    'cover letter',
    'cover letter generate',
    'ai',
    'cv generator',
    'lettergen',
    'resume',
    'cover letter',
    'job application',
    'kreyon',
    'kreyon lettergen',
  ],
  metadataBase: new URL('https://lettergen.kreyon.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'LetterGen',
    title: 'LetterGen',
    description:
      'Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!',
    url: 'https://lettergen.kreyon.in',
    images: [
      {
        url: 'https://lettergen.kreyon.in/image/OG_Image_Shared.png',
        width: 1200,
        height: 630,
        alt: 'LetterGen Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://x.com/Krey_yon',
    creator: 'https://x.com/Krey_yon',
    images: ['https://lettergen.kreyon.in/image/OG_Image_Shared.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'LetterGen',
      url: 'https://lettergen.kreyon.in',
      description:
        'Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!',
      image: 'https://lettergen.kreyon.in/image/OG_Image_Shared.png',
      author: {
        '@type': 'Person',
        name: 'Vikas',
      },
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <FormProvider>
          <Providers>{children}</Providers>
        </FormProvider>
      </body>
    </html>
  );
}
