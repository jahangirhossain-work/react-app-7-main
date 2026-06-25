import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage.jsx';
import AccentText from '../components/AccentText.jsx';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import {
  ArrowUpRight,
  Facebook, X, Instagram, LinkedIn,
} from '../components/Icons.jsx';

export default function Home() {
  const { t } = useLanguage();

  const companies = [
    { logo: '/logos/utility-real-estate.svg', desc: t('home.companies.real_estate_d'), to: '/real-estate', alt: 'Utility Real Estate' },
    { logo: '/logos/utility-fm.svg', desc: t('home.companies.fm_d'), to: '/fm', alt: 'Utility FM' },
    { logo: '/logos/utility-insulation.svg', desc: t('home.companies.insulation_d'), to: '/insulation', alt: 'Utility Insulation' },
    { logo: '/logos/utility-business.svg', desc: t('home.companies.business_d'), to: '/business', alt: 'Utility Business' },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="hero on-dark" id="top">
        <div className="hero__media">
          <img src="/images/home-hero.png" alt="" loading="eager" />
        </div>
        <div className="hero__content">
          <Reveal duration={0.7} delay={0.1}>
            <span className="hero__eyebrow">{t('home.hero.eyebrow')}</span>
          </Reveal>
          <Reveal duration={0.8} delay={0.2}>
            <AccentText as="h1" className="hero__title" text={t('home.hero.title')} />
          </Reveal>
          <Reveal duration={0.8} delay={0.35}>
            <p className="hero__sub">{t('home.hero.sub')}</p>
          </Reveal>
          <Reveal duration={0.7} delay={0.5}>
            <div className="hero__socials">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="Facebook"><Facebook /></a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="X"><X /></a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="Instagram"><Instagram /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn"><LinkedIn /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT — INTRO */}
      <section className="section container" id="about">
        <div className="two-col">
          <Reveal>
            <div>
              <p className="eyebrow">{t('home.about.eyebrow')}</p>
              <AccentText as="h2" className="two-col__title" text={t('home.about.title')} />
              <Link to="/about" className="btn btn--primary">
                {t('btn.read_more')} <span className="btn__icon"><ArrowUpRight /></span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="two-col__right">
              <h3>{t('home.about.subtitle')}</h3>
              <p>{t('home.about.desc')}</p>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="feature-row">
          <StaggerItem className="feature-card feature-card--image feature-card--overlay" style={{ backgroundImage: "url('/images/home-about-bw.png')" }}>
            <h4 className="feature-card__overlay-title"><AccentText text={t('home.feature.hero_tagline')} /></h4>
          </StaggerItem>
          <StaggerItem className="feature-card feature-card--dark">
            <h4 className="feature-card__title">{t('home.feature.growth_t')}</h4>
            <p className="feature-card__sub">{t('home.feature.growth_d')}</p>
          </StaggerItem>
          <StaggerItem className="feature-card feature-card--dark">
            <h4 className="feature-card__title">{t('home.feature.results_t')}</h4>
            <p className="feature-card__sub">{t('home.feature.results_d')}</p>
          </StaggerItem>
        </StaggerGroup>
      </section>

      {/* STATS */}
      <section className="section--tight container">
        <Reveal>
          <div className="stats__intro">
            <p className="eyebrow">{t('home.stats.eyebrow')}</p>
            <p className="stats__title">{t('home.stats.subtitle')}</p>
          </div>
        </Reveal>
        <StaggerGroup className="stats__grid" stagger={0.1}>
          <StaggerItem className="stat-card">
            <div className="stat-card__num">+ <CountUp end={20} /> y</div>
            <div className="stat-card__label">{t('home.stats.experience')}</div>
          </StaggerItem>
          <StaggerItem className="stat-card">
            <div className="stat-card__num"><CountUp end={100} /> +</div>
            <div className="stat-card__label">{t('home.stats.projects')}</div>
          </StaggerItem>
          <StaggerItem className="stat-card">
            <div className="stat-card__num"><CountUp end={50} /> +</div>
            <div className="stat-card__label">{t('home.stats.partners')}</div>
          </StaggerItem>
          <StaggerItem className="stat-card">
            <div className="stat-card__num">+ <CountUp end={8} /></div>
            <div className="stat-card__label">{t('home.stats.industries')}</div>
          </StaggerItem>
        </StaggerGroup>
      </section>

      {/* COMPANIES */}
      <section className="section container" id="companies">
        <div className="two-col">
          <Reveal>
            <div>
              <p className="eyebrow">{t('home.companies.eyebrow')}</p>
              <AccentText as="h2" className="two-col__title" text={t('home.companies.title')} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="two-col__right">
              <p>{t('home.companies.desc')}</p>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="companies">
          <StaggerItem className="company-card company-card--image" style={{ backgroundImage: "url('/images/home-companies.png')" }} />
          {companies.map((c) => (
            <StaggerItem key={c.alt}>
              <Link to={c.to} className="company-card company-card--link">
                <img src={c.logo} alt={c.alt} className="company-card__logo" />
                <p className="company-card__desc">{c.desc}</p>
                <span className="read-more">
                  <span className="read-more__icon"><ArrowUpRight /></span>
                  {t('btn.read_more')}
                </span>
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem>
            <div className="company-card company-card--dark on-dark"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <img src="/logos/utility-holding-icon.svg" alt="" className="company-card__logo" style={{ height: 44 }} />
              <AccentText as="h3" className="company-card__title" text={t('home.companies.dark_title')} />
            </div>
          </StaggerItem>
        </StaggerGroup>
      </section>

      {/* PARTNERS */}
      <section className="section container" id="partners">
        <div className="partners-intro">
          <Reveal>
            <div>
              <p className="eyebrow">{t('home.partners.eyebrow')}</p>
              <AccentText as="h2" className="partners-intro__title" text={t('home.partners.title')} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="partners-intro__desc">{t('home.partners.desc')}</p>
          </Reveal>
        </div>

        <StaggerGroup className="partners-grid" stagger={0.04}>
          {Array.from({ length: 16 }, (_, i) => (
            <StaggerItem key={i} className="partner-tile">
              <img src={`/partners/partner-${i + 1}.png`} alt={`Partner ${i + 1}`} loading="lazy" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}
