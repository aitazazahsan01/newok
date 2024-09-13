'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'Next.js', percentage: 72 },
  { name: 'TypeScript', percentage: 75 },
  { name: 'React.js', percentage: 70 },
  { name: 'C++', percentage: 60 },
  { name: 'Java', percentage: 60 },
  {name: 'Node JS', percentage: 50 },
]

export default function PortfolioPage() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((prevIndex) => (prevIndex + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex flex-col justify-center items-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Muhammad Aitazaz Ahsan</h1>
        <h2 className="text-2xl md:text-3xl text-purple-300 mb-6">Aspiring Full Stack Developer</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Passionate about creating innovative web solutions and turning ideas into reality through code.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="https://github.com/aitazazahsan01"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-purple-900 p-3 rounded-full"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/muhammad-aitazaz-ahsan-74362028a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-purple-900 p-3 rounded-full"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:ahsanaitizaz615@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-purple-900 p-3 rounded-full"
          >
            <Mail size={24} />
          </motion.a>
          <motion.a
            href="E:/New folder/ecommerce/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-purple-900 p-3 rounded-full"
          >
            <FileText size={24} />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-80 h-80 md:w-96 md:h-96"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full border-4 border-purple-500 rounded-full"
          />
        </div>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `rotate(${(index / skills.length) * 360}deg)`,
            }}
          >
            <motion.div
              className="bg-white text-purple-900 px-3 py-1 rounded-full text-sm font-semibold"
              style={{
                transform: `translate(140px) rotate(-${(index / skills.length) * 360}deg)`,
              }}
            >
              {skill.name}
            </motion.div>
          </motion.div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            key={activeSkillIndex}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-2">{skills[activeSkillIndex].name}</h3>
            <div className="w-32 h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-purple-900 opacity-20"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="44"
                  cx="50"
                  cy="50"
                />
                <motion.circle
                  className="text-purple-500"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="44"
                  cx="50"
                  cy="50"
                  initial={{ strokeDasharray: '0 276.46' }}
                  animate={{ strokeDasharray: `${(skills[activeSkillIndex].percentage / 100) * 276.46} 276.46` }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                {skills[activeSkillIndex].percentage}%
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}