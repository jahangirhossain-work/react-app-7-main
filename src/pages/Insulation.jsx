import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';
import { SubHero, SubOverview } from '../components/SubsidiaryParts.jsx';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx';
import { ArrowLeft, ArrowRight, BoltIcon, FanIcon, HouseIcon, CoinsIcon, DropIcon, ShieldIcon } from '../components/Icons.jsx';

export default function Insulation() {
  const { t } = useLanguage();
  const [tab, setTab] = useState('thermal');

  const thermalItems = [
    { Icon: BoltIcon, key: 'insulation.svc.energy' },
    { Icon: FanIcon, key: 'insulation.svc.hvac' },
    { Icon: HouseIcon, key: 'insulation.svc.climate' },
    { Icon: CoinsIcon, key: 'insulation.svc.cost' },
  ];

  const waterItems = [
    { Icon: ShieldIcon, key: 'insulation.water.foundation' },
    { Icon: DropIcon, key: 'insulation.water.roof' },
    { Icon: HouseIcon, key: 'insulation.water.bathroom' },
    { Icon: DropIcon, key: 'insulation.water.tank' },
  ];

  return (
    <div>
      <SubHero
        eyebrowKey="insulation.eyebrow"
        descKey="insulation.desc"
        logoSrc="/logos/utility-insulation.svg"
        logoAlt="Utility Insulation"
        images={['/images/insulation-1.png', '/images/insulation-2.png', '/images/insulation-3.png']}
      />

      <SubOverview
        titleKey="insulation.overview_title"
        textKey="insulation.overview_text"
        bannerImg="/images/insulation-banner.png"
      />

      {/* SERVICES */}
      <section className="services-section container">
        <div className="services-layout">
          <Reveal>
            <aside className="services-side">
              <p className="eyebrow">{t('sub.our_services')}</p>
              <div className="services-arrows">
                <button
                  type="button"
                  aria-label="Previous service group"
                  onClick={() => setTab(tab === 'thermal' ? 'water' : 'thermal')}
                >
                  <ArrowLeft size={12} />
                </button>
                <button
                  type="button"
                  aria-label="Next service group"
                  onClick={() => setTab(tab === 'thermal' ? 'water' : 'thermal')}
                >
                  <ArrowRight size={12} />
                </button>
              </div>
              <div className="services-tabs">
                <button
                  className={`services-tab ${tab === 'thermal' ? 'is-active' : ''}`}
                  onClick={() => setTab('thermal')}
                >
                  <span className="services-tab__num">01.</span>
                  {t('insulation.tab_thermal')}
                </button>
                <button
                  className={`services-tab ${tab === 'water' ? 'is-active' : ''}`}
                  onClick={() => setTab('water')}
                >
                  <span className="services-tab__num">02.</span>
                  {t('insulation.tab_water')}
                </button>
              </div>
            </aside>
          </Reveal>

          <div>
            <AnimatePresence mode="wait">
              {tab === 'thermal' ? (
                <motion.div
                  key="thermal"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
                    {t('insulation.intro_1')}
                  </p>
                  <p style={{ color: 'var(--color-navy)', fontSize: 14, fontWeight: 500, marginBottom: 24 }}>
                    {t('insulation.intro_2')}
                  </p>
                  <StaggerGroup className="services-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    {thermalItems.map(({ Icon, key }) => (
                      <StaggerItem key={key} className="service-card">
                        <div className="service-card__icon"><Icon /></div>
                        <h4 className="service-card__title">{t(key)}</h4>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </motion.div>
              ) : (
                <motion.div
                  key="water"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
                    {t('insulation.water_intro_1')}
                  </p>
                  <p style={{ color: 'var(--color-navy)', fontSize: 14, fontWeight: 500, marginBottom: 24 }}>
                    {t('insulation.water_intro_2')}
                  </p>
                  <StaggerGroup className="services-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    {waterItems.map(({ Icon, key }) => (
                      <StaggerItem key={key} className="service-card">
                        <div className="service-card__icon"><Icon /></div>
                        <h4 className="service-card__title">{t(key)}</h4>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MATERIALS */}
        <div className="materials">
          <Reveal>
            <div className="materials__left">
              <p className="eyebrow">{t('sub.materials_eyebrow')}</p>
              <p style={{ color: 'var(--color-navy)', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
                {t('sub.materials_eyebrow_2')}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="materials__right">
              <p>{t('insulation.materials_text')}</p>
              <div className="materials__grid">
                <div className="material-tile">
                  <img src="/images/material-tremco.png" alt="TREMCO" />
                </div>
                <div className="material-tile">
                  <img src="/images/material-polybit.png" alt="Polybit" />
                </div>
                <div className="material-tile">
                  <img src="/images/material-awazel.png" alt="AWAZEL" />
                </div>
                <div className="material-tile">
                  <img src="/images/material-fosroc.png" alt="FOSROC" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
