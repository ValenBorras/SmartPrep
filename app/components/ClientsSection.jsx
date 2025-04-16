'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const clients = [
    { src: '/Adbis3.png', url: 'https://www.amazon.com/stores/ADBIS/page/3A6C3F3E-635C-41B0-A4B8-3519D3E427E3?lp_asin=B0BP8WZL9M&ref_=ast_bln' },
    { src: '/NJCroceWEB.webp', url: 'https://www.amazon.com/stores/node/2597414011?ie=UTF8&field-lbr_brands_browse-bin=NJ+Croce' },
    { src: '/geekshive3.png', url: 'https://www.geekshive.com/' },
    { src: '/voxfan.jpg', url: 'https://www.amazon.com/sp?ie=UTF8&seller=A18XLZGX4RPDAZ&asin=B0DQ92ZKMW&ref_=dp_merchant_link&isAmazonFulfilled=1' },
  ]
export default function ClientsSection() {
  const sliderRef = useRef(null)
  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    mode: 'snap',
    renderMode: 'performance',
    slides: {
      perView: 'auto',
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 40 },
        mode: 'snap',
      },
    },
    created(s) {
      sliderRef.current = s
    },
  })

  // Autoplay loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.next()
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="clients"
      className="relative bg-[#f9f9f9] py-24 px-6 md:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-12">
        <h2 className="font-protest text-5xl md:text-6xl text-[#121212] inline-block relative">
          Who we've worked with
          <span className="block h-1 w-24 bg-[#ef3e00] mx-auto mt-4"></span>
        </h2>
      </div>

      <div className="relative z-10">
        <div ref={sliderInstanceRef} className="keen-slider">
          {clients.map((client, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center items-center snap-center w-[70vw] sm:w-48"
            >
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                <img
                  src={client.src}
                  alt={`Client ${index}`}
                  className="w-32 sm:w-40 md:w-48 h-auto transition-transform duration-300 transform hover:scale-125"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Arrows (only visible in md+) */}
        <button
          onClick={() => sliderRef.current?.prev()}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-[#ef3e00] hover:text-white transition z-20"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => sliderRef.current?.next()}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-[#ef3e00] hover:text-white transition z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}


