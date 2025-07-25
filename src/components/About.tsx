import React from 'react';
import { Heart, Users, Coffee, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in building stronger neighborhoods through connection and care'
    },
    {
      icon: Users,
      title: 'Local Partnership',
      description: 'Supporting local businesses and creating opportunities for growth'
    },
    {
      icon: Coffee,
      title: 'Quality Craft',
      description: 'Every cup is crafted with precision, passion, and the finest ingredients'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing exceptional service and memorable experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-amber-200 font-medium text-lg">Committed to Reinvesting in Community</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Stronger Jobs & Brighter Futures
              </h2>
            </div>
            
            <p className="text-amber-100 text-lg leading-relaxed">
              Tin City Cafe is where strong coffee 
              fuels stronger careers and the strongest community. Join us in transforming our neighborhood—one cup, one 
              connection at a time.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{value.title}</h3>
                      <p className="text-amber-200 text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/staff.jpg?auto=compress&cs=tinysrgb&w=600" 
                alt="Community gathering at the café"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;