import React from 'react';
import { ArrowRight, Coffee } from 'lucide-react';

const FeaturedSpecial = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 overflow-hidden">
      {/* Coffee beans background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Coffee beans background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <p className="text-amber-200 font-medium text-lg">Featured Special</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Serving up Something for Everyone.
              </h2>
            </div>
            
            <p className="text-amber-100 text-lg leading-relaxed">
              From bold brews to sweet sips, every drink at Tin City Cafe is crafted with care and 
              community in mind. Whether you're grabbing your go-to latte or trying something 
              new like our signature Morning Blend, or delicious pastries from our local bakery partner, 
              there's something on the menu to make everyone feel at home.
            </p>

            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-amber-800 transition-all duration-300 font-medium flex items-center group">
              Start a Pickup Order
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Featured Item Card */}
          <div className="relative">
            <div className="bg-amber-50 rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src="src/assets/latte-small.jpg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Signature Latte with beautiful latte art"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 italic">
                    The "Tin City Special" Signature Latte
                  </h3>
                  <p className="text-2xl font-bold text-amber-800">N3500</p>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Coffee className="w-4 h-4" />
                    <span>Caffeine Level 120 mg</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm">
                    Our strong latte with any available syrup. We got you.
                  </p>
                </div>

                <button className="w-full bg-amber-800 text-white py-3 rounded-md hover:bg-amber-900 transition-colors font-medium flex items-center justify-center group">
                  Order Ahead
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpecial;