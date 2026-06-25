import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage.jsx';
import { ArrowUpRight } from './Icons.jsx';

export default function Header() {
  const { t, toggleLang, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Sticky header bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is in view (only on home)
  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }
    const sectionIds = ['companies', 'partners', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section closest to the top that is visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Smooth scroll to a section. If we're on a subsidiary page, navigate to home first.
  const goToSection = useCallback((id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);

    if (!isHome) {
      // We're on /business, /fm, etc. — navigate home with the hash
      navigate('/#' + id);
      // After navigation, scroll. Need a slight delay for the Home page to render.
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 200);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    // Update URL hash without triggering full reload
    history.pushState(null, '', '#' + id);
  }, [isHome, navigate]);

  // On initial load with a #hash, scroll to that section
  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isHome, location.hash, location.pathname]);

  const navLink = (id, label) => (
    <li key={id}>
      <a
        href={`/#${id}`}
        onClick={goToSection(id)}
        className={`nav__link${activeSection === id ? ' is-active' : ''}`}
      >
        {label}
      </a>
    </li>
  );

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav" aria-label="Main">
        <Link to="/" className="nav__logo" aria-label="Utility Holding home">
          <img src="/logos/utility-holding.svg" alt="Utility Holding" />
        </Link>

        <ul className={`nav__links ${mobileOpen ? 'is-open' : ''}`}>
          <li>
            <Link
              to="/about"
              className={`nav__link${location.pathname === '/about' ? ' is-active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.about')}
            </Link>
          </li>
          {navLink('companies', t('nav.companies'))}
          {navLink('partners', t('nav.partners'))}
          {/* Lang toggle — only inside mobile open menu */}
          <li className="nav__lang-mobile-wrap">
            <button onClick={toggleLang} className="nav__lang-mobile" aria-label="Toggle language">
              {t('nav.lang')}
            </button>
          </li>
        </ul>

        <div className="nav__right">
          <button onClick={toggleLang} className="nav__lang" aria-label={`Switch to ${lang === 'en' ? 'Arabic' : 'English'}`}>
            {t('nav.lang')}
          </button>
          <a href="/#contact" onClick={goToSection('contact')} className="btn-cta">
            {t('nav.contact')}
            <span className="btn-cta__icon"><ArrowUpRight /></span>
          </a>
          <button
            type="button"
            className={`nav__toggle ${mobileOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
