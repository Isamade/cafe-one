import React from 'react';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Visit Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Come experience the warmth of community and the perfect cup of coffee
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Location</h3>
                  <p className="text-gray-600">37A Apollo Crescent<br />Jos, Plateau State<br />Nigeria 930271</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Monday - Friday:</strong> 6:00 AM - 8:00 PM</p>
                    <p><strong>Saturday:</strong> 7:00 AM - 9:00 PM</p>
                    <p><strong>Sunday:</strong> 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                  <p className="text-gray-600">08012345678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Email</h3>
                  <p className="text-gray-600">info@tincitycafe.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center hover:bg-amber-200 transition-colors">
                  <Facebook className="w-5 h-5 text-amber-800" />
                </a>
                <a href="#" className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center hover:bg-amber-200 transition-colors">
                  <Instagram className="w-5 h-5 text-amber-800" />
                </a>
                <a href="#" className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center hover:bg-amber-200 transition-colors">
                  <Twitter className="w-5 h-5 text-amber-800" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 px-6 rounded-md hover:bg-amber-900 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;