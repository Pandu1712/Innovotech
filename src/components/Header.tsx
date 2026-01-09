import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { products } from "../data/products";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
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

  const openCatalog = () => {
    window.open("/Catalog.pdf", "_blank");
    setIsOpen(false);
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
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/Logo.jpg"
              alt="SmartHome Logo"
              className="h-48 w-48 object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
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
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showProducts ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-3 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                  showProducts
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {products.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-blue-50"
                  >
                    <img
                      src={product.image}
                      className="w-8 h-8 rounded"
                      alt={product.name}
                    />
                    <span className="font-medium text-gray-700">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 📘 CATALOG (DESKTOP) */}
            <button
              onClick={openCatalog}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition"
            >
              <FileText className="w-4 h-4" />
              Catalog
            </button>
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

            {/* 📘 CATALOG (MOBILE FIXED) */}
            <button
              onClick={openCatalog}
              className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              📘 Catalog
            </button>

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
