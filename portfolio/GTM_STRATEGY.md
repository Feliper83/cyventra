# Estrategia de Go-To-Market — Cyventra, Inc.

> Documento de estrategia operativa, no de producto. Última actualización: septiembre 2026.

---

## Resumen de una línea

LinkedIn + email frío (ya construidos) para prospección directa, Facebook como canal secundario de presencia local, el blog como motor de contenido/SEO alimentando `/start-sprint`, y una herramienta semi-automatizada (buscar y preparar, nunca enviar) para escalar la prospección sin arriesgar cuentas.

---

## 1. Redes sociales — recomendación decisiva

**LinkedIn (principal).** Es donde están los dueños de pyme buscando proveedores de servicios profesionales, y ya existen los activos construidos para este canal: `LINKEDIN_DM_EN/ES.md` (secuencia de prospección 1:1) y `LINKEDIN_POST_EN/ES.md` (contenido orgánico).

**Facebook (secundario).** El ICP real de Cyventra — contratistas, agentes inmobiliarios, clínicas pequeñas, tiendas de e-commerce — tiene, en la práctica, más presencia activa en Facebook (páginas de negocio, grupos locales) que en LinkedIn. Se recomienda crear la página de empresa y usarla para el mismo contenido que se publica en LinkedIn, adaptado a un tono más local/cercano.

**Instagram y X — fuera del plan por ahora.** Sin casos de estudio ni contenido visual (antes/después) que mostrar, Instagram no tiene qué publicar. X no tiene penetración real en este público objetivo. Revisar Instagram específicamente más adelante, cuando existan resultados reales de clientes que mostrar visualmente.

---

## 2. Identificación de clientes

**Apollo.io (plan gratuito)** como motor principal de listas:

- **Industria/palabra clave**: servicios legales, salud/clínicas (no hospitales), construcción/contratistas, inmobiliarias, e-commerce minorista, agencias de marketing/creativas.
- **Tamaño de empresa**: 1-50 empleados, con foco en 5-25 (por debajo de 5 suele ser un operador solo sin presupuesto ni autoridad delegada; por encima de 50 empieza a requerir procesos de compra/RFP que no calzan con el modelo de precio fijo rápido).
- **Cargo**: Owner, Founder, President, Managing Partner, Office Manager, Operations Manager — excluyendo deliberadamente cargos técnicos (CTO, IT Director), que evalúan con otros criterios y no sienten el dolor operativo del día a día.
- **Geografía**: empezar en Florida (coherente con el ángulo de "corporación de EE.UU."), expandir luego a estados con alta densidad de pymes (TX, GA, NC).

**Fuentes complementarias** (no para listas masivas, sino para verificar calidad y llenar huecos):
- Google Maps por categoría + ciudad (ej. "abogado de familia Tampa") — señal muy alta de negocio real y local, pero sin exportación masiva de contactos.
- Directorios de asociaciones/colegios profesionales y cámaras de comercio locales — contactos pre-verificados, aunque rara vez incluyen email directo.
- Grupos de Facebook de dueños de pyme — para presencia y relación, **no** como fuente de listas (la mayoría prohíbe la prospección directa).

**Volumen realista**: 25-40 contactos verificados por semana en el plan gratuito de Apollo, una vez calibrados los filtros.

---

## 3. Priorización de canales (de mayor a menor prioridad, en esta etapa)

1. **Red personal / referidos** — costo cero, la vía más rápida al primer cliente y primer caso de estudio real. Se trabaja desde la semana 1, en paralelo con todo lo demás, no después.
2. **Email frío** (ya construido, `EMAIL_TEMPLATE_EN/ES.md`) — el motor escalable principal, asíncrono, con el ciclo de retroalimentación más rápido (aperturas/respuestas).
3. **LinkedIn DM 1:1** (ya construido) — mismo prospecto que el email, no una lista aparte; el toque múltiple (email + LinkedIn) mejora la tasa de respuesta frente a un solo canal.
4. **Contenido orgánico de LinkedIn** — barato, compuesto, refuerza la señal de confianza que más falta hoy (sin casos de estudio).
5. **Google Business Profile / SEO local** — se configura una vez, gratis, inversión de largo plazo.
6. **Grupos de Facebook por vertical** — solo para ayudar/participar genuinamente, nunca para vender directo.
7. **Foros/comunidades de industria** — oportunista, cuando sobre tiempo.
8. **Instagram y X** — deprioritizados (ver sección 1).

---

## 4. Cadencia de contenido del blog

**1 post nuevo cada 2 semanas**, rotando por vertical del ICP (legal → salud → contratistas → inmobiliaria → e-commerce, y se repite), sincronizado con la vertical que se está prospectando esa misma semana — así el outbound de esa semana tiene una razón legítima y no genérica para mencionar "justo publicamos sobre esto".

**Qué hacer con cada post publicado:**
- Convertirlo en un post nativo de LinkedIn (resumen de 3-5 puntos, no solo un link).
- Usarlo como touchpoint opcional adicional para prospectos que quedaron en silencio después del paso 3 de la secuencia de DM — reabre la conversación sin sentirse como una venta.
- Usarlo como material de apertura para los correos fríos de esa semana en la vertical correspondiente.

---

## 5. Ritmo operativo semanal (para un operador solo)

- **Lunes** (30-45 min): sacar de Apollo la lista de 25-40 prospectos de la vertical de la semana; complementar con Google Maps/directorios si faltan.
- **Martes-miércoles** (1-1.5 h): enviar los correos fríos personalizados a toda la lista; enviar 10-15 solicitudes de conexión personalizadas en LinkedIn (repartidas en la semana, no todas de golpe).
- **Jueves** (30-45 min): seguimiento — paso 2 de LinkedIn a quien aceptó hace 5-7 días; paso 3 a quien recibió el paso 2 hace 5-7 días sin respuesta; un toque de valor (sin presión) a quien no respondió el correo de la semana pasada.
- **Viernes** (1-1.5 h): en semana de publicación, sale el post del blog + su versión para LinkedIn; en semana libre, tiempo para red personal/referidos o participación en una comunidad relevante. Revisar todo lo que llegó por `/start-sprint` (con el campo `intent` ya capturado) y por respuestas de outbound.

**Volumen mensual aproximado**: ~120-160 correos nuevos, ~40-60 solicitudes de LinkedIn, más lo que aporte la red personal — suficiente, con ejecución consistente, para apuntar a los primeros 3-5 clientes en 4-8 semanas.

**Medición mínima**: usar parámetros UTM distintos por canal (email/LinkedIn/blog) apuntando a `/start-sprint`, para cruzar contra el campo `intent` ya capturado en el formulario y saber qué canal realmente convierte antes de invertir más en ninguno.

---

## 6. Herramienta de prospección semi-automatizada (Apollo)

Para no dejarlo ambiguo: **se automatiza encontrar y preparar, nunca enviar.**

Se construye un script que:
1. Llama a la API de Apollo.io con los filtros de la sección 2 y trae la lista semanal (nombre, empresa, cargo, email).
2. Genera un primer borrador de apertura personalizado por prospecto, en el tono de las plantillas ya existentes.
3. Entrega la lista + borradores para que el usuario revise y envíe manualmente.

**Bloqueante**: requiere que el usuario cree una cuenta de Apollo.io y genere una API key antes de poder construir/probar esto con datos reales — mismo tipo de paso externo que Stripe/Cal.com.

---

## 7. Qué NO hacer

- No correr ads pagados todavía — sin datos de conversión, cualquier campaña es una apuesta a ciegas; mejor invertir en subir de plan en Apollo (más volumen de listas verificadas).
- No automatizar el *envío* en LinkedIn ni en email a volumen alto — riesgo real de bloqueo de cuenta y de que el dominio de correo quede marcado como spam.
- No perseguir clientes enterprise o mid-market aunque respondan — el modelo de precio fijo de $1,500-$2,500 en 1-2 semanas no sobrevive un proceso de compras corporativo.
- No dejar que el Diagnóstico reemplace al Sprint como oferta principal en los mensajes de prospección — diluye el ingreso por proyecto y retrasa el primer caso de estudio real.
- No esperar a que el blog/SEO madure para empezar el outbound — son un canal de meses, deben correr en paralelo desde la semana 1, no antes.
- No expandir a Instagram/X todavía — sin contenido real que mostrar, es tiempo mal invertido para un operador solo.
