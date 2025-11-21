import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  const TestimonialsContent = () => (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            A few words{' '}
            <span className="text-gradient">about us</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-primary-600 font-medium">5.0</span>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-primary-800 mb-8 leading-relaxed">
              "Teplin has been incredible to work with. Their team delivered 
              exactly what we needed, when we needed it. The quality of work 
              and communication has been outstanding."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                <span className="text-primary-700 font-semibold">JD</span>
              </div>
              <div>
                <div className="font-semibold text-primary-900">John Doe</div>
                <div className="text-primary-600">CEO, Example Company</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-900 mb-1">50+</div>
              <div className="text-primary-600">Happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-900 mb-1">5.0</div>
              <div className="text-primary-600">Average rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-900 mb-1">10</div>
              <div className="text-primary-600">Years experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <TestimonialsContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.2)}>
      <TestimonialsContent />
    </motion.div>
  );
};

export default Testimonials;