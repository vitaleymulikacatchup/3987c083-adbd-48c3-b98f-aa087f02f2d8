import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Pricing = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const plans = [
    {
      name: 'Standard',
      price: '$3500',
      period: '/month',
      description: 'Perfect for growing businesses',
      features: [
        'Unlimited design requests',
        'Unlimited development requests', 
        'Unlimited revisions',
        'Average 48h delivery',
        'Dedicated project manager',
        'Slack communication',
        'Pause or cancel anytime'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$5500',
      period: '/month',
      description: 'For businesses that need it all',
      features: [
        'Everything in Standard',
        'Priority support',
        '24h average delivery',
        'Advanced integrations',
        'Performance optimization',
        'Conversion optimization',
        'Monthly strategy calls',
        'Custom app development'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7500',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Everything in Pro',
        'Dedicated development team',
        'Same-day delivery',
        'Custom workflows',
        'Advanced analytics',
        'Multi-store management',
        'White-label solutions',
        'Direct phone support'
      ],
      popular: false
    }
  ];

  const PricingContent = () => (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our{' '}
            <span className="text-gradient">simple</span>{' '}
            monthly plans
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. No contracts, 
            pause or cancel anytime.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-primary-900 shadow-xl' 
                  : 'border-primary-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-900 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-primary-900">
                    {plan.price}
                  </span>
                  <span className="text-primary-600 ml-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-primary-600">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary-900 text-white hover:bg-primary-800'
                    : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-primary-600 mb-4">
            Not ready for a monthly plan?
          </p>
          <button className="btn-secondary">
            Book a project
          </button>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <PricingContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.2)}>
      <PricingContent />
    </motion.div>
  );
};

export default Pricing;