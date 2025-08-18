import React, { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useActiveSection } from '../hooks/useActiveSection';
import MobileMenu from './navigation/MobileMenu';
import NavLink from './navigation/NavLink';
import Logo from './Logo';
import { NavigationItem } from './navigation/types';

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'class', label: 'Classes', path: '/#class' },
  { id: 'about', label: 'About', path: '/#about' },
  { id: 'services', label: 'Services', path: '/#services' },
  { id: 'pricing', label: 'Pricing', path: '/pricing' },
  { id: 'gallery', label: 'Gallery', path: '/#gallery' },
  { id: 'contact', label: 'Contact', path: '/#contact' },
  { id: 'booking', label: 'Book Appointment', path: '/#booking' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useActiveSection();

  const handleNavigation = (path: string) => {
    if (path === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const getIsActive = (item: NavigationItem) => {
    if (location.pathname === '/pricing' && item.id === 'pricing') {
      return true;
    }
    if (location.pathname === '/' && item.id === activeSection) {
      return true;
    }
    return false;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-gray-900/80 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="cursor-pointer" onClick={() => handleNavigation('/')}>
              <Logo />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.slice(0, -1).map((item) => (
                <NavLink
                  key={item.id}
                  label={item.label}
                  onClick={() => handleNavigation(item.path)}
                  isActive={getIsActive(item)}
                />
              ))}
              <button
                onClick={() => handleNavigation('/#booking')}
                className={`
                  flex items-center transition-all duration-300 font-poppins relative
                  ${activeSection === 'booking' 
                    ? 'text-rose-400 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-400 after:rounded-full' 
                    : 'text-rose-700 hover:text-rose-400'
                  }
                `}
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>Book Appointment</span>
              </button>
            </div>

            <button
              className="md:hidden text-white hover:text-rose-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigation}
        navigationItems={navigationItems}
        activeSection={activeSection}
        currentPath={location.pathname}
      />
    </>
  );
}