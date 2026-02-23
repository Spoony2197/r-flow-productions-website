import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Target, Users, PenTool } from 'lucide-react';
import Button from './ui/Button';
import ProcessStep from './ui/ProcessStep';

const Process: React.FC = () => {
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
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-brand-maroon mb-4">
            The R Flow Method - 4 Simple Steps
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-dark-400 text-lg mb-0">
            Our Strategic Process That Eliminates Complexity
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <ProcessStep
            number={1}
            icon={<Search className="text-brand-red" size={32} />}
            title="Story Finding"
            description="We dive deep into your world through discovery conversations and research"
            detail="This isn't about what you do—it's about uncovering the most compelling and unique elements of your story that others miss completely"
            result="Your authentic differentiators become crystal clear"
          />

          <ProcessStep
            number={2}
            icon={<Target className="text-brand-red" size={32} />}
            title="Outcome Keywords"
            description="We define five Story Keywords that capture what's most inspiring, different, and essential about your brand"
            detail="This alignment ensures crystal-clear objectives before any camera rolls"
            result="Every creative decision drives toward your goals"
          />

          <ProcessStep
            number={3}
            icon={<Users className="text-brand-red" size={32} />}
            title="Character Selection"
            description="We identify the strongest people to feature in your story—those who create genuine emotional connections with your audience"
            detail="Your story is never stronger than the people in it, and emotion is the gateway to action"
            result="Authentic advocates who compel prospects to take action"
          />

          <ProcessStep
            number={4}
            icon={<PenTool className="text-brand-red" size={32} />}
            title="Craft Storyboards"
            description="We craft the plot structure that stops the scroll and holds attention from first frame to last"
            detail="This ensures your story has engaging narrative architecture that makes people lean in, stay engaged, and take action"
            result="Videos that perform, not just look pretty"
          />
        </motion.div>

        <div className="mt-16 text-center">
          <Button
            variant="secondary"
            size="large"
            onClick={() => window.open('https://calendly.com/sjackson2409/15min', '_blank')}
          >
            See This Process In Action
          </Button>
          <p className="text-dark-300 text-sm mt-3">
            Book your strategy session and discover your authority story
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
