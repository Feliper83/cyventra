import React from 'react';
import '../styles/cyventra-theme.css';

/**
 * Cyventra Logo Component — "The Badge"
 * Two-letter monogram badge ("CY") with a brass rule, continued by "VENTRA" in the full lockup.
 * No circuit/AI iconography — leans on corporate-monogram convention (a "GS", a "JPM") for trust.
 *
 * @param {Object} props
 * @param {string} props.variant - 'full' (badge + "VENTRA") | 'icon' (badge only) | 'text' (wordmark only, no badge)
 * @param {string} props.size - 'small' | 'medium' | 'large'
 * @param {string} props.color - 'primary' | 'white' | 'dark'
 * @param {string} props.className - Additional CSS classes
 */
export default function CyventraLogo({
    variant = 'full',
    size = 'medium',
    color = 'white',
    className = ''
}) {
    const sizes = {
        small: { badge: 30, radius: 7, badgeFont: '0.82rem', wordFont: '0.9rem', spacing: 8 },
        medium: { badge: 40, radius: 9, badgeFont: '1.05rem', wordFont: '1.125rem', spacing: 10 },
        large: { badge: 56, radius: 13, badgeFont: '1.45rem', wordFont: '1.5rem', spacing: 14 }
    };
    const config = sizes[size];

    // Badge is a two-tone tile: it always contrasts with its own background,
    // independent of what's behind it — that's what makes it read on both dark and light surfaces.
    const schemes = {
        primary: { badgeBg: '#0F172A', badgeText: '#C9A15A', rule: '#C9A15A', word: '#0F172A' },
        white: { badgeBg: '#FFFFFF', badgeText: '#0F172A', rule: '#C9A15A', word: '#FFFFFF' },
        dark: { badgeBg: '#0F172A', badgeText: '#FFFFFF', rule: '#8A6A31', word: '#0F172A' }
    };
    const scheme = schemes[color];

    const wordFontFamily = "'Avenir Next', 'Century Gothic', Futura, Arial, sans-serif";

    const Badge = () => (
        <div
            className="cyv-logo-badge"
            style={{
                width: config.badge,
                height: config.badge,
                borderRadius: config.radius,
                background: scheme.badgeBg,
                color: scheme.badgeText,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: wordFontFamily,
                fontWeight: 700,
                fontSize: config.badgeFont,
                letterSpacing: '0.01em',
                position: 'relative',
                flexShrink: 0
            }}
        >
            CY
            <span
                style={{
                    position: 'absolute',
                    bottom: Math.round(config.badge * 0.17),
                    left: '26%',
                    right: '26%',
                    height: Math.max(2, Math.round(config.badge * 0.045)),
                    background: scheme.rule
                }}
            />
        </div>
    );

    const wordStyle = {
        fontSize: config.wordFont,
        fontWeight: 700,
        color: scheme.word,
        fontFamily: wordFontFamily,
        letterSpacing: '0.01em',
        lineHeight: '1.1',
        margin: 0,
        padding: 0,
        whiteSpace: 'nowrap'
    };

    const containerStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: config.spacing,
        transition: 'all 0.3s ease'
    };

    return (
        <div className={`cyv-logo-component ${className}`} style={containerStyle}>
            {variant === 'icon' && <Badge />}

            {variant === 'full' && (
                <>
                    <Badge />
                    <span className="cyv-logo-text" style={wordStyle}>VENTRA</span>
                </>
            )}

            {variant === 'text' && (
                <span className="cyv-logo-text" style={wordStyle}>CYVENTRA</span>
            )}
        </div>
    );
}
