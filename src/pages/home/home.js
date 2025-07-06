import React from 'react';
import { Slider } from '../../components/slider/slider';
import ServicesSection from '../../components/sections/services/ServicesSection';
import SafetySection from '../../components/sections/safety/SafetySection';
import SocialSection from '../../components/sections/social/SocialSection';
import ContactSection from '../../components/sections/contact/ContactSection';
import './home.css';

const Home = () => {
  return (
    <main className="container">
      <section aria-label="მთავარი სლაიდერი">
        <Slider />
      </section>
      <div className="home-content">
        <ServicesSection />
        <SafetySection />
        <SocialSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Home;
