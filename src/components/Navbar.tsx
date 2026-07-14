import React, { useState, useEffect } from 'react';
import { Translations, Lang } from '../i18n';
import vetoLogo from '../assets/Veto.svg';
import './Navbar.css';

interface NavbarProps {
  t: Translations;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const SECTIONS = ['about', 'kostprobe', 'barbershop', 'book'] as const;
type SectionId = typeof SECTIONS[number];

const Navbar: React.FC<NavbarProps> = ({ t, lang, setLang }) => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isScrollingProgrammatically = React.useRef(false);
  const programmaticScrollTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-180px 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingProgrammatically.current) return;

      const scrollingDown = window.scrollY >= lastScrollY;

      entries.forEach((entry) => {
        if (scrollingDown && entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        } else if (!scrollingDown && !entry.isIntersecting) {
          const index = SECTIONS.indexOf(entry.target.id as SectionId);
          if (index > 0) {
            setActiveSection(SECTIONS[index - 1]);
          } else {
            setActiveSection(null);
          }
        }
      });

      lastScrollY = window.scrollY;
    }, observerOptions);

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        setSticky(window.scrollY >= aboutEl.offsetTop - 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (programmaticScrollTimer.current) {
        clearTimeout(programmaticScrollTimer.current);
      }
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    setActiveSection(id as SectionId);
    isScrollingProgrammatically.current = true;

    if (programmaticScrollTimer.current) {
      clearTimeout(programmaticScrollTimer.current);
    }
    programmaticScrollTimer.current = setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 1000);

    const top = el.getBoundingClientRect().top + window.scrollY - 200;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const navBtnClass = (id: SectionId) => {
    const isActive = activeSection === id;
    const activeClass = isActive ? ' navbar__nav-btn--active' : '';
    const ctaClass = id === 'book' ? ' navbar__cta-btn' : '';
    return `navbar__nav-btn${activeClass}${ctaClass}`;
  };

  const navContent = (
    <div className="navbar__inner">
      <button
        className="navbar__logo-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Veto Quartet – back to top"
      >
        <img src={vetoLogo} alt="Veto Quartet" />
      </button>

      <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        <button className={navBtnClass('about')} onClick={() => scrollTo('about')}>{t.nav.about}</button>
        <button className={navBtnClass('kostprobe')} onClick={() => scrollTo('kostprobe')}>{t.nav.kostprobe}</button>
        <button className={navBtnClass('barbershop')} onClick={() => scrollTo('barbershop')}>{t.nav.barbershop}</button>
        <button className={navBtnClass('book')} onClick={() => scrollTo('book')}>
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
  );

  return (
    <>
      {/* Hero navbar — in-flow, sits over hero image, scrolls away */}
      {!sticky && (
        <nav className="navbar navbar--hero">
          {navContent}
        </nav>
      )}

      {/* Sticky navbar — fixed at top, only rendered once past the hero */}
      {sticky && (
        <nav className="navbar navbar--sticky">
          {navContent}
        </nav>
      )}
    </>
  );
};

export default Navbar;