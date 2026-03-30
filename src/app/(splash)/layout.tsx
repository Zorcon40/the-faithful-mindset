import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome',
  description:
    'Enter the garden for an interactive experience, or the site for The Faithful Mindset studio.',
}

export default function SplashLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
