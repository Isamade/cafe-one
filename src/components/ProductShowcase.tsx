import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800 relative overflow-hidden">
      {/* Background coffee bean pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-orange-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-amber-300 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-orange-300 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Coffee Bag */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Premium coffee bag with coffee beans"
                className="w-full max-w-md mx-auto"
              />
            </div>
            {/* Decorative coffee bean */}
            <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4">
              <img 
                src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Coffee bean"
                className="w-16 h-16 rounded-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight italic">
                Grab a Bag of our Best Brew!
              </h2>
            </div>
            
            <p className="text-amber-100 text-lg leading-relaxed">
              Take a piece of Tin City Cafe home with you. Every 12oz 
              bag of our signature roast fuels more than your morning 
              — it powers job training, mentorship, and hope right here 
              in Jos. <strong className="text-white">Brew boldly. Give generously.</strong>
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-amber-200">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="font-medium">12 oz bag • 17-21 Servings</span>
              </div>
            </div>

            <button className="bg-amber-600 text-white px-8 py-4 rounded-md hover:bg-amber-700 transition-colors font-bold text-lg flex items-center group">
              N4000 | Order Today
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;