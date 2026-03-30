import type { Metadata } from 'next'

const splashOgImage = '/assets/marketing/Marketing /Website Portrait.png'

export const metadata: Metadata = {
  title: 'Welcome',
  description:
    'Enter the garden for an interactive experience, or the site for The Faithful Mindset studio.',
  openGraph: {
    title: 'The Faithful Mindset — Welcome',
    description:
      'Enter the garden for an interactive experience, or the site for the studio.',
    type: 'website',
    images: [
      {
        url: splashOgImage,
        width: 1200,
        height: 630,
        alt: 'The Faithful Mindset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Faithful Mindset — Welcome',
    description:
      'Enter the garden for an interactive experience, or the site for the studio.',
    images: [splashOgImage],
  },
}

export default function SplashLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
