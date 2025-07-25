import React from 'react';
import { ArrowRight } from 'lucide-react';

const Partnership = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-amber-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-300 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-amber-800 font-medium text-lg">Baked Goods, Pastries, & Sandwiches</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Better Together: Tin City Cafe × Local Bakery's Partnership
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Every pastry we serve is handcrafted by our local bakery partner, a neighborhood gem 
              we're proud to support. It's a sweet partnership that supports local business 
              and builds up Tin City—one bite at a time. It's more than a treat—it's a taste 
              of Tin City's small business spirit, made fresh just for you.
            </p>

            <button className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors font-medium flex items-center group">
              Order Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Muffin with splash */}
          <div className="relative">
            <div className="relative z-10">
              {/*<img 
                src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Fresh blueberry muffin with coffee splash"
                className="w-full max-w-lg mx-auto"
              />*/}
              <img 
                src="/tray.jpg?auto=compress&cs=tinysrgb&w=600" 
                alt="Fresh buttermilk pancakes with coffee splash"
                className="w-full max-w-lg mx-auto"
              />           
            </div>
            {/* Coffee splash effect */}
            <div className="absolute top-1/2 right-0 transform translate-x-8 -translate-y-1/2">
              <div className="w-32 h-32 bg-amber-200 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;