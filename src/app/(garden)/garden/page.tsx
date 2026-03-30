import dynamic from 'next/dynamic'

const GardenExperience = dynamic(
  () =>
    import('@/garden/GardenExperience').then((m) => ({
      default: m.GardenExperience,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-emerald-950 via-stone-900 to-stone-950 px-6 text-center text-stone-300"
        role="status"
        aria-live="polite"
      >
        <p className="text-sm font-medium text-amber-100/90">Loading the garden…</p>
        <p className="mt-2 max-w-sm text-xs text-stone-500">
          Interactive experience is loading. No data is saved when you leave.
        </p>
      </div>
    ),
  }
)

export default function GardenPage() {
  return <GardenExperience />
}
