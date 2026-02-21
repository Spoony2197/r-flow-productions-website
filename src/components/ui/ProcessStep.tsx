import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  result: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  icon,
  title,
  description,
  detail,
  result,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="mb-12 last:mb-0 flex"
    >
      <div className="mr-6 relative">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-500/20 text-accent-500 font-bold text-xl relative z-10">
          {number}
        </div>
        {number < 4 && (
          <div className="absolute top-12 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-accent-500/30 z-0"></div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center mb-3">
          <div className="mr-3">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-white/80 mb-3">{description}</p>
        <p className="text-white/70 mb-3">{detail}</p>
        
        <div className="bg-accent-500/10 border-l-2 border-accent-500 px-4 py-2 rounded-r-md">
          <span className="text-white/90 font-medium">
            <span className="text-accent-500 font-semibold">Result:</span> {result}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessStep;