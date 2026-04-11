'use client'

import { useEffect } from 'react'

export default function GlobalError({
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
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-pink-50 to-white text-[#3B3B3B] antialiased">
        <h1 className="text-2xl font-light mb-2">Something went wrong</h1>
        <p className="text-center opacity-70 max-w-md mb-8">
          The site encountered a critical error. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="px-8 py-3 rounded-full text-white shadow-lg"
          style={{ background: 'linear-gradient(to right, #D91184, #db2777)' }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
