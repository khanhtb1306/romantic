import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { config } from '../config'

export const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)

  const handleOpen = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setIsOpen(true)
      setIsFlipping(false)
    }, 500)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-24 px-4 bg-gradient-to-b from-white via-rose-50 to-pink-50 relative overflow-hidden"
    >
      {/* Candle decoration */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-10 top-1/4 text-6xl"
      >
        🕯️
      </motion.div>
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        className="absolute right-10 top-1/3 text-5xl"
      >
        🕯️
      </motion.div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            animate={{ 
              textShadow: ['0 0 10px rgba(236,72,153,0.3)', '0 0 20px rgba(236,72,153,0.6)', '0 0 10px rgba(236,72,153,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4"
          >
            Lá thư đặc biệt
          </motion.h2>
          <p className="text-gray-600">
            Những lời anh muốn nói với em 📝
          </p>
        </motion.div>

        <div className="relative perspective-1000">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="envelope-closed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8,
                  rotateX: isFlipping ? -180 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl shadow-2xl overflow-hidden"
              >
                <motion.button
                  onClick={handleOpen}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-16 text-center relative"
                >
                  {/* Envelope flap */}
                  <motion.div
                    animate={{ 
                      rotateX: isFlipping ? 180 : 0,
                    }}
                    transition={{ duration: 0.5, delay: isFlipping ? 0 : 0 }}
                    className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-rose-200 to-rose-100"
                    style={{ 
                      clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                      transformOrigin: 'top'
                    }}
                  />
                  
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <div className="text-7xl mb-4">💌</div>
                    <p className="text-gray-700 text-lg font-medium">
                      Bấm để đọc thư tay của anh
                    </p>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-rose-500 mt-4"
                    >
                      ✨ Click here ✨
                    </motion.div>
                  </motion.div>

                  {/* Decorative hearts */}
                  <motion.div
                    animate={{ 
                      x: [-10, 10, -10],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-8 left-8 text-2xl text-rose-300"
                  >
                    💕
                  </motion.div>
                  <motion.div
                    animate={{ 
                      x: [10, -10, 10],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="absolute bottom-8 right-8 text-2xl text-rose-300"
                  >
                    💗
                  </motion.div>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="letter-open"
                initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Letter paper with texture */}
                <div className="p-8 md:p-12 bg-gradient-to-b from-white to-rose-50 relative">
                  {/* Paper texture lines */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 29px, #000 30px)',
                  }} />

                  {/* Wax seal */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white text-lg">❤️</span>
                  </motion.div>

                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center mb-8"
                    >
                      <p className="text-rose-600 font-serif text-2xl md:text-3xl">
                        {config.letter.greeting}
                      </p>
                    </motion.div>

                    <div className="font-serif text-gray-700 leading-relaxed space-y-6 mb-8">
                      {config.letter.content.split('\n\n').map((paragraph, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.15 }}
                          className="text-base md:text-lg text-justify indent-8"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-right"
                    >
                      <p className="text-rose-600 font-serif text-xl mb-2">
                        {config.letter.closing}
                      </p>
                      <motion.div
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-3xl text-right"
                      >
                        💕
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    🔒 Đóng thư lại
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}

export default LoveLetter
