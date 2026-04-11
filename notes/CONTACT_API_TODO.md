# Contact + newsletter backend

Implemented:

- **Contact:** `POST /api/contact` uses Resend. Env: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_NOTIFY_EMAIL` (see `.env.example`).
- **Newsletter:** `POST /api/subscribe` uses Kit API v4. Env: `KIT_API_KEY`, optional `KIT_FORM_ID`, `NEXT_PUBLIC_SITE_URL`.

Hilary should enable double opt-in on the Kit form if desired.
