'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const reflections = [
  {
    title: 'The Beauty of Small Beginnings',
    date: 'March 2026',
    excerpt: 'Every meaningful change starts with a single intentional choice. Today is your opportunity to begin.',
    category: 'Intentional Living',
  },
  {
    title: 'Faith as a Foundation',
    date: 'March 2026',
    excerpt: 'Exploring how spiritual wisdom provides the grounding we need for lasting transformation.',
    category: 'Faith',
  },
  {
    title: 'Understanding Your Mind',
    date: 'February 2026',
    excerpt: 'What neuroscience teaches us about creating new patterns and breaking old ones.',
    category: 'Knowledge',
  },
]

export default function Reflections() {
  return (
    <>
      <Navigation />
      
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
              Reflections
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-brand-charcoal/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Thoughtful essays on intentional living, faith, and meaningful change
            </motion.p>
          </div>
        </section>

        {/* Reflections List */}
        <section className="py-12 px-6 relative overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"
            animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            {reflections.map((reflection, index) => (
              <motion.article 
                key={reflection.title} 
                className="glass-effect p-8 rounded-2xl shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <span className="text-sm text-brand-pink font-medium">
                    {reflection.category}
                  </span>
                  <span className="text-sm text-brand-charcoal/50 ml-4">
                    {reflection.date}
                  </span>
                </div>
                <motion.h2 
                  className="text-3xl font-light text-brand-charcoal mb-4 hover:text-brand-pink transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  {reflection.title}
                </motion.h2>
                <p className="text-lg text-brand-charcoal/80 leading-relaxed mb-6">
                  {reflection.excerpt}
                </p>
                <motion.button 
                  className="text-brand-pink hover:text-brand-pink/80 transition-colors"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  Read More →
                </motion.button>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-24 px-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-light text-brand-charcoal mb-6">
              More Reflections Coming Soon
            </h2>
            <p className="text-lg text-brand-charcoal/80 mb-8">
              Subscribe to our newsletter to receive new reflections as they're published
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
