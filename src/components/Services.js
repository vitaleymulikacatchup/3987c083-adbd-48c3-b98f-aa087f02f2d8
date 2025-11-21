import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Globe, Package, TrendingUp, Settings, Zap, Target } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Services = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const services = [
    {
      icon: Globe,
      title: 'Shopify theme design',
      description: 'Custom theme development tailored to your brand and business needs'
    },
    {
      icon: Package,
      title: 'App integrations',
      description: 'Seamless integration of third-party apps and custom functionality'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing optimization',
      description: 'Continuous improvements to boost performance and conversions'
    },
    {
      icon: Settings,
      title: 'Store setup & migration',
      description: 'Complete store setup or migration from other platforms'
    },
    {
      icon: Zap,
      title: 'Performance optimization',
      description: 'Speed optimization and technical improvements for better UX'
    },
    {
      icon: Target,
      title: 'Conversion optimization',
      description: 'Data-driven improvements to increase your conversion rates'
    }
  ];

  const ServicesContent = () => (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            What's covered in our{' '}
            <span className="text-gradient">unlimited</span> services
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Everything you need to build, optimize, and scale your Shopify store
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl border border-primary-100 hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <ServicesContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.2)}>
      <ServicesContent />
    </motion.div>
  );
};

export default Services;