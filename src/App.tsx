import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Layout from './components/Layout';
import SEO from './components/SEO';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ProductDetail from './pages/ProductDetail';

import DemoPopup from './components/DemoPopup';
import StickyContactActions from './components/StickyContactActions';

export default function App() {
  const [open, setOpen] = useState(false);

  // ✅ Auto-open popup ONLY ONCE
  useEffect(() => {
    const alreadyClosed = sessionStorage.getItem('demoPopupClosed');
    if (!alreadyClosed) {
      setOpen(true);
    }
  }, []);

  // ✅ Close handler (remember close)
  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem('demoPopupClosed', 'true');
  };

  return (
    <Router>
      <SEO />

      <Layout>
        {/* Global Book Demo Button (UNCHANGED) */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-sky-500 to-cyan-500 
                       text-white px-6 py-3 rounded-xl font-semibold 
                       shadow-xl hover:scale-105 transition-all"
          >
            Book a Demo
          </button>
        </div>

        {/* Routes (UNCHANGED) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        {/* ✅ Popup ONLY logic updated */}
        <DemoPopup isOpen={open} onClose={handleClose} />
      </Layout>

      {/* Sticky icons (UNCHANGED) */}
      <StickyContactActions />
    </Router>
  );
}
