import { motion } from 'framer-motion'
import { calculateDaysTogether, calculateYearsTogether } from '../utils/dateUtils'
import { config } from '../config'

export const DaysTogether = () => {
  const days = calculateDaysTogether(config.startDate)
  const years = calculateYearsTogether(config.startDate)

  const stats = [
    { value: days, label: 'Ngày', icon: '🌅', color: 'from-rose-500 to-rose-600' },
    { value: Math.floor(days / 7), label: 'Tuần', icon: '📅', color: 'from-amber-500 to-amber-600' },
    { value: Math.floor(days / 30), label: 'Tháng', icon: '🗓️', color: 'from-purple-500 to-purple-600' },
    { value: years, label: 'Năm', icon: '🎆', color: 'from-pink-500 to-pink-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-24 px-4 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-rose-100 rounded-full opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-100 rounded-full opacity-50"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            animate={{ 
              textShadow: ['0 0 10px rgba(236,72,153,0.3)', '0 0 20px rgba(236,72,153,0.6)', '0 0 10px rgba(236,72,153,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4"
          >
            Hành trình của chúng ta
          </motion.h2>
          <p className="text-lg text-gray-600">
            Từ 21/11/2021 đến hôm nay - Qua bao nhiêu nắng mưa ❤️
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-rose-300 shadow-xl"
            >
              <img
                src={config.couplePhotos.together}
                alt="Chúng tôi"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 text-3xl bg-white rounded-full p-1 shadow-lg"
            >
              💕
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 md:p-8 text-white text-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className="text-3xl md:text-4xl mb-2"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  key={stat.value}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 mt-12 text-lg"
        >
          Qua bao chuyến đi, bao lần gặp gỡ, bao nhiêu khoảnh khắc - chỉ cần có em là đủ 💕
        </motion.p>
      </div>
    </motion.section>
  )
}

export default DaysTogether
