import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const FAQ = () => {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: 'How does the unlimited model work?',
      answer: 'Once subscribed, you can submit unlimited design and development requests through our project management system. We work on them one by one and deliver completed work typically within 48 hours.'
    },
    {
      question: 'What if I only have a single request?',
      answer: 'No problem! You can pause your subscription when finished and return when you have additional design needs. There are no contracts or commitments.'
    },
    {
      question: 'How fast will I receive my designs?',
      answer: 'Most requests are completed within 48 hours on average. More complex requests may take longer, but we always communicate timelines upfront.'
    },
    {
      question: 'Who are the designers?',
      answer: 'Our team consists of senior Shopify developers and designers with years of experience building successful e-commerce stores.'
    },
    {
      question: 'How do I request designs?',
      answer: 'You can submit requests directly through our project dashboard, via Slack, or even by recording a brief Loom video explaining your needs.'
    },
    {
      question: 'What if I don\'t like the design?',
      answer: 'No worries! We offer unlimited revisions until you\'re 100% satisfied with the final result.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQContent = () => (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Questions?{' '}
            <span className="text-gradient">We have answers</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-primary-100 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-primary-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-primary-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <FAQContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.2)}>
      <FAQContent />
    </motion.div>
  );
};

export default FAQ;