import { useState } from "react";
import { useTranslation } from "react-i18next";
import { apiUrl } from '../config/api.js';
import { SPRINT_BOOKING_URL, DIAGNOSTIC_PAYMENT_URL } from '../config/entryLinks.js';
import SEOHead from '../components/SEOHead.jsx';
import StructuredData from '../components/StructuredData.jsx';
import '../styles/cyventra-theme.css';

function EntryCTA({ url, intent, label, onSelect }) {
    if (url) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="cyv-btn cyv-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {label}
            </a>
        );
    }
    return (
        <button type="button" className="cyv-btn cyv-btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => onSelect(intent)}>
            {label}
        </button>
    );
}

export default function StartSprint() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';
    const baseUrl = 'https://cyventrasoft.com';

    const [step, setStep] = useState('select'); // 'select' | 'form'
    const [selectedIntent, setSelectedIntent] = useState('sprint_booking');
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSelect = (intent) => {
        setSelectedIntent(intent);
        setStep('form');
    };

    const handleBack = () => {
        setStep('select');
        setError("");
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        try {
            const res = await fetch(apiUrl("/api/contacts"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, intent: selectedIntent }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to send message");
            }

            await res.json();
            setForm({ name: "", email: "", phone: "", message: "" });
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error("Start Sprint form error:", err);
            setError(t("sprint.form_error"));
        } finally {
            setSubmitting(false);
        }
    };

    const pageTitle = lang === 'en'
        ? "Start Your AI Automation Sprint - Cyventra"
        : "Inicia tu Sprint de Automatización con IA - Cyventra";

    const pageDescription = lang === 'en'
        ? "Fixed-price AI automation sprint ($1,500-$2,500), delivered in 1-2 weeks. Optional diagnostic ($297-$497) to identify your best automation opportunity."
        : "Sprint de automatización con IA a precio fijo ($1,500-$2,500), entregado en 1-2 semanas. Diagnóstico opcional ($297-$497) para identificar tu mejor oportunidad de automatización.";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": lang === 'en' ? "AI Automation Sprint" : "Sprint de Automatización con IA",
        "provider": { "@type": "Organization", "name": "Cyventra, Inc." },
        "areaServed": "US",
        "offers": [
            {
                "@type": "Offer",
                "name": lang === 'en' ? "AI Automation Sprint" : "Sprint de Automatización con IA",
                "priceSpecification": { "@type": "PriceSpecification", "minPrice": 1500, "maxPrice": 2500, "priceCurrency": "USD" }
            },
            {
                "@type": "Offer",
                "name": lang === 'en' ? "Diagnostic" : "Diagnóstico",
                "priceSpecification": { "@type": "PriceSpecification", "minPrice": 297, "maxPrice": 497, "priceCurrency": "USD" }
            }
        ]
    };

    return (
        <div className="cyv-page-wrapper">
            <SEOHead
                title={pageTitle}
                description={pageDescription}
                ogImage={`${baseUrl}/images/solutions/artificial-intelligence.jpg`}
            />
            <StructuredData data={structuredData} />

            <div className="cyv-page-header">
                <div className="container">
                    <div className="cyv-page-content">
                        <h1 className="cyv-page-title">{t("sprint.page_title")}</h1>
                        <p className="cyv-page-subtitle">{t("sprint.page_subtitle")}</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="cyv-page-content">
                    {step === 'select' && (
                        <div className="cyv-grid cyv-grid-2">
                            <div className="cyv-card">
                                <span className="cyv-service-badge">{t("sprint.badge_price_short")}</span>
                                <h3 className="cyv-card-title mt-3">{t("sprint.sprint_card_title")}</h3>
                                <p className="cyv-card-text" style={{ fontWeight: 600 }}>
                                    {t("sprint.sprint_card_price")} · {t("sprint.sprint_card_timeline")}
                                </p>
                                <ul className="cyv-card-text" style={{ paddingLeft: '1.25rem' }}>
                                    <li>{t("sprint.sprint_bullet_1")}</li>
                                    <li>{t("sprint.sprint_bullet_2")}</li>
                                    <li>{t("sprint.sprint_bullet_3")}</li>
                                    <li>{t("sprint.sprint_bullet_4")}</li>
                                </ul>
                                <div className="mt-4">
                                    <EntryCTA
                                        url={SPRINT_BOOKING_URL}
                                        intent="sprint_booking"
                                        label={t("sprint.sprint_cta")}
                                        onSelect={handleSelect}
                                    />
                                </div>
                            </div>

                            <div className="cyv-card">
                                <h3 className="cyv-card-title">{t("sprint.diagnostic_card_title")}</h3>
                                <p className="cyv-card-text" style={{ fontWeight: 600 }}>
                                    {t("sprint.diagnostic_card_price")}
                                </p>
                                <p className="cyv-card-text">{t("sprint.diagnostic_description")}</p>
                                <div className="mt-4">
                                    <EntryCTA
                                        url={DIAGNOSTIC_PAYMENT_URL}
                                        intent="diagnostic_payment"
                                        label={t("sprint.diagnostic_cta")}
                                        onSelect={handleSelect}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 'form' && (
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cyv-card">
                                <button
                                    type="button"
                                    className="cyv-btn cyv-btn-secondary mb-4"
                                    onClick={handleBack}
                                >
                                    {t("sprint.back_to_options")}
                                </button>

                                <h3 className="cyv-card-title mb-3">{t("sprint.form_heading")}</h3>
                                <p className="cyv-card-text" style={{ color: 'var(--cyv-primary-light)', fontWeight: 600 }}>
                                    {selectedIntent === 'diagnostic_payment'
                                        ? t("sprint.form_selected_diagnostic")
                                        : t("sprint.form_selected_sprint")}
                                </p>

                                {error && (
                                    <div className="alert" style={{
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid #ef4444',
                                        color: '#fca5a5',
                                        padding: '1rem',
                                        borderRadius: 'var(--cyv-radius-md)',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {error}
                                    </div>
                                )}

                                {submitted && (
                                    <div className="alert" style={{
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid var(--cyv-primary)',
                                        color: 'var(--cyv-primary-light)',
                                        padding: '1rem',
                                        borderRadius: 'var(--cyv-radius-md)',
                                        marginBottom: '1.5rem'
                                    }}>
                                        ✓ {t("sprint.form_success")}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("contact.name", "Name")}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t("contact.name_placeholder")}
                                            value={form.name}
                                            onChange={handleChange}
                                            className="cyv-form-input"
                                            required
                                        />
                                    </div>

                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("contact.email")}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={t("contact.email_placeholder")}
                                            value={form.email}
                                            onChange={handleChange}
                                            className="cyv-form-input"
                                            required
                                        />
                                    </div>

                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">
                                            {t("contact.phone")} <span style={{ color: 'rgba(226, 232, 240, 0.5)' }}>({t("contact.optional")})</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder={t("contact.phone_placeholder")}
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="cyv-form-input"
                                        />
                                    </div>

                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("contact.message")}</label>
                                        <textarea
                                            name="message"
                                            placeholder={t("contact.message_placeholder")}
                                            value={form.message}
                                            onChange={handleChange}
                                            className="cyv-form-input cyv-form-textarea"
                                            required
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="cyv-btn cyv-btn-primary"
                                            style={{ width: '100%' }}
                                            disabled={submitting}
                                        >
                                            {submitting ? t("contact.sending", "Sending...") : t("sprint.form_submit")}
                                        </button>
                                    </div>
                                </form>

                                <p className="cyv-card-text mt-3" style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                                    {t("sprint.trust_note")}
                                </p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}
