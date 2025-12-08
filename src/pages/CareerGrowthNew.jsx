import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider.jsx";
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../config/api.js';
import LazyImage from '../components/LazyImage.jsx';
import '../styles/cyventra-theme.css';

export default function CareerGrowthNew() {
    const [benefits, setBenefits] = useState([]);
    const [jobs, setJobs] = useState([]);
    const { t, i18n } = useTranslation();
    const { language } = useLanguage();
    const lang = language || i18n.language || "es";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const benefitsRes = await fetch(apiUrl(`/api/benefits?lang_code=${lang}`));
                const jobsRes = await fetch(apiUrl(`/api/jobs?lang_code=${lang}`));

                if (!benefitsRes.ok) throw new Error("Error al obtener benefits");
                if (!jobsRes.ok) throw new Error("Error al obtener jobs");

                const benData = await benefitsRes.json();
                const jobData = await jobsRes.json();

                setBenefits(benData);
                setJobs(jobData);
            } catch (error) {
                console.error("Error en CareerGrowth:", error);
            }
        };

        fetchData();
    }, [language, i18n.language]);

    const handleApply = (job) => {
        navigate(`/apply/${job.id}`);
    };

    return (
        <div className="cyv-page-wrapper">
            {/* Page Header */}
            <div className="cyv-page-header">
                <div className="container">
                    <div className="cyv-page-content">
                        <h1 className="cyv-page-title">
                            {t("career.title")}
                        </h1>
                        <p className="cyv-page-subtitle">
                            {t("career.description")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="cyv-page-content">
                    {/* Jobs Section */}
                    <section className="mb-5">
                        <h2 className="cyv-card-title mb-4" style={{ fontSize: '2rem' }}>
                            {t("jobs.title")}
                        </h2>

                        <div className="cyv-grid cyv-grid-3">
                            {Array.isArray(jobs) && jobs.map((job, index) => (
                                <div key={index} className="cyv-service-card">
                                    {job.job?.image && (
                                        <LazyImage
                                            src={job.job.image}
                                            alt={job.title}
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderRadius: 'var(--cyv-radius-md)',
                                                marginBottom: '1.5rem'
                                            }}
                                        />
                                    )}
                                    
                                    <h3 className="cyv-service-title" style={{ fontSize: '1.25rem' }}>
                                        {job.title}
                                    </h3>
                                    
                                    <div className="mb-3">
                                        <p style={{ color: 'var(--cyv-primary-light)', marginBottom: '0.5rem' }}>
                                            📍 {job.location}
                                        </p>
                                        <p className="cyv-service-description" style={{ fontSize: '0.875rem' }}>
                                            {job.experience}
                                        </p>
                                    </div>

                                    {job.job?.skills && job.job.skills.length > 0 && (
                                        <div className="mb-3">
                                            <div style={{ 
                                                display: 'flex', 
                                                flexWrap: 'wrap', 
                                                gap: '0.5rem',
                                                marginBottom: '1rem'
                                            }}>
                                                {job.job.skills.slice(0, 3).map((skill, idx) => (
                                                    <span key={idx} style={{
                                                        background: 'rgba(16, 185, 129, 0.1)',
                                                        color: 'var(--cyv-primary-light)',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: 'var(--cyv-radius-sm)',
                                                        fontSize: '0.75rem',
                                                        border: '1px solid rgba(16, 185, 129, 0.2)'
                                                    }}>
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-auto pt-3">
                                        <button
                                            className="cyv-btn cyv-btn-primary"
                                            style={{ width: '100%' }}
                                            onClick={() => handleApply(job)}
                                        >
                                            {t("jobs.applyPosition")}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="mt-5">
                        <div className="cyv-card" style={{ padding: '3rem' }}>
                            <div className="row align-items-center">
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <LazyImage
                                        src="/images/team-member-4.jpg"
                                        alt="Team"
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                            objectFit: 'cover',
                                            borderRadius: 'var(--cyv-radius-lg)'
                                        }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="cyv-card-title mb-3">
                                        {t("career.sloganTitle")}
                                    </h3>
                                    <p className="cyv-card-text" style={{ fontSize: '1.125rem' }}>
                                        {t("career.sloganDescription")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <h3 className="cyv-card-title mb-4">
                                {t("benefit.title")}
                            </h3>
                            <p className="cyv-card-text mb-4">
                                {t("benefit.description")}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {Array.isArray(benefits) && benefits.map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className="cyv-service-card"
                                        style={{
                                            padding: '1.5rem',
                                            minWidth: '200px',
                                            flex: '1 1 auto',
                                            maxWidth: '300px'
                                        }}
                                    >
                                        <div className="cyv-stat-icon" style={{ width: '40px', height: '40px', marginBottom: '1rem' }}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <h4 className="cyv-service-title" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                                            {benefit.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

