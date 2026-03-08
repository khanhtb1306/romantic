import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { calculateTimeApart } from '../utils/dateUtils'

interface TimeUnit {
  value: number
  label: string
  icon: string
}

const apartDate = new Date('2025-11-07') // Ngày cô ấy đi nước ngoài

const FlipCard = ({ value, label, delay, index }: { value: number; label: string; delay: number; index: number }) => {
  const [prevValue, setPrevValue] = useState(value)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true)
      const timeout = setTimeout(() => {
        setPrevValue(value)
        setIsFlipping(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [value, prevValue])

  const colors = [
    'from-rose-500 to-rose-600',
    'from-amber-500 to-amber-600', 
    'from-emerald-500 to-emerald-600',
    'from-violet-500 to-violet-600'
  ]

  const icons = ['📅', '⏰', '⏱️', '💫']

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, type: 'spring', stiffness: 200 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <motion.div
          className={`w-20 h-24 md:w-28 md:h-32 bg-gradient-to-br ${colors[index]} rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center preserve-3d`}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={value}
              initial={isFlipping ? { rotateX: -90, opacity: 0 } : false}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              {String(value).padStart(2, '0')}
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-x-0 top-1/2 h-px bg-black/10" />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.3, type: 'spring' }}
          className="absolute -top-3 -right-3 text-2xl md:text-3xl"
        >
          {icons[index]}
        </motion.div>
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
        className="mt-3 text-gray-600 font-medium text-sm md:text-base"
      >
        {label}
      </motion.p>
    </motion.div>
  )
}

export const Countdown = () => {
  const [time, setTime] = useState(calculateTimeApart(apartDate))

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeApart(apartDate)
      setTime(newTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits: TimeUnit[] = [
    { value: time.days, label: 'Ngày', icon: '📅' },
    { value: time.hours, label: 'Giờ', icon: '⏰' },
    { value: time.minutes, label: 'Phút', icon: '⏱️' },
    { value: time.seconds, label: 'Giây', icon: '💫' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-24 px-4 bg-gradient-to-b from-white via-rose-50 to-white relative overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 left-10 w-32 h-32 bg-rose-100 rounded-full opacity-40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-pink-100 rounded-full opacity-40"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4"
          >
            Những ngày không có em
          </motion.h2>
          <p className="text-lg text-gray-600">
            Anh không biết ngày nào sẽ được gặp em, nhưng anh biết chắc một điều...
          </p>
          <p className="text-sm text-rose-500 mt-2 italic">
            "...em là lý do anh cố gắng mỗi ngày"
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto mb-12">
          {timeUnits.map((unit, index) => (
            <FlipCard
              key={unit.label}
              value={unit.value}
              label={unit.label}
              delay={index * 0.15}
              index={index}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm"
        >
          Mỗi giây trôi qua là một giây anh nhớ em 💕
        </motion.p>
      </div>
    </motion.section>
  )
}

export default Countdown
