const SEOConfig = {
  title: 'LetterGen',
  description: 'Craft perfect cover letters in seconds with AI.',
  openGraph: {
    type: 'website',
    url: 'https://lettergen.kreyon.in',
    title: 'LetterGen',
    description: 'Craft perfect cover letters in seconds with AI.',
    images: [
      {
        url: 'https://ibb.co/gbBB96sj',
        width: 800,
        height: 600,
        alt: 'LetterGen',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'cover letter, cover letter generate, ai, cv generator, lettergen, resume, cover letter, kreyon, kreyon lettergen',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'canonical',
      href: 'https://lettergen.kreyon.in',
    },
  ],
  additionalJsonLd: {
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
  },
};

export default SEOConfig;
