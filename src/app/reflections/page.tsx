'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const galleryImages = [
  {
    src: '/assets/marketing/Marketing /White_dahlia_hero_bloom.png',
    alt: 'White Dahlia',
    caption: 'Purity & New Beginnings',
  },
  {
    src: '/assets/marketing/Marketing /Book 1 - Faith PNG.png',
    alt: 'Pink Flowers',
    caption: 'Faith & Grace',
  },
  {
    src: '/assets/marketing/Marketing /Book 2 - Strength PNG.png',
    alt: 'Purple Flowers',
    caption: 'Strength & Courage',
  },
  {
    src: '/assets/marketing/Marketing /Book 3 - Gratitude PNG.png',
    alt: 'Orange Flowers',
    caption: 'Gratitude & Joy',
  },
  {
    src: '/assets/marketing/Marketing /Book 4 - Joy PNG.png',
    alt: 'Yellow Flowers',
    caption: 'Joy & Celebration',
  },
]

export default function Reflections() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen relative pt-24" style={{ backgroundColor: '#C2D0BF' }}>
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundColor: '#C2D0BF', opacity: 0.3 }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              className="font-script text-5xl md:text-6xl lg:text-7xl text-brand-charcoal mb-6"
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
              A gentle walk through a garden of beauty and inspiration
            </motion.p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 px-6 relative overflow-hidden min-h-[70vh] flex items-center justify-center">
          <div className="max-w-5xl mx-auto w-full relative z-10">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={galleryImages[currentImageIndex].src}
                      alt={galleryImages[currentImageIndex].alt}
                      fill
                      className="object-contain"
                      priority={currentImageIndex === 0}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <p className="font-script text-3xl md:text-4xl gradient-text">
                  {galleryImages[currentImageIndex].caption}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentImageIndex
                      ? 'bg-brand-pink scale-125'
                      : 'bg-brand-charcoal/30 hover:bg-brand-charcoal/50'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Calming Message */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundColor: '#FFD1DC', opacity: 0.2 }} />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-3xl font-light text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Take a Moment to Breathe
            </motion.h2>
            <motion.p 
              className="text-lg text-brand-charcoal/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let these images remind you of beauty, growth, and the gentle unfolding of purposeful living.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect With Us
            </motion.a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
