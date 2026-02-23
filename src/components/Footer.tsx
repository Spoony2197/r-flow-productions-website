import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-maroon pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src="/R-Flow_LogoDesign (1).gif" alt="R Flow Productions Logo" className="h-8 mr-2" />
            </div>
            <p className="text-white/70 text-sm">
              Strategic video storytelling for tech companies and medical practitioners that establishes authority and drives growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="/#features" className="hover:text-brand-bright transition-colors">Why Choose Us</a></li>
              <li><a href="/services" className="hover:text-brand-bright transition-colors">Services</a></li>
              <li><a href="/#process" className="hover:text-brand-bright transition-colors">Our Process</a></li>
              <li><a href="/#case-study" className="hover:text-brand-bright transition-colors">Case Studies</a></li>
              <li><a href="/#faq" className="hover:text-brand-bright transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a
                  href="mailto:sir-tay.jackson@rflowproductions.com?subject=Inquiry from Website"
                  className="flex items-start hover:text-brand-bright transition-colors group"
                >
                  <Mail className="text-brand-bright mt-1 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
                  <span className="break-all">sir-tay.jackson@rflowproductions.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:203-309-7484"
                  className="flex items-start hover:text-brand-bright transition-colors group"
                >
                  <Phone className="text-brand-bright mt-1 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
                  <span>203-309-7484</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="text-brand-bright mt-1 mr-2 flex-shrink-0" size={16} />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get Started</h3>
            <p className="text-white/70 mb-4">
              Ready to transform your expertise into market authority? Book your strategy session today.
            </p>
            <a
              href="https://calendly.com/sjackson2409/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-brand-bright hover:bg-white text-white hover:text-brand-maroon font-medium px-5 py-2 rounded-md transition-colors"
            >
              Book a Session
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} R Flow Productions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-brand-bright transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-brand-bright transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
