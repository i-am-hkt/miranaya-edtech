import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Important for collapsible navbar

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components

import './App.css'; // Add WhatsApp CSS here if not already

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import OurProgramsSection from './components/OurProgramsSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CertificatesSection from './components/CertificatesSection';
import CollaboratorsSection from './components/CollaboratorsSection';
import RequestACallSection from './components/RequestACallSection';
import WhatsAppButton from './components/WhatsAppButton';

import ShortTermPage from './components/ShortTermPage'; // Import ShortTermPage
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        {/* Define Routes for different pages */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<div><HeroSection /><AboutSection /><WhyChooseUsSection /><OurProgramsSection /><BenefitsSection /><TestimonialsSection /><CertificatesSection /><CollaboratorsSection /><RequestACallSection /></div>} />
          
          {/* Short Term Courses Page */}
          <Route path="/short-term" element={<ShortTermPage />} />

          {/* You can add more routes here for other pages if needed */}
        </Routes>

        {/* WhatsApp Button */}
        <WhatsAppButton />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
