import { useEffect } from 'react';

export default function StructuredData({ data }) {
    useEffect(() => {
        if (!data) return;

        // Remove existing structured data script
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
            existingScript.remove();
        }

        // Add new structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [data]);

    return null;
}

