import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-800/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/R-Flow_LogoDesign (1).gif" alt="R Flow Productions Logo" className="h-8 mr-2" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection('features')} 
            className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            Why Us
          </a>
          <a 
            onClick={() => scrollToSection('process')} 
            className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            Our Process
          </a>
          <a 
            onClick={() => scrollToSection('case-study')} 
            className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            Results
          </a>
          <a 
            onClick={() => scrollToSection('faq')} 
            className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </a>
          <Button 
            onClick={() => window.open('https://calendly.com/sjackson2409/30min', '_blank')}
            variant="primary" 
            size="small"
          >
            Book Strategy Session
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md border-t border-dark-700 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              onClick={() => scrollToSection('features')} 
              className="text-white/80 hover:text-white py-2 transition-colors cursor-pointer"
            >
              Why Us
            </a>
            <a 
              onClick={() => scrollToSection('process')} 
              className="text-white/80 hover:text-white py-2 transition-colors cursor-pointer"
            >
              Our Process
            </a>
            <a 
              onClick={() => scrollToSection('case-study')} 
              className="text-white/80 hover:text-white py-2 transition-colors cursor-pointer"
            >
              Results
            </a>
            <a 
              onClick={() => scrollToSection('faq')} 
              className="text-white/80 hover:text-white py-2 transition-colors cursor-pointer"
            >
              FAQ
            </a>
            <Button 
              onClick={() => window.open('https://calendly.com/sjackson2409/30min', '_blank')}
              variant="primary" 
              size="small" 
              className="w-full"
            >
              Book Strategy Session
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;