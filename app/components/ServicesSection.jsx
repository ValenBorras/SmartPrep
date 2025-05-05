'use client'
import ServiceItem from './ServiceItem'

const services = [
  {
    title: 'Product Receiving & Inspection',
    description: 'We receive your inventory, inspect for accuracy and damage, and get it ready for fulfillment with care and precision.',
    image: '/NjCroceMerch.jpeg',
  },
  {
    title: 'Labeling & Compliance',
    description: 'FNSKU, bundles, custom branding — we handle all Amazon & e-commerce labeling needs so your shipments are always compliant.',
    image: '/labelingMonopoly.jpeg',
  },
  {
    title: 'Prep for Amazon, Walmart & More',
    description: 'We prep your products to meet platform-specific requirements, making sure you stay compliant across Amazon, Walmart, Mercado Libre and more.',
    image: '/amazon.webp',
  },
  {
    title: 'Storage & Inventory Management',
    description: 'Keep your products safe and organized with scalable, trackable storage space in our Miami facility.',
    image: '/WhseVertical.jpeg',
  },

]

export default function ServicesSection() {
  return (
    <section  className="bg-white px-6 md:px-24 py-24 scroll-margin-top">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="font-protest text-5xl md:text-6xl text-[#121212] inline-block relative">
            What We Offer
            <span className="block h-1 w-24 bg-[#ef3e00] mx-auto mt-4"></span>
          </h2>
        </div>

        {/* Servicios */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              {...service}
              reverse={index % 2 !== 0}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
