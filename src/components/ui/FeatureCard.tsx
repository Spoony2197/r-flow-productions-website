import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  result: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  problem,
  solution,
  result,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-dark-800 rounded-xl p-6 md:p-8 shadow-medium hover:shadow-strong transition-shadow relative overflow-hidden group"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-500 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-75"></div>
      
      <div className="mb-5">{icon}</div>
      
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-red-400 text-sm font-semibold mb-1">THE PROBLEM:</h4>
          <p className="text-white/80">{problem}</p>
        </div>
        
        <div>
          <h4 className="text-green-400 text-sm font-semibold mb-1">OUR SOLUTION:</h4>
          <p className="text-white/80">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-accent-500 text-sm font-semibold mb-1">THE RESULT:</h4>
          <p className="text-white/90 font-medium">{result}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;