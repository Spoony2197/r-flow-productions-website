import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollExpandMedia from './ui/ScrollExpandMedia';

const CaseStudy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section id="case-study" className="py-20 bg-surface-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-maroon mb-6">
                Real Results: How We Transformed A Local Business Into The Go-To Authority
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 border border-surface-border shadow-medium"
            >
              <div className="mb-6">
                <h3 className="text-lg font-display text-brand-maroon mb-2">The Challenge:</h3>
                <p className="text-dark-400">
                  Local business struggling with competition, trying to establish authority in a crowded market
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-display text-brand-maroon mb-2">Our Approach:</h3>
                <ul className="list-disc list-inside text-dark-400 space-y-2">
                  <li>Created a short documentary focusing on the business's unique philosophy and a client transformation story</li>
                  <li>Developed psychology-driven short-form content tailored specifically to their ideal client's motivations</li>
                  <li>Used our 4-step process to uncover what made them different from every other competitor</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-display text-brand-maroon mb-2">The Results:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-dark-400">Positioned as the premier service provider in their area</li>
                  <li className="text-dark-400">Generated consistent leads through authentic storytelling</li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-brand-red pl-4 italic text-dark-500 mt-6">
                "This wasn't just video production—it was strategic positioning that changed our entire business."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollExpandMedia
        videoId="LkRhV20INwU"
        title="See Our Work In Action"
        subtitle="Watch how we bring strategic storytelling to life"
      />
    </>
  );
};

export default CaseStudy;
