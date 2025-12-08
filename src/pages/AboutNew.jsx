import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider.jsx";
import { apiUrl } from '../config/api.js';
import '../styles/cyventra-theme.css';

export default function AboutNew() {
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

    return (
        <div className="cyv-page-wrapper">
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

