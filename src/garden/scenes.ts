import type { GardenScene } from './types'

/** URL-encoded — folder and filenames contain spaces */
export const gardenImage = (name: string) =>
  `/The%20Garden/${encodeURIComponent(name)}`

/** JPEG sequence in `public/The Garden/` (gaps in numbering are intentional). */
const GALLERY_JPEG_ORDER = [
  0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
] as const

export type WalkStep = {
  id: string
  src: string
  alt: string
  hint: string
  /** Porch: crossfade into the next step instead of an instant jump */
  useEnterTransition?: true
  /** Great room: book strip + tap zones */
  layout?: 'greatRoom'
}

const gallerySteps: WalkStep[] = GALLERY_JPEG_ORDER.map((n) => ({
  id: `garden-photo-${n}`,
  src: gardenImage(`image${n}.jpeg`),
  alt: `Garden scene — image ${n}`,
  hint: 'Keep exploring the garden — tap Next to continue.',
}))

/** Full in-order walkthrough: porch through house, then extra garden photography. */
export const walkthroughSteps: WalkStep[] = [
  {
    id: 'porch',
    src: gardenImage('Porch.png'),
    alt: 'Front porch of the farmhouse, black door and wood steps',
    hint: 'Front porch — enter the house to continue.',
    useEnterTransition: true,
  },
  {
    id: 'entryway',
    src: gardenImage('Entryway.png'),
    alt: 'Home entryway from the front door, hallway and mirror with flowers on a console',
    hint: 'Entryway — Next takes you into the great room. You can also tap the right side of the photo.',
  },
  {
    id: 'greatRoom',
    src: gardenImage('Great Room.png'),
    alt: 'Bright great room with sofa, coffee table with flowers, and garden windows',
    hint: 'Great room — Next continues the tour, or jump to the flowers or garden view.',
    layout: 'greatRoom',
  },
  {
    id: 'bouquet',
    src: gardenImage('Boquet.png'),
    alt: 'Close-up of pink peony bouquet on a glass coffee table',
    hint: 'Flowers on the table — Next for the view through the doors.',
  },
  {
    id: 'openDoor',
    src: gardenImage('Open Door.png'),
    alt: 'French doors open to a stone path and garden',
    hint: 'Garden doors — Next for more garden moments.',
  },
  {
    id: 'welcome-front',
    src: gardenImage('Welcoming farmhouse front entrance.png'),
    alt: 'Welcoming farmhouse front entrance',
    hint: 'Welcoming entrance — Next to continue the garden walk.',
  },
  {
    id: 'welcome-porch-ref',
    src: gardenImage('Welcoming-farmhouse-porch-reference.png'),
    alt: 'Farmhouse porch reference',
    hint: 'Porch reference — Next for more scenes.',
  },
  ...gallerySteps,
]

export const porchImage = gardenImage('Porch.png')
export const entrywayImage = gardenImage('Entryway.png')

/** Splash hero */
export const entranceSplashImage = gardenImage('Enter the Garden.png')

/** Legacy export — unused by walkthrough; kept for types */
export const insideGardenScene: GardenScene = {
  id: 'inside',
  imageSrc: gardenImage('Great Room.png'),
  imageAlt:
    'Bright great room with sofa, coffee table with flowers, and garden windows',
  hotspots: [],
}
