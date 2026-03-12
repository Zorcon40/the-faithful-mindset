'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen relative pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 relative overflow-hidden">
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
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/blog" className="text-brand-pink hover:text-brand-pink/80 mb-6 inline-block">
                ← Back to Blog
              </Link>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-brand-pink font-medium">{post.category}</span>
                <span className="text-sm text-brand-charcoal/50">{post.date}</span>
                <span className="text-sm text-brand-charcoal/50">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light text-brand-charcoal mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-brand-charcoal/80 leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-3 text-sm text-brand-charcoal/70">
                <span>By {post.author}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-6 mb-12">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-glow">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* Article Content */}
        <section className="px-6 pb-24">
          <motion.article
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="prose prose-lg max-w-none
              prose-headings:font-light prose-headings:text-brand-charcoal prose-headings:mb-4 prose-headings:mt-8
              prose-h2:text-3xl prose-h2:font-light prose-h2:gradient-text prose-h2:mb-6 prose-h2:mt-12
              prose-h3:text-2xl prose-h3:font-light prose-h3:text-brand-charcoal prose-h3:mb-4 prose-h3:mt-8
              prose-p:text-brand-charcoal/80 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-a:text-brand-pink prose-a:no-underline hover:prose-a:underline
              prose-strong:text-brand-charcoal prose-strong:font-semibold
              prose-ul:text-brand-charcoal/80 prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-brand-charcoal/80 prose-li:leading-relaxed
              prose-blockquote:border-l-4 prose-blockquote:border-brand-pink prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-brand-charcoal/70"
            >
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-3xl font-light gradient-text mb-6 mt-12">{paragraph.replace('## ', '')}</h2>
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-2xl font-light text-brand-charcoal mb-4 mt-8">{paragraph.replace('### ', '')}</h3>
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={idx} className="text-brand-charcoal/80 leading-relaxed mb-6 text-lg"><strong>{paragraph.replace(/\*\*/g, '')}</strong></p>
                } else if (paragraph.trim()) {
                  return <p key={idx} className="text-brand-charcoal/80 leading-relaxed mb-6 text-lg">{paragraph}</p>
                }
                return null
              })}
            </div>
          </motion.article>
          
          {/* Share & Related */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-pink-100">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {post.keywords.slice(0, 5).map((keyword) => (
                  <span key={keyword} className="px-3 py-1 bg-pink-50 text-brand-pink text-sm rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-brand-charcoal mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.category === post.category && p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <motion.div
                      className="glass-effect rounded-2xl overflow-hidden shadow-lg"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-40">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-light text-brand-charcoal mb-2 hover:text-brand-pink transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-brand-charcoal/70 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
