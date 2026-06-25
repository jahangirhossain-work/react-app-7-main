import { useLanguage } from '../hooks/useLanguage.jsx';
import AccentText from '../components/AccentText.jsx';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx';
import {
  ArrowUpRight, ArrowRight,
  AwardIcon, TrendingUpIcon, HandshakeIcon, ShieldIcon, LeafIcon,
  TargetIcon, SettingsIcon, ChartIcon,
} from '../components/Icons.jsx';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { Icon: AwardIcon, t_key: 'about.values.excellence_t', d_key: 'about.values.excellence_d' },
    { Icon: TrendingUpIcon, t_key: 'about.values.growth_t', d_key: 'about.values.growth_d' },
    { Icon: HandshakeIcon, t_key: 'about.values.partnerships_t', d_key: 'about.values.partnerships_d' },
    { Icon: ShieldIcon, t_key: 'about.values.integrity_t', d_key: 'about.values.integrity_d' },
    { Icon: LeafIcon, t_key: 'about.values.innovation_t', d_key: 'about.values.innovation_d' },
  ];

  const leaders = [1, 2, 3, 4].map((i) => ({
    img: `/images/leader-${i}.png`,
    role: t(`about.leader_${i}_role`),
    name: t(`about.leader_${i}_name`),
  }));

  const approachItems = [
    { Icon: TargetIcon, t_key: 'about.approach.assessment_t', d_key: 'about.approach.assessment_d' },
    { Icon: SettingsIcon, t_key: 'about.approach.strategy_t', d_key: 'about.approach.strategy_d' },
    { Icon: ArrowRight, t_key: 'about.approach.implementation_t', d_key: 'about.approach.implementation_d' },
    { Icon: ChartIcon, t_key: 'about.approach.monitoring_t', d_key: 'about.approach.monitoring_d' },
  ];

  return (
    <div className="about-page">
      {/* HERO TITLE — Split Layout Grid */}
<section className="section container">
  <div className="about-hero">
    
    {/* Left Side Column */}
    <div>
      <Reveal>
        <p className="eyebrow">{t('about.eyebrow')}</p>
      </Reveal>
    </div>

    {/* Right Side Column */}
    <div className="about-hero-text">
      <Reveal delay={0.05}>
        <AccentText as="h1" className="about-hero-text__title" text={t('about.title')} />
      </Reveal>
      <Reveal delay={0.15}>
        <p className="about-hero-text__desc">{t('about.desc')}</p>
      </Reveal>
    </div>

  </div>
</section>

{/* IMAGE BANNER + MISSION - connected rounded card (image top, navy bottom) */}
<Reveal>
  <div className="about-mission-banner">
    <div className="about-mission-banner__image">
      <img src="/images/about-us-banner.png" alt="Our Mission Banner" />
    </div>
    <div className="about-mission-banner__content on-dark">
      <p className="about-mission-banner__label">{t('about.mission_label')}</p>
      <p className="about-mission-banner__text">{t('about.mission_text')}</p>
    </div>
  </div>
</Reveal>

      {/* VALUES */}
      <section className="section container">
        <div className="values">
          <Reveal>
            <div className="values__intro">
              <p className="eyebrow">{t('about.values.eyebrow')}</p>
            </div>
          </Reveal>
          <StaggerGroup className="values__grid">
            {values.map(({ Icon, t_key, d_key }) => (
              <StaggerItem key={t_key} className="value-card">
                <div className="value-card__icon"><Icon /></div>
                <h4 className="value-card__title">{t(t_key)}</h4>
                <p className="value-card__desc">{t(d_key)}</p>
              </StaggerItem>
            ))}
            <StaggerItem className="value-card value-card--quote on-dark">
              <span className="value-card__quote-mark">"</span>
              <AccentText as="p" className="value-card__quote" text={t('about.values.quote')} />
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* LEADERS */}
      <section className="section container">
        <div className="leaders">
          <Reveal>
            <div className="leaders__intro">
              <p className="eyebrow">{t('about.leaders.eyebrow')}</p>
              <AccentText as="h2" className="leaders__title" text={t('about.leaders.title')} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p className="leaders__desc">{t('about.leaders.desc')}</p>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="leaders__grid" stagger={0.08}>
          {leaders.map((l) => (
            <StaggerItem key={l.name} className="leader-card">
              <div className="leader-card__img" style={{ backgroundImage: `url('${l.img}')` }}>
                <span className="leader-card__arrow"><ArrowUpRight size={11} /></span>
              </div>
              <div className="leader-card__info">
                <p className="leader-card__role">{l.role}</p>
                <h4 className="leader-card__name">{l.name}</h4>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* APPROACH + CERTS */}
      <section className="section container">
        <div className="approach">
          <Reveal>
            <div className="approach__intro">
              <p className="eyebrow">{t('about.approach.eyebrow')}</p>
              <AccentText as="h2" className="approach__title" text={t('about.approach.title')} />
              <p>{t('about.approach.desc')}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="approach__list">
              {approachItems.map(({ Icon, t_key, d_key }) => (
                <div key={t_key} className="approach-item">
                  <div className="approach-item__title">
                    <Icon /> {t(t_key)}
                  </div>
                  <p className="approach-item__desc">{t(d_key)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="certifications">
          <Reveal>
            <div className="certifications__intro">
              <p className="eyebrow">{t('about.certs.eyebrow')}</p>
              <h3>{t('about.certs.title')}</h3>
            </div>
          </Reveal>
          <StaggerGroup className="certs-grid">
            <StaggerItem className="cert-card">
              <p className="cert-card__num">ISO 9001:2015</p>
              <h4 className="cert-card__title">{t('about.certs.iso9001_t')}</h4>
              <p className="cert-card__desc">{t('about.certs.iso9001_d')}</p>
            </StaggerItem>
            <StaggerItem className="cert-card">
              <p className="cert-card__num">ISO 41001:2018</p>
              <h4 className="cert-card__title">{t('about.certs.iso41001_t')}</h4>
              <p className="cert-card__desc">{t('about.certs.iso41001_d')}</p>
            </StaggerItem>
            <StaggerItem className="cert-card">
              <p className="cert-card__num">ISO 45001:2018</p>
              <h4 className="cert-card__title">{t('about.certs.iso45001_t')}</h4>
              <p className="cert-card__desc">{t('about.certs.iso45001_d')}</p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
}
