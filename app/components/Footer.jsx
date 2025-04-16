import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-stone-200 text-black pt-20 pb-12 px-8 md:px-24 text-2xl font-bold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-start">

        {/* Logo + Contacto */}
        <div className="space-y-4">
          <Image
            src="/logo-naranja-smartprep.png"
            alt="SmartPrep Logo"
            width={200}
            height={70}
            className="object-contain"
          />
          <p className="text-sm text-stone-600">Fulfillment Services from Miami, FL</p>
          <a
            href="mailto:smart.prep25@gmail.com"
            className="block text-sm text-black hover:text-[#ef3e00] transition-colors"
          >
            smart.prep25@gmail.com
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="space-y-4">
          <h3 className="text-4lg font-bold text-[#ef3e00]">Follow us</h3>
          <div className="flex gap-6 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ef3e00] transition-colors">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ef3e00] transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ef3e00] transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-stone-400">
        © {new Date().getFullYear()} SmartPrep 3PL. All rights reserved.
      </div>
    </footer>
  )
}
