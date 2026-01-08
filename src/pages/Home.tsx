import { useEffect } from 'react';
import Hero from '../components/Hero';
import ProductsGrid from '../components/ProductsGrid';
import { Zap, Shield, Clock, Smartphone } from 'lucide-react';
import Contact from './Contact';
import About from './About';

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
      <Hero />

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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductsGrid />

      <About/>
       <Contact/>
    </>
  );
}
