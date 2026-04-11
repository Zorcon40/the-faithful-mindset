'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Variant = 'home' | 'footer' | 'contact'

type NewsletterSubscribeProps = {
  variant: Variant
  source: string
}

async function postSubscribe(payload: {
  email: string
  firstName?: string
  source: string
}) {
  const res = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = (await res.json().catch(() => ({}))) as {
    ok?: boolean
    error?: string
  }
  if (!res.ok) {
    throw new Error(data.error ?? 'Something went wrong.')
  }
}

export function NewsletterSubscribe({ variant, source }: NewsletterSubscribeProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      await postSubscribe({
        email,
        firstName: variant === 'contact' ? firstName : undefined,
        source,
      })
      setStatus('success')
      setMessage('Thanks! Check your inbox to confirm.')
      setEmail('')
      setFirstName('')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Please try again.')
    }
  }

  if (variant === 'footer') {
    return (
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            autoComplete="email"
            disabled={status === 'loading'}
            className="flex-1 min-w-0 px-4 py-2 border border-pink-200 rounded-full text-sm focus:outline-none focus:border-brand-pink disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="shrink-0 px-4 py-2 bg-brand-pink text-white rounded-full text-sm font-medium hover:bg-pink-700 transition-colors disabled:opacity-60"
          >
            {status === 'loading' ? '…' : 'Subscribe'}
          </button>
        </div>
        {message ? (
          <p
            className={`text-xs ${status === 'success' ? 'text-green-700' : 'text-red-600'}`}
          >
            {message}
          </p>
        ) : null}
      </form>
    )
  }

  if (variant === 'contact') {
    return (
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="newsletter-name"
            className="block text-sm font-medium text-brand-charcoal mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="newsletter-name"
            name="newsletter-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="name"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-pink bg-white disabled:opacity-60"
          />
        </div>
        <div>
          <label
            htmlFor="newsletter-email"
            className="block text-sm font-medium text-brand-charcoal mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="newsletter-email"
            name="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-pink bg-white disabled:opacity-60"
          />
        </div>
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-8 py-3 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-lg disabled:opacity-60"
          whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
          whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </motion.button>
        {message ? (
          <p
            className={`text-sm ${status === 'success' ? 'text-green-700' : 'text-red-600'}`}
          >
            {message}
          </p>
        ) : null}
      </form>
    )
  }

  return (
    <div className="max-w-md mx-auto w-full">
      <motion.form
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          autoComplete="email"
          disabled={status === 'loading'}
          className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-brand-pink transition-all bg-white/50 disabled:opacity-60"
        />
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-4 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-lg disabled:opacity-60"
          whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
          whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
        >
          {status === 'loading' ? '…' : 'Subscribe'}
        </motion.button>
      </motion.form>
      {message ? (
        <p
          className={`mt-3 text-sm text-center ${status === 'success' ? 'text-green-700' : 'text-red-600'}`}
        >
          {message}
        </p>
      ) : null}
    </div>
  )
}
