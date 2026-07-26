import React from 'react';
import headerImg from '../assets/Header.jpg';
import headerMobileImg from '../assets/Header_mobile.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <picture className="hero__picture">
        <source media="(max-width: 900px)" srcSet={headerMobileImg} />
        <img src={headerImg} alt="" className="hero__bg-img" />
      </picture>
      <div className="hero__overlay" aria-hidden="true" />
    </section>
  );
};

export default Hero;