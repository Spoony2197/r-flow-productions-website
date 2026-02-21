import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Brain, Workflow } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Why Small and Medium Sized Businesses Choose R Flow Productions
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard 
            icon={<Users className="text-accent-500\" size={32} />}
            title="Strategic Collaboration Over Camera Setup"
            problem="Other video companies just show up, film, and leave you with generic content"
            solution="We become your strategic partner, diving deep to uncover the compelling elements of your story that others miss completely"
            result="Videos that position you as THE authority, not just another voice in the crowd"
          />
          
          <FeatureCard 
            icon={<Brain className="text-accent-500\" size={32} />}
            title="Psychology-Driven Messaging That Converts"
            problem="Most videos look professional but fail to connect with your ideal clients psychologically"
            solution="Every script and visual element is crafted using proven psychological principles that speak to your audience's core motivations"
            result="Higher engagement, stronger emotional connections, and measurable ROI"
          />
          
          <FeatureCard 
            icon={<Workflow className="text-accent-500\" size={32} />}
            title="Proven 4-Step Process (Not Complex - Strategic)"
            problem="You think video production is complicated and time-consuming"
            solution="We've simplified everything into a crystal-clear methodology that guarantees results"
            result="30% client increase for our recent client using this exact system"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;