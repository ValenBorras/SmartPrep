'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="bg-[#121212] text-white px-6 md:px-24 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-12">

        {/* Título */}
        <div>
          <h2 className="font-protest text-5xl md:text-6xl text-[#ef3e00]">
            CHOOSE SMART PREP
          </h2>
          <p className="mt-4 font-inter text-white/80 text-base md:text-lg">
            Get in touch and let’s streamline your fulfillment.
          </p>
        </div>

        {/* Mensaje de éxito */}
        {sent && (
          <div className="bg-[#1e1e1e] border border-[#ef3e00] text-[#ef3e00] px-6 py-4 rounded-md font-inter text-sm">
            ✅ Message sent successfully! We’ll get back to you shortly.
          </div>
        )}

        {/* Formulario */}
        {!sent && (
          <form
            action="https://formspree.io/f/mqapopeb"
            method="POST"
            className="space-y-6 text-left font-inter"
            onSubmit={() => {
              setTimeout(() => setSent(true), 100) // da tiempo al form para enviarse
            }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block mb-1 text-sm text-white/80">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-[#1e1e1e] border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef3e00] transition"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#1e1e1e] border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef3e00] transition"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm text-white/80">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-[#1e1e1e] border border-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef3e00] transition resize-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#ef3e00] text-white px-8 py-3 rounded-full hover:bg-[#d23a00] transition font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
