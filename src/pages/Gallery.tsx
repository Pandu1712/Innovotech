import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = 'Gallery - SmartHome';
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'switches', name: 'Switches' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'automation', name: 'Automation' },
    { id: 'security', name: 'Security' },
    { id: 'installations', name: 'Installations' }
  ];

  const gallery = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'switches',
      title: 'Touch Panel Switches'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1028734/pexels-photo-1028734.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'lighting',
      title: 'Smart LED Lighting'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'automation',
      title: 'Automated Curtain System'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
      title: 'Security Camera Setup'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'installations',
      title: 'Modern Living Room'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'installations',
      title: 'Smart Bedroom Setup'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'lighting',
      title: 'RGB Strip Lighting'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'installations',
      title: 'Contemporary Home Office'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'automation',
      title: 'Smart Hub Control'
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/8761562/pexels-photo-8761562.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
      title: 'Outdoor Security Camera'
    },
    {
      id: 11,
      url: 'https://images.pexels.com/photos/1472841/pexels-photo-1472841.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'switches',
      title: 'Multi-Gang Switch Panel'
    },
    {
      id: 12,
      url: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'lighting',
      title: 'Panel Light Installation'
    },
    {
      id: 13,
      url: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'automation',
      title: 'Motorized Curtain Track'
    },
    {
      id: 14,
      url: 'https://images.pexels.com/photos/7031605/pexels-photo-7031605.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
      title: 'Smart Video Doorbell'
    },
    {
      id: 15,
      url: 'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'installations',
      title: 'Luxury Smart Home'
    }
  ];

  const filteredGallery = selectedCategory === 'all'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our smart home installations and product showcases
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.url)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
          >
            <X className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Want to See These Products in Action?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our showroom or contact us for a personalized demonstration
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}
