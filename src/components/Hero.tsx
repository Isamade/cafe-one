import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-800 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-orange-600 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-amber-700 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-amber-800 font-medium text-lg">Locally-Owned Coffee Shop Serving Jos</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Brewing Hope &<br />
                <span className="text-amber-800">Great Coffee</span> in the<br />
                heart of Jos City
              </h1>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              Once a simple café, now a beacon of ambition — <strong>Tin City Cafe</strong> is a unique & eclectic café 
              revitalizing Jos City through <strong>community</strong>, <strong>careers</strong>, and <strong>coffee</strong>.
            </p>

            <div className="flex items-center space-x-2 text-gray-800">
              <Clock className="w-5 h-5 text-amber-800" />
              <span className="font-medium">Open 8am – 5pm Monday-Saturday</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-amber-800 px-8 py-3 rounded-md border-2 border-amber-800 hover:bg-amber-50 transition-all duration-300 font-medium flex items-center justify-center group">
                Order Ahead
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors font-medium flex items-center justify-center group">
                Our Menu
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Coffee Cup Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Perfect cup of coffee with latte art"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;