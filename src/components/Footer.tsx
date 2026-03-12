'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-pink-50/30 border-t border-pink-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-charcoal text-sm font-light">
            © {new Date().getFullYear()} The Faithful Mindset. All rights reserved.
          </p>
          <p className="text-brand-pink text-sm font-medium">
            A Botanical Creative Studio
          </p>
          <p className="text-brand-charcoal text-xs">
            <a 
              href="mailto:hello@thefaithfulmindset.com"
              className="hover:text-brand-pink transition-colors inline-flex items-center gap-2 group"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                hello@thefaithfulmindset.com
              </motion.span>
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
