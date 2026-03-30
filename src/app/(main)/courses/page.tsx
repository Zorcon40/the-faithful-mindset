'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const courses = [
  {
    title: 'Faith and the Mind',
    description: 'Explore the intersection of spiritual wisdom and neuroscience in this thoughtful six-week journey.',
    weeks: 6,
    format: 'Personal & Facilitator Editions',
    image: '/assets/blog-images/faith-hands.jpg',
  },
  {
    title: 'Small Intentional Change',
    description: 'Discover how small daily decisions shape a meaningful life through guided reflection and practice.',
    weeks: 6,
    format: 'Personal & Facilitator Editions',
    image: '/assets/blog-images/morning-routine.jpg',
  },
  {
    title: 'Becoming the Woman You Respect',
    description: 'A transformative course on aligning your actions with your values and living with integrity.',
    weeks: 6,
    format: 'Personal & Facilitator Editions',
    image: '/assets/blog-images/self-care.jpg',
  },
  {
    title: 'Living on Purpose in Small Ways',
    description: 'Learn to recognize and cultivate purposeful living through everyday intentional choices.',
    weeks: 6,
    format: 'Personal & Facilitator Editions',
    image: '/assets/blog-images/goal-planning.jpg',
  },
]

export default function Courses() {
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
              className="font-script text-5xl md:text-6xl lg:text-7xl text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Studio Courses
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-brand-charcoal/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Thoughtfully designed six-week courses for individuals and small groups
            </motion.p>
          </div>
        </section>

        {/* Course Format */}
        <section className="py-12 px-6 relative overflow-hidden" style={{ backgroundColor: '#E0CEB7' }}>
          <div className="absolute inset-0" style={{ backgroundColor: '#E0CEB7' }} />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl font-light text-brand-charcoal mb-8 text-center">
              Course Format
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="glass-effect p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-medium gradient-text mb-4">
                  Personal Edition
                </h3>
                <p className="text-brand-charcoal/80 leading-relaxed">
                  Perfect for individual reflection and personal growth. Each course includes a beautifully designed workbook with short written guidance, reflection questions, and thoughtful exercises.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-effect p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-medium gradient-text mb-4">
                  Facilitator Edition
                </h3>
                <p className="text-brand-charcoal/80 leading-relaxed">
                  Designed for small group leaders. Includes everything in the Personal Edition plus group discussion prompts and facilitation guidance for meaningful conversations.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="glass-effect p-8 rounded-2xl space-y-4 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-light text-brand-charcoal mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-brand-charcoal/80">
                <li className="flex items-start">
                  <span className="text-brand-pink mr-3">•</span>
                  <span><strong>Six weeks</strong> of guided reflection and growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-3">•</span>
                  <span><strong>60-90 minute</strong> weekly sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-3">•</span>
                  <span><strong>Workbook-based</strong> format completed during meetings (not homework)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-3">•</span>
                  <span><strong>Beautifully designed</strong> materials that inspire and encourage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-3">•</span>
                  <span><strong>Faith, knowledge, and action</strong> integrated throughout</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Available Courses */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-brand-charcoal mb-12 text-center">
              Available Courses
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <motion.div 
                  key={course.title} 
                  className="glass-effect rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-light text-brand-charcoal mb-4">
                      {course.title}
                    </h3>
                    <p className="text-brand-charcoal/80 mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-brand-charcoal/60 mb-6">
                      <span>{course.weeks} Weeks</span>
                      <span>{course.format}</span>
                    </div>
                    <motion.button 
                      className="w-full px-6 py-3 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Coming Soon
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-pink-100 via-purple-50 to-transparent opacity-50"
          />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-light text-brand-charcoal mb-6">
              Stay Informed
            </h2>
            <p className="text-lg text-brand-charcoal/80 mb-8">
              Sign up for our newsletter to be notified when courses become available
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-brand-pink to-pink-600 text-white rounded-full shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Newsletter
            </motion.a>
          </div>
        </section>
      </main>
  )
}
