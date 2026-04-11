export type DeclarationBook = {
  id: number
  name: string
  color: string
  available: boolean
}

export const declarationsBooks: DeclarationBook[] = [
  { id: 1, name: 'Faith', color: 'Pink', available: true },
  { id: 2, name: 'Strength', color: 'Purple', available: true },
  { id: 3, name: 'Gratitude', color: 'Orange', available: true },
  { id: 4, name: 'Joy', color: 'Yellow', available: true },
  { id: 5, name: 'Hope', color: 'Blue', available: false },
  { id: 6, name: 'Peace', color: 'White', available: false },
  { id: 7, name: 'Love', color: 'Red', available: false },
  { id: 8, name: 'Courage', color: 'Coral', available: false },
  { id: 9, name: 'Wisdom', color: 'Lavender', available: false },
  { id: 10, name: 'Grace', color: 'Cream', available: false },
  { id: 11, name: 'Purpose', color: 'Peach', available: false },
  { id: 12, name: 'Renewal', color: 'Green', available: false },
]
