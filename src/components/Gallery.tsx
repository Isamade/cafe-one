import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: '/coffee-cup.webp?auto=compress&cs=tinysrgb&w=600',
      alt: 'Perfect latte art',
      category: 'Coffee'
    },
    {
      src: '/black-unity.jpg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Cozy café interior',
      category: 'Ambiance'
    },
    {
      src: '/cinnamon-rolls.jpg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Fresh pastries',
      category: 'Food'
    },
    {
      src: '/sandwich.jpg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gourmet sandwich',
      category: 'Food'
    },
    {
      src: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Coffee beans',
      category: 'Coffee'
    },
    {
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Fresh salad',
      category: 'Food'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a peek inside our café and see what makes The Brew Haven special
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium bg-amber-600 px-2 py-1 rounded-full">{image.category}</p>
                  <p className="mt-2 font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;