import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const CTA = () => {
  const shouldReduceMotion = useReducedMotion();

  const CTAContent = () => (
    <section className="section-padding bg-primary-900">
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not ready for a subscription?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Book a one-time project and experience our quality firsthand
          </p>
          <button className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center gap-2 mx-auto">
            Book a project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <CTAContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.0)}>
      <CTAContent />
    </motion.div>
  );
};

export default CTA;