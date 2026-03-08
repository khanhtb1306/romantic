import { motion } from 'framer-motion'
import Hero from './components/Hero'
import DaysTogether from './components/DaysTogether'
import Countdown from './components/Countdown'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import LoveLetter from './components/LoveLetter'
import Surprise from './components/Surprise'
import BackgroundEffects from './components/BackgroundEffects'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundEffects />
      <Hero />
      <DaysTogether />
      <Countdown />
      <Timeline />
      <Gallery />
      <LoveLetter />
      <Surprise />

      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-4"
        >
          <span className="text-2xl">💕</span>
          <span className="text-2xl">🌸</span>
          <span className="text-2xl">❤️</span>
          <span className="text-2xl">🌸</span>
          <span className="text-2xl">💕</span>
        </motion.div>
        <p className="text-sm text-gray-400 mb-2">Made with ❤️ on 8/3</p>
        <p className="text-xs text-gray-500">For the one I love - Always and forever</p>
      </footer>

      <MusicPlayer />
    </div>
  )
}

export default App
