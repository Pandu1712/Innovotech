import { Link } from 'react-router-dom'
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react'
import { products } from '../data/products'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#0B0F19] text-gray-300">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <Link
              to="/"
              className="mb-4 flex items-center gap-3 font-semibold text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600/90 shadow-lg shadow-cyan-500/20">
                <Zap className="h-5 w-5" />
              </span>
              <span className="text-xl tracking-wide">SmartHome</span>
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Transform your living space with intelligent automation solutions
              designed for comfort, security, and efficiency.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:text-cyan-400" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'Gallery', to: '/gallery' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <span className="h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="space-y-3 text-sm">
  {products.map((product) => (
    <li key={product.id}>
      <Link
        to={`/product/${product.id}`}
        className="group inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
      >
        {/* animated indicator line */}
        <span className="h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />

        {/* product name */}
        <span className="tracking-wide">
          {product.name}
        </span>
      </Link>
    </li>
  ))}
</ul>

          </div>

          {/* contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>
                  Prime Plaza, Door No 308, 23/937,
                  <br />
                  Vahabpet, Nellore, AP – 524004
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <div className="flex flex-col">
                  <a
                    href="tel:+918106402438"
                    className="hover:text-white"
                  >
                    +91 81064 02438
                  </a>
                  <a
                    href="tel:+919493580957"
                    className="hover:text-white"
                  >
                    +91 94935 80957
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a
                  href="mailto:innovotechsmart@gmail.com"
                  className="hover:text-white"
                >
                  innovotechsmart@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="text-gray-400">
              © {currentYear} SmartHome. All rights reserved.
            </p>

            <div className="flex gap-6">
              {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
