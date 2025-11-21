import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeInPreset } from '../lib/motionPresets';

const ClientShowcase = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const clients = [
    'filmcuts', 'homeleon', 'lokaline', 'URTH', 'BEATBOX', 'woof', 'bauwerk.', 'LABODET'
  ];

  const ShowcaseContent = () => (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-medium mb-4">Our clients experienced</p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
            Significant growth with our solutions
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-medium text-primary-700">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <ShowcaseContent />;
  }

  return (
    <motion.div {...fadeInPreset(0.2, 1.0)}>
      <ShowcaseContent />
    </motion.div>
  );
};

export default ClientShowcase;