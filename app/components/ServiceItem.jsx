'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function ServiceItem({ title, description, image, reverse, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}
    >
      <motion.img
        src={image}
        alt={title}
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={controls}
        transition={{ duration: 0.9, delay: delay + 0.1, ease: 'easeOut' }}
        className="w-full md:w-2/5 h-auto object-cover rounded-lg shadow-sm"
      />
      <div className="w-full md:w-1/2">
        <h3 className="font-protest text-3xl md:text-4xl text-[#ef3e00] mb-4">{title}</h3>
        <p className="font-inter text-base md:text-lg text-[#121212]/80">{description}</p>
      </div>
    </motion.div>
  )
}