# 🎨 CYVENTRA LOGO - Guía de Uso

## 📐 Especificaciones del Logo

### Versiones Disponibles

#### 1. **Full Logo** (Icono + Texto)
- **Uso**: Navbar, headers principales, documentos oficiales
- **Variante**: `variant="full"`
- **Proporción**: Icono 1.2x más grande que el texto

#### 2. **Icon Only** (Solo Icono)
- **Uso**: Favicon, iconos de app, espacios reducidos, mobile (<400px)
- **Variante**: `variant="icon"`
- **Tamaño mínimo**: 32px

#### 3. **Text Only** (Solo Texto)
- **Uso**: Footer, firmas de email, casos especiales
- **Variante**: `variant="text"`
- **Tamaño mínimo**: 0.875rem

### Tamaños

| Tamaño | Icono | Texto | Uso |
|--------|-------|-------|-----|
| `small` | 36px | 0.875rem | Footer, badges |
| `medium` | 48px | 1.125rem | Navbar (default) |
| `large` | 64px | 1.5rem | Hero sections, landing pages |

### Colores

El badge "CY" es un tile de dos tonos que siempre contrasta consigo mismo (no depende del fondo). La variante de color define el tile y el texto "VENTRA"/"CYVENTRA":

| Variante | Fondo del badge | Texto del badge | Regla | "VENTRA" | Uso |
|----------|------------------|------------------|-------|----------|-----|
| `white` | #FFFFFF | #0F172A | #C9A15A | #FFFFFF | Fondos oscuros (navbar, hero) |
| `primary` | #0F172A | #C9A15A | #C9A15A | #0F172A | Acento premium sobre fondos claros |
| `dark` | #0F172A | #FFFFFF | #8A6A31 | #0F172A | Fondos claros/blancos |

## 🚫 Zona de Exclusión

El logo debe tener un espacio mínimo libre equivalente a **0.5x la altura del icono** en todos los lados.

```
┌─────────────────┐
│                 │ ← 0.5x altura icono
│   [LOGO]        │
│                 │
└─────────────────┘
```

## 📱 Responsive Behavior

### Desktop (>992px)
- Logo completo (icono + texto)
- Tamaño: `medium`

### Tablet (768px - 992px)
- Logo completo (icono + texto)
- Tamaño: `medium`
- Gap reducido: 10px

### Mobile (576px - 768px)
- Logo completo (icono + texto)
- Tamaño: `medium`
- Gap reducido: 8px
- Texto: 0.875rem

### Small Mobile (<400px)
- **Solo icono** (texto oculto)
- Tamaño: `medium`
- Gap: 4px

## ✅ Uso Correcto

### ✅ DO (Hacer)
- Usar el logo en fondos oscuros con color `white`
- Mantener proporciones originales
- Respetar zona de exclusión
- Usar solo icono en espacios <400px
- Mantener contraste adecuado (mínimo 4.5:1)

### ❌ DON'T (No Hacer)
- ❌ Estirar o distorsionar el logo
- ❌ Cambiar colores del logo (excepto variantes definidas)
- ❌ Rotar el logo (excepto animaciones controladas)
- ❌ Colocar sobre fondos con bajo contraste
- ❌ Usar tamaños menores a los mínimos especificados
- ❌ Modificar el espaciado entre icono y texto

## 🎯 Ejemplos de Uso

### Navbar
```jsx
<CyventraLogo 
  variant="full"
  size="medium"
  color="white"
/>
```

### Footer
```jsx
<CyventraLogo 
  variant="text"
  size="small"
  color="white"
/>
```

### Favicon
```jsx
<CyventraLogo 
  variant="icon"
  size="small"
  color="primary"
/>
```

### Hero Section
```jsx
<CyventraLogo 
  variant="full"
  size="large"
  color="white"
/>
```

## 📄 Archivos

- **Componente React**: `src/components/CyventraLogo.jsx`
- **SVG Logo Completo**: `public/images/cyventra-logo.svg`
- **Favicon**: `public/images/cyventra-favicon.svg`
- **Estilos CSS**: `src/styles/cyventra-theme.css` (sección `.cyv-logo-*`)

## 🔄 Actualizaciones

**Versión 3.0** (Septiembre 2026)
- Rediseño completo: de ícono abstracto "C" con líneas de circuito a monograma "CY" tipo badge (convención de firmas serias: "GS", "JPM")
- Sin dependencia de iconografía genérica de IA/circuitos — refuerza el posicionamiento "Cyventra, Inc. — corporación de EE.UU."
- El lockup completo se lee `[CY] VENTRA` en vez de ícono + "CYVENTRA" repetido
- Acento en bronce (#C9A15A / #8A6A31) reemplaza el verde esmeralda como color de marca distintivo

**Versión 2.0** (Diciembre 2025)
- Icono simplificado (menos elementos decorativos)
- Proporciones mejoradas (icono 1.2x más grande)
- Mejor legibilidad en tamaños pequeños
- Hover effects más sutiles
- Responsive mejorado (icono solo en mobile pequeño)

---

**Mantén la consistencia. Respeta el branding. 🎨**

