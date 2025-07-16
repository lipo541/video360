import React from "react";
import { Slider } from "../slider/slider";
import ServicesSection from "../sections/services/ServicesSection";
import LocationManagers from "../location-managers/LocationManagers";
import SafetySection from "../sections/safety/SafetySection";
import SocialSection from "../sections/social/SocialSection";
import ContactSection from "../sections/contact/ContactSection";
import "./main.css";

const Main = () => {
  return (
    <main className="container">
      <section aria-label="მთავარი სლაიდერი">
        <Slider />
      </section>
      <div className="home-content">
        <ServicesSection />
        <LocationManagers />
        <SafetySection />
        <SocialSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Main;
