import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { products } from "../data/products";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowProducts(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowProducts(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setShowProducts(false);
    }, 120);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-xl"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
        <Link to="/Logo.jpg" className="flex items-center group">
  <img
    src="/Logo.jpg"  // 🔴 MUST be transparent PNG or SVG
    alt="SmartHome"
    className="
      h-11 w-auto
      object-contain
      transition-transform duration-300
      group-hover:scale-105
      rounded-lg
    "
    loading="eager"
  />
</Link>



          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  location.pathname === link.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition ${
                  location.pathname.startsWith("/product")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showProducts ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN PANEL */}
              <div
                className={`absolute left-0 top-full mt-3 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                  showProducts
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {products.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-7 h-7 object-cover rounded"
                      />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-blue-600">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 rounded-lg hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-2 px-4 text-xs font-semibold text-gray-400 uppercase">
              Products
            </div>

            {products.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50"
              >
                {product.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
