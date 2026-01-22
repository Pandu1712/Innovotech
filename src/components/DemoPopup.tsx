import { useEffect, useState } from 'react'
import { X, Send } from 'lucide-react'
import { DemoForm } from '../types'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function BookDemoModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState<DemoForm>({
    name: '',
    mobile: '',
    email: '',
    city: '',
    propertyType: '',
    stage: '',
    budget: ''
  })

  const [hasSubmitted, setHasSubmitted] = useState(false)

  /* ---------------------------------------
     AUTO OPEN LOGIC (Every 10s until submit)
  ---------------------------------------- */
  useEffect(() => {
    if (hasSubmitted) return

    const timer = setTimeout(() => {
      if (!isOpen) {
        document.dispatchEvent(new Event('open-demo-modal'))
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [isOpen, hasSubmitted])

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
    setHasSubmitted(true)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative w-full sm:max-w-md
          h-[92svh] sm:h-auto
          bg-white/90 backdrop-blur-xl
          rounded-t-3xl sm:rounded-3xl
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          animate-modalIn
          flex flex-col
        "
      >
        {/* Glow */}
        <div className="absolute -top-24 -right-24 h-48 w-48 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />

        {/* Header */}
        <div className="sticky top-0 z-10 px-5 py-4 border-b bg-white/70 backdrop-blur">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Book a Smart Home Demo
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Get a personalized walkthrough with our experts
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-5 py-6 space-y-4"
        >
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-premium"
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="input-premium"
          />

          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input-premium"
          />

          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="input-premium"
          />

          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="input-premium"
          >
            <option value="">Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Independent House</option>
          </select>

          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className="input-premium"
          >
            <option value="">Construction Stage</option>
            <option>Planning</option>
            <option>Under Construction</option>
            <option>Ready to Move</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="input-premium"
          >
            <option value="">Budget Range</option>
            <option>₹50k – ₹1L</option>
            <option>₹1L – ₹3L</option>
            <option>₹3L+</option>
          </select>

          <button
            type="submit"
            className="
              w-full mt-6
              bg-gradient-to-r from-sky-500 to-cyan-500
              text-white py-3 rounded-xl font-semibold
              flex items-center justify-center gap-2
              hover:shadow-xl hover:shadow-cyan-500/30
              transition-all
            "
          >
            <span>Send via WhatsApp</span>
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes modalIn {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-modalIn {
            animation: modalIn 0.35s ease-out;
          }

          .input-premium {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            border: 1px solid #e5e7eb;
            background: white;
            outline: none;
            transition: all 0.2s ease;
          }

          .input-premium:focus {
            border-color: #22d3ee;
            box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.15);
          }
        `}
      </style>
    </div>
  )
}
