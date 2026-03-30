export type GardenHotspot = {
  id: string
  /** Accessible label for the control */
  label: string
  /** Position as percentage of scene width/height */
  x: number
  y: number
  w: number
  h: number
  title: string
  body: string
}

export type GardenScene = {
  id: string
  imageSrc: string
  imageAlt: string
  hotspots: GardenHotspot[]
}
