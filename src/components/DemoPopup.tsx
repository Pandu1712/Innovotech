import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { DemoForm } from '../types';



interface Props {
  isOpen: boolean;
  onClose: () => void;
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
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
📌 *Smart Home Demo Request*

👤 Name: ${formData.name}
📱 Mobile: ${formData.mobile}
📧 Email: ${formData.email}
🏙 City: ${formData.city}
🏠 Property Type: ${formData.propertyType}
🚧 Construction Stage: ${formData.stage}
💰 Budget: ${formData.budget}
    `.trim();

    const whatsappUrl = `https://wa.me/918340952438?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative bg-white w-full sm:max-w-md
          h-[90svh] sm:h-auto
          rounded-t-3xl sm:rounded-2xl
          shadow-2xl
          flex flex-col
          animate-scaleIn
        "
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 p-4 border-b flex items-center justify-between">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
            Book a Smart Home Demo
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Form (Scrollable) */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-5 space-y-4"
        >
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />

          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="input"
          />

          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Independent House</option>
          </select>

          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className="input"
          >
            <option value="">Stage of Construction</option>
            <option>Planning</option>
            <option>Under Construction</option>
            <option>Ready to Move</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Budget</option>
            <option>₹50k – ₹1L</option>
            <option>₹1L – ₹3L</option>
            <option>₹3L+</option>
          </select>

          <button
            type="submit"
            className="
              w-full mt-4
              bg-gradient-to-r from-sky-500 to-cyan-500
              text-white py-3 rounded-xl font-semibold
              flex items-center justify-center gap-2
              hover:shadow-xl transition-all
            "
          >
            <span>Send via WhatsApp</span>
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
