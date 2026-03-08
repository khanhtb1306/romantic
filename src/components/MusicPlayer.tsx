import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const musicNotes = ['🎵', '🎶', '🎼', '🎸', '🎹']

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        // Autoplay blocked, user needs to click
      })
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 mb-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      🎵
                    </motion.div>
                  ) : (
                    <span>🎵</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm">Ngày Đầu Tiên</p>
                  <p className="text-xs text-gray-500">🎵</p>
                </div>
                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-rose-500 text-white rounded-full flex items-center justify-center"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </motion.button>
                <motion.button
                  onClick={() => setIsExpanded(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </motion.button>
              </div>
              
              {isPlaying && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-3 flex gap-1 justify-center"
                >
                  {musicNotes.map((note, i) => (
                    <motion.span
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 0.5, 
                        repeat: Infinity, 
                        delay: i * 0.1 
                      }}
                    >
                      {note}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.button
              key="collapsed"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(true)}
              className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl ${
                isPlaying 
                  ? 'bg-gradient-to-br from-rose-500 to-pink-500' 
                  : 'bg-white/90 backdrop-blur-md'
              }`}
            >
              {isPlaying ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🎵
                </motion.div>
              ) : (
                <span>🎶</span>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      <audio
        ref={audioRef}
        autoPlay
        loop
        src="/romantic/Ngày Đầu Tiên.mp3"
      />
    </>
  )
}

export default MusicPlayer
