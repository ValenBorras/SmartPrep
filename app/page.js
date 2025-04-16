import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import HeaderSection from './components/HeaderSection'
import AboutUs from './components/AboutUs'
import ClientsSection from './components/ClientsSection'
import Contact from './components/Contact'
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
    </main>
  )
}