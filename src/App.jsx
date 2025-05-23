import React from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app dark-theme">
      <Hero />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
