'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUsSection() {
  return (
    <section id="about" className="bg-[#121212] text-white py-24 px-6 md:px-24">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="font-protest text-5xl md:text-6xl text-[#ef3e00]"
        >
          Meet the Team Behind SmartPrep
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="font-inter text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
        >
          We’re not just a warehouse. We’re a hands-on team of operators, problem-solvers, and logistics nerds passionate about helping brands scale. From receiving your inventory to prepping every box like it’s our own, we’re here to make your backend operations feel effortless — so you can focus on what you do best.
        </motion.p>

        {/* Imagen o mockup opcional */}
{/* Team Image Section */}
<motion.div 
          className="mt-20 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ef3e00]/20 hover:border-[#ef3e00]/40 transition-all duration-300">
            <Image
              src="/GroupGH.JPEG"
              alt="The Geekshive Team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#ef3e00] mb-2">Meet The Team</h3>
              <p className="text-white/90 text-lg">The passionate minds behind SmartPrep</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}