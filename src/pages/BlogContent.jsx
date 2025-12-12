import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import LazyImage from '../components/LazyImage.jsx';
import '../styles/cyventra-theme.css';

export default function BlogContent() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const lang = i18n.language || "es";

    if (!state) {
        return (
            <div className="cyv-page-wrapper">
                <div className="container py-5">
                    <div className="cyv-card text-center">
                        <p className="cyv-card-text">{t("blogs.notAvailable")}</p>
                        <button className="cyv-btn cyv-btn-primary" onClick={() => navigate("/blogs")}>
                            {t("blogs.lookArticle")}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const { titulo, contenido, imagen, autor, fecha } = state;

    return (
        <div className="cyv-page-wrapper">
            {/* Hero Image Section */}
            {imagen && (
                <div className="position-relative" style={{ height: '400px', overflow: 'hidden' }}>
                    <LazyImage
                        src={imagen}
                        alt={titulo}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.5)'
                        }}
                    />
                    {/* Overlay Gradient */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.95))'
                    }}></div>
                    
                    {/* Title Overlay */}
                    <div className="position-absolute bottom-0 start-0 end-0 p-4 p-md-5" style={{ zIndex: 10 }}>
                        <div className="container">
                            <span style={{
                                display: 'inline-block',
                                background: 'rgba(16, 185, 129, 0.2)',
                                color: 'var(--cyv-primary-light)',
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--cyv-radius-sm)',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                marginBottom: '1rem',
                                border: '1px solid rgba(16, 185, 129, 0.3)'
                            }}>
                                📝 {t("blog")}
                            </span>
                            <h1 className="cyv-page-title text-white mb-3" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
                                {titulo}
                            </h1>
                            {(autor || fecha) && (
                                <div className="d-flex align-items-center gap-3" style={{ color: 'rgba(226, 232, 240, 0.8)' }}>
                                    {autor && <span>✍️ {autor}</span>}
                                    {fecha && <span>📅 {new Date(fecha).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}</span>}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Article Content */}
                        <article className="cyv-card" style={{ padding: '3rem' }}>
                            {!imagen && (
                                <div className="mb-4">
                                    <span style={{
                                        display: 'inline-block',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: 'var(--cyv-primary-light)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--cyv-radius-sm)',
                                        fontSize: '0.875rem',
                                        fontWeight: '600',
                                        border: '1px solid rgba(16, 185, 129, 0.2)'
                                    }}>
                                        📝 {t("blog")}
                                    </span>
                                    <h1 className="cyv-page-title mt-3 mb-3">
                                        {titulo}
                                    </h1>
                                    {(autor || fecha) && (
                                        <div className="d-flex align-items-center gap-3 mb-4" style={{ color: 'rgba(226, 232, 240, 0.6)' }}>
                                            {autor && <span>✍️ {autor}</span>}
                                            {fecha && <span>📅 {new Date(fecha).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric' 
                                            })}</span>}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Markdown Content */}
                            <div className="blog-content" style={{
                                color: '#E2E8F0',
                                fontSize: '1.125rem',
                                lineHeight: '1.9',
                                fontFamily: 'var(--cyv-font-primary)'
                            }}>
                                <ReactMarkdown
                                    components={{
                                        p: ({node, ...props}) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
                                        h1: ({node, ...props}) => <h1 className="cyv-card-title" style={{ marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
                                        h2: ({node, ...props}) => <h2 className="cyv-card-title" style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.75rem' }} {...props} />,
                                        h3: ({node, ...props}) => <h3 className="cyv-card-title" style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.5rem' }} {...props} />,
                                        strong: ({node, ...props}) => <strong style={{ color: 'var(--cyv-primary-light)', fontWeight: '600' }} {...props} />,
                                        a: ({node, ...props}) => <a style={{ color: 'var(--cyv-primary)', textDecoration: 'none', borderBottom: '1px solid var(--cyv-primary)' }} {...props} />,
                                        code: ({node, ...props}) => <code style={{ 
                                            background: 'rgba(16, 185, 129, 0.1)', 
                                            color: 'var(--cyv-primary-light)', 
                                            padding: '0.25rem 0.5rem', 
                                            borderRadius: 'var(--cyv-radius-sm)',
                                            fontSize: '0.875rem',
                                            fontFamily: 'monospace'
                                        }} {...props} />,
                                        ul: ({node, ...props}) => <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }} {...props} />,
                                        ol: ({node, ...props}) => <ol style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }} {...props} />,
                                        li: ({node, ...props}) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
                                    }}
                                >
                                    {contenido}
                                </ReactMarkdown>
                            </div>

                            {/* Tags */}
                            <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(226, 232, 240, 0.1)' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <span style={{
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: 'var(--cyv-primary-light)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--cyv-radius-sm)',
                                        fontSize: '0.875rem',
                                        fontWeight: '500',
                                        border: '1px solid rgba(16, 185, 129, 0.2)'
                                    }}>
                                        Blog
                                    </span>
                                    <span style={{
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: 'var(--cyv-primary-light)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--cyv-radius-sm)',
                                        fontSize: '0.875rem',
                                        fontWeight: '500',
                                        border: '1px solid rgba(16, 185, 129, 0.2)'
                                    }}>
                                        Tecnología
                                    </span>
                                </div>
                            </div>
                        </article>

                        {/* Back Button */}
                        <div className="mt-4 text-center">
                            <button
                                className="cyv-btn cyv-btn-outline"
                                onClick={() => navigate("/blogs")}
                                style={{ padding: '0.75rem 2rem' }}
                            >
                                ← {t("blogs.backToBlogs")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}