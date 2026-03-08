import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FallingItem {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  rotation: number
  opacity: number
}

const sakuraPetal = (
  <svg viewBox="0 0 32 32" className="w-full h-full" fill="currentColor">
    <path d="M16 2c0 8-8 14-8 22a8 8 0 0016 0c0-8-8-14-8-22z" fill="pink" />
    <circle cx="16" cy="24" r="2" fill="#ffb7c5" />
  </svg>
)

const heart = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff6b9d" />
  </svg>
)

const star = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ffd700" />
  </svg>
)

const Flower = ({ x, delay, duration, size, rotation, opacity }: FallingItem) => (
  <motion.div
    initial={{ y: -50, x: `${x}%`, opacity: 0, rotate: 0 }}
    animate={{
      y: '100vh',
      rotate: rotation,
      opacity: [0, opacity, opacity, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      left: `${x}%`,
      pointerEvents: 'none',
    }}
  >
    {sakuraPetal}
  </motion.div>
)

const FloatingHeart = ({ x, delay, duration, size, opacity }: FallingItem) => (
  <motion.div
    initial={{ y: '100%', x: `${x}%`, opacity: 0, scale: 0 }}
    animate={{
      y: ['100%', '-10%'],
      opacity: [0, opacity, 0],
      scale: [0, 1, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      left: `${x}%`,
      pointerEvents: 'none',
    }}
  >
    {heart}
  </motion.div>
)

const TwinklingStar = ({ x, delay, duration, size, opacity }: FallingItem) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, opacity, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      left: x,
      top: Math.random() * 60 + 10 + '%',
      pointerEvents: 'none',
    }}
  >
    {star}
  </motion.div>
)

const generateFallingItems = (count: number, type: 'flower' | 'heart' | 'star'): FallingItem[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 15,
    duration: type === 'flower' ? 15 + Math.random() * 10 : 8 + Math.random() * 4,
    size: type === 'flower' ? 10 + Math.random() * 12 : 8 + Math.random() * 10,
    rotation: Math.random() * 360,
    opacity: type === 'flower' ? 0.3 + Math.random() * 0.3 : 0.5 + Math.random() * 0.3,
  }))
}

export const BackgroundEffects = () => {
  const [flowers, setFlowers] = useState<FallingItem[]>([])
  const [hearts, setHearts] = useState<FallingItem[]>([])
  const [stars, setStars] = useState<FallingItem[]>([])

  useEffect(() => {
    setFlowers(generateFallingItems(8, 'flower'))
    setHearts(generateFallingItems(3, 'heart'))
    setStars(generateFallingItems(8, 'star'))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/30 via-transparent to-rose-50/30" />
      
      {/* Sakuras */}
      {flowers.map((item) => (
        <Flower key={`flower-${item.id}`} {...item} />
      ))}

      {/* Floating hearts */}
      <AnimatePresence>
        {hearts.map((item) => (
          <FloatingHeart key={`heart-${item.id}`} {...item} />
        ))}
      </AnimatePresence>

      {/* Twinkling stars */}
      {stars.map((item) => (
        <TwinklingStar key={`star-${item.id}`} {...item} />
      ))}
    </div>
  )
}

export default BackgroundEffects
