import { useLanguage } from '../hooks/useLanguage.jsx';
import AccentText from './AccentText.jsx';
import Reveal from './Reveal.jsx';
import { ArrowUpRight, ArrowLeft } from './Icons.jsx';

/**
 * Shared subsidiary page hero section.
 * Props:
 *   eyebrowKey, descKey, logoSrc, logoAlt, images: [3 image src strings]
 *   overviewTitleKey, overviewTextKey, bannerImg
 */
export function SubHero({ eyebrowKey, descKey, logoSrc, logoAlt, images }) {
  const { t, isRTL } = useLanguage();
  // Click "Explore" → navigate home and scroll to companies section
  const goToCompanies = (e) => {
    e.preventDefault();
    window.location.href = '/#companies';
  };
  return (
    <section className="container">
      <div className="sub-hero">
        <Reveal>
          <div className="sub-hero__left">
            <a href="/#companies" onClick={goToCompanies} className="sub-back-link">
              <span className="sub-back-link__icon"><ArrowLeft size={12} /></span>
              {t('sub.back_to_companies')}
            </a>
            <p className="eyebrow">{t(eyebrowKey)}</p>
            <img src={logoSrc} alt={logoAlt} className="sub-hero__logo" />
            <p className="sub-hero__desc">{t(descKey)}</p>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }} className="btn btn--primary">
              {t('btn.explore')} <span className="btn__icon"><ArrowUpRight /></span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="sub-hero__media">
            {images.map((src, i) => (
              <div key={i} className="img-wrap"><img src={src} alt="" /></div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SubOverview({ titleKey, textKey, bannerImg }) {
  const { t } = useLanguage();
  return (
    <>
      <section className="section container">
        <div className="two-col">
          <Reveal>
            <div>
              <p className="eyebrow">{t('sub.overview')}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <AccentText as="h2" className="two-col__title" text={t(titleKey)} />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="sub-banner-flat on-dark">
          <p className="sub-banner-flat__text">{t(textKey)}</p>
          <div className="sub-banner-flat__image">
            <img src={bannerImg} alt="" />
          </div>
        </section>
      </Reveal>
    </>
  );
}
