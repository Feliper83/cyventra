import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider.jsx";
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../config/api.js';
import SEOHead from '../components/SEOHead.jsx';
import StructuredData from '../components/StructuredData.jsx';
import '../styles/cyventra-theme.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    const { language } = useLanguage();
    const { t, i18n } = useTranslation();
    const lang = language || i18n.language || "es";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl(`/api/services?lang_code=${lang}`));
                if (!res.ok) throw new Error("Error al obtener productos");
                const data = await res.json();
                setProducts(Array.isArray(data) ? data.filter(s => s.service?.category === 'product') : []);
            } catch (e) {
                console.error(e);
                setProducts([]);
            }
        };
        fetchData();
    }, [language, i18n.language]);

    const baseUrl = 'https://cyventrasoft.com';
    const pageTitle = lang === 'en'
        ? "Our Products - Fixed-Price AI Automation - Cyventra"
        : "Nuestros Productos - Automatización con IA a Precio Fijo - Cyventra";

    const pageDescription = lang === 'en'
        ? "Fixed-price, self-serve offers from Cyventra, Inc.: the AI Automation Sprint and an optional Diagnostic. No quotes, no long contracts — start this week."
        : "Ofertas de precio fijo y autoservicio de Cyventra, Inc.: el Sprint de Automatización con IA y un Diagnóstico opcional. Sin cotizaciones, sin contratos largos — empieza esta semana.";

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": lang === 'en' ? "Fixed-Price AI Automation" : "Automatización con IA a Precio Fijo",
        "provider": { "@type": "Organization", "name": "Cyventra, Inc." },
        "areaServed": "US"
    };

    return (
        <div className="cyv-page-wrapper">
            <SEOHead
                title={pageTitle}
                description={pageDescription}
                ogImage={`${baseUrl}/images/og-solutions.jpg`}
            />
            <StructuredData data={productSchema} />
            <div className="cyv-page-header">
                <div className="container">
                    <div className="cyv-page-content">
                        <h1 className="cyv-page-title">{t('products_title')}</h1>
                        <p className="cyv-page-subtitle">{t('products_subtitle')}</p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="cyv-page-content">
                    <div className="cyv-grid cyv-grid-2">
                        {products.map((product) => (
                            <div key={product.id} className="cyv-card">
                                <span className="cyv-service-badge">{t('sprint.badge_price_short')}</span>
                                <h3 className="cyv-card-title mt-3">{product.name}</h3>
                                <p className="cyv-card-text">
                                    {product.summary}
                                </p>
                                <div className="mt-4">
                                    <button
                                        className="cyv-btn cyv-btn-primary"
                                        style={{ width: '100%' }}
                                        onClick={() => navigate('/start-sprint')}
                                    >
                                        {t('sprint.sprint_cta')}
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Diagnostic: same optional entry point already offered on /start-sprint */}
                        <div className="cyv-card">
                            <h3 className="cyv-card-title">{t('sprint.diagnostic_card_title')}</h3>
                            <p className="cyv-card-text" style={{ fontWeight: 600 }}>
                                {t('sprint.diagnostic_card_price')}
                            </p>
                            <p className="cyv-card-text">{t('sprint.diagnostic_description')}</p>
                            <div className="mt-4">
                                <button
                                    className="cyv-btn cyv-btn-primary"
                                    style={{ width: '100%' }}
                                    onClick={() => navigate('/start-sprint')}
                                >
                                    {t('sprint.diagnostic_cta')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
