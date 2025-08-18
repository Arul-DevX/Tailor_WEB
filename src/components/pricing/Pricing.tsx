import React from 'react';
import { pricingData } from './pricingData';
import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of tailoring services with transparent pricing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pricingData.map((item, index) => (
            <div key={item.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <PricingCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}