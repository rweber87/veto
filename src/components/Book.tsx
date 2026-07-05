import React from 'react';
import { Translations } from '../i18n';
import './Book.css';

interface BookProps {
  t: Translations;
}

const Book: React.FC<BookProps> = ({ t }) => {
  const emailHref = `mailto:${t.footer.email}?subject=${encodeURIComponent(t.book.emailSubject)}`;

  return (
    <section className="book" id="book">
      <div className="page-width">
        <span className="section-label">{t.book.label}</span>
        <p className="book__text">{t.book.text}</p>
        <p className="book__contact-line">
          {t.book.contact}:{' '}
          <a href={emailHref}>{t.footer.email}</a>
          {'  |  '}
          {t.book.contactSuffix}: {t.book.contactName}
        </p>
      </div>
    </section>
  );
};

export default Book;
