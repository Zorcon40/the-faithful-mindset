'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Studio Collection', href: '/studio-collection' },
    { name: 'Courses', href: '/courses' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reflections', href: '/reflections' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
      style={{ opacity: navOpacity }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/marketing/Marketing /The_Faithful_Mindset_Logo.png"
                alt="The Faithful Mindset"
                width={60}
                height={60}
                className="w-12 h-12 drop-shadow-lg"
              />
            </Link>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-brand-pink group ${
                    pathname === item.href
                      ? 'text-brand-pink'
                      : 'text-brand-charcoal'
                  }`}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-brand-pink"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    animate={{ width: pathname === item.href ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
