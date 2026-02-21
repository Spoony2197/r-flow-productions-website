import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-dark-800/40 z-10"></div>
      
      {/* YouTube video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900/60 z-[1]"></div>
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[200%] md:h-[200%] pointer-events-none"
          src="https://www.youtube.com/embed/-FoZVap5I4o?autoplay=1&mute=1&loop=1&playlist=-FoZVap5I4o&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="R Flow Productions background video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: 0 }}
        />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Turn Your Expertise Into Market Authority Through Strategic Video Storytelling
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              We partner with small and medium sized businesses to craft documentary-style videos that establish authority, increase sales, and build genuine connections with your ideal clients—using psychology-driven storytelling that sets you apart from the competition.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="inline-block bg-accent-500/20 px-4 py-2 rounded-full mb-6">
              <span className="text-accent-400 font-semibold">
                <span className="font-bold text-accent-500">30% client increase in 90 days</span> — Recent campaign results
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="primary" 
              size="large"
              onClick={() => window.open('https://calendly.com/sjackson2409/30min', '_blank')}
            >
              Book Your Strategy Session
            </Button>
            <p className="text-white/60 text-sm mt-3">No cookie-cutter videos. Just proven results.</p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-800 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;