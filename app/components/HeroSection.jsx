'use client'
import { FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
<section className="w-screen min-h-[110vh] md:min-h-[130vh] bg-[#ef3e00] flex flex-col justify-between overflow-hidden">
      
      {/* JUST KEEP SCROLLING - ocupa espacio propio */}
      <motion.div
        className="flex flex-col items-center justify-center text-white font-protest text-[10vw] md:text-[8vw] flex-grow z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
      <div className="w-full flex flex-col items-center text-center leading-none">
        <div className="inline-flex gap-[0.8rem] items-end justify-center">
          <span className="font-protest text-[11vw] md:text-[5vw] text-white">
            JUST
          </span>
          <span className="font-protest text-[11vw] md:text-[5vw] text-[#ef3e00] bg-white px-4 py-1 align-bottom">
            KEEP
          </span>
        </div>
        <span className="mt-4 font-protest text-[11vw] md:text-[5vw] text-white">
          SCROLLING
        </span>
      </div>
        <FaChevronDown className="mt-6 text-3xl animate-bounce text-white" />
      </motion.div>

      {/* Logo ocupa el resto */}
      <div className="w-full shrink-0 pr-4">
        <img
          src="/smartprep-blanco.svg"
          alt="SmartPrep Logo"
          className="w-full object-cover"
        />
      </div>
    </section>
  )
}
