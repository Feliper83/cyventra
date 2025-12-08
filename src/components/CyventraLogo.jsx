import React from 'react';
import '../styles/cyventra-theme.css';

/**
 * Cyventra Logo Component
 * Modern, tech-forward logo with icon and typography
 * 
 * @param {Object} props
 * @param {string} props.variant - 'full' (icon + text) | 'icon' (icon only) | 'text' (text only)
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
    // Size configurations - Improved proportions
    const sizes = {
        small: { icon: 36, fontSize: '0.875rem', spacing: 8 },
        medium: { icon: 48, fontSize: '1.125rem', spacing: 12 },
        large: { icon: 64, fontSize: '1.5rem', spacing: 16 }
    };

    const config = sizes[size];

    // Color configurations
    const colors = {
        primary: {
            icon: '#10B981', // --cyv-primary
            text: '#10B981',
            accent: '#34D399' // --cyv-primary-light
        },
        white: {
            icon: '#FFFFFF',
            text: '#FFFFFF',
            accent: '#E2E8F0'
        },
        dark: {
            icon: '#0F172A', // --cyv-dark
            text: '#0F172A',
            accent: '#1E293B'
        }
    };

    const colorScheme = colors[color];

    // Icon SVG - Simplified and refined "C" with subtle tech elements
    const IconSVG = () => (
        <svg 
            width={config.icon} 
            height={config.icon} 
            viewBox="0 0 64 64" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="cyv-logo-icon"
        >
            {/* Simplified outer ring - more subtle */}
            <circle 
                cx="32" 
                cy="32" 
                r="28" 
                stroke={colorScheme.icon} 
                strokeWidth="2" 
                fill="none"
                opacity="0.25"
            />
            
            {/* Main "C" shape - cleaner and bolder */}
            <path 
                d="M32 14 C18 14 10 22 10 32 C10 42 18 50 32 50" 
                stroke={colorScheme.icon} 
                strokeWidth="4" 
                strokeLinecap="round"
                fill="none"
            />
            
            {/* Simplified tech circuit lines - only 2 instead of 3 */}
            <line 
                x1="18" 
                y1="26" 
                x2="26" 
                y2="26" 
                stroke={colorScheme.accent} 
                strokeWidth="2.5" 
                strokeLinecap="round"
                opacity="0.7"
            />
            <line 
                x1="18" 
                y1="38" 
                x2="26" 
                y2="38" 
                stroke={colorScheme.accent} 
                strokeWidth="2.5" 
                strokeLinecap="round"
                opacity="0.7"
            />
            
            {/* Single accent dot - more minimal */}
            <circle cx="38" cy="32" r="2.5" fill={colorScheme.accent} opacity="0.9" />
        </svg>
    );

    const containerStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: config.spacing,
        transition: 'all 0.3s ease'
    };

    const textStyle = {
        fontSize: config.fontSize,
        fontWeight: '700',
        color: colorScheme.text,
        fontFamily: 'var(--cyv-font-heading), sans-serif',
        letterSpacing: size === 'small' ? '0.08em' : '0.06em', // Better spacing for small sizes
        textTransform: 'uppercase',
        lineHeight: '1.1', // Slightly better line height
        margin: 0,
        padding: 0,
        whiteSpace: 'nowrap' // Prevent text wrapping
    };

    return (
        <div 
            className={`cyv-logo-component ${className}`}
            style={containerStyle}
        >
            {(variant === 'full' || variant === 'icon') && <IconSVG />}
            {(variant === 'full' || variant === 'text') && (
                <span className="cyv-logo-text" style={textStyle}>
                    CYVENTRA
                </span>
            )}
        </div>
    );
}

