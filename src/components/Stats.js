import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpPreset } from '../lib/motionPresets';

const Stats = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const stats = [
    { number: '700+', label: 'Projects completed' },
    { number: '90%', label: 'Client retention rate' },
    { number: '48h', label: 'Average turnaround' }
  ];

  const StatsContent = () => (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="">
              <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
                {stat.number}
              </div>
              <div className="text-primary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <StatsContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.2, 1.0)}>
      <StatsContent />
    </motion.div>
  );
};

export default Stats;