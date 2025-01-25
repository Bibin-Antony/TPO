// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from './HeroSection';
import UserTypeSection from './UserTypeSection';
import FeaturesSection from './FeaturesSection';
import TestimonialCarousel from './TestimonialCarousel';
import PartnersSection from './PartnersSection';
import CallToActionSection from './CallToActionSection';


const HomePage = () => {
  return (
    <div className="homepage">
        <HeroSection />
        <UserTypeSection />
        <FeaturesSection />
        <TestimonialCarousel />
        <PartnersSection />
        <CallToActionSection />
    </div>
  );
};

export default HomePage;