import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <div 
      className={`fixed inset-y-0 right-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-rose-700 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col space-y-4 mt-16">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'services', label: 'Services' },
            { id: 'gallery', label: 'Gallery' },
            { id: 'contact', label: 'Contact' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className="text-gray-700 hover:text-rose-700 transition-colors py-2 text-left"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavigation('booking')}
            className="text-rose-700 font-medium py-2 hover:text-rose-700 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white/50 z-40"
          onClick={onClose}
        />
      )}
    </div>
  );
}