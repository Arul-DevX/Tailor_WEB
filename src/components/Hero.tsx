import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './slider/ImageSlider';

export default function Hero() {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden">
      <ImageSlider />

      <div className="relative w-full max-w-full px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-center md:text-6xl font-bold text-white mb-6">
            Exquisite Tamil-Style
            <span className="block text-rose-500">Dress Tailoring</span>
          </h1>
          <p className="text-xl text-center text-gray-200 mb-12">
            Crafting beautiful, handmade dresses that celebrate Tamil tradition
            and modern elegance. Each piece is uniquely designed to perfectly
            fit you.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-rose-600">15+</p>
              <p className="text-white text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-rose-600">1000+</p>
              <p className="text-white text-sm">Happy Clients</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <p className="text-3xl font-bold text-rose-600">100%</p>
              <p className="text-white text-sm">Satisfaction</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/pricing')}
              className="bg-rose-600 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center hover:bg-rose-700 transition"
            >
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-white text-rose-600 px-6 sm:px-8 py-3 rounded-full hover:bg-rose-50 transition"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}