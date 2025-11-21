import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Problems = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const problems = [
    {
      icon: AlertCircle,
      title: 'Unreliable freelancers',
      description: 'Inconsistent quality and missed deadlines from freelance developers'
    },
    {
      icon: Clock,
      title: 'Slow agency turnaround',
      description: 'Traditional agencies take weeks or months to complete simple tasks'
    },
    {
      icon: TrendingUp,
      title: 'Expensive hourly rates',
      description: 'High costs that quickly add up with unpredictable project scopes'
    }
  ];

  const ProblemsContent = () => (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            We handle the problems you hate dealing with
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Stop wasting time and money on unreliable solutions. Get consistent, 
            high-quality Shopify development on demand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-primary-600">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-primary-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get unlimited design & development requests
            </h3>
            <p className="text-primary-200 mb-6">
              One simple monthly subscription gives you access to our entire team of 
              Shopify experts. No contracts, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-primary-200">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Unlimited requests</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Fast turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Top-tier quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <ProblemsContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.2)}>
      <ProblemsContent />
    </motion.div>
  );
};

export default Problems;