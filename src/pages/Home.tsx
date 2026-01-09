import { useEffect } from 'react';
import Hero from '../components/Hero';
import ProductsGrid from '../components/ProductsGrid';
import { Zap, Shield, Clock, Smartphone } from 'lucide-react';
import Contact from './Contact';
import About from './About';
import CloudinaryVideo from '../components/SampleVideo';
import ReviewsSection from '../components/ReviewsSection';

export default function Home() {
  useEffect(() => {
    document.title = 'SmartHome - Transform Your Living Space with Smart Technology';
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Save up to 40% on energy bills with intelligent automation'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Advanced security features to protect your home 24/7'
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Automate daily tasks and focus on what matters most'
    },
    {
      icon: Smartphone,
      title: 'Easy Control',
      description: 'Manage everything from your smartphone or voice'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* 🎥 Demo Video Section (ADDED - safe) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Watch Our Smart Home Demo
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            See how our smart home solutions transform everyday living with
            automation, security, and energy efficiency.
          </p>

          <CloudinaryVideo
            videoUrl="https://res.cloudinary.com/dfs1es68i/video/upload/v1767951049/Innovotech_Vedio_1_l3z8wz.mp4"
          />
        </div>
      </section>

      {/* Features Section (UNCHANGED) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductsGrid />

      {/* About & Contact (UNCHANGED) */}
      <About />
    
      <Contact />
      <ReviewsSection/>
    </>
  );
}
