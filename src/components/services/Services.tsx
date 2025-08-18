import React from 'react';
import { Scissors, Sparkles, Clock, Heart } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Custom Tailoring",
    description: "Perfectly fitted traditional Tamil attire crafted to your measurements",
    Icon: Scissors
  },
  {
    title: "Bridal Wear",
    description: "Exquisite bridal collections with intricate embroidery and designs",
    Icon: Sparkles
  },
  {
    title: "Quick Alterations",
    description: "Professional alterations with quick turnaround time",
    Icon: Clock
  },
  {
    title: "Designer Wear",
    description: "Modern fusion designs blending tradition with contemporary style",
    Icon: Heart
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of tailoring services, from traditional wear to modern designs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}