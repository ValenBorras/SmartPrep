'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function HeaderSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 })
    }
  }, [inView, controls])

  return (
    <section id="services" className="bg-white px-6 md:px-24 py-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-protest text-5xl sm:text-6xl md:text-7xl leading-tight text-[#121212] text-left"
        >
          We Handle the <span className="text-[#ef3e00]">Boxes</span>.<br />
          You Handle the <span className="text-[#ef3e00]">Business</span>.
        </motion.h1>
      </div>
    </section>
  )
}
