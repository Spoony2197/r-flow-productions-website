import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CaseStudy from './components/CaseStudy';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Founder from './components/Founder';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ServicesPage from './pages/ServicesPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <CaseStudy />
      <Faq />
      <FinalCta />
      <Founder />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-surface-cream text-dark-500">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
