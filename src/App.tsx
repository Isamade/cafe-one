import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSpecial from './components/FeaturedSpecial';
import ProductShowcase from './components/ProductShowcase';
import Partnership from './components/Partnership';
import MenuPreview from './components/MenuPreview';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedSpecial />
      <ProductShowcase />
      <Partnership />
      <MenuPreview />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;