import type { Metadata } from 'next'
import { GardenNavShell } from './GardenNavShell'

export const metadata: Metadata = {
  title: 'Garden',
  description: 'Interactive garden experience (concept).',
  robots: { index: false, follow: false },
}

export default function GardenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GardenNavShell />
      {children}
    </>
  )
}
