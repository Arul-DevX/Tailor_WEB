import React from 'react';
import { Ruler, Gem, Clock, Award } from 'lucide-react';
import AboutStats from './AboutStats';
import AboutFeature from './AboutFeature';

const features = [
  {
    title: 'Perfect Measurements',
    description:
      'Every garment is crafted with precise measurements for the perfect fit.',
    Icon: Ruler,
  },
  {
    title: 'Quality Materials',
    description:
      'We use only the finest fabrics and materials for lasting beauty.',
    Icon: Gem,
  },
  {
    title: 'Timely Delivery',
    description: 'Committed to delivering your custom garments on schedule.',
    Icon: Clock,
  },
  {
    title: 'Expert Craftsmanship',
    description:
      'Years of experience in traditional Tamil tailoring techniques.',
    Icon: Award,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image */}
          <div className="relative mb-12 lg:mb-0" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1536867520774-5b4f2628a69b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tailor at work"
              className="rounded-lg shadow-lg object-cover h-[600px] w-full"
            />
            <div className="absolute inset-0 bg-rose-600/10 rounded-lg" />
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Tamil Traditions with Modern Elegance
            </h2>

            <p className="text-gray-600 mb-8">
              With over 15 years of experience, we've been dedicated to
              preserving the beauty of traditional Tamil attire while
              incorporating contemporary designs. Our passion for perfection and
              attention to detail ensures that each piece tells a unique story.
            </p>

            <div className="grid grid-cols-1 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={feature.title} data-aos="fade-up" data-aos-delay={index * 100}>
                  <AboutFeature {...feature} />
                </div>
              ))}
            </div>

            <AboutStats />
          </div>
        </div>
      </div>
    </section>
  );
}