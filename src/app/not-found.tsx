import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-pink-50 to-white text-brand-charcoal">
      <h1 className="text-4xl font-light mb-2">404</h1>
      <p className="text-center text-brand-charcoal/70 max-w-md mb-8">
        This page does not exist or has been moved.
      </p>
      <Link
        href="/home"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-pink to-pink-600 text-white shadow-lg hover:opacity-95 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  )
}
