import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider.jsx";
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../config/api.js';
import '../styles/cyventra-theme.css';

export default function SolutionsNew() {
    const [services, setServices] = useState([]);
    const [section, setSection] = useState({});
    const { language } = useLanguage();
    const { t, i18n } = useTranslation();
    const lang = language || i18n.language || "es";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const srvRes = await fetch(apiUrl(`/api/services?lang_code=${lang}`));
                const secRes = await fetch(apiUrl(`/api/sections?lang_code=${lang}&slug=services`));

                if (!srvRes.ok) throw new Error("Error al obtener servicios");
                if (!secRes.ok) throw new Error("Error al obtener sections");

                const srvData = await srvRes.json();
                const secData = await secRes.json();
                setServices(srvData);
                setSection(secData[0] || { title: "Soluciones" });
            } catch (e) {
                console.error(e);
                setServices([]);
            }
        };

        fetchData();
    }, [language, i18n.language]);

    const handleClick = (title, description, image) => {
        navigate("/solution", {
            state: {
                title: title,
                description: description,
                image: image
            },
        });
    };

    return (
        <div className="cyv-page-wrapper">
            {/* Page Header - Improved */}
            <div className="cyv-page-header">
                <div className="container">
                    <div className="cyv-page-content">
                        <h1 className="cyv-page-title">
                            {section.title || t('solutions_title')}
                        </h1>
                        {section.description && (
                            <p className="cyv-page-subtitle" style={{
                                maxWidth: '900px',
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                marginTop: '1.5rem'
                            }}>
                                {section.description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Services Grid - Improved Layout */}
            <div className="container py-5">
                <div className="cyv-page-content">
                    {services.length > 0 ? (
                        <div className="cyv-grid cyv-grid-3">
                            {services.map((service) => (
                            <div 
                                key={service.id} 
                                className="cyv-service-card" 
                                onClick={() => handleClick(service.name, service.details, service.service?.icon_path)}
                            >
                                {service.service?.icon_path && (
                                    <div className="cyv-service-image-wrapper">
                                        <Image
                                            src={service.service.icon_path}
                                            alt={service.name}
                                            className="cyv-service-image"
                                        />
                                        <div className="cyv-service-image-overlay">
                                            <span className="cyv-service-badge">
                                                {service.slug}
                                            </span>
                                        </div>
                                    </div>
                                )}
                                
                                <h3 className="cyv-service-title">{service.name}</h3>
                                
                                <p className="cyv-service-description">
                                    {service.summary && service.summary.length > 120
                                        ? service.summary.substring(0, 120) + "..."
                                        : service.summary}
                                </p>

                                <div className="mt-auto">
                                    <button className="cyv-btn cyv-btn-primary" style={{ width: '100%' }}>
                                        {t('solutions_view')}
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{ marginLeft: '0.5rem' }}>
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            ))}
                        </div>
                    ) : (
                        <div className="cyv-card text-center" style={{ padding: '4rem 2rem' }}>
                            <p className="cyv-card-text">Loading services...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

