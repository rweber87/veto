import React from 'react';
import headerImg from '../assets/Header.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${headerImg})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />
    </section>
  );
};

export default Hero;
