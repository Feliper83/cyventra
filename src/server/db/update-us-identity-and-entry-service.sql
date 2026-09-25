-- Update company record to verified U.S. corporation identity (Cyventra, Inc. - Florida, Doc# P25000028857)
-- and add the "AI Automation Sprint" entry-point service (display_order = 0, shows first on /solutions).
-- Run this against the production database after reviewing the copy below.

-- ============================================
-- 1. COMPANY IDENTITY
-- ============================================

UPDATE cyventra.company
SET
  email = 'contact@cyventrasoft.com',
  phone = NULL,
  website = 'https://www.cyventrasoft.com',
  address = '1317 Edgewater Dr, Orlando, FL 32804, US'
WHERE id = 1;

UPDATE cyventra.company_translation
SET
  name = 'Cyventra, Inc.',
  description = 'Cyventra, Inc. is a U.S. corporation (Florida) helping small businesses automate work with practical AI and build custom software, powered by an engineering team across Latin America.'
WHERE company_id = 1 AND language = 'en';

UPDATE cyventra.company_translation
SET
  name = 'Cyventra, Inc.',
  description = 'Cyventra, Inc. es una corporación de Estados Unidos (Florida) que ayuda a pequeñas empresas a automatizar procesos con IA práctica y construir software a la medida, con un equipo de ingeniería en Latinoamérica.'
WHERE company_id = 1 AND language = 'es';

-- ============================================
-- 2. NEW ENTRY SERVICE: AI AUTOMATION SPRINT
-- ============================================

-- NOTE: icon_path temporarily reuses the AI Solutions photo as a placeholder.
-- Replace with a dedicated image at /images/solutions/ai-automation-sprint.jpg when available:
-- UPDATE cyventra.service SET icon_path = '/images/solutions/ai-automation-sprint.jpg' WHERE slug = 'ai-automation-sprint';
INSERT INTO cyventra.service (slug, icon_path, display_order)
VALUES ('ai-automation-sprint', '/images/solutions/artificial-intelligence.jpg', 0)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO cyventra.service_translation (service_id, lang_code, name, summary, details)
SELECT id, 'en',
  'AI Automation Sprint',
  'Automate one costly workflow in 1-2 weeks. Fixed price, fixed scope, no long contracts.',
  'A fixed-price, fixed-scope engagement that automates a single high-friction workflow in your business — lead intake & qualification, customer support responses, or quoting/invoicing & reminders.

**How it works:**
- ✅ **Diagnostic (optional first step)**: a short paid audit ($297-$497) identifying the 2-3 best automation opportunities in your business
- ✅ **Sprint**: $1,500-$2,500 fixed price, delivered in 1-2 weeks
- ✅ **30 days of support** included after launch
- ✅ **No long contracts**: pick one workflow, see it working, decide if you want more

**Built and supported by Cyventra, Inc., a U.S. corporation.**'
FROM cyventra.service WHERE slug = 'ai-automation-sprint'
ON CONFLICT (service_id, lang_code) DO NOTHING;

INSERT INTO cyventra.service_translation (service_id, lang_code, name, summary, details)
SELECT id, 'es',
  'Sprint de Automatización con IA',
  'Automatiza un proceso costoso en 1-2 semanas. Precio fijo, alcance fijo, sin contratos largos.',
  'Un proyecto de precio y alcance fijo que automatiza un solo proceso de alta fricción en tu negocio — captación y calificación de leads, atención al cliente, o cotizaciones/facturación y recordatorios.

**Cómo funciona:**
- ✅ **Diagnóstico (paso opcional)**: una auditoría corta y paga ($297-$497) que identifica las 2-3 mejores oportunidades de automatización en tu negocio
- ✅ **Sprint**: $1,500-$2,500 precio fijo, entregado en 1-2 semanas
- ✅ **30 días de soporte** incluidos después del lanzamiento
- ✅ **Sin contratos largos**: eliges un proceso, ves que funciona, decides si quieres más

**Construido y respaldado por Cyventra, Inc., una corporación de Estados Unidos.**'
FROM cyventra.service WHERE slug = 'ai-automation-sprint'
ON CONFLICT (service_id, lang_code) DO NOTHING;

-- Verify
SELECT st.service_id, s.slug, st.lang_code, st.name, st.summary
FROM cyventra.service_translation st
JOIN cyventra.service s ON s.id = st.service_id
ORDER BY s.display_order, st.lang_code;
