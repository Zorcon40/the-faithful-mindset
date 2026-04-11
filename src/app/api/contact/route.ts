import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_NOTIFY_EMAIL
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: 'Contact form is not configured yet.' },
      { status: 503 }
    )
  }

  let body: { name?: string; email?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please fill in all fields.' },
      { status: 422 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 422 }
    )
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Contact form: ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    console.error('[contact] Resend error', error)
    return NextResponse.json(
      { error: 'Could not send your message. Please try again later.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
