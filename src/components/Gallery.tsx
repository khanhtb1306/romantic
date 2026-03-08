import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const allGalleryImages = [
  '/image/ngay_gap_nhau.jpg',
  '/image/tam_dao.jpg',
  '/image/tam_dao_1.jpg',
  '/image/cat_ba.jpg',
  '/image/gap_lai_sau_2_nam.jpg',
  '/image/nha_trang.jpg',
  '/image/ninh_binh.jpg',
  '/image/sapa.jpg',
  '/image/her.jpg',
  '/image/him.jpg',
  '/image/z7594487423185_aeca65413a62ed3a45f814df2bf0650a.jpg',
  '/image/z7594487448869_74c88e0d94a2d84cc3bd63bc945c5ead.jpg',
  '/image/z7594487450334_4ce5c229d9e96f10d94df659fe72e059.jpg',
  '/image/z7594487469744_6df3a1ce1dbc7e719dad29395c74f952.jpg',
  '/image/z7594487474329_8849b44323b98fc9ec2de7f7ede4f47e.jpg',
  '/image/z7594487483642_3bf957f9019fadbab4c64fa270c1d015.jpg',
  '/image/z7594487488199_f163f929a8bb93c1e3c81e95795ed914.jpg',
  '/image/z7594487540621_16ba0c232af1477927ec977203ada190.jpg',
  '/image/z7594487545573_ea4831241d04327678ecf3cba2a00f81.jpg',
  '/image/z7594487545788_556d71849bd3f577e7166c78225903b9.jpg',
  '/image/z7594487567367_9fb8766a339f012ed3907c59ee0d47c8.jpg',
  '/image/z7594487568594_d505977aba7848fbcca104371c28f18f.jpg',
  '/image/z7594487568595_054dc1d4583fe6da93cd3947681bf873.jpg',
  '/image/z7594487589738_f43c1e7e0e9ebf020a6bb7aeebce4f5a.jpg',
  '/image/z7594487605000_1191661ee368b18e805fdea754a75593.jpg',
  '/image/z7594487689564_5f64da3037e2c705512a29968104ae6d.jpg',
  '/image/z7594487730974_4ef8c35a2861e4067b3b6ce1c1926315.jpg',
  '/image/z7594487785620_5c6083c0807b5c3b9d281077b8cd29a2.jpg',
  '/image/z7594487819687_c6b680327644d44c183dfdf1836bd7e7.jpg',
  '/image/z7594487866700_d71db8b32a32a86ac44f224793c5c9f7.jpg',
  '/image/z7594487947381_e3cd6324840bc393efd9073982678fbe.jpg',
  '/image/z7594487982859_89ded9d27310f42dd48e8bfd4b40df1f.jpg',
  '/image/z7594488017294_62730a26d5703d8a41313b5e1ae77cca.jpg',
  '/image/z7594488075399_5fa49b3180bf9d508173d5f2d2a90ccc.jpg',
  '/image/z7594488108962_398276f70bf40ed752f65dfd35917d94.jpg',
  '/image/z7594488182964_a78ba2d81a2c2d8584af87dfddec4d1d.jpg',
  '/image/z7594488190569_3cade7c9efe2428251345b7b9d7d3614.jpg',
  '/image/z7594488272115_089491ba577913ab8c5b59f5ee20806e.jpg',
  '/image/z7594488404434_4e99643733504ca7ec50d45686bc0648.jpg',
  '/image/z7594488408053_dcd4746b4f23815510fd9e191670fc5c.jpg',
  '/image/z7594488477018_9656237f87ca528364eb21a932344776.jpg',
  '/image/z7594488510359_ec61b6e6e34717c02a8c9b43b33760ea.jpg',
  '/image/z7594488815516_55fb1a5df55567c05f02d7b1c0a05c68.jpg',
  '/image/z7594489149109_df070bd39eea736250e8d94745ff0344.jpg',
  '/image/z7594489225317_1edb0f69a56db5f2cc7a1bcf31a7cde9.jpg',
  '/image/z7594489493141_3c9a35d8d4ff144629b1bf40eef20553.jpg',
]

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-24 px-4 bg-gradient-to-b from-rose-50 via-white to-pink-50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{ 
              textShadow: ['0 0 10px rgba(236,72,153,0.3)', '0 0 20px rgba(236,72,153,0.6)', '0 0 10px rgba(236,72,153,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4"
          >
            Khoảnh khắc đáng nhớ
          </motion.h2>
          <p className="text-gray-600">
            Mỗi bức ảnh là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm 💕
          </p>
        </motion.div>

        {/* Simple Grid - Hiển thị tất cả ảnh */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {allGalleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              onClick={() => setSelectedImage(index)}
              className="aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image}
                alt={`Kỷ niệm ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal xem ảnh lớn */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={allGalleryImages[selectedImage]}
                  alt="fullscreen"
                  className="w-full h-[80vh] object-contain rounded-2xl shadow-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white text-3xl hover:text-rose-300"
                >
                  ✕
                </button>
                {selectedImage > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full text-white text-xl"
                  >
                    ‹
                  </button>
                )}
                {selectedImage < allGalleryImages.length - 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full text-white text-xl"
                  >
                    ›
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Gallery
