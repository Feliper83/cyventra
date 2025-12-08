
import '../js/bootstrap.bundle.min.js';
import '../js/replaceme.min.js';

import '../js/globalscript.js';
import {useTranslation} from "react-i18next";
import "../i18n";
import {useEffect, useState} from "react";
import {useLanguage} from "./LanguageProvider.jsx";
import { apiUrl } from '../config/api.js';
import LazyImage from '../components/LazyImage.jsx';
import { Link } from 'react-router-dom'; // inicializa las traducciones



export default function Home() {

    const {language} = useLanguage();
    const {t, i18n} = useTranslation();
    const lang = language || i18n.language || "es";

    const [company, setCompany] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const comRes = await fetch(apiUrl(`/api/company?lang_code=${lang}`));

                if (!comRes.ok) throw new Error("Error al obtener company");

                const companyData = await comRes.json();
                setCompany(companyData);
            } catch (e) {
                console.error(e);
                setCompany({});
            }
        };

        fetchData();
    }, [lang]);

    // Update document title when company changes
    useEffect(() => {
        if (company && company.name) {
            document.title = company.name;
            console.log("Document title set:"+ company.name);
        }
    }, [company]);

    useEffect(() => {
        const loadScript = (src) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        };

        loadScript("/js/replaceme.min.js");
        loadScript("/js/bootstrap.bundle.min.js");
        loadScript("/js/script.js");

    }, []);

    return (
        <>
            {/* Botón flotante para ver nuevo diseño */}
            <Link 
                to="/home-new" 
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999,
                    padding: '15px 25px',
                    background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                    color: 'white',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(16, 185, 129, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.4)';
                }}
            >
                ✨ Ver Nuevo Diseño
            </Link>

            <header className="header position-relative min-vh-100 d-flex align-items-center">
                <LazyImage
                    src="/images/vertical-decoration-left.svg"
                    alt="Service image"
                    width={300}
                    height={500}
                    style={{ objectFit: "contain" }}
                />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-5">
                            <h1 className="mt-5">
                                {t("title")}
                                <span className="text-primary fw-bold replace-me ps-3">
                                  {t("subtitle")}
                                </span>
                            </h1>
                            <p className="lead">
                                {t("description")}
                            </p>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

