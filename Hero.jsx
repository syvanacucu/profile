import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToCards = () => {
    const cardsSection = document.getElementById('cars-section');
    if (cardsSection) {
      cardsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <h1>Kuymotorin</h1>
      <button onClick={scrollToCards} className="bg-blue-500">Get Started</button>
    </section>
  );D
};

export default Hero;