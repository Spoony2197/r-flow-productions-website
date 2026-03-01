import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const linkClass = `text-sm transition-colors cursor-pointer ${
    isScrolled ? 'text-dark-400 hover:text-brand-maroon' : 'text-white/80 hover:text-white'
  }`;

  const activeLinkClass = `text-sm transition-colors cursor-pointer ${
    isScrolled ? 'text-brand-maroon font-medium' : 'text-white font-medium'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src="/R-Flow_LogoDesign (1).gif" alt="R Flow Productions Logo" className="h-8 mr-2" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            onClick={() => handleNavClick('features')}
            className={linkClass}
          >
            Why Us
          </a>
          <Link
            to="/services"
            className={location.pathname === '/services' ? activeLinkClass : linkClass}
          >
            Services
          </Link>
          <a
            onClick={() => handleNavClick('process')}
            className={linkClass}
          >
            Our Process
          </a>
          <a
            onClick={() => handleNavClick('case-study')}
            className={linkClass}
          >
            Results
          </a>
          <a
            onClick={() => handleNavClick('faq')}
            className={linkClass}
          >
            FAQ
          </a>
          <Button
            onClick={() => window.open('https://calendly.com/sjackson2409/15min', '_blank', 'noopener,noreferrer')}
            variant="primary"
            size="small"
          >
            Book Strategy Session
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-dark-500' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-surface-border py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              onClick={() => handleNavClick('features')}
              className="text-dark-400 hover:text-brand-maroon py-2 transition-colors cursor-pointer"
            >
              Why Us
            </a>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 transition-colors ${
                location.pathname === '/services'
                  ? 'text-brand-maroon font-medium'
                  : 'text-dark-400 hover:text-brand-maroon'
              }`}
            >
              Services
            </Link>
            <a
              onClick={() => handleNavClick('process')}
              className="text-dark-400 hover:text-brand-maroon py-2 transition-colors cursor-pointer"
            >
              Our Process
            </a>
            <a
              onClick={() => handleNavClick('case-study')}
              className="text-dark-400 hover:text-brand-maroon py-2 transition-colors cursor-pointer"
            >
              Results
            </a>
            <a
              onClick={() => handleNavClick('faq')}
              className="text-dark-400 hover:text-brand-maroon py-2 transition-colors cursor-pointer"
            >
              FAQ
            </a>
            <Button
              onClick={() => window.open('https://calendly.com/sjackson2409/15min', '_blank', 'noopener,noreferrer')}
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
