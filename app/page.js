import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import HeaderSection from './components/HeaderSection'
import AboutUs from './components/AboutUs'
import ClientsSection from './components/ClientsSection'
import Contact from './components/Contact'
import { FaWhatsapp } from 'react-icons/fa'
// import WhyUsSection from '../components/WhyUsSection'
// import ContactSection from '../components/ContactSection'
// import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-[#121212] font-inter">
      
      <HeroSection />
      <div id="navbar-wrapper">
        <NavBar />
      </div>
      <HeaderSection/>
      <ServicesSection />
      <AboutUs/>
      <ClientsSection/>
      <Contact/>
      <Footer/>
      <a
        href="https://wa.me/5493434625752"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition"
        aria-label="WhatsApp Contact"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </main>
  )
}