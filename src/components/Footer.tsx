import React from 'react';
import { Translations } from '../i18n';

import './Footer.css';

interface FooterProps {
  t: Translations;
}

const InstagramIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon: React.FC = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="var(--black)" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const Footer: React.FC<FooterProps> = ({ t }) => {
  const emailHref = `mailto:${t.footer.email}`;
  return (
    <footer className="footer">
      <div className="page-width">
        <div className="footer__inner">
          <a href={emailHref} className="footer__email">{t.footer.email}</a>
          <div className="footer__socials">
            <a href="https://www.instagram.com/veto_quartet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/people/Veto-Quartet/61552246681821/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <FacebookIcon />
            </a>
            <a href="https://www.youtube.com/@VetoQuartet" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
