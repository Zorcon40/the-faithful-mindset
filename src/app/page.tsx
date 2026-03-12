'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen relative pt-24">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden -mt-24">
          {/* Animated Background Gradient */}
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
          
          {/* Hero Flower Background with Parallax */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <Image
              src="/assets/marketing/Marketing /White_dahlia_hero_bloom.png"
              alt="White Dahlia"
              fill
              className="object-cover opacity-40"
              priority
            />
          </motion.div>
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-brand-pink rounded-full opacity-20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + i * 10}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* Floating Flower Petals */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`petal-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                rotate: [0, 360],
                y: [-20, 100],
                x: [0, Math.random() * 50 - 25]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-sm" />
            </motion.div>
          ))}
          
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
            <motion.p 
              className="font-script text-5xl md:text-6xl lg:text-8xl gradient-text mb-12 pb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ lineHeight: 1.3 }}
            >
              Today is a new day
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-light text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              The Faithful Mindset
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-brand-charcoal/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              A botanical creative studio that inspires women to live on purpose through small intentional change, 
              guided by faith, knowledge of the mind, and thoughtful action.
            </motion.p>
            
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-brand-pink text-4xl"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Colorful Background Orbs */}
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal mb-4">
                The Declarations Coffee Table Series
              </h2>
              <p className="text-lg md:text-xl text-brand-charcoal/80">
                A collection of 12 beautiful reminders for the heart
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Faith', color: 'Pink', image: 'Book 1 - Faith PNG.png' },
                { name: 'Strength', color: 'Purple', image: 'Book 2 - Strength PNG.png' },
                { name: 'Gratitude', color: 'Orange', image: 'Book 3 - Gratitude PNG.png' },
                { name: 'Joy', color: 'Yellow', image: 'Book 4 - Joy PNG.png' },
              ].map((book, index) => (
                <motion.div 
                  key={book.name} 
                  className="group cursor-pointer relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -15 }}
                >
                  {/* Glow effect behind card */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-purple-500/20 rounded-lg blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="relative aspect-square mb-4 overflow-hidden bg-gradient-to-br from-white to-pink-50 rounded-xl shadow-2xl"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      rotateX: 5
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-purple-500/10"
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <Image
                      src={`/assets/marketing/Marketing /${book.image}`}
                      alt={`Declarations of ${book.name}`}
                      fill
                      className="object-contain relative z-10"
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-light text-brand-charcoal text-center group-hover:text-brand-pink transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Declarations of {book.name}
                  </motion.h3>
                  <p className="text-sm text-brand-charcoal/60 text-center">{book.color}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/studio-collection"
                className="group relative inline-block px-10 py-4 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full overflow-hidden shadow-glow"
              >
                <span className="relative z-10">View Full Collection</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  View Full Collection →
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Studio Courses Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Studio Courses
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-brand-charcoal/80 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Thoughtfully designed six-week courses with beautiful workbooks for individuals and small groups
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/courses"
                className="inline-block px-10 py-4 border-2 border-brand-pink text-brand-pink rounded-full hover:bg-brand-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                Explore Courses →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Radial gradient background */}
          <div className="absolute inset-0 bg-gradient-radial from-pink-100 via-purple-50 to-transparent opacity-50" />
          
          
          <motion.div 
            className="max-w-2xl mx-auto text-center glass-effect p-12 rounded-3xl shadow-glow relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Living on Purpose in Small Ways
            </motion.h2>
            <motion.p 
              className="text-lg text-brand-charcoal/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join our community and receive thoughtful reflections on intentional living
            </motion.p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-brand-pink transition-all bg-white/50"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
