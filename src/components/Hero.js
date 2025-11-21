import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { fadeUpPreset, slideInPreset } from '../lib/motionPresets';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const HeroContent = () => (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-900 mb-6 leading-tight">
            A full Shopify{' '}
            <span className="text-gradient">design & dev</span>{' '}
            team on a{' '}
            <span className="text-gradient">simple monthly plan</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
            Get unlimited Shopify design & development requests for one flat monthly fee. 
            No contracts, pause or cancel anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="btn-primary flex items-center gap-2">
              Get started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary">
              See pricing
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-primary-500">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>Trusted by 100+ brands</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-primary-300 rounded-full"></div>
            <span>Cancel anytime</span>
            <div className="hidden sm:block w-1 h-1 bg-primary-300 rounded-full"></div>
            <span>Fast turnaround</span>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
              <div className="text-primary-600 text-lg font-medium">
                Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <HeroContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.0)}>
      <HeroContent />
    </motion.div>
  );
};

export default Hero;