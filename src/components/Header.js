import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { fadeInPreset } from '../lib/motionPresets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const HeaderContent = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-900">
              Teplin
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-primary-600 hover:text-primary-900 transition-colors">
              Services
            </a>
            <a href="#work" className="text-primary-600 hover:text-primary-900 transition-colors">
              Work
            </a>
            <a href="#pricing" className="text-primary-600 hover:text-primary-900 transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-primary-600 hover:text-primary-900 transition-colors">
              About
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">
              Log in
            </button>
            <button className="btn-primary">
              Get started
            </button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-100">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-primary-600 hover:text-primary-900 transition-colors">
                Services
              </a>
              <a href="#work" className="text-primary-600 hover:text-primary-900 transition-colors">
                Work
              </a>
              <a href="#pricing" className="text-primary-600 hover:text-primary-900 transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-primary-600 hover:text-primary-900 transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary">
                  Log in
                </button>
                <button className="btn-primary">
                  Get started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  if (shouldReduceMotion) {
    return <HeaderContent />;
  }

  return (
    <motion.div {...fadeInPreset(0, 0.6)}>
      <HeaderContent />
    </motion.div>
  );
};

export default Header;