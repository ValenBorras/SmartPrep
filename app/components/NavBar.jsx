'use client'
import { useEffect, useState, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const sections = ['services', 'about', 'clients', 'contact']

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const wrapperTop = wrapperRef.current?.getBoundingClientRect().top || 0
      setIsSticky(wrapperTop <= 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Our Clients', href: '#clients', id: 'clients' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ]

  const getLinkClass = (id) => {
    const base = 'transition-colors duration-200 font-inter font-semibold text-base hover:text-[#ef3e00]'
    const active = activeSection === id ? 'text-[#ef3e00]' : 'text-black'
    return `${base} ${active}`
  }

  return (
    <>
      <div ref={wrapperRef}></div>

      <div
        className={`w-full z-50 transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 bg-white' : 'relative bg-white'
        }`}
      >
        <div className="flex items-center justify-between px-3 py-4 max-w-7xl mx-auto ">

          <div className="hidden md:flex text-2xl  font-protest text-[#ef3e00] ">SmartPrep 3PL</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-x-10">
            {navLinks.map(({ label, href, id }) => (
              <li key={id}>
                <a href={href} className={getLinkClass(id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div className=" md:hidden fixed top-4 right-4 z-[999]">
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className={`w-11 h-11 rounded-full transition-colors duration-300 border border-[#ef3e00] flex items-center justify-center ${
    menuOpen ? 'bg-[#ef3e00]' : 'bg-white'
  }`}
>
  {menuOpen ? (
    <FaTimes className="text-xl text-white" />
  ) : (
    <FaBars className="text-xl text-[#ef3e00]" />
  )}
</button>
{/* Mobile Dropdown Menu */}
{menuOpen && (
  <div className="fixed inset-0 z-40 bg-[#121212]/90 backdrop-blur-sm text-white flex flex-col justify-center items-center gap-10 text-xl font-inter font-semibold transition-all duration-300">
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-6 right-6 text-white bg-[#ef3e00] p-3 rounded-full hover:bg-[#d23a00] transition"
      aria-label="Close menu"
    >
      <FaTimes className="text-xl" />
    </button>

    {navLinks.map(({ label, href, id }) => (
      <a
        key={id}
        href={href}
        className={`hover:text-[#ef3e00] transition-colors ${
          activeSection === id ? 'text-[#ef3e00]' : ''
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </a>
    ))}
  </div>
)}
          </div>
        </div>
      </div>
    </>
  )
}
