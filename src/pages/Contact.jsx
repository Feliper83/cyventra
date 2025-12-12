import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { apiUrl } from '../config/api.js';
import SEOHead from '../components/SEOHead.jsx';
import StructuredData from '../components/StructuredData.jsx';
import '../styles/cyventra-theme.css';

export default function Contact() {
    const { t, i18n } = useTranslation();
    const [contacts, setContacts] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch(apiUrl("/api/contacts"))
            .then((res) => res.json())
            .then((data) => setContacts(data));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(apiUrl("/api/contacts"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            const newContact = await res.json();
            setContacts([newContact, ...contacts]);
            setForm({ name: "", email: "", phone: "", message: "" });
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    const lang = i18n.language || 'en';
    const baseUrl = 'https://cyventrasoft.com';
    const pageTitle = lang === 'en'
        ? "Contact Cyventra - Free Consultation"
        : "Contacta a Cyventra - Consulta Gratuita";
    
    const pageDescription = lang === 'en'
        ? "Contact Cyventra for custom software development, AI solutions, IAM services, or team augmentation. Free consultation. Response within 24 hours."
        : "Contacta a Cyventra para desarrollo de software personalizado, soluciones de IA, servicios IAM o aumento de equipos. Consulta gratuita. Respuesta en 24 horas.";
    
    const keywords = lang === 'en'
        ? "contact cyventra, software development quote, free consultation, get quote"
        : "contacta cyventra, cotización desarrollo de software, consulta gratuita, obtener cotización";

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Cyventra",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "email": "contact@cyventrasoft.com",
                "availableLanguage": ["English", "Spanish"]
            }
        }
    };

    return (
        <div className="cyv-page-wrapper">
            <SEOHead 
                title={pageTitle}
                description={pageDescription}
                keywords={keywords}
                ogImage={`${baseUrl}/images/og-contact.jpg`}
            />
            <StructuredData data={contactSchema} />
            {/* Page Header */}
            <div className="cyv-page-header">
                <div className="container">
                    <div className="cyv-page-content">
                        <h1 className="cyv-page-title">
                            {t("contact.title", "Contáctanos")}
                        </h1>
                        <p className="cyv-page-subtitle">
                            {t("contact.subtitle")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="container">
                <div className="cyv-page-content">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cyv-card">
                                {submitted && (
                                    <div className="alert" style={{
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid var(--cyv-primary)',
                                        color: 'var(--cyv-primary-light)',
                                        padding: '1rem',
                                        borderRadius: 'var(--cyv-radius-md)',
                                        marginBottom: '1.5rem'
                                    }}>
                                        ✓ {t("contact.success")}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">
                                            {t("contact.name", "Nombre")}
                                        </label>
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
                                        <label className="cyv-form-label">
                                            {t("contact.email")}
                                        </label>
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
                                        <label className="cyv-form-label">
                                            {t("contact.message")}
                                        </label>
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
                                        >
                                            {t("contact.button_title")}
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginLeft: '0.5rem' }}>
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
