import React, { useState } from 'react';
import { de, en, Lang } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Kostprobe from './components/Kostprobe';
import Book from './components/Book';
import StagePhoto from './components/StagePhoto';
import Barbershop from './components/Barbershop';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>('de');
  const t = lang === 'de' ? de : en;

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero />
        <About t={t} />
        <Kostprobe t={t} />
        <Book t={t} />
        <StagePhoto />
        <Barbershop t={t} />
      </main>
      <Footer t={t} />
    </>
  );
};

export default App;
