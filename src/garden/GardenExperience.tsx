'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  gateClosedImage,
  gateOpenImage,
  insideGardenScene,
} from './scenes'

type View = 'closed' | 'transition' | 'inside'

const TRANSITION_MS = 2800

export function GardenExperience() {
  const reduceMotion = useReducedMotion()
  const [view, setView] = useState<View>('closed')
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goInside = useCallback(() => {
    setView('inside')
  }, [])

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const startOpening = () => {
    clearTimer()
    if (reduceMotion) {
      goInside()
      return
    }
    setView('transition')
    timerRef.current = setTimeout(() => {
      goInside()
      timerRef.current = null
    }, TRANSITION_MS)
  }

  const skipTransition = () => {
    clearTimer()
    goInside()
  }

  useEffect(() => () => clearTimer(), [])

  const activeHotspot = insideGardenScene.hotspots.find(
    (h) => h.id === activeHotspotId
  )

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    if (activeHotspot) {
      el.showModal()
    } else {
      el.close()
    }
  }, [activeHotspot])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-stone-900 to-stone-950 text-stone-100">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-3 border-b border-white/10 bg-stone-950/80 px-4 py-3 backdrop-blur-md">
        <Link
          href="/home"
          className="text-sm font-medium text-amber-100/90 underline-offset-4 hover:underline"
        >
          Exit to site
        </Link>
        <span className="text-center text-xs text-stone-400">
          Concept — no progress saved
        </span>
        <a
          href="/garden"
          className="text-sm font-medium text-emerald-200/90 underline-offset-4 hover:underline"
        >
          Start over
        </a>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-16 pt-20">
        <AnimatePresence mode="wait">
          {view === 'closed' && (
            <motion.section
              key="closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              <p className="mb-4 text-center text-sm text-stone-400">
                The gate is closed. (Placeholder art — swap in house &amp; garden.)
              </p>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-xl">
                <Image
                  src={gateClosedImage}
                  alt="Garden gate — concept placeholder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={startOpening}
                  className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  Open the gate
                </button>
              </div>
            </motion.section>
          )}

          {view === 'transition' && (
            <motion.section
              key="transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-sm text-stone-400">Stepping into the garden…</p>
                <button
                  type="button"
                  onClick={skipTransition}
                  className="rounded-full border border-amber-300/50 px-4 py-1.5 text-xs font-medium text-amber-100 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  Skip
                </button>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-xl">
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: TRANSITION_MS / 1000, ease: 'easeInOut' }}
                >
                  <Image
                    src={gateClosedImage}
                    alt=""
                    fill
                    className="object-cover"
                    aria-hidden
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: TRANSITION_MS / 1000, ease: 'easeInOut' }}
                >
                  <Image
                    src={gateOpenImage}
                    alt="Garden beyond the gate — concept"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.section>
          )}

          {view === 'inside' && (
            <motion.section
              key="inside"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <p className="mb-4 text-center text-sm text-stone-400">
                Click a highlighted area (or Tab + Enter) to explore.
              </p>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-xl">
                <Image
                  src={insideGardenScene.imageSrc}
                  alt={insideGardenScene.imageAlt}
                  fill
                  className="object-contain bg-stone-900"
                  priority
                />
                {insideGardenScene.hotspots.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    aria-label={h.label}
                    className="absolute rounded-lg border-2 border-amber-400/70 bg-amber-400/15 transition hover:bg-amber-300/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                    style={{
                      left: `${h.x}%`,
                      top: `${h.y}%`,
                      width: `${h.w}%`,
                      height: `${h.h}%`,
                    }}
                    onClick={() => setActiveHotspotId(h.id)}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <dialog
        ref={dialogRef}
        className="max-w-md rounded-2xl border border-stone-600 bg-stone-900 p-6 text-stone-100 shadow-2xl backdrop:bg-black/60"
        onClose={() => setActiveHotspotId(null)}
      >
        {activeHotspot && (
          <div>
            <h2 className="font-script text-2xl text-amber-100">
              {activeHotspot.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-300">
              {activeHotspot.body}
            </p>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-emerald-700 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              onClick={() => setActiveHotspotId(null)}
            >
              Close
            </button>
          </div>
        )}
      </dialog>
    </div>
  )
}
