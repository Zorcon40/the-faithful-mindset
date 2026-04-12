'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import { layers } from '@/lib/layers'
import { routeForWalkStep, walkRoutes } from './walkRouteModel'
import {
  entrywayImage,
  porchImage,
  walkthroughSteps,
  type WalkStep,
} from './scenes'

type Mode = 'scene' | 'transition'

const TRANSITION_MS = 2400

/**
 * Vertical slice below the fixed header stack. Reuse anywhere we position overlays with
 * `%` / `top` / `left` — the scene root must not collapse to zero height when every child
 * is `position:absolute` (e.g. `Image fill`), or controls pin to the top-left corner.
 */
const SCENE_VIEWPORT_MIN =
  'min-h-[calc(100dvh-var(--site-nav-height)-var(--garden-subnav-height)-env(safe-area-inset-top,0px))]'

const PORCH_BUTTON_ANCHOR = { x: 50, y: 40 } as const

const headerControlClass =
  'inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-2 text-sm font-medium text-white/95 shadow-sm backdrop-blur-md transition hover:border-white/45 hover:bg-black/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

const hitAreaClass =
  'absolute cursor-pointer border-0 bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

const sceneActionBtnClass =
  'rounded-full border border-white/40 bg-black/45 px-5 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300'

const porchEnterClass =
  'rounded-full bg-white px-10 py-3.5 text-sm font-bold tracking-wide text-stone-900 shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-2 ring-stone-900/20 transition hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-900/50'

/** Fixed top-left of viewport, stacked above main nav (z-120) */
const cornerNavClass =
  'fixed left-[max(1rem,env(safe-area-inset-left,0px))] top-[max(1rem,env(safe-area-inset-top,0px))] z-[130] flex flex-row flex-wrap items-center gap-2'

const cornerBtnClass =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/40 bg-black/40 px-3.5 py-2.5 text-sm font-medium text-white shadow-md backdrop-blur-md transition hover:border-white/55 hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

function stepIndexById(id: string) {
  return walkthroughSteps.findIndex((s) => s.id === id)
}

function clampStep(index: number) {
  const max = walkthroughSteps.length - 1
  return Math.max(0, Math.min(max, index))
}

export function GardenExperience({
  initialStep = 0,
}: {
  initialStep?: number
}) {
  const router = useRouter()
  const reduceMotion = useReducedMotion()
  const [mode, setMode] = useState<Mode>('scene')
  const [stepIndex, setStepIndex] = useState(() => clampStep(initialStep))
  const headerRef = useRef<HTMLElement | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    clearTimer()
    setMode('scene')
    setStepIndex(clampStep(initialStep))
  }, [initialStep])

  useEffect(() => {
    const element = headerRef.current
    if (!element) return

    const setHeight = () => {
      document.documentElement.style.setProperty(
        '--garden-subnav-height',
        `${element.offsetHeight}px`,
      )
    }

    setHeight()
    const observer = new ResizeObserver(setHeight)
    observer.observe(element)
    window.addEventListener('resize', setHeight)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', setHeight)
    }
  }, [])

  const step = walkthroughSteps[stepIndex]
  const isLast = stepIndex >= walkthroughSteps.length - 1
  const greatRoomIndex = stepIndexById('greatRoom')
  const bouquetIndex = stepIndexById('bouquet')
  const openDoorIndex = stepIndexById('openDoor')

  const goToIndex = useCallback(
    (index: number) => {
      clearTimer()
      setMode('scene')
      const next = clampStep(index)
      setStepIndex(next)
      router.replace(routeForWalkStep(next))
    },
    [router],
  )

  const startEnterHouse = () => {
    clearTimer()
    if (reduceMotion) {
      goToIndex(1)
      return
    }
    setMode('transition')
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      goToIndex(1)
    }, TRANSITION_MS)
  }

  const skipTransition = () => {
    clearTimer()
    goToIndex(1)
  }

  const goNext = () => {
    if (stepIndex === 0 && walkthroughSteps[0].useEnterTransition) {
      startEnterHouse()
      return
    }
    if (!isLast) goToIndex(stepIndex + 1)
  }

  useEffect(() => () => clearTimer(), [])

  const goBack = () => {
    clearTimer()
    if (mode === 'transition') {
      setMode('scene')
      setStepIndex(0)
      router.replace(walkRoutes.porch)
      return
    }
    if (stepIndex > 0) goToIndex(stepIndex - 1)
  }

  const showCornerBack = mode === 'transition' || stepIndex > 0

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <nav className={cornerNavClass} aria-label="Garden walk navigation">
        <Link href="/" className={cornerBtnClass}>
          <Home className="h-4 w-4 shrink-0" aria-hidden />
          Home
        </Link>
        {showCornerBack ? (
          <button type="button" onClick={goBack} className={cornerBtnClass} aria-label="Previous scene">
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back
          </button>
        ) : null}
      </nav>

      <header
        ref={headerRef}
        className={`fixed left-0 right-0 top-[var(--site-nav-height)] ${layers.gardenSubHeader} flex items-center justify-end gap-3 border-b border-white/15 bg-stone-950/92 px-4 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md`}
      >
        <Link href="/home" className={headerControlClass}>
          Exit to site
        </Link>
      </header>

      <main className="flex min-h-[100dvh] flex-col pt-[calc(var(--site-nav-height)+var(--garden-subnav-height)+env(safe-area-inset-top,0px))]">
        <AnimatePresence mode="wait">
          {mode === 'transition' && (
            <motion.section
              key="transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`relative flex ${SCENE_VIEWPORT_MIN} flex-1 flex-col pointer-events-auto`}
            >
              <div
                className={`absolute left-0 right-0 top-3 ${layers.sceneForeground} flex items-center justify-end gap-2 px-4 pt-[env(safe-area-inset-top,0px)] sm:top-4`}
              >
                <button
                  type="button"
                  onClick={skipTransition}
                  className={headerControlClass}
                >
                  Skip
                </button>
              </div>
              <div
                className={`relative flex-1 w-full overflow-hidden ${SCENE_VIEWPORT_MIN}`}
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 z-0"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: TRANSITION_MS / 1000,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={porchImage}
                    alt=""
                    fill
                    className="object-cover object-center"
                    aria-hidden
                  />
                </motion.div>
                <motion.div
                  className="pointer-events-none absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: TRANSITION_MS / 1000,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={entrywayImage}
                    alt={walkthroughSteps[1].alt}
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </motion.section>
          )}

          {mode === 'scene' && (
            <motion.section
              key={step.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`relative flex ${SCENE_VIEWPORT_MIN} flex-1 flex-col pointer-events-auto`}
            >
              {step.layout === 'greatRoom' ? (
                <GreatRoomScene
                  step={step}
                  bouquetIndex={bouquetIndex}
                  openDoorIndex={openDoorIndex}
                  goToIndex={goToIndex}
                  goNext={goNext}
                  isLast={isLast}
                />
              ) : (
                <GenericScene
                  step={step}
                  stepIndex={stepIndex}
                  greatRoomIndex={greatRoomIndex}
                  goToIndex={goToIndex}
                  goNext={goNext}
                  isLast={isLast}
                />
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

function GenericScene({
  step,
  stepIndex,
  greatRoomIndex,
  goToIndex,
  goNext,
  isLast,
}: {
  step: WalkStep
  stepIndex: number
  greatRoomIndex: number
  goToIndex: (index: number) => void
  goNext: () => void
  isLast: boolean
}) {
  return (
    <div className={`relative z-0 flex-1 w-full ${SCENE_VIEWPORT_MIN}`}>
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={step.src}
          alt={step.alt}
          fill
          className="object-cover object-center"
          priority={stepIndex === 0}
          sizes="100vw"
        />
      </div>

      {step.id === 'entryway' && greatRoomIndex >= 0 && (
        <button
          type="button"
          aria-label="Continue to the great room — right side of the photo"
          className={`${hitAreaClass} ${layers.sceneHitArea} top-0 h-full min-h-[120px]`}
          style={{ left: '68.5%', width: '31.5%' }}
          onClick={() => goToIndex(greatRoomIndex)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              goToIndex(greatRoomIndex)
            }
          }}
        />
      )}

      {stepIndex === 0 && (
        <button
          type="button"
          onClick={goNext}
          className={`absolute ${layers.sceneOverlay} -translate-x-1/2 -translate-y-1/2 ${porchEnterClass}`}
          style={{
            left: `${PORCH_BUTTON_ANCHOR.x}%`,
            top: `${PORCH_BUTTON_ANCHOR.y}%`,
          }}
        >
          Enter the house
        </button>
      )}

      {stepIndex !== 0 && (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 ${layers.sceneOverlay} flex justify-center px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-16`}
        >
          <div className="pointer-events-auto flex flex-wrap justify-center gap-3">
            {isLast ? (
              <Link
                href="/home"
                className={`${sceneActionBtnClass} bg-gradient-to-r from-brand-pink to-pink-600 border-transparent`}
              >
                Explore the site
              </Link>
            ) : (
              <button type="button" onClick={goNext} className={sceneActionBtnClass}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function GreatRoomScene({
  step,
  bouquetIndex,
  openDoorIndex,
  goToIndex,
  goNext,
  isLast,
}: {
  step: WalkStep
  bouquetIndex: number
  openDoorIndex: number
  goToIndex: (i: number) => void
  goNext: () => void
  isLast: boolean
}) {
  return (
    <>
      <div
        className={`pointer-events-none absolute left-0 right-0 top-24 ${layers.sceneOverlay} flex flex-wrap justify-center gap-2 px-4 sm:top-28`}
      >
        <button
          type="button"
          onClick={() => goToIndex(bouquetIndex)}
          className={`${sceneActionBtnClass} pointer-events-auto`}
        >
          View flowers
        </button>
        <button
          type="button"
          onClick={() => goToIndex(openDoorIndex)}
          className={`${sceneActionBtnClass} pointer-events-auto`}
        >
          View garden
        </button>
      </div>

      <div
        className={`relative z-0 flex-1 w-full ${SCENE_VIEWPORT_MIN}`}
        role="group"
        aria-label="Great room"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={step.src}
            alt={step.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <button
          type="button"
          aria-label="View the flowers on the coffee table"
          className={`${hitAreaClass} ${layers.sceneHitArea}`}
          style={{
            left: '28%',
            top: '42%',
            width: '30%',
            height: '36%',
          }}
          onClick={() => goToIndex(bouquetIndex)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              goToIndex(bouquetIndex)
            }
          }}
        />
        <button
          type="button"
          aria-label="View through the doors to the garden"
          className={`${hitAreaClass} ${layers.sceneHitArea}`}
          style={{
            left: '60%',
            top: '14%',
            width: '38%',
            height: '80%',
          }}
          onClick={() => goToIndex(openDoorIndex)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              goToIndex(openDoorIndex)
            }
          }}
        />

        <div
          className={`pointer-events-none absolute bottom-0 left-0 right-0 ${layers.sceneForeground} bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pt-8`}
          role="region"
          aria-label="Tour controls"
        >
          <div className="pointer-events-auto flex justify-center pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {isLast ? (
              <Link
                href="/home"
                className={`${sceneActionBtnClass} bg-gradient-to-r from-brand-pink to-pink-600 border-transparent`}
              >
                Explore the site
              </Link>
            ) : (
              <button type="button" onClick={goNext} className={sceneActionBtnClass}>
                Next in tour
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
