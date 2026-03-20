'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const books = [
  { id: 1, name: 'Faith', color: 'Pink', available: true },
  { id: 2, name: 'Strength', color: 'Purple', available: true },
  { id: 3, name: 'Gratitude', color: 'Orange', available: true },
  { id: 4, name: 'Joy', color: 'Yellow', available: true },
  { id: 5, name: 'Hope', color: 'Blue', available: false },
  { id: 6, name: 'Peace', color: 'White', available: false },
  { id: 7, name: 'Love', color: 'Red', available: false },
  { id: 8, name: 'Courage', color: 'Coral', available: false },
  { id: 9, name: 'Wisdom', color: 'Lavender', available: false },
  { id: 10, name: 'Grace', color: 'Cream', available: false },
  { id: 11, name: 'Purpose', color: 'Peach', available: false },
  { id: 12, name: 'Renewal', color: 'Green', available: false },
]

export default function StudioCollection() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen relative pt-24">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Animated gradient background */}
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
              className="font-display text-5xl md:text-6xl lg:text-7xl text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Studio Collection
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-brand-charcoal/80 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Beautiful products designed to inspire intentional living
            </motion.p>
          </div>
        </section>

        {/* Declarations Series */}
        <section className="py-12 px-6 relative overflow-hidden">
          {/* Background orbs */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/assets/marketing/Marketing /Declarations Books Series.png"
                  alt="Declarations Coffee Table Series"
                  width={800}
                  height={600}
                  className="mx-auto mb-8 rounded-2xl shadow-glow"
                />
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal mb-4">
                The Garden of Declarations Series
              </h2>
              <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-2xl mx-auto mb-6">
                A collection of beautiful coffee table books for the heart
              </p>
              <p className="gradient-text font-medium text-lg">
                BEAUTIFUL MESSAGES • INFINITE POSSIBILITY
              </p>
            </motion.div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {books.map((book, index) => (
                <motion.div 
                  key={book.id} 
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-purple-500/20 rounded-lg blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="relative aspect-square mb-4 overflow-hidden bg-gradient-to-br from-white to-pink-50 rounded-xl shadow-2xl"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {book.available ? (
                      <>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-purple-500/10"
                          animate={{
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <Image
                          src={`/assets/marketing/Marketing /Book ${book.id} - ${book.name} PNG.png`}
                          alt={`Declarations of ${book.name}`}
                          fill
                          className="object-contain relative z-10"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-brand-charcoal/40 text-sm">Coming Soon</p>
                      </div>
                    )}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-light text-brand-charcoal text-center mb-1 group-hover:text-brand-pink transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Declarations of {book.name}
                  </motion.h3>
                  <p className="text-sm text-brand-charcoal/60 text-center mb-3">{book.color}</p>
                  {book.available && (
                    <div className="text-center">
                      <motion.button 
                        className="text-sm text-brand-pink hover:text-brand-pink/80 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View on Amazon →
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* About the Series */}
            <motion.div 
              className="max-w-3xl mx-auto text-center space-y-6 glass-effect p-8 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-light text-brand-charcoal">
                About the Series
              </h3>
              <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                Each book in the Declarations series contains one declaration per page paired with beautiful floral imagery. 
                These coffee table books are designed to be displayed, read slowly, and returned to regularly.
              </p>
              <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                Each book uses a different flower color theme, creating a vibrant collection that brings beauty and 
                inspiration to your home.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Other Products */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal mb-4">
                Additional Products
              </h2>
              <p className="text-lg md:text-xl text-brand-charcoal/80">
                More beautiful tools for intentional living
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Journals', description: 'Thoughtfully designed for daily reflection' },
                { name: 'Undated Calendars', description: 'Plan your year with intention' },
                { name: 'Botanical Art Prints', description: 'Bring beauty to your space' },
                { name: 'Reflection Workbooks', description: 'Guided exercises for growth' },
              ].map((product, index) => (
                <motion.div 
                  key={product.name} 
                  className="text-center p-8 glass-effect rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h3 className="text-xl font-light text-brand-charcoal mb-3">
                    {product.name}
                  </h3>
                  <p className="text-brand-charcoal/70 mb-4">
                    {product.description}
                  </p>
                  <p className="text-sm text-brand-pink/70">Coming Soon</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
