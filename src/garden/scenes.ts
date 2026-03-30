import type { GardenScene } from './types'

/** Concept data — replace images and copy as your narrative grows */
export const gateClosedImage =
  '/assets/marketing/Marketing /White_dahlia_hero_bloom.png'
export const gateOpenImage =
  '/assets/marketing/Marketing /Book 1 - Faith PNG.png'

export const insideGardenScene: GardenScene = {
  id: 'inside',
  imageSrc: '/assets/marketing/Marketing /Book 1 - Faith PNG.png',
  imageAlt: 'Concept garden scene — placeholder illustration',
  hotspots: [
    {
      id: 'book',
      label: 'Open book on the table',
      x: 18,
      y: 55,
      w: 22,
      h: 28,
      title: 'Declarations of Faith',
      body:
        'Concept hotspot: later this can trigger a Lottie or image sequence of pages opening. For now, it is choose-your-own-adventure copy.',
    },
    {
      id: 'bench',
      label: 'Garden bench',
      x: 62,
      y: 48,
      w: 28,
      h: 22,
      title: 'A place to rest',
      body:
        'You pause on the bench. Small intentional choices, repeated, become a faithful mindset.',
    },
  ],
}
