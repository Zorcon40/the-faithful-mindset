import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'The Faithful Mindset - A Botanical Creative Studio',
    template: '%s | The Faithful Mindset',
  },
  description: 'A botanical creative studio that inspires women to live on purpose through small intentional change, guided by faith, knowledge of the mind, and thoughtful action.',
  keywords: ['botanical studio', 'intentional living', 'faith', 'mindfulness', 'coffee table books', 'declarations series', 'women empowerment', 'spiritual growth'],
  authors: [{ name: 'Hilary Williamson' }],
  creator: 'Hilary Williamson',
  metadataBase: new URL('https://thefaithfulmindset.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thefaithfulmindset.com',
    siteName: 'The Faithful Mindset',
    title: 'The Faithful Mindset - A Botanical Creative Studio',
    description: 'A botanical creative studio that inspires women to live on purpose through small intentional change.',
    images: [
      {
        url: '/assets/marketing/Marketing /Website Portrait.png',
        width: 1200,
        height: 630,
        alt: 'The Faithful Mindset - Hilary Williamson',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Faithful Mindset - A Botanical Creative Studio',
    description: 'A botanical creative studio that inspires women to live on purpose through small intentional change.',
    images: ['/assets/marketing/Marketing /Website Portrait.png'],
    creator: '@faithfulmindset',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
