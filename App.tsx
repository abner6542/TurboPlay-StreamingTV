
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#1a2c58] text-[#f3f4f6] min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
