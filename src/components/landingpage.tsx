
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ShoppingBag, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-16 text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Aitazaz Ahsan Services
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover amazing products and expert services all in one place. Shop our curated collection and explore our professional portfolio.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="/shop" passHref>
            <motion.button
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={20} />
              <span>Shop Now</span>
            </motion.button>
          </Link>
          <Link href="/portfolio" passHref>
            <motion.button
              className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase size={20} />
              <span>View Portfolio</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 100 ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link href="#features" passHref>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        initial={{ backgroundPosition: '0 0' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
    </section>
  )
}