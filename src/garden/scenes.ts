import type { GardenScene } from './types'

/**
 * Book hotspot — production asset strategy (per technical plan):
 *
 * | Approach                          | When to use                                      |
 * |----------------------------------|--------------------------------------------------|
 * | Lottie or short video on click    | Best default: designer delivers motion once      |
 * | Static image swap + Framer Motion | Low lift; closed book → open spread             |
 * | CSS 3D transforms                 | Stylized, not photoreal                          |
 * | Rigged WebGL book                 | Only with budget for 3D pipeline + ongoing work  |
 *
 * Phase 1 uses modal copy only; wire `lottie-react` or a video element when assets are ready.
 */
export const bookHotspotAssetStrategy = {
  recommended: 'lottie_or_prerendered_video' as const,
  acceptableLowLift: 'static_image_swap_with_motion' as const,
  deferUntilBudget: 'webgl_rigged_mesh' as const,
}

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
