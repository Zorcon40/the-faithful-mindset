'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { entranceSplashImage } from '@/garden/scenes'

const glassBtn =
  'flex min-h-[52px] min-w-[200px] items-center justify-center rounded-full border border-white/40 bg-white/15 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-white/25 hover:border-white/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

export default function SplashPage() {
  return (
    <div className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden bg-stone-900">
      <Image
        src={entranceSplashImage}
        alt="White farmhouse viewed through open iron gates, stone path to the front porch"
        fill
        className="z-0 object-cover object-center"
        priority
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/20"
        aria-hidden
      />

      {/* Centered overlay: title + glass CTAs */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 py-16">
        <motion.div
          className="pointer-events-auto flex max-w-lg flex-col items-center gap-8 text-center sm:max-w-2xl"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="font-script text-3xl text-white drop-shadow-lg sm:text-4xl md:text-5xl">
              The Faithful Mindset
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/95 drop-shadow-md">
              Walk the grounds — or head straight to the studio site.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-5">
            <Link href="/garden/porch" className={glassBtn}>
              Enter the Garden
            </Link>
            <Link href="/home" className={glassBtn}>
              Enter the Site
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
