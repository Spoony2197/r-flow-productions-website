import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CaseStudy from './components/CaseStudy';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Founder from './components/Founder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-800 to-dark-900 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <CaseStudy />
        <Faq />
        <FinalCta />
        <Founder />
      </main>
      <Footer />
    </div>
  );
}

export default App;