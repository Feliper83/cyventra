import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider.jsx";
import { apiUrl } from '../config/api.js';
import SEOHead from '../components/SEOHead.jsx';
import StructuredData from '../components/StructuredData.jsx';
import '../styles/cyventra-theme.css';

export default function About() {
    const [about, setAbout] = useState([]);
    const { i18n } = useTranslation();
    const { language } = useLanguage();
    const lang = language || i18n.language || "es";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const aboutRes = await fetch(apiUrl(`/api/sections?lang_code=${lang}&slug=about-us`));
                if (!aboutRes.ok) throw new Error("Error al obtener about");

                const aboutData = await aboutRes.json();
                setAbout(aboutData);
            } catch (e) {
                console.error(e);
                setAbout([]);
            }
        };

        fetchData();
    }, [language, i18n.language]);

    const baseUrl = 'https://cyventrasoft.com';
    const pageTitle = lang === 'en'
        ? "About Cyventra, Inc. - U.S. Software Corporation"
        : "Acerca de Cyventra, Inc. - Corporación de Software de EE.UU.";

    const pageDescription = lang === 'en'
        ? "Cyventra, Inc. is a U.S. corporation (Florida) serving US businesses, with an engineering team across Latin America. Bilingual, same timezone, enterprise quality."
        : "Cyventra, Inc. es una corporación de Estados Unidos (Florida) que sirve a empresas estadounidenses, con un equipo de ingeniería en Latinoamérica. Bilingüe, misma zona horaria, calidad empresarial.";

    const keywords = lang === 'en'
        ? "about cyventra, US software corporation, LATAM engineering team, bilingual software team"
        : "acerca de cyventra, corporación de software de EE.UU., equipo de ingeniería LATAM, equipo de software bilingüe";

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Cyventra, Inc.",
            "foundingDate": "2024",
            "description": lang === 'en' ? "U.S. software corporation with an engineering team across Latin America" : "Corporación de software de EE.UU. con un equipo de ingeniería en Latinoamérica",
            "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "10-50"
            }
        }
    };

    return (
        <div className="cyv-page-wrapper">
            <SEOHead 
                title={pageTitle}
                description={pageDescription}
                keywords={keywords}
                ogImage={`${baseUrl}/images/og-about.jpg`}
            />
            <StructuredData data={aboutSchema} />
            {about.map((srv) => (
                <div key={srv.section_id}>
                    {/* Hero Image with Overlay */}
                    {srv.section?.images?.[0]?.image_path && (
                        <div className="position-relative" style={{ height: '500px', overflow: 'hidden' }}>
                            <Image
                                src={srv.section.images[0].image_path}
                                alt={srv.title || "About"}
                                className="img-fluid w-100"
                                style={{
                                    objectFit: "cover",
                                    height: "100%",
                                    filter: "brightness(0.4)",
                                }}
                            />
                            {/* Overlay Gradient */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.9))'
                            }}></div>
                            
                            {/* Title Overlay */}
                            <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3" style={{ zIndex: 10 }}>
                                <h1 className="cyv-page-title" style={{ marginBottom: '1rem' }}>
                                    {srv.title}
                                </h1>
                            </div>
                        </div>
                    )}

                    {/* Content Section */}
                    <div className="container py-5">
                        <div className="cyv-page-content">
                            <div className="cyv-card">
                                <div className="cyv-card-text" style={{ fontSize: '1.125rem', lineHeight: '1.9' }}>
                                    {srv.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
