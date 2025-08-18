import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { PricingItem } from './types';
import BookingModal from '../booking/BookingModal';

export default function PricingCard({ 
  title, 
  originalPrice, 
  discountedPrice, 
  description, 
  features 
}: PricingItem) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 500);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6 flex items-center gap-2">
          {discountedPrice ? (
            <>
              <span className="text-3xl font-bold text-rose-600">₹{discountedPrice}</span>
              <span className="text-xl text-gray-400 line-through">₹{originalPrice}</span>
            </>
          ) : (
            <span className="text-3xl font-bold text-rose-600">₹{originalPrice}</span>
          )}
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check className="h-5 w-5 text-rose-600 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={handleBookNow}
          disabled={isLoading || isSuccess}
          className={`
            w-full py-2 rounded-lg transition-all duration-300 flex items-center justify-center
            ${isSuccess 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-rose-600 hover:bg-rose-700'
            } 
            text-white
            disabled:opacity-75 disabled:cursor-not-allowed
          `}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : isSuccess ? (
            <Check className="h-5 w-5" />
          ) : (
            'Book Now'
          )}
        </button>
      </div>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={title}
      />
    </>
  );
}