import React from 'react';
import { Translations } from '../i18n';
import './Barbershop.css';

interface BarbershopProps {
  t: Translations;
}

const Barbershop: React.FC<BarbershopProps> = ({ t }) => {
  return (
    <section className="barbershop" id="barbershop">
      <div className="page-width">
        <span className="section-label">{t.barbershop.label}</span>
        <div className="barbershop__text">
          <p>{t.barbershop.p1}</p>
          <p>{t.barbershop.p2}</p>
          <p>{t.barbershop.p3}</p>
          <p>{t.barbershop.p4}</p>
        </div>
      </div>
    </section>
  );
};

export default Barbershop;
