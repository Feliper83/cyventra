import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import SEOHead from '../components/SEOHead.jsx';
import StructuredData from '../components/StructuredData.jsx';
import '../styles/cyventra-theme.css';

export default function Solution() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();

    if (!state) {
        return (
            <div className="cyv-page-wrapper">
                <div className="container">
                    <div className="cyv-page-content">
                        <div className="cyv-card text-center" style={{ padding: '4rem 2rem' }}>
                            <p className="cyv-card-text">{t("solution.not_found")}</p>
                            <button className="cyv-btn cyv-btn-secondary mt-3" onClick={() => navigate("/")}>
                                {t("solution.back")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const { title, description, image } = state;
    const { i18n } = useTranslation();
    const lang = i18n.language || 'en';
    const baseUrl = 'https://cyventrasoft.com';

    // Generate SEO content based on service title
    const getServiceSEO = (serviceTitle) => {
        const titleLower = serviceTitle?.toLowerCase() || '';
        
        if (titleLower.includes('augmentation') || titleLower.includes('aumento')) {
            return {
                title: lang === 'en' 
                    ? "Software Team Augmentation - Cyventra"
                    : "Aumento de Equipos de Software - Cyventra",
                description: lang === 'en'
                    ? "Nearshore team augmentation: Senior engineers at 60% lower cost. Same timezone, bilingual, 48-hour integration. Scale your team without HR overhead."
                    : "Aumento de equipos nearshore: Ingenieros senior con 60% menos costo. Misma zona horaria, bilingües, integración en 48 horas. Escala tu equipo sin sobrecarga de RRHH.",
                keywords: lang === 'en'
                    ? "team augmentation, nearshore development, software engineers, remote developers, staff augmentation, dedicated team"
                    : "aumento de equipos, desarrollo nearshore, ingenieros de software, desarrolladores remotos, staff augmentation, equipo dedicado",
                schema: {
                    "@type": "Service",
                    "name": lang === 'en' ? "Software Team Augmentation" : "Aumento de Equipos de Software",
                    "description": lang === 'en' ? "Nearshore software engineers for US companies" : "Ingenieros de software nearshore para empresas estadounidenses",
                    "provider": { "@type": "Organization", "name": "Cyventra" },
                    "areaServed": "US",
                    "serviceType": "Staff Augmentation"
                }
            };
        }
        
        if (titleLower.includes('artificial intelligence') || titleLower.includes('inteligencia artificial') || titleLower.includes('ai')) {
            return {
                title: lang === 'en'
                    ? "AI Solutions - Cyventra"
                    : "Soluciones de IA - Cyventra",
                description: lang === 'en'
                    ? "Practical AI solutions for business growth. Machine learning, LLM integration, computer vision. ROI-focused AI deployed in 8-12 weeks. 40% cost savings."
                    : "Soluciones de IA prácticas para el crecimiento empresarial. Machine learning, integración LLM, visión por computadora. IA enfocada en ROI desplegada en 8-12 semanas. 40% de ahorro en costos.",
                keywords: lang === 'en'
                    ? "AI solutions, machine learning, artificial intelligence, LLM integration, AI consulting, predictive analytics"
                    : "soluciones de IA, machine learning, inteligencia artificial, integración LLM, consultoría de IA, análisis predictivo",
                schema: {
                    "@type": "Service",
                    "name": lang === 'en' ? "Artificial Intelligence Solutions" : "Soluciones de Inteligencia Artificial",
                    "description": lang === 'en' ? "Practical AI for business growth and automation" : "IA práctica para el crecimiento empresarial y automatización",
                    "provider": { "@type": "Organization", "name": "Cyventra" },
                    "serviceType": "AI Consulting"
                }
            };
        }
        
        if (titleLower.includes('iam') || titleLower.includes('identity') || titleLower.includes('access')) {
            return {
                title: lang === 'en'
                    ? "Identity & Access Management (IAM) - Cyventra"
                    : "Gestión de Identidad y Acceso (IAM) - Cyventra",
                description: lang === 'en'
                    ? "Identity & Access Management services. Zero-trust architecture, SSO, compliance-ready (HIPAA, SOC 2, GDPR). Deployed in 4-6 weeks without disrupting operations."
                    : "Servicios de Gestión de Identidad y Acceso. Arquitectura zero-trust, SSO, listo para cumplimiento (HIPAA, SOC 2, GDPR). Desplegado en 4-6 semanas sin interrumpir operaciones.",
                keywords: lang === 'en'
                    ? "IAM services, identity access management, SSO, zero trust, cybersecurity, compliance, HIPAA, SOC 2"
                    : "servicios IAM, gestión de identidad y acceso, SSO, zero trust, ciberseguridad, cumplimiento, HIPAA, SOC 2",
                schema: {
                    "@type": "Service",
                    "name": lang === 'en' ? "Identity & Access Management" : "Gestión de Identidad y Acceso",
                    "description": lang === 'en' ? "IAM implementation and security services" : "Implementación de IAM y servicios de seguridad",
                    "provider": { "@type": "Organization", "name": "Cyventra" },
                    "serviceType": "Cybersecurity"
                }
            };
        }
        
        // Default: Custom Software Development
        return {
            title: lang === 'en'
                ? "Custom Software Development - Cyventra"
                : "Desarrollo de Software Personalizado - Cyventra",
            description: lang === 'en'
                ? "Custom software development: Cloud-native, scalable applications. React, Node.js, Serverless architecture. MVP in 4-8 weeks. Modern stack, maintainable code."
                : "Desarrollo de software personalizado: Aplicaciones escalables y nativas de la nube. React, Node.js, arquitectura Serverless. MVP en 4-8 semanas. Stack moderno, código mantenible.",
            keywords: lang === 'en'
                ? "custom software development, web application development, cloud software, microservices, serverless development"
                : "desarrollo de software personalizado, desarrollo de aplicaciones web, software en la nube, microservicios, desarrollo serverless",
            schema: {
                "@type": "Service",
                "name": lang === 'en' ? "Custom Software Development" : "Desarrollo de Software Personalizado",
                "description": lang === 'en' ? "Cloud-native, scalable software solutions" : "Soluciones de software escalables y nativas de la nube",
                "provider": { "@type": "Organization", "name": "Cyventra" },
                "serviceType": "Software Development"
            }
        };
    };

    const seoData = getServiceSEO(title);

    return (
        <div className="cyv-page-wrapper">
            <SEOHead 
                title={seoData.title}
                description={seoData.description}
                keywords={seoData.keywords}
                ogImage={image ? `${baseUrl}${image}` : `${baseUrl}/images/og-service.jpg`}
            />
            <StructuredData data={seoData.schema} />
            {/* Page Header */}
            <div className="cyv-page-header">
                <div className="container">
                    <div className="cyv-page-content">
                        <h1 className="cyv-page-title">{title}</h1>
                        <p className="cyv-page-subtitle">{t("solution.subtitle")}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container">
                <div className="cyv-page-content">
                    <div className="cyv-card">
                        {image && (
                            <div style={{
                                width: '100%',
                                height: '400px',
                                overflow: 'hidden',
                                borderRadius: 'var(--cyv-radius-md)',
                                marginBottom: '2rem'
                            }}>
                                <img
                                    alt={title}
                                    src={image}
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                />
                            </div>
                        )}

                        {/* Renderiza contenido con markdown */}
                        <div className="blog-content">
                            <div className="cyv-card-text" style={{ textAlign: "justify" }}>
                                <ReactMarkdown>{description}</ReactMarkdown>
                            </div>
                        </div>

                        {/* Tags */}
                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            marginTop: '2rem',
                            flexWrap: 'wrap'
                        }}>
                            <span style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: 'var(--cyv-accent-light)',
                                padding: '0.375rem 0.875rem',
                                borderRadius: 'var(--cyv-radius-sm)',
                                fontSize: '0.875rem',
                                border: '1px solid rgba(59, 130, 246, 0.2)'
                            }}>
                                {t("solution.tag_blog")}
                            </span>
                            <span style={{
                                background: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--cyv-primary-light)',
                                padding: '0.375rem 0.875rem',
                                borderRadius: 'var(--cyv-radius-sm)',
                                fontSize: '0.875rem',
                                border: '1px solid rgba(16, 185, 129, 0.2)'
                            }}>
                                {t("solution.tag_technology")}
                            </span>
                        </div>

                        {/* Footer */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <div style={{ color: 'rgba(226, 232, 240, 0.7)' }}>
                                <span>✍️ Cyventra</span>
                                <span> • 09/09/2025</span>
                            </div>
                            <button
                                className="cyv-btn cyv-btn-primary"
                                onClick={() => navigate("/solutions")}
                            >
                                {t("solution.back_to_solutions")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
