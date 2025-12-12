import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({ 
    title, 
    description, 
    keywords, 
    ogImage,
    ogType = 'website',
    canonicalUrl 
}) {
    const location = useLocation();
    const baseUrl = 'https://cyventrasoft.com';
    const currentUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
    const defaultImage = `${baseUrl}/images/og-default.jpg`;

    useEffect(() => {
        // Update document title
        if (title) {
            document.title = title;
        }

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            if (!content) return;
            
            const selector = isProperty 
                ? `meta[property="${name}"]` 
                : `meta[name="${name}"]`;
            
            let meta = document.querySelector(selector);
            
            if (!meta) {
                meta = document.createElement('meta');
                if (isProperty) {
                    meta.setAttribute('property', name);
                } else {
                    meta.setAttribute('name', name);
                }
                document.head.appendChild(meta);
            }
            
            meta.setAttribute('content', content);
        };

        // Basic Meta Tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('author', 'Cyventra');
        updateMetaTag('robots', 'index, follow');

        // Open Graph Tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:url', currentUrl, true);
        updateMetaTag('og:image', ogImage || defaultImage, true);
        updateMetaTag('og:site_name', 'Cyventra', true);
        updateMetaTag('og:locale', 'en_US', true);
        updateMetaTag('og:locale:alternate', 'es_ES', true);

        // Twitter Card Tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage || defaultImage);

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', currentUrl);

        // Language alternates
        const langEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
        const langEs = document.querySelector('link[rel="alternate"][hreflang="es"]');
        
        if (!langEn) {
            const linkEn = document.createElement('link');
            linkEn.setAttribute('rel', 'alternate');
            linkEn.setAttribute('hreflang', 'en');
            linkEn.setAttribute('href', `${baseUrl}${location.pathname}?lang=en`);
            document.head.appendChild(linkEn);
        }
        
        if (!langEs) {
            const linkEs = document.createElement('link');
            linkEs.setAttribute('rel', 'alternate');
            linkEs.setAttribute('hreflang', 'es');
            linkEs.setAttribute('href', `${baseUrl}${location.pathname}?lang=es`);
            document.head.appendChild(linkEs);
        }

    }, [title, description, keywords, ogImage, ogType, currentUrl, location.pathname]);

    return null;
}

