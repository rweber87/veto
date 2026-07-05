import React, { useState, useEffect } from 'react';
import { Translations, Lang } from '../i18n';
import vetoLogo from '../assets/Veto.svg';
import './Navbar.css';

interface NavbarProps {
  t: Translations;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const Navbar: React.FC<NavbarProps> = ({ t, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button
          className="navbar__logo-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Veto Quartet – back to top"
        >
          <img src={vetoLogo} alt="Veto Quartet" />
        </button>

        <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <button onClick={() => scrollTo('about')}>{t.nav.about}</button>
          <button onClick={() => scrollTo('kostprobe')}>{t.nav.kostprobe}</button>
          <button onClick={() => scrollTo('barbershop')}>{t.nav.barbershop}</button>
          <button onClick={() => scrollTo('book')} className="navbar__cta-btn">
            {t.nav.book}
          </button>
          <div className="navbar__lang">
            <button
              className={lang === 'de' ? 'navbar__lang-btn navbar__lang-btn--active' : 'navbar__lang-btn'}
              onClick={() => setLang('de')}
            >
              DE
            </button>
            <span className="navbar__lang-divider">|</span>
            <button
              className={lang === 'en' ? 'navbar__lang-btn navbar__lang-btn--active' : 'navbar__lang-btn'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
