'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NewsletterSubscribe } from '@/components/NewsletterSubscribe'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [contactStatus, setContactStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [contactMessage, setContactMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactStatus('loading')
    setContactMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        error?: string
      }
      if (!res.ok) {
        throw new Error(data.error ?? 'Could not send your message.')
      }
      setContactStatus('success')
      setContactMessage('Thank you. We will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setContactStatus('error')
      setContactMessage(
        err instanceof Error ? err.message : 'Please try again.'
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
      <main className="min-h-screen relative pt-24">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"
            animate={{
              background: [
                'linear-gradient(135deg, #FFF5F8 0%, #FFFFFF 50%, #F8F5FF 100%)',
                'linear-gradient(135deg, #F8F5FF 0%, #FFFFFF 50%, #FFF5F8 100%)',
                'linear-gradient(135deg, #FFF5F8 0%, #FFFFFF 50%, #F8F5FF 100%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-brand-charcoal/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We&apos;d love to hear from you
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Newsletter */}
        <section className="py-12 px-6 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-light text-brand-charcoal mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={contactStatus === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-pink disabled:opacity-60"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={contactStatus === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-pink disabled:opacity-60"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={contactStatus === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-pink resize-none disabled:opacity-60"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={contactStatus === 'loading'}
                  className="w-full px-8 py-3 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-lg disabled:opacity-60"
                  whileHover={{ scale: contactStatus === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: contactStatus === 'loading' ? 1 : 0.98 }}
                >
                  {contactStatus === 'loading' ? 'Sending…' : 'Send Message'}
                </motion.button>
                {contactMessage ? (
                  <p
                    className={`text-sm ${contactStatus === 'success' ? 'text-green-700' : 'text-red-600'}`}
                  >
                    {contactMessage}
                  </p>
                ) : null}
              </form>
              
              <div className="mt-8 pt-8 border-t border-pink-100">
                <p className="text-brand-charcoal/80">
                  Or email us directly at{' '}
                  <a href="mailto:hello@thefaithfulmindset.com" className="text-brand-pink hover:text-brand-pink/80">
                    hello@thefaithfulmindset.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-light text-brand-charcoal mb-6">
                Newsletter
              </h2>
              <div className="glass-effect p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-light text-brand-charcoal mb-4">
                  Living on Purpose in Small Ways
                </h3>
                <p className="text-brand-charcoal/80 mb-6 leading-relaxed">
                  Join our community and receive thoughtful reflections on intentional living, updates on new products, and early access to courses.
                </p>
                
                <NewsletterSubscribe variant="contact" source="contact" />
                
                <p className="text-xs text-brand-charcoal/60 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
  )
}
