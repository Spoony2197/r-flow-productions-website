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
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-xl p-6 md:p-8 border border-surface-border shadow-medium hover:shadow-[0_0_25px_rgba(153,0,0,0.15),0_0_8px_rgba(153,0,0,0.1)] transition-shadow duration-300 relative overflow-hidden group cursor-default"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-75"></div>

      <div className="mb-5">{icon}</div>

      <h3 className="text-xl font-display text-brand-maroon mb-4">{title}</h3>

      <div className="space-y-4">
        <div>
          <h4 className="text-brand-bright text-sm font-semibold mb-1">THE PROBLEM:</h4>
          <p className="text-dark-400">{problem}</p>
        </div>

        <div>
          <h4 className="text-green-700 text-sm font-semibold mb-1">OUR SOLUTION:</h4>
          <p className="text-dark-400">{solution}</p>
        </div>

        <div>
          <h4 className="text-brand-red text-sm font-semibold mb-1">THE RESULT:</h4>
          <p className="text-dark-500 font-medium">{result}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
