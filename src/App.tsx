import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAOS } from './hooks/useAOS';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingAnimation from './components/loading/LoadingAnimation';
import Footer from './components/Footer';

// Lazy load non-critical components
const About = React.lazy(() => import('./components/about/About'));
const Services = React.lazy(() => import('./components/services/Services'));
const Gallery = React.lazy(() => import('./components/gallery/Gallery'));
const Contact = React.lazy(() => import('./components/contact/Contact'));
const BookingForm = React.lazy(() => import('./components/booking/BookingForm'));
const Testimonials = React.lazy(() => import('./components/testimonials/Testimonials'));
const TailoringClasses = React.lazy(() => import('./components/classes/TailoringClasses'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <div data-aos="fade-up" data-aos-duration="800">
          <Testimonials />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <TailoringClasses />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <About />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Services />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Gallery />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <BookingForm />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Contact />
        </div>
      </Suspense>
    </>
  );
}

export default function App() {
  useAOS();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <LoadingAnimation />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/pricing" 
            element={
              <Suspense fallback={<LoadingAnimation />}>
                <PricingPage />
              </Suspense>
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}