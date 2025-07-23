import React from 'react';
import { Coffee, Sandwich, Cookie, Salad, ArrowRight } from 'lucide-react';

const MenuPreview = () => {
  const menuCategories = [
    {
      icon: Coffee,
      title: 'Coffee & Beverages',
      description: 'Expressos, lattes, and more',
      items: ['Specialty Coffees', 'Fresh Juices', 'Teas', 'Soft Drinks'],
      image: '/coffee-cup.webp'
    },
    {
      icon: Sandwich,
      title: 'Breakfast',
      description: 'Start your day right with our breakfast options',
      items: ['French Toast', 'Buttermilk Pancakes', 'Classic Breakfast', 'Breakfast Pizza'],
      image: '/sandwich.jpg'
    },
    {
      icon: Cookie,
      title: 'Bakery Items',
      description: 'Handcrafted by our local bakery partner',
      items: ['Cinnaon Rolls', 'Challah', 'Snack Cakes', 'Coconut Buns'],
      image: '/cinnamon-rolls.jpg'
    },
    {
      icon: Salad,
      title: 'Healthy Options',
      description: 'Nutritious salads, bowls, and light bites',
      items: ['Garden Salads', 'Grain Bowls', 'Fresh Fruit', 'Yogurt Parfaits'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From energizing morning coffees to satisfying lunch options, we have something delicious for every craving
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {menuCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-amber-800" />
                  </div>
                  
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                  
                  <ul className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700 flex items-center">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-amber-800 text-white px-8 py-4 rounded-md hover:bg-amber-900 transition-colors font-medium text-lg flex items-center mx-auto group">
            View Full Menu
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;