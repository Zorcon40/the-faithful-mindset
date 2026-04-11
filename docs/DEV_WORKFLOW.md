# Development Workflow

## Local server

- Start dev server: `npm run dev`
- Local URL: `http://localhost:3030`
- If chunks/hot-reload get weird, do a clean restart:
  - `npm run clean:all`
  - `npm run dev`

## Verification commands

- Lint only: `npm run lint`
- Type check only: `npm run typecheck`
- Full pre-merge verification: `npm run verify`

## Placement grid overlay (dev only)

- The placement grid is mounted globally in development.
- Toggle it with `G`.
- Use live cursor values to report placements as `x%` / `y%`.
- Coordinate rule for scene work:
  - By default, percentages are viewport-relative.
  - For scene-specific overlays, confirm whether coordinates are viewport-relative or scene-container-relative before implementing.
