'use client'

import Navigation from '@/components/Navigation'

/** Client island so the garden server layout does not mix RSC/webpack boundaries with framer-motion nav. */
export function GardenNavShell() {
  return <Navigation />
}
