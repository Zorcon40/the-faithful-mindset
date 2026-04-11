/**
 * Shared z-index contract.
 *
 * Keep interactive app chrome above scene overlays. Scene overlays may stack
 * internally, but should not exceed `appChrome`.
 */
export const layers = {
  sceneBase: 'z-0',
  sceneHitArea: 'z-[90]',
  sceneOverlay: 'z-[95]',
  sceneForeground: 'z-[100]',
  gardenSubHeader: 'z-[110]',
  appChrome: 'z-[120]',
  devOverlay: 'z-[140]',
} as const
