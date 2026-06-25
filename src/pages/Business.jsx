import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';
import { SubHero, SubOverview } from '../components/SubsidiaryParts.jsx';
import AccentText from '../components/AccentText.jsx';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx';
import {
  BuildingIcon, ChartIcon, UsersIcon, SettingsIcon, TargetIcon,
  CoinsIcon, TrendingUpIcon, ShieldIcon, WrenchIcon,
} from '../components/Icons.jsx';

export default function Business() {
  const hookData = useLanguage();
  const { t } = hookData;
  const [openId, setOpenId] = useState('oya');

  // --- ARABIC LANGUAGE DETECTOR ---
  const isArabic = /[\u0600-\u06FF]/.test(t('business.exp.title'));
  const activeLang = isArabic ? 'ar' : 'en';

  const services = [
    { Icon: BuildingIcon, t: 'business.svc.01_t', d: 'business.svc.01_d' },
    { Icon: ChartIcon, t: 'business.svc.02_t', d: 'business.svc.02_d' },
    { Icon: UsersIcon, t: 'business.svc.03_t', d: 'business.svc.03_d' },
    { Icon: SettingsIcon, t: 'business.svc.04_t', d: 'business.svc.04_d' },
    { Icon: TargetIcon, t: 'business.svc.05_t', d: 'business.svc.05_d' },
    { Icon: CoinsIcon, t: 'business.svc.06_t', d: 'business.svc.06_d' },
    { Icon: TrendingUpIcon, t: 'business.svc.07_t', d: 'business.svc.07_d' },
    { Icon: ShieldIcon, t: 'business.svc.08_t', d: 'business.svc.08_d' },
    { Icon: WrenchIcon, t: 'business.svc.09_t', d: 'business.svc.09_d' },
  ];

  // Exact data entry matching your requirements
  const expItems = [
    { 
      id: 'oya', 
      name: { en: 'Oya Restaurant', ar: 'مطعم أويا' },
      growth: '400%', 
      sectorRank: { en: 'Top 10', ar: 'أفضل 10' },
      desc: {
        en: 'Operations Management, Human Resources, Administrative Affairs, and General Management',
        ar: 'إدارة العمليات، الموارد البشرية، الشؤون الإدارية، والإدارة العامة'
      }
    },
    { 
      id: 'othaim', 
      name: { en: 'Othaim Holding Group', ar: 'مجموعة العثيم القابضة' }, 
      desc: {
        en: 'Led organizational restructuring and departmental management through oversight of investment,administration, and human resources.',
        ar: 'قيادة عمليات إعادة الهيكلة التنظيمية وإدارة الأقسام من خلال الإشراف على الاستثمار، والإدارة، والموارد البشرية، بهدف تعزيز الكفاءة التشغيلية ورفع مستوى الأداء المؤسسي.'
      }
    },
    { 
      id: 'sdr', 
      name: { en: 'SDR Group', ar: 'مجموعةSDR' }, 
      desc: {
        en: 'Provision of Integrated Operations and Management Services',
        ar: 'تقديم خدمات التشغيل واإلدارة المتكاملة، بما يضمن دعم العمليات التشغيلية وتحقيق التكامل بين مختلف الوظائف الحيوية داخل المؤسسة.'
      }
    },
    { 
      id: 'smartmed', 
      name: { en: 'Smart Med', ar: 'سمارت ميد' }, 
      desc: {
        en: 'Operations Management, Human Resources, Administrative Affairs, and General Management, with Comprehensive Consultancy Services',
      ar:'إدارة العمليات، والموارد البشرية، والشؤون الإدارية، والإدارة العامة، بالإضافة إلى تقديم خدمات استشارية شاملة لدعم التطوير المؤسسي وتحسين كفاءة الأداء.',
    }
    },
    { 
      id: 'smartlab', 
      name: { en: 'Smart Lab', ar: 'سمارت الب' }, 
      desc: {
        en: 'Operations Management, Human Resources, Administrative Affairs, and General Management, with Comprehensive Consultancy Services',
        ar: 'إدارة العمليات، والموارد البشرية، والشؤون الإدارية، والإدارة العامة، مع تقديم خدمات استشارية متكاملة تهدف إلى تحسين الأداء التشغيلي وتطوير بيئة العمل.'
      }
    },
    { 
      id: 'habib', 
      name: { en: 'AL Habib Group', ar: 'مجموعة الحبيب' }, 
      desc: {
        en: ' Provision of Integrated Human Resources Management Services',
        ar: 'تقديم خدمات متكاملة في إدارة الموارد البشرية، بما يشمل تخطيط القوى العاملة، وتشغيل أنظمة الموارد البشرية، وتعزيز الكفاءة التنظيمية.'
      }
    },
  ];

  return (
    <div>
      <SubHero
        eyebrowKey="business.eyebrow"
        descKey="business.desc"
        logoSrc="/logos/utility-business.svg"
        logoAlt="Utility Business"
        images={['/images/business-1.png', '/images/business-2.png', '/images/business-3.png']}
      />

      <SubOverview
        titleKey="business.overview_title"
        textKey="business.overview_text"
        bannerImg="/images/business-4.png"
      />

      {/* SERVICES */}
      <section className="services-section container">
        <div className="services-layout">
          <div>
            <p className="eyebrow">{t('sub.our_services')}</p>
          </div>
          <div>
            <StaggerGroup className="services-grid">
              {/* Row 1: 01, 02, 03 */}
              {services.slice(0, 3).map(({ Icon, t: tk, d }, i) => (
                <StaggerItem key={i} className="service-card">
                  <div className="service-card__icon"><Icon /></div>
                  <p className="service-card__num">{String(i + 1).padStart(2, '0')}.</p>
                  <h4 className="service-card__title">{t(tk)}</h4>
                  <p className="service-card__desc">{t(d)}</p>
                </StaggerItem>
              ))}
              {/* Row 2: 04, 05 */}
              {services.slice(3, 5).map(({ Icon, t: tk, d }, i) => (
                <StaggerItem key={`r2-${i}`} className="service-card">
                  <div className="service-card__icon"><Icon /></div>
                  <p className="service-card__num">{String(i + 4).padStart(2, '0')}.</p>
                  <h4 className="service-card__title">{t(tk)}</h4>
                  <p className="service-card__desc">{t(d)}</p>
                </StaggerItem>
              ))}
              {/* Image card 1 */}
              <StaggerItem
                className="service-image-card"
                style={{ backgroundImage: "url('/images/business-responsive.png')" }}
              />
              {/* Row 3 */}
              <StaggerItem
                className="service-image-card"
                style={{ backgroundImage: "url('/images/business-5.png')" }}
              />
              <StaggerItem className="service-card">
                <div className="service-card__icon">{(() => { const Icon = services[5].Icon; return <Icon />; })()}</div>
                <p className="service-card__num">06.</p>
                <h4 className="service-card__title">{t(services[5].t)}</h4>
                <p className="service-card__desc">{t(services[5].d)}</p>
              </StaggerItem>
              <StaggerItem className="service-card">
                <div className="service-card__icon">{(() => { const Icon = services[6].Icon; return <Icon />; })()}</div>
                <p className="service-card__num">07.</p>
                <h4 className="service-card__title">{t(services[6].t)}</h4>
                <p className="service-card__desc">{t(services[6].d)}</p>
              </StaggerItem>
              {/* Row 4 */}
              <StaggerItem className="service-card">
                <div className="service-card__icon">{(() => { const Icon = services[7].Icon; return <Icon />; })()}</div>
                <p className="service-card__num">08.</p>
                <h4 className="service-card__title">{t(services[7].t)}</h4>
                <p className="service-card__desc">{t(services[7].d)}</p>
              </StaggerItem>
              <StaggerItem className="service-card">
                <div className="service-card__icon">{(() => { const Icon = services[8].Icon; return <Icon />; })()}</div>
                <p className="service-card__num">09.</p>
                <h4 className="service-card__title">{t(services[8].t)}</h4>
                <p className="service-card__desc">{t(services[8].d)}</p>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <Reveal>
        <section className="experience on-dark">
          <div className="experience__grid">
            <div className="experience__left">
              <p className="eyebrow">{t('business.exp.eyebrow')}</p>
              <AccentText as="h2" className="experience__title" text={t('business.exp.title')} />
              <p className="experience__desc">{t('business.exp.desc')}</p>
              <div className="exp-logo">
                <img src="/logos/utility-business-white.svg" alt="Utility Business" />
              </div>
            </div>

            <div className="experience__list" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
              {expItems.map((item, i) => {
                const isOpen = openId === item.id;
                const hasMetrics = !!item.growth;

                return (
                  <div key={item.id} className="exp-item">
                    {/* Title Header Row Button Container */}
                    <button
                      className="exp-item__head"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        textAlign: isArabic ? 'right' : 'left'
                      }}
                    >
                      {/* Enforced flex row layout container preventing line break issues */}
                      <div 
                        className="exp-item__title" 
                        style={{ 
                          display: 'flex !important',
                          display: 'flex',
                          flexDirection: 'row', 
                          alignItems: 'center',
                          gap: '0.75rem',
                          textAlign: 'inherit',
                          justifyContent: 'flex-start'
                        }}
                      >
                        <span 
                          className="exp-item__num" 
                          style={{ 
                            margin: 0, 
                            display: 'inline-block',
                            float: 'none',
                            textAlign: 'inherit'
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}.
                        </span>
                        <span style={{ display: 'inline-block', float: 'none' }}>
                          {item.name[activeLang] || item.name.en}
                        </span>
                      </div>
                      <span className="exp-item__toggle">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    
                    {/* Expandable Info Dropdown Panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="exp-item__detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="exp-item__detail-inner" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                            {/* Row 1 Inside Panel: Metrics info display block */}
                            {hasMetrics && (
                              <div className="exp-item__metrics-row" style={{ display: 'flex', gap: '2rem', marginBottom: '1.25rem' }}>
                                <div className="exp-item__growth">
                                  <strong style={{ color: '#ff5722', [isArabic ? 'marginLeft' : 'marginRight']: '0.25rem' }}>{item.growth}</strong>
                                  <small style={{ color: '#a0aec0' }}>{t('business.exp.growth') || 'Growth'}</small>
                                </div>
                                <div className="exp-item__sector">
                                  <strong style={{ color: '#ffffff', [isArabic ? 'marginLeft' : 'marginRight']: '0.25rem' }}>{item.sectorRank[activeLang] || item.sectorRank.en}</strong>
                                  <small style={{ color: '#a0aec0' }}>{t('business.exp.top_sector') || 'in its Sector'}</small>
                                </div>
                              </div>
                            )}

                            {/* Row 2 Inside Panel: Dynamic context description row block */}
                            <p className="exp-item__description-text" style={{ margin: 0, color: '#e2e8f0', lineHeight: '1.6' }}>
                              {item.desc[activeLang] || item.desc.en}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}