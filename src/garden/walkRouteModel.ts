export const walkRoutes = {
  porch: '/garden/porch',
  entryway: '/garden/entryway',
  tour: '/garden/tour',
} as const

/**
 * `/garden/tour` intentionally buckets all steps >= 2.
 * The first two steps are explicitly addressable slugs for precise art direction.
 */
export const walkRouteStep = {
  porch: 0,
  entryway: 1,
  tour: 2,
} as const

export function routeForWalkStep(stepIndex: number): string {
  if (stepIndex <= walkRouteStep.porch) return walkRoutes.porch
  if (stepIndex === walkRouteStep.entryway) return walkRoutes.entryway
  return walkRoutes.tour
}
