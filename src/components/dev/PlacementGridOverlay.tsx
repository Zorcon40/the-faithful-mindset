'use client'

import { useEffect, useMemo, useState } from 'react'
import { layers } from '@/lib/layers'

const GRID_STEP = 10
const GRID_POINTS = Array.from({ length: 11 }, (_, i) => i * GRID_STEP)

export function PlacementGridOverlay() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)
  const [cursor, setCursor] = useState({ x: 50, y: 50 })

  useEffect(() => {
    setMounted(true)

    const onMouseMove = (event: MouseEvent) => {
      const width = window.innerWidth || 1
      const height = window.innerHeight || 1
      const x = Number(((event.clientX / width) * 100).toFixed(1))
      const y = Number(((event.clientY / height) * 100).toFixed(1))
      setCursor({ x, y })
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== 'g') return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      setVisible((current) => !current)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const cursorStyle = useMemo(
    () => ({
      left: `${cursor.x}%`,
      top: `${cursor.y}%`,
    }),
    [cursor.x, cursor.y],
  )

  if (!mounted) {
    return null
  }

  if (!visible) {
    return (
      <div
        className={`pointer-events-none fixed bottom-3 right-3 ${layers.devOverlay} rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur`}
      >
        Grid hidden · press G
      </div>
    )
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 ${layers.devOverlay} select-none`}
      aria-hidden
    >
      {GRID_POINTS.map((pct) => (
        <div
          key={`v-${pct}`}
          className="absolute top-0 bottom-0 border-l border-emerald-300/45"
          style={{ left: `${pct}%` }}
        />
      ))}
      {GRID_POINTS.map((pct) => (
        <div
          key={`h-${pct}`}
          className="absolute left-0 right-0 border-t border-emerald-300/45"
          style={{ top: `${pct}%` }}
        />
      ))}

      {GRID_POINTS.map((pct) => (
        <div
          key={`xt-${pct}`}
          className="absolute top-1 -translate-x-1/2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-emerald-100"
          style={{ left: `${pct}%` }}
        >
          {pct}%
        </div>
      ))}
      {GRID_POINTS.map((pct) => (
        <div
          key={`yt-${pct}`}
          className="absolute left-1 -translate-y-1/2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-emerald-100"
          style={{ top: `${pct}%` }}
        >
          {pct}%
        </div>
      ))}

      <div
        className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-emerald-300/25"
        style={cursorStyle}
      />
      <div
        className="absolute left-0 top-0 h-px w-full bg-emerald-200/70"
        style={{ top: `${cursor.y}%` }}
      />
      <div
        className="absolute left-0 top-0 h-full w-px bg-emerald-200/70"
        style={{ left: `${cursor.x}%` }}
      />

      <div className="absolute bottom-3 right-3 rounded-md bg-black/75 px-3 py-2 text-xs font-semibold text-emerald-100 backdrop-blur">
        x: {cursor.x}% · y: {cursor.y}% · press G to toggle
      </div>
    </div>
  )
}
