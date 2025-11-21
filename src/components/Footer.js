import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MessageCircle, Twitter, Linkedin } from 'lucide-react';
import { fadeInPreset } from '../lib/motionPresets';

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  const FooterContent = () => (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">Teplin</div>
            <p className="text-primary-200 mb-6 max-w-md">
              A full Shopify design & development team on a simple monthly plan. 
              Get unlimited requests, fast turnaround, and top-tier quality.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">Theme Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Migration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-300 text-sm">
            © 2024 Teplin Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  if (shouldReduceMotion) {
    return <FooterContent />;
  }

  return (
    <motion.div {...fadeInPreset(0.1, 1.0)}>
      <FooterContent />
    </motion.div>
  );
};

export default Footer;