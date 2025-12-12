import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './LanguageProvider.jsx';
import { apiUrl } from '../config/api.js';
import SEOHead from '../components/SEOHead.jsx';
import StructuredData from '../components/StructuredData.jsx';
import '../styles/cyventra-theme.css';

// Import Google Fonts
const FontLink = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return null;
};

export default function Home() {
  const { language } = useLanguage();
  const { t, i18n } = useTranslation();
  const lang = language || i18n.language || 'es';

  const [company, setCompany] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comRes = await fetch(apiUrl(`/api/company?lang_code=${lang}`));
        if (!comRes.ok) throw new Error('Error al obtener company');
        const companyData = await comRes.json();
        setCompany(companyData);
      } catch (e) {
        console.error(e);
        setCompany({});
      }
    };

    fetchData();
  }, [lang]);

  useEffect(() => {
    if (company && company.name) {
      document.title = company.name;
    }
  }, [company]);

  const baseUrl = 'https://cyventrasoft.com';
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cyventra",
    "url": baseUrl,
    "logo": `${baseUrl}/images/cyventra-logo.svg`,
    "description": lang === 'en' 
      ? "Nearshore software development company offering custom software, AI solutions, IAM, and team augmentation. 60% cost savings, same timezone, enterprise quality."
      : "Empresa de desarrollo de software nearshore que ofrece software personalizado, soluciones de IA, IAM y aumento de equipos. 60% de ahorro en costos, misma zona horaria, calidad empresarial.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "contact@cyventrasoft.com",
      "availableLanguage": ["English", "Spanish"]
    },
    "areaServed": ["US", "LATAM"],
    "service": [
      {
        "@type": "Service",
        "name": lang === 'en' ? "Custom Software Development" : "Desarrollo de Software Personalizado",
        "description": lang === 'en' ? "Cloud-native, scalable software solutions" : "Soluciones de software escalables y nativas de la nube"
      },
      {
        "@type": "Service",
        "name": lang === 'en' ? "Team Augmentation" : "Aumento de Equipos",
        "description": lang === 'en' ? "Nearshore software engineers" : "Ingenieros de software nearshore"
      },
      {
        "@type": "Service",
        "name": lang === 'en' ? "AI Solutions" : "Soluciones de IA",
        "description": lang === 'en' ? "Practical AI for business growth" : "IA práctica para el crecimiento empresarial"
      },
      {
        "@type": "Service",
        "name": lang === 'en' ? "IAM Services" : "Servicios IAM",
        "description": lang === 'en' ? "Identity and Access Management" : "Gestión de Identidad y Acceso"
      }
    ]
  };

  const pageTitle = lang === 'en' 
    ? "Cyventra - Nearshore Software Development | USA & LATAM"
    : "Cyventra - Desarrollo de Software Nearshore | USA & LATAM";
  
  const pageDescription = lang === 'en'
    ? "Enterprise-grade software solutions at 60% lower cost. Same timezone collaboration, bilingual teams, fast delivery. Custom software, AI, IAM, and team augmentation."
    : "Soluciones de software de nivel empresarial con 60% menos costo. Colaboración en la misma zona horaria, equipos bilingües, entrega rápida. Software personalizado, IA, IAM y aumento de equipos.";
  
  const keywords = lang === 'en'
    ? "nearshore software development, custom software development USA, software augmentation, AI solutions, IAM services, LATAM software development, cost-effective software development"
    : "desarrollo de software nearshore, desarrollo de software personalizado USA, aumento de equipos, soluciones de IA, servicios IAM, desarrollo de software LATAM";

  return (
    <section className="cyv-hero">
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        ogImage={`${baseUrl}/images/og-home.jpg`}
      />
      <StructuredData data={organizationSchema} />
      <FontLink />
      
      {/* Floating Particles Background */}
      <div className="cyv-particles">
        <div className="cyv-particle"></div>
        <div className="cyv-particle"></div>
        <div className="cyv-particle"></div>
        <div className="cyv-particle"></div>
      </div>

      <div className="cyv-hero-content container">
        <div className="row">
          <div className="col-lg-10 col-xl-8">
            {/* Badge */}
            <div className="cyv-hero-badge">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t('hero.badge')}
            </div>

            {/* Main Title */}
            <h1 className="cyv-hero-title">
              {t('hero.title_part1')}<br />
              <span className="highlight">
                {t('hero.title_highlight')}
              </span>
            </h1>

            {/* Description */}
            <p className="cyv-hero-description">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="cyv-hero-cta">
              <Link to="/contact" className="cyv-btn cyv-btn-primary">
                {t('hero.cta_primary')}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="/solutions" className="cyv-btn cyv-btn-outline">
                {t('hero.cta_secondary')}
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="cyv-stats">
              <div className="cyv-stat-card">
                <div className="cyv-stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="cyv-stat-number">50+</div>
                <div className="cyv-stat-label">{t('stats.projects')}</div>
              </div>

              <div className="cyv-stat-card">
                <div className="cyv-stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="cyv-stat-number">30+</div>
                <div className="cyv-stat-label">{t('stats.clients')}</div>
              </div>

              <div className="cyv-stat-card">
                <div className="cyv-stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="cyv-stat-number">99%</div>
                <div className="cyv-stat-label">{t('stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
