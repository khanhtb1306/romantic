import { motion, useScroll, useTransform } from 'framer-motion'
import { config } from '../config'
import { useRef } from 'react'

const timelineImages = [
  '/romantic/image/ngay_gap_nhau.jpg',
  '/romantic/image/tam_dao_1.jpg',
  '/romantic/image/cat_ba.jpg',
  '/romantic/image/gap_lai_sau_2_nam.jpg',
  '/romantic/image/nha_trang.jpg',
  '/romantic/image/ninh_binh.jpg',
  '/romantic/image/sapa.jpg',
]

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-24 px-4 bg-gradient-to-b from-white via-rose-50 to-white relative overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full opacity-60"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{ 
              textShadow: ['0 0 10px rgba(236,72,153,0.3)', '0 0 20px rgba(236,72,153,0.5)', '0 0 10px rgba(236,72,153,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4"
          >
            Những kỷ niệm
          </motion.h2>
          <p className="text-gray-600">
            Những chuyến đi, những lần gặp gỡ - Từng khoảnh khắc đáng giá 💕
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 via-rose-500 to-pink-500 rounded-full"
          >
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-rose-500 to-pink-500 rounded-full"
            />
          </motion.div>

          <div className="space-y-16">
            {config.milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className={`flex gap-6 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-block"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4">
                      <img
                        src={timelineImages[index % timelineImages.length]}
                        alt={milestone.title}
                        className="w-full h-40 md:h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-sm text-rose-600 font-semibold mb-1"
                  >
                    {new Date(milestone.date).toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-xl md:text-2xl font-bold text-gray-800 mb-2"
                  >
                    {milestone.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="text-gray-600"
                  >
                    {milestone.description}
                  </motion.p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                    <span className="text-white text-lg md:text-xl">
                      {index === 0 ? '💕' : index === config.milestones.length - 1 ? '🎉' : '❤️'}
                    </span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="absolute inset-0 bg-rose-400 rounded-full"
                  />
                </motion.div>

                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Timeline
