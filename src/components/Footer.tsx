'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Facebook, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Studio Collection', href: '/studio-collection' },
    { name: 'Courses', href: '/courses' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/thefaithfulmindset' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/thefaithfulmindset' },
  ]

  return (
    <footer className="w-full bg-gradient-to-b from-white to-pink-50/30 border-t border-pink-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-script text-3xl text-brand-charcoal mb-4">The Faithful Mindset</h3>
            <p className="text-brand-charcoal/70 mb-6 max-w-md">
              A botanical creative studio inspiring women to live on purpose through small intentional change.
            </p>
            
            {/* Newsletter */}
            <div className="max-w-sm">
              <p className="text-sm font-medium text-brand-charcoal mb-3">Join our community</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-pink-200 rounded-full text-sm focus:outline-none focus:border-brand-pink"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-pink text-white rounded-full text-sm font-medium hover:bg-pink-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-medium text-brand-charcoal mb-4">Explore</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-brand-charcoal/70 hover:text-brand-pink transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-medium text-brand-charcoal mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-brand-pink hover:bg-brand-pink hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <a 
              href="mailto:hello@thefaithfulmindset.com"
              className="text-sm text-brand-charcoal/70 hover:text-brand-pink transition-colors inline-flex items-center gap-2"
            >
              <Mail size={16} />
              hello@thefaithfulmindset.com
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="pt-8 border-t border-pink-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-brand-charcoal/60 inline-flex items-center gap-1">
            © {new Date().getFullYear()} The Faithful Mindset. Made with <Heart size={14} className="text-brand-pink" /> All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
