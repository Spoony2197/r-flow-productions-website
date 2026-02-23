import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Founder: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2"
            >
              <div className="relative">
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 border-2 border-brand-red rounded-xl z-0"></div>
                <div className="relative overflow-hidden rounded-xl shadow-strong z-10">
                  <img
                    src="/untitled (1 of 1).jpg"
                    alt="Sir-Tay Jackson, Founder & Chief Storyteller"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-3"
            >
              <h2 className="font-display text-3xl md:text-4xl text-brand-maroon mb-2">
                Stories Worth Being Told
              </h2>
              <div className="w-20 h-1 bg-brand-red mb-6"></div>

              <h3 className="text-xl font-display text-dark-500 mb-4">
                From Documentary Filmmaker to Strategic Partner
              </h3>

              <div className="text-dark-400 space-y-4">
                <p>
                  My journey started in Africa and Ecuador, working with organizations that were literally changing lives. I witnessed firsthand how the right story—told the right way—could transform not just businesses, but entire communities.
                </p>

                <p>
                  <strong className="text-dark-500">The problem I kept seeing</strong>: Incredible people doing incredible work, but struggling to communicate their value in a way that truly resonated.
                </p>

                <p>
                  <strong className="text-dark-500">That's when I realized</strong>: The most powerful tool for establishing authority isn't just expertise—it's the ability to tell your story in a way that moves people to action.
                </p>

                <p>
                  Today, through R Flow Productions, I bring that same documentary-style storytelling approach to tech companies and medical practitioners who are ready to stop being just another voice in their industry and start being THE voice their ideal clients trust.
                </p>

                <p>
                  Because every expert has a story worth being told. The question is: Are you ready to tell yours strategically?
                </p>
              </div>

              <div className="mt-6 text-right">
                <p className="font-display text-brand-red italic text-lg">— Sir-Tay Jackson</p>
                <p className="text-dark-300 text-sm">Founder & Chief Storyteller</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
