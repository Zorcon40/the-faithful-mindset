'use client'

import Image from 'next/image'
import { siteImages } from '@/lib/siteImages'
import { motion } from 'framer-motion'

export default function About() {
  return (
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
              className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About The Faithful Mindset
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl gradient-text leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A Botanical Creative Studio
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6 relative overflow-hidden">
          {/* Background orbs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <motion.div 
                className="relative aspect-square overflow-hidden rounded-2xl shadow-glow"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={siteImages.aboutPortrait}
                  alt="Hilary Williamson"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-light text-brand-charcoal">
                  Hilary Williamson
                </h2>
                <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                  Hilary is a thoughtful curator, creator of beauty, and translator of wisdom through writing and design.
                </p>
                <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                  The Faithful Mindset is not a personality-driven platform. It is a creative studio centered around beauty, 
                  thoughtful reflection, and intentional living. Hilary serves as the curator and creator behind the work, 
                  not the product being marketed.
                </p>
              </motion.div>
            </div>

            {/* Philosophy Section */}
            <div className="space-y-12 max-w-3xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-light text-brand-charcoal mb-6">
                  Our Philosophy
                </h2>
                <p className="text-lg text-brand-charcoal/80 leading-relaxed mb-8">
                  The Faithful Mindset inspires women to live on purpose through small intentional change, 
                  guided by faith, knowledge of the mind, and thoughtful action.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { title: 'Faith', desc: 'Grounded in spiritual wisdom and timeless truths' },
                  { title: 'Knowledge of the Mind', desc: 'Informed by neuroscience and understanding of how we think' },
                  { title: 'Thoughtful Action', desc: 'Expressed through small, intentional daily choices' }
                ].map((pillar, index) => (
                  <motion.div 
                    key={pillar.title}
                    className="space-y-3 glass-effect p-6 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <h3 className="text-xl font-medium gradient-text">{pillar.title}</h3>
                    <p className="text-brand-charcoal/80">
                      {pillar.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="pt-12 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                  When you visit The Faithful Mindset, you should feel as if you have stepped into a bright botanical studio 
                  filled with beauty, ideas, and thoughtful inspiration.
                </p>
                <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                  Our creative work includes coffee table books, journals, calendars, botanical art prints, reflection workbooks, 
                  and thoughtfully designed courses—all created to help you live with greater intention and purpose.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Explore Our Work
            </motion.h2>
            <motion.p 
              className="text-lg text-brand-charcoal/80 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover beautiful products and thoughtful resources designed to inspire intentional living
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="/studio-collection"
                className="px-10 py-4 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Studio Collection
              </motion.a>
              <motion.a
                href="/courses"
                className="px-10 py-4 border-2 border-brand-pink text-brand-pink rounded-full hover:bg-brand-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Studio Courses
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
  )
}
