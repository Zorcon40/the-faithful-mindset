'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-pink-50 to-white text-brand-charcoal">
      <h1 className="text-2xl font-light mb-2">Something went wrong</h1>
      <p className="text-center text-brand-charcoal/70 max-w-md mb-8">
        This page hit an unexpected error. You can try again or return home.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          type="button"
          onClick={() => reset()}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-pink to-pink-600 text-white shadow-lg hover:opacity-95 transition-opacity"
        >
          Try again
        </button>
        <Link
          href="/home"
          className="px-8 py-3 rounded-full border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
