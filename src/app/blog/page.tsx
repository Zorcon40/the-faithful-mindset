'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { blogPosts } from '@/data/blogPosts'

export default function Blog() {
  const categories = ['All', 'Faith & Neuroscience', 'Creative Spirituality', 'Intentional Living', 'Mental Wellness']
  
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
              Blog
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-brand-charcoal/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Exploring the intersection of faith, psychology, and creativity
            </motion.p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-6 relative overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"
            animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full glass-effect text-brand-charcoal hover:bg-brand-pink hover:text-white transition-all"
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="glass-effect rounded-2xl overflow-hidden shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-brand-pink font-medium">{post.category}</span>
                        <span className="text-xs text-brand-charcoal/50">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-light text-brand-charcoal mb-3 hover:text-brand-pink transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-brand-charcoal/70 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 text-brand-pink text-sm font-medium">
                        Read More →
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
