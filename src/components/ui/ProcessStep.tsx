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
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/10 text-brand-red font-bold text-xl relative z-10">
          {number}
        </div>
        {number < 4 && (
          <div className="absolute top-12 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-brand-red/20 z-0"></div>
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-center mb-3">
          <div className="mr-3">{icon}</div>
          <h3 className="text-xl font-display text-brand-maroon">{title}</h3>
        </div>

        <p className="text-dark-400 mb-3">{description}</p>
        <p className="text-dark-300 mb-3">{detail}</p>

        <div className="bg-brand-red/5 border-l-2 border-brand-red px-4 py-2 rounded-r-md">
          <span className="text-dark-500 font-medium">
            <span className="text-brand-red font-semibold">Result:</span> {result}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
