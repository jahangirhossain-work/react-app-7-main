import { useLanguage } from '../hooks/useLanguage.jsx';
import AccentText from './AccentText.jsx';
import { Envelope, Facebook, X, Instagram, LinkedIn, Phone } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <Reveal>
          <p className="footer__eyebrow">{t('footer.contact')}</p>
        </Reveal>

        <div className="footer__main">
          <Reveal>
            <div>
              <AccentText as="h2" className="footer__title" text={t('footer.title')} />
              <a href={`mailto:${t('footer.email')}`} className="footer__email">
                <Envelope /> {t('footer.email')}
              </a>
              <div className="footer__socials">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X"><X /></a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
              </div>
              <p className="footer__copy">{t('footer.copy')}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="footer__offices">
              <div className="office-card">
                <p className="office-card__title">{t('footer.riyadh')}</p>
                <p className="office-card__addr">{t('footer.riyadh_addr')}</p>
                <div className="office-card__phones">
                  <a className="office-card__phone" href="tel:+966509022022"><Phone /> +966 50 902 2022</a>
                  <a className="office-card__phone" href="tel:+966507096111"><Phone /> +966 50 709 6111</a>
                </div>
              </div>
              <div className="office-card office-card--alt">
                <p className="office-card__title">{t('footer.dammam')}</p>
                <p className="office-card__addr">{t('footer.dammam_addr')}</p>
                <div className="office-card__phones">
                  <a className="office-card__phone" href="tel:+966537909666"><Phone /> +966 53 790 9666</a>
                  <a className="office-card__phone" href="tel:+966503909666"><Phone /> +966 50 390 9666</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="footer__bottom">
          <span>{t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
}
