import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';
import { SubHero, SubOverview } from '../components/SubsidiaryParts.jsx';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx';
import {
  ArrowLeft, ArrowRight,
  HandshakeIcon, ContractIcon, UsersIcon, CoinsIcon, WrenchIcon, ChartIcon,
  KeyIcon, TrendingUpIcon, TargetIcon, BuildingIcon,
} from '../components/Icons.jsx';

export default function RealEstate() {
  const { t } = useLanguage();
  const [tab, setTab] = useState('property');

  const propertyServices = [
    { Icon: HandshakeIcon, t_key: 're.svc.leasing_t', d_key: 're.svc.leasing_d' },
    { Icon: ContractIcon, t_key: 're.svc.docs_t', d_key: 're.svc.docs_d' },
    { Icon: UsersIcon, t_key: 're.svc.vendor_t', d_key: 're.svc.vendor_d' },
    { Icon: CoinsIcon, t_key: 're.svc.rent_t', d_key: 're.svc.rent_d' },
    { Icon: WrenchIcon, t_key: 're.svc.maintenance_t', d_key: 're.svc.maintenance_d' },
    { Icon: ChartIcon, t_key: 're.svc.reporting_t', d_key: 're.svc.reporting_d' },
  ];

  const brokerageServices = [
    { Icon: '/icons/re-brokerage/Group.svg', t_key: 're.brk.sales_t', d_key: 're.brk.sales_d' },
    { Icon: '/icons/re-brokerage/Group-1.svg', t_key: 're.brk.investment_t', d_key: 're.brk.investment_d' },
    { Icon: '/icons/re-brokerage/Group-2.svg', t_key: 're.brk.marketing_t', d_key: 're.brk.marketing_d' },
    { Icon: '/icons/re-brokerage/Group-3.svg', t_key: 're.brk.management_t', d_key: 're.brk.management_d' },
    { Icon: '/icons/re-brokerage/Group-4.svg', t_key: 're.brk.valuation_t', d_key: 're.brk.valuation_d' },
  ];

  const tabContent = {
    property: propertyServices,
    brokerage: brokerageServices,
  };

  return (
    <div>
      <SubHero
        eyebrowKey="re.eyebrow"
        descKey="re.desc"
        logoSrc="/logos/utility-real-estate.svg"
        logoAlt="Utility Real Estate"
        images={['/images/realestate-1.png', '/images/realestate-2.png', '/images/realestate-3.png']}
      />

      <SubOverview
        titleKey="re.overview_title"
        textKey="re.overview_text"
        bannerImg="/images/realestate-banner.png"
        
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
                  onClick={() => setTab(tab === 'property' ? 'brokerage' : 'property')}
                >
                  <ArrowLeft size={12} />
                </button>
                <button
                  type="button"
                  aria-label="Next service group"
                  onClick={() => setTab(tab === 'property' ? 'brokerage' : 'property')}
                >
                  <ArrowRight size={12} />
                </button>
              </div>
              <div className="services-tabs">
                <button
                  className={`services-tab ${tab === 'property' ? 'is-active' : ''}`}
                  onClick={() => setTab('property')}
                >
                  <span className="services-tab__num">01.</span>
                  {t('re.tab_property')}
                </button>
                <button
                  className={`services-tab ${tab === 'brokerage' ? 'is-active' : ''}`}
                  onClick={() => setTab('brokerage')}
                >
                  <span className="services-tab__num">02.</span>
                  {t('re.tab_brokerage')}
                </button>
              </div>
            </aside>
          </Reveal>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
               <StaggerGroup className="services-grid">
                  {tabContent[tab].map(({ Icon, t_key, d_key }, i) => (
                    <StaggerItem key={t_key} className="service-card">
                      <div className="service-card__icon">
                        {typeof Icon === 'string' ? (
                          <img src={Icon} alt="" />
                        ) : (
                          <Icon />
                        )}
                      </div>
                      <p className="service-card__num">{String(i + 1).padStart(2, '0')}.</p>
                      <h4 className="service-card__title">{t(t_key)}</h4>
                      <p className="service-card__desc">{t(d_key)}</p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
