import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Settings, Check } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Process = () => {
  const shouldReduceMotion = useReducedMotion();

  const ProcessContent = () => (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Have a Shopify project?
            </h2>
            <p className="text-lg text-primary-600 mb-8">
              Submit unlimited requests through our simple project management system. 
              We'll handle everything from design to development.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Submit a request</h3>
                  <p className="text-primary-600">Describe your project through our dashboard or Slack</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">We get to work</h3>
                  <p className="text-primary-600">Our team starts working on your request immediately</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Delivered in 48h</h3>
                  <p className="text-primary-600">Get your completed work delivered fast</p>
                </div>
              </div>
            </div>
            
            <button className="btn-primary mt-8">
              Get started
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                <div className="text-primary-600 text-lg font-medium">
                  Project Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <ProcessContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.2)}>
      <ProcessContent />
    </motion.div>
  );
};

export default Process;