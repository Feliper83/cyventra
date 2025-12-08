import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider.jsx";
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../config/api.js';
import LazyImage from '../components/LazyImage.jsx';
import '../styles/cyventra-theme.css';

export default function CybeblogNew() {
    const [blogs, setBlogs] = useState([]);
    const { language } = useLanguage();
    const { t, i18n } = useTranslation();
    const lang = language || i18n.language || "es";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(apiUrl(`/api/blogs?lang_code=${lang}`));
                const data = await res.json();
                setBlogs(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setBlogs([]);
            }
        };
        fetchBlogs();
    }, [language, i18n.language]);

    const handleClick = (title, description, image) => {
        navigate("/blog", {
            state: {
                titulo: title,
                contenido: description,
                imagen: image,
                autor: "Cyventra Team",
                fecha: new Date().toISOString(),
            },
        });
    };

    return (
        <div className="cyv-page-wrapper">
            {/* Page Header */}
            <div className="cyv-page-header">
                <div className="container">
                    <div className="cyv-page-content">
                        <h1 className="cyv-page-title">
                            {lang === "es" ? "Nuestros Blogs" : "Our Blogs"}
                        </h1>
                        <p className="cyv-page-subtitle">
                            {lang === "es" 
                                ? "Descubre artículos sobre tecnología, desarrollo de software, innovación y mejores prácticas en la industria."
                                : "Discover articles about technology, software development, innovation and best practices in the industry."}
                        </p>
                    </div>
                </div>
            </div>

            {/* Blogs Grid */}
            <div className="container">
                <div className="cyv-page-content">
                    {blogs.length > 0 ? (
                        <div className="cyv-grid cyv-grid-3">
                            {blogs.map((blog, idx) => {
                                const image = blog.blog_post?.images?.[0]?.image_path || null;
                                const title = blog.title || "Sin título";
                                const description = blog.content || "";

                                return (
                                    <article key={idx} className="cyv-service-card" onClick={() => handleClick(title, description, image)}>
                                        {image && (
                                            <div className="mb-3" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--cyv-radius-md)' }}>
                                                <LazyImage
                                                    src={image}
                                                    alt={title}
                                                    style={{
                                                        width: '100%',
                                                        height: '220px',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1.05)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                    }}
                                                />
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '1rem',
                                                    right: '1rem',
                                                    background: 'rgba(16, 185, 129, 0.9)',
                                                    color: 'white',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: 'var(--cyv-radius-sm)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase'
                                                }}>
                                                    Blog
                                                </div>
                                            </div>
                                        )}
                                        
                                        <h3 className="cyv-service-title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                            {title}
                                        </h3>
                                        
                                        <p className="cyv-service-description" style={{ 
                                            fontSize: '0.9375rem',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 4,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}>
                                            {description.length > 180
                                                ? description.substring(0, 180) + "..."
                                                : description}
                                        </p>

                                        <div className="mt-auto pt-3 d-flex justify-content-between align-items-center">
                                            <span style={{ 
                                                color: 'rgba(226, 232, 240, 0.6)',
                                                fontSize: '0.875rem'
                                            }}>
                                                📅 {blog.blog_post?.published_at 
                                                    ? new Date(blog.blog_post.published_at).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US')
                                                    : new Date().toLocaleDateString()}
                                            </span>
                                            <button className="cyv-btn cyv-btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                                                {t("blogs.lookArticle", "Leer más")} →
                                            </button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="cyv-card text-center" style={{ padding: '4rem 2rem' }}>
                            <div className="cyv-stat-icon" style={{ 
                                width: '80px', 
                                height: '80px', 
                                margin: '0 auto 1.5rem',
                                fontSize: '2.5rem'
                            }}>
                                📝
                            </div>
                            <h3 className="cyv-card-title mb-3">
                                {t("blogs.notAvailable", "No hay blogs disponibles")}
                            </h3>
                            <p className="cyv-card-text">
                                {lang === "es" 
                                    ? "Próximamente publicaremos contenido interesante sobre tecnología e innovación."
                                    : "We'll be publishing interesting content about technology and innovation soon."}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

