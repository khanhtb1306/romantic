import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'

const typingTexts = [
  'Dành tặng em 💕',
  'Ngày 8/3 - Ngày của những cô gái đặc biệt',
  'Từ 21/11/2021 đến mãi sau',
  'Yêu em nhiều lắm ❤️',
]

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex]
    
    if (isTyping) {
      const timeout = setTimeout(() => {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsTyping(false), 2000)
        }
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsTyping(true)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [displayText, currentTextIndex, isTyping])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-rose-100 via-rose-50 to-white flex items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Date Display */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: ['0 0 10px rgba(244,63,94,0.3)', '0 0 20px rgba(244,63,94,0.6)', '0 0 10px rgba(244,63,94,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-7xl md:text-9xl font-serif font-bold text-rose-500 mb-2"
          >
            8/3
          </motion.h1>
          <p className="text-xl md:text-2xl text-rose-400 font-medium">
            International Women's Day
          </p>
        </motion.div>

        {/* Couple Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center items-center gap-4 md:gap-8 mb-8"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="relative"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg">
              <img
                src={config.couplePhotos.him}
                alt="Anh"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 text-2xl"
            >
              👦
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-5xl"
          >
            ❤️
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: 'spring' }}
            className="relative"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg">
              <img
                src={config.couplePhotos.her}
                alt="Em"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-2 -left-2 text-2xl"
            >
              👧
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Typing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl text-gray-700 font-light min-h-[3rem]">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-1 h-8 md:h-10 bg-rose-500 ml-1"
            />
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            Dù xa nhau nửa vòng trái đất, nhưng tình yêu này vẫn luôn ở đây. <br />
            Từ 21/11/2021 đến mãi mãi 💕
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            🌸
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500">Scroll down để xem 👇</p>
        </motion.div>
      </div>

      {/* Decorative hearts */}
      <motion.div
        animate={{ 
          y: [0, -20],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-10 md:left-20 top-1/4 text-rose-300 text-6xl md:text-8xl"
      >
        💕
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, -30],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute right-10 md:right-20 bottom-1/4 text-rose-300 text-5xl md:text-7xl"
      >
        💗
      </motion.div>
    </motion.section>
  )
}

export default Hero
