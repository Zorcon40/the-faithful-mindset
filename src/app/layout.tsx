import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Faithful Mindset - A Botanical Creative Studio',
  description: 'A botanical creative studio that inspires women to live on purpose through small intentional change, guided by faith, knowledge of the mind, and thoughtful action.',
  keywords: 'botanical studio, intentional living, faith, mindfulness, coffee table books, declarations series',
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
