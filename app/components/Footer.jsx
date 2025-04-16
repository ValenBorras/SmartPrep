import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-stone-200 text-black pt-20 pb-12 px-8 md:px-24 text-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16 items-start">

        {/* Columna izquierda: Logo + Mail */}
        <div className="flex-1 space-y-4">
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
            className="block text-1xl text-black hover:text-[#ef3e00] transition-colors font-semibold"
          >
            smart.prep25@gmail.com
          </a>
        </div>

        {/* Columna central: Redes sociales */}
        <div className="flex-1 space-y-4 text-center md:text-center">
          <h3 className="text-2xl font-bold text-[#ef3e00]">Follow us</h3>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ef3e00] transition-colors">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ef3e00] transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ef3e00] transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Columna derecha: Dirección */}
        <div className="flex-1 space-y-4 md:text-right text-center md:mt-0 mt-4">
          <h3 className="text-2xl font-bold text-[#ef3e00]">Warehouse Address</h3>
          <p className="text-md font-semibold text-stone-600 leading-relaxed">
            14339 SW 142nd ST<br />
            Miami, Florida 33186
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-stone-400">
        © {new Date().getFullYear()} SmartPrep 3PL. All rights reserved.
      </div>
    </footer>
  )
}
