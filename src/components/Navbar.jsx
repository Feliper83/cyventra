import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../i18n";
import { useLanguage } from "../pages/LanguageProvider.jsx"
import { socialLinks } from "../config/socialLinks";
import CyventraLogo from './CyventraLogo.jsx';
import '../styles/cyventra-theme.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const { language, setLanguage } = useLanguage();
    const location = useLocation();
    const [isNewDesign, setIsNewDesign] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const newDesignRoutes = ['/home-new', '/solutions-new', '/about-new', '/career-new', '/contact-new', '/blogs-new', '/blog'];
        setIsNewDesign(newDesignRoutes.includes(location.pathname));
        
        // Check if mobile for logo variant
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 400);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [location]);

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    const navbarClass = isNewDesign 
        ? "navbar navbar-expand-lg sticky-top navbar-dark cyv-navbar" 
        : "navbar navbar-expand-lg sticky-top navbar-dark bg-dark";

    return (
        <nav className={navbarClass}>
            <div className="container-fluid ps-7">
                <Link to="/home-new" className="cyv-logo-wrapper" style={{ textDecoration: 'none' }}>
                    <CyventraLogo 
                        variant={isMobile ? "icon" : "full"}
                        size="medium"
                        color="white"
                        className="navbar-logo"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/home-new">{t("home")}</Link>
                        <Link className="nav-link" to="/solutions-new">{t("solutions")}</Link>
                        <Link className="nav-link" to="/about-new">{t("about")}</Link>
                        <Link className="nav-link" to="/career-new">{t("growth")}</Link>
                        <Link className="nav-link" to="/blogs-new">{t("blog")}</Link>
                        <Link className="nav-link" to="/contact-new">{t("navbar.contact_menu")}</Link>
                    </ul>

                    {/* Selector de idioma */}
                    <select
                        className="form-select form-select-sm ms-3"
                        style={{ width: "120px" }}
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </select>

                    <span className="nav-item ms-3">
                        <span className="fa-stack">
                            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin fa-stack-1x text-white"></i>
                            </a>
                        </span>
                    </span>
                </div>
            </div>
        </nav>
    );
}
