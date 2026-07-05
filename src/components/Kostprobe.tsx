import React from 'react';
import { Translations } from '../i18n';
import './Kostprobe.css';

interface KostprobeProps {
  t: Translations;
}

const Kostprobe: React.FC<KostprobeProps> = ({ t }) => {
  return (
    <section className="kostprobe" id="kostprobe">
      <div className="page-width">
        <span className="section-label">{t.kostprobe.label}</span>
        <div className="kostprobe__videos">
          <div>
            <div className="kostprobe__embed">
              <iframe
                src="https://www.youtube.com/embed/T7DYkKKU0Sc"
                title={t.kostprobe.caption1}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="kostprobe__caption">{t.kostprobe.caption1}</p>
          </div>
          <div>
            <div className="kostprobe__embed">
              <iframe
                src="https://www.youtube.com/embed/aFmHCi3YHKM"
                title={t.kostprobe.caption2}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="kostprobe__caption">{t.kostprobe.caption2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kostprobe;
