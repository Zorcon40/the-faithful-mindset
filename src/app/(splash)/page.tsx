'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SplashPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/15 via-transparent to-transparent" />
      <Image
        src="/assets/marketing/Marketing /White_dahlia_hero_bloom.png"
        alt=""
        fill
        className="object-cover opacity-25 mix-blend-soft-light"
        priority
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-emerald-950/60" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end pb-10 pt-24 md:justify-center md:pb-24">
        <motion.div
          className="mb-10 max-w-lg px-6 text-center md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-script text-3xl text-amber-100/90 md:text-4xl">
            The Faithful Mindset
          </p>
          <p className="mt-3 text-sm text-stone-300 md:text-base">
            Concept splash — replace art with your house &amp; garden illustration.
          </p>
        </motion.div>

        <motion.div
          className="flex w-full max-w-2xl flex-col gap-4 px-6 sm:flex-row sm:justify-center sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link
            href="/garden"
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-800/40 px-8 py-4 text-center text-base font-medium text-emerald-50 backdrop-blur-sm transition hover:border-amber-200/50 hover:bg-emerald-700/50"
          >
            Enter the garden
          </Link>
          <Link
            href="/home"
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-full border border-amber-200/30 bg-amber-950/40 px-8 py-4 text-center text-base font-medium text-amber-50 backdrop-blur-sm transition hover:border-amber-100/60 hover:bg-amber-900/50"
          >
            Enter the site
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
