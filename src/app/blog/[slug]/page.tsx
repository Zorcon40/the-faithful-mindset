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
            className="max-w-3xl mx-auto prose prose-lg prose-pink prose-headings:font-light prose-headings:text-brand-charcoal prose-p:text-brand-charcoal/80 prose-a:text-brand-pink prose-strong:text-brand-charcoal prose-ul:text-brand-charcoal/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6} /g, (match) => {
              const level = match.trim().length
              return `<h${level}>`
            }).replace(/<br \/><br \/>/g, '</p><p>').replace(/^\*\*(.*?)\*\*/gm, '<strong>$1</strong>') }}
          />
          
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
