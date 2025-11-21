import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientShowcase from './components/ClientShowcase';
import Problems from './components/Problems';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ClientShowcase />
      <Problems />
      <Stats />
      <Services />
      <Process />
      <Pricing />
      <CTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;