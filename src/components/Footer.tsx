import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <Coffee className="w-6 h-6 text-amber-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tin City Cafe</h3>
                <p className="text-amber-200 text-sm">Neighborhood Coffee & Comfort</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span className="text-sm">37A Apollo Crescent , Jos, Nigeria 930271</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-300" />
                <span className="text-sm">08012345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-300" />
                <span className="text-sm">info@tincitycafe.com</span>
              </div>
            </div>

            <p className="text-amber-200 text-sm">
              <strong>Open Monday - Saturday</strong><br />
              8am - 5pm
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-amber-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-amber-200 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#menu" className="text-amber-200 hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#gallery" className="text-amber-200 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-amber-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Order Online</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Catering</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Private Events</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Coffee Subscriptions</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Community</h4>
            <p className="text-amber-200 text-sm">
              Tin City Cafe is where strong coffee 
              fuels stronger careers and the strongest community. Join us in transforming our neighborhood—one cup, one 
              connection at a time.
            </p>
            
            <div className="space-y-4">
              <h5 className="font-medium">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/*<p className="text-amber-200 text-sm">
              © 2025, Tin City Cafe. All Rights Reserved. Any unauthorized duplication of content herein will result in prosecution. 
              Tin City Cafe is a 501(c)(3) Public Charity - EIN 84-2004511. All donations are tax-deductible.
            </p>*/}
          </div>
          <div className="mt-4 text-center">
            <p className="text-amber-300 text-xs">
              Privacy Policy | Terms of Use | Refund Policy | Cafe Website Designed & Developed by Local Design Co.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;