# Garden Regression Checklist

Run this after garden routing, layout, hotspot, or image-positioning changes.

## Core flow

- Open `http://localhost:3030/` and confirm splash buttons render:
  - `Enter the Garden`
  - `Enter the Site`
- Click `Enter the Garden` and confirm route is `/garden/porch`.
- On porch:
  - `Enter the house` button is visible and clickable.
  - Button anchor matches current target coordinates.
- Click `Enter the house`:
  - Transition runs (or skips with reduced motion).
  - Route updates to `/garden/entryway`.
- On entryway:
  - Clicking inside right third advances to great room.
  - Route updates to `/garden/tour`.

## Navigation behavior

- Back from entryway returns to porch.
- Back during transition returns to porch.
- Refresh on `/garden/porch`, `/garden/entryway`, and `/garden/tour` loads expected scene bucket.

## Overlay/layering checks

- Site nav remains clickable.
- Garden header controls remain clickable.
- Scene hotspots do not block nav chrome.
- Dev placement grid (toggle `G`) does not block clicks.

## Final validation

- Run `npm run verify`.
