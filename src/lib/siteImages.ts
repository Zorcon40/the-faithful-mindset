/**
 * Stable paths under /public (no spaces) so `next/image` and Vercel/Linux deploys
 * never break on odd folder names like `Marketing ` or `BOOK COVERS`.
 */
export const siteImages = {
  logo: '/LOGO/The_Faithful_Mindset_Logo.png',
  heroDahlia: '/images-site/white-dahlia-hero-bloom.png',
  declarationsSeries: '/images-site/books/declarations-series.png',
  bookCover: (slug: string) => `/images-site/books/${slug}`,
  /** @deprecated Prefer bookCover(slug) — kept for any straggling call sites */
  studioBookPng: (id: number, name: string) =>
    `/images-site/books/book-${id}-${name.toLowerCase()}.png`,
  aboutPortrait: '/images-site/headshots/profile.png',
} as const

/** Keys used by home / reflections book grids */
export const bookCoverSlug = {
  faith: 'book-1-faith.png',
  strength: 'book-2-strength.png',
  gratitude: 'book-3-gratitude.png',
  joy: 'book-4-joy.png',
} as const
