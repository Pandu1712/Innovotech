import { useState } from 'react'
import { X, Send } from 'lucide-react'
import { DemoForm } from '../types'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSubmitted: () => void
}

export default function BookDemoModal({
  isOpen,
  onClose,
  onSubmitted
}: Props) {
  const [formData, setFormData] = useState<DemoForm>({
    name: '',
    mobile: '',
    email: '',
    city: '',
    propertyType: '',
    stage: '',
    budget: ''
  })

  if (!isOpen) return null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `
📌 *Smart Home Demo Request*

👤 Name: ${formData.name}
📱 Mobile: ${formData.mobile}
📧 Email: ${formData.email}
🏙 City: ${formData.city}
🏠 Property Type: ${formData.propertyType}
🚧 Construction Stage: ${formData.stage}
💰 Budget: ${formData.budget}
    `.trim()

    const whatsappUrl = `https://wa.me/918340952438?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, '_blank')
    onSubmitted()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md h-[92svh] sm:h-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl animate-modalIn flex flex-col">
        {/* Header */}
        <div className="sticky top-0 p-5 border-b bg-white flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Book a Smart Home Demo
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-5 space-y-4"
        >
          <input name="name" placeholder="Full Name" required onChange={handleChange} className="input-premium" />
          <input name="mobile" placeholder="Mobile Number" required onChange={handleChange} className="input-premium" />
          <input name="email" placeholder="Email" onChange={handleChange} className="input-premium" />
          <input name="city" placeholder="City" onChange={handleChange} className="input-premium" />

          <select name="propertyType" onChange={handleChange} className="input-premium">
            <option value="">Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Independent House</option>
          </select>

          <select name="stage" onChange={handleChange} className="input-premium">
            <option value="">Construction Stage</option>
            <option>Planning</option>
            <option>Under Construction</option>
            <option>Ready to Move</option>
          </select>

          <select name="budget" onChange={handleChange} className="input-premium">
            <option value="">Budget</option>
            <option>₹50k – ₹1L</option>
            <option>₹1L – ₹3L</option>
            <option>₹3L+</option>
          </select>

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition"
          >
            Send via WhatsApp
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(30px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-modalIn { animation: modalIn 0.35s ease-out; }
          .input-premium {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            border: 1px solid #e5e7eb;
            outline: none;
          }
          .input-premium:focus {
            border-color: #22d3ee;
            box-shadow: 0 0 0 4px rgba(34,211,238,.15);
          }
        `}
      </style>
    </div>
  )
}
