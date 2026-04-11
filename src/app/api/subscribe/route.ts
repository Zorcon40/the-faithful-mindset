import { NextRequest, NextResponse } from 'next/server'

const KIT_API = 'https://api.kit.com/v4'

export async function POST(request: NextRequest) {
  const apiKey = process.env.KIT_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Newsletter signup is not configured yet.' },
      { status: 503 }
    )
  }

  let body: { email?: string; firstName?: string; source?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const email =
    typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const firstName =
    typeof body.firstName === 'string' ? body.firstName.trim() : ''
  const source = typeof body.source === 'string' ? body.source : 'website'

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 422 }
    )
  }

  const referer =
    request.headers.get('referer') ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    'https://thefaithfulmindset.com'

  const createRes = await fetch(`${KIT_API}/subscribers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': apiKey,
    },
    body: JSON.stringify({
      email_address: email,
      ...(firstName ? { first_name: firstName } : {}),
      fields: { Source: source },
    }),
  })

  const createPayload = await createRes.json().catch(() => ({}))

  if (!createRes.ok) {
    const msg = Array.isArray(createPayload.errors)
      ? String(createPayload.errors[0])
      : 'Could not subscribe. Please try again later.'
    return NextResponse.json(
      { error: msg },
      { status: createRes.status === 422 ? 422 : 502 }
    )
  }

  const subscriberId = createPayload.subscriber?.id as number | undefined
  const formIdRaw = process.env.KIT_FORM_ID

  if (formIdRaw != null && formIdRaw !== '' && subscriberId != null) {
    const formId = parseInt(formIdRaw, 10)
    if (!Number.isNaN(formId)) {
      const formRes = await fetch(
        `${KIT_API}/forms/${formId}/subscribers/${subscriberId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Kit-Api-Key': apiKey,
          },
          body: JSON.stringify({ referrer: referer }),
        }
      )

      if (!formRes.ok) {
        const formErr = await formRes.json().catch(() => ({}))
        console.error('[subscribe] Kit add-to-form failed', formErr)
        return NextResponse.json(
          {
            error:
              'We saved your email but could not finish signup. Please try again or contact us.',
          },
          { status: 502 }
        )
      }
    }
  }

  return NextResponse.json({ ok: true })
}
