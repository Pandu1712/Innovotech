import { Phone, MessageCircle } from 'lucide-react';

export default function StickyContactActions() {
  return (
    <>
      {/* Desktop + Tablet */}
      <div className="hidden sm:flex fixed right-5 bottom-32 z-40 flex-col gap-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918340952438?text=Hi,%20I%20am%20interested%20in%20Smart%20Home%20Demo"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-14 h-14 rounded-full
            bg-green-500 text-white
            flex items-center justify-center
            shadow-xl hover:scale-110 transition-all
          "
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>

        {/* Call */}
        <a
          href="tel:+918340952438"
          className="
            w-14 h-14 rounded-full
            bg-blue-600 text-white
            flex items-center justify-center
            shadow-xl hover:scale-110 transition-all
          "
          aria-label="Call"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Mobile */}
      <div className="sm:hidden fixed right-4 bottom-20 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/918340952438"
          target="_blank"
          className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          href="tel:+918340952438"
          className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}
