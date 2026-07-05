import React from 'react';
import { Translations } from '../i18n';
import sandraImg from '../assets/Sandra_sw.png';
import robbieImg from '../assets/Robbie_sw.jpg';
import miraImg from '../assets/Mira_sw.jpg';
import andrewImg from '../assets/Andrew_sw.jpg';
import './About.css';

interface AboutProps {
  t: Translations;
}

const memberImages: string[] = [sandraImg, robbieImg, miraImg, andrewImg];

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section className="about" id="about">
      <div className="page-width">
        <div className="about__intro">
          <span className="section-label">{t.about.label}</span>
          <p className="about__text">{t.about.text}</p>
        </div>
        <div className="about__members">
          {t.about.members.map((member, i) => (
            <div className="about__member" key={member.name}>
              <div className="about__member-img-wrap">
                <img src={memberImages[i]} alt={member.name} />
              </div>
              <p className="about__member-name">{member.name}</p>
              <p className="about__member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
