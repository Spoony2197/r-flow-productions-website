import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-surface-border last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-6 text-left"
        onClick={toggleOpen}
      >
        <h3 className="font-semibold text-lg text-dark-500">{question}</h3>
        <div className="ml-4 flex-shrink-0 text-dark-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-dark-400">{answer}</div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know this will actually generate ROI?",
      answer: (
        <>
          <p>
            Fair question. We focus specifically on tech companies and medical practitioners because we understand these markets. Our psychology-driven approach has generated measurable results: 630% client increases, increased authority positioning, and higher conversion rates.
          </p>
          <p className="mt-2">
            We're not just creating videos—we're building strategic assets that work.
          </p>
        </>
      ),
    },
    {
      question: "Sounds complex. How long does this actually take?",
      answer: (
        <>
          <p>
            Here's the thing: strategic work feels complex, but our 4-step process makes it simple. Most clients are surprised how streamlined everything becomes once we identify your Story Keywords and craft the right narrative structure.
          </p>
          <p className="mt-2">
            The investment in strategy upfront saves months of guesswork.
          </p>
        </>
      ),
    },
    {
      question: "What if you don't understand our industry?",
      answer: (
        <p>
          We specialize in tech and medical practitioners specifically because these fields require deep understanding. We're not generalists trying to serve everyone—we know these markets, their pain points, and what moves their ideal clients to action.
        </p>
      ),
    },
  ];

  return (
    <section id="faq" className="py-20 bg-surface-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-brand-maroon mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 md:p-8 border border-surface-border shadow-medium"
          >
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
