'use client'
import { motion } from 'framer-motion'

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
        <motion.img
          src="/team.webp"
          alt="SmartPrep team"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-lg shadow-lg mx-auto mt-10 w-full max-w-4xl object-cover"
        />
      </div>
    </section>
  )
}