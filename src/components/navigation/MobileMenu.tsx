import React from 'react';
import { X } from 'lucide-react';
import NavLink from './NavLink';
import { NavigationItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  navigationItems: NavigationItem[];
  activeSection: string;
  currentPath: string;
}

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  onNavigate,
  navigationItems,
  activeSection,
  currentPath
}: MobileMenuProps) {
  const handleNavigation = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const getIsActive = (item: NavigationItem) => {
    if (currentPath === '/pricing' && item.id === 'pricing') {
      return true;
    }
    if (currentPath === '/' && item.id === activeSection) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div 
        className={`
          fixed inset-y-0 right-0 z-50 w-64 bg-gray-900/95 backdrop-blur-sm
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-rose-400 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col space-y-4 mt-16">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                onClick={() => handleNavigation(item.path)}
                isHighlighted={item.id === 'booking'}
                isActive={getIsActive(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
    </>
  );
}