import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Ravi Kumar',
    role: 'Villa Owner, Hyderabad',
    rating: 5,
    comment:
      'Innovotech Smart Home completely transformed my villa. Lighting, security, and automation work flawlessly.'
  },
  {
    name: 'Anitha Reddy',
    role: 'Apartment Owner, Bengaluru',
    rating: 4,
    comment:
      'Smooth installation and excellent app control. Energy savings are visible within a month.'
  },
  {
    name: 'Suresh Naidu',
    role: 'Independent House, Nellore',
    rating: 5,
    comment:
      'Best smart home solution in our area. Voice control and mobile access work perfectly.'
  },
  {
    name: 'Priya Sharma',
    role: 'Duplex Owner, Pune',
    rating: 5,
    comment:
      'Very premium experience. Automation scenes are well designed and customer support is excellent.'
  },
  {
    name: 'Venkatesh Rao',
    role: 'Gated Community Resident, Chennai',
    rating: 4,
    comment:
      'Reliable performance and strong security integration. Highly recommended for modern homes.'
  }
]

export default function ReviewsSection() {
  return (
    <section className=" py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by homeowners for intelligent living and seamless automation.
          </p>
        </div>
      </div>

      {/* Auto Scrolling Reviews */}
      <div className="relative">
        <div className="flex gap-6 w-max px-6 animate-review-scroll hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[320px] sm:w-[360px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                “{review.comment}”
              </p>

              {/* User */}
              <div>
                <p className="font-semibold text-gray-900">
                  {review.name}
                </p>
                <p className="text-sm text-gray-500">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes review-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-review-scroll {
            animation: review-scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  )
}
