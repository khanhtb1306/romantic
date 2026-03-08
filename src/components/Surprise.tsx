import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { config } from '../config'
import confetti from 'canvas-confetti'

interface Particle {
  id: number
  x: number
  y: number
}

const surpriseMessages = [
  "Anh yêu em! 💕",
  "Em là món quà tuyệt vời nhất! 🎁",
  "Mãi bên nhau nhé! ❤️",
  "Yêu em nhiều lắm! 💖",
  "Chờ đợi là xứng đáng! 🌟",
  "Từ 21/11/2021 đến mãi mãi! 💕",
  "Ngày 8/3 vui vẻ nhé! 🎉",
  "Yêu em hơn mỗi ngày! 🥰",
]

export const Surprise = () => {
  const [isTriggered, setIsTriggered] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [showHeartReveal, setShowHeartReveal] = useState(false)

  const fireConfetti = useCallback(() => {
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) {
        return clearInterval(interval)
      }
      const particleCount = 50 * (timeLeft / duration)
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#fbbf24', '#34d399', '#8b5cf6', '#ec4899', '#ff6b9d']
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#fbbf24', '#34d399', '#8b5cf6', '#ec4899', '#ff6b9d']
      })
    }, 250)
  }, [])

  const fireWorks = useCallback(() => {
    const duration = 2000
    const defaults = { spread: 360, ticks: 60, zIndex: 100 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const end = Date.now() + duration

    const frame = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.2, 0.5) },
        colors: ['#f43f5e', '#fbbf24', '#34d399', '#8b5cf6', '#ec4899'],
        shapes: ['circle', 'square'],
        gravity: randomInRange(0.8, 1.2),
        scalar: randomInRange(0.8, 1.2),
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }, [])

  const handleSurprise = () => {
    setIsTriggered(true)
    setShowHeartReveal(true)
    
    // Fire multiple effects
    fireConfetti()
    setTimeout(() => fireWorks(), 500)
    setTimeout(() => fireConfetti(), 1000)

    // Generate particles
    const newParticles = Array.from({ length: config.surprise.confettiCount }).map(
      (_, i) => ({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      })
    )
    setParticles(newParticles)

    // Show random messages
    const randomMessage = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)]
    setCurrentMessage(randomMessage)

    setTimeout(() => {
      setIsTriggered(false)
      setParticles([])
      setShowHeartReveal(false)
    }, 5000)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-24 px-4 bg-gradient-to-b from-white via-rose-50 to-pink-100 relative overflow-hidden"
    >
      {/* Fireworks decorations */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-10 left-10 text-5xl"
      >
        🎆
      </motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute top-10 right-10 text-5xl"
      >
        🎇
      </motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-10 left-1/4 text-4xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-10 right-1/4 text-4xl"
      >
        💫
      </motion.div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            animate={{ 
              textShadow: ['0 0 10px rgba(236,72,153,0.3)', '0 0 20px rgba(236,72,153,0.6)', '0 0 10px rgba(236,72,153,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4"
          >
            Dành cho em
          </motion.h2>
          <p className="text-gray-600">
            Món quà nhỏ từ trái tim anh 💕
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showHeartReveal ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.button
                onClick={handleSurprise}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-6 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-rose-500/50 transition-shadow"
              >
                <motion.span
                  animate={{ 
                    textShadow: ['0 0 10px rgba(255,255,255,0.5)', '0 0 20px rgba(255,255,255,0.8)', '0 0 10px rgba(255,255,255,0.5)']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10 flex items-center gap-3"
                >
                  <span>🎁</span>
                  Bấm vào đây để nhận bất ngờ
                  <span>🎁</span>
                </motion.span>

                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-xl"
                />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="space-y-6"
            >
              {/* Heart reveal animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, times: [0, 0.7, 1] }}
                className="text-8xl md:text-9xl"
              >
                ❤️
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-rose-600">
                  {currentMessage}
                </p>
              </motion.div>

              {/* Sub message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600"
              >
                Chúc em luôn vui vẻ và xinh đẹp! 🌸
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confetti animation */}
        <AnimatePresence>
          {isTriggered && (
            <div className="fixed inset-0 pointer-events-none z-50">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  animate={{
                    x: particle.x * 4,
                    y: particle.y * 4,
                    opacity: 0,
                    rotate: Math.random() * 720,
                  }}
                  transition={{
                    duration: 3,
                    ease: 'easeOut',
                  }}
                  className="absolute top-1/2 left-1/2 text-3xl"
                >
                  {['❤️', '💕', '💖', '💗', '🌹', '🎉', '✨'][particle.id % 7]}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Surprise
