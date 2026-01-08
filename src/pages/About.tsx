import { useEffect } from 'react';
import { Target, Users, Award, TrendingUp, Clock, Heart } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'About Us - SmartHome';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push boundaries to bring you the latest in smart home technology'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction and comfort are at the heart of everything we do'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every product undergoes rigorous testing to ensure premium quality'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Committed to eco-friendly solutions that protect our planet'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Smart Products' },
    { number: '15+', label: 'Years Experience' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const team = [
    {
      name: 'John Anderson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product Design',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Lead',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About SmartHome</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of intelligent living with innovative smart home solutions
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
                Our Story
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Houses into Smart Homes
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, SmartHome began with a simple vision: to make advanced home automation accessible to everyone. What started as a small team of passionate engineers has grown into a leading provider of smart home solutions.
                </p>
                <p>
                  We believe that technology should enhance life, not complicate it. That's why we design products that are intuitive, reliable, and seamlessly integrate into your daily routine.
                </p>
                <p>
                  Today, we're proud to serve over 10,000 satisfied customers across the globe, helping them create safer, more efficient, and more comfortable living spaces.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Smart Home"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
              Our Values
            </h2>
            <h3 className="text-4xl font-bold text-gray-900">What Drives Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
              Our Team
            </h2>
            <h3 className="text-4xl font-bold text-gray-900">Meet the Experts</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">Growing Fast</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We're always looking for talented individuals who share our passion for innovation and excellence. Be part of the team that's shaping the future of smart living.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="h-8 w-8 mb-3" />
                <h4 className="text-2xl font-bold mb-2">24/7</h4>
                <p className="text-blue-100">Customer Support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Award className="h-8 w-8 mb-3" />
                <h4 className="text-2xl font-bold mb-2">15+</h4>
                <p className="text-blue-100">Industry Awards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Users className="h-8 w-8 mb-3" />
                <h4 className="text-2xl font-bold mb-2">100+</h4>
                <p className="text-blue-100">Team Members</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Target className="h-8 w-8 mb-3" />
                <h4 className="text-2xl font-bold mb-2">25+</h4>
                <p className="text-blue-100">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
