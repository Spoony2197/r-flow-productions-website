import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import Button from './ui/Button';

const FinalCta: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="cta" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-dark-900/60 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready To Transform Your Expertise Into Market Authority?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            <span className="text-accent-500 font-semibold">Your competitors are creating content.</span> You could be creating authority.
          </p>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            The difference isn't just better videos—it's strategic storytelling that positions you as the definitive expert your ideal clients are searching for.
          </p>
          
          <div className="bg-dark-900/80 backdrop-blur-sm rounded-xl p-8 mb-10 shadow-strong">
            <h3 className="text-xl font-bold mb-6">What you get in your strategy session:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start">
                <CheckCircle className="text-accent-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p>Analysis of your current market position</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-accent-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p>Identification of your unique story elements</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-accent-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p>Clear roadmap for authority-building content</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-accent-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p>Understanding of our 4-step process for your specific situation</p>
              </div>
            </div>
          </div>
          
          <Button 
            variant="primary" 
            size="large"
            onClick={() => window.open('https://calendly.com/sjackson2409/15min', '_blank')}
          >
            Book Your Strategy Session Now
          </Button>
          
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/70">
            <div className="flex items-center">
              <CheckCircle className="text-accent-500 mr-2" size={16} />
              <p>Investment: $10K-$100K projects only</p>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-accent-500 mr-2" size={16} />
              <p>Timeline: Strategic, not rushed</p>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-accent-500 mr-2" size={16} />
              <p>Result: Authority, not just content</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;