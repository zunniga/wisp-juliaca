"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "+919876543210" // Replace with your actual WhatsApp number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const message = (form.elements.namedItem("message") as HTMLInputElement).value

    const whatsappMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`)
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank")

    setIsOpen(false)
  }

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all"
        aria-label="Contact us on WhatsApp"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl w-80 overflow-hidden salon-card">
          <div className="bg-[#25D366] text-white p-4">
            <h3 className="font-bold text-lg">Chat with Us</h3>
            <p className="text-sm">Typically replies within minutes</p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                placeholder="Hi, I'd like to book an appointment..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-2 px-4 rounded-md hover:bg-[#128C7E] transition-colors"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      )}
    </>
  )
}
