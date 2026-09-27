-- Replaces the 3 pre-pivot blog posts (generic enterprise AI/security/cloud
-- thought-leadership, unrelated to the AI Automation Sprint) with 3 new posts
-- aligned to the Sprint and the small-business ICP. Also fixes two live bugs
-- found this session:
--  1. blog_post_id=1's Spanish translation had the WRONG body (byte-identical
--     to post 2's Spanish content) -- fully replaced, no longer an issue.
--  2. slugs didn't match topics (cloud-computing slug had identity content,
--     cibersecurity slug had cloud content) -- realigned below.
-- Author is set to a single consistent "Felipe" byline instead of 3 different
-- fictional names, consistent with the About Us rewrite (first-person founder
-- voice) rather than implying a content team that doesn't exist.

UPDATE cyventra.blog_post SET
  slug = 'how-to-choose-what-to-automate',
  author = 'Felipe',
  published_at = '2026-08-25 15:00:00'
WHERE id = 1;

UPDATE cyventra.blog_post SET
  slug = 'fixed-price-automation-sprint-explained',
  author = 'Felipe',
  published_at = '2026-09-08 15:00:00'
WHERE id = 2;

UPDATE cyventra.blog_post SET
  slug = 'why-were-a-new-company',
  author = 'Felipe',
  published_at = '2026-09-22 15:00:00'
WHERE id = 3;

-- Post 1 (EN)
UPDATE cyventra.blog_post_translation SET
  title = 'How to Know Which Process to Automate First',
  content = 'If you run a small business, chances are there''s one process eating far more of your time than it should — and you''ve probably stopped noticing it, because you do it every single day.

Here''s a simple way to find it. Walk through your week and ask three questions about each recurring task:

**1. How often does it happen?**
Daily and weekly tasks compound fast. A 20-minute task done once a month barely registers. The same task done 10 times a week adds up to more than 8 hours a month — a full workday, gone.

**2. Does it require a decision, or just a repetition?**
Tasks that follow the same steps every time — copying data from one place to another, sending the same type of follow-up email, generating the same kind of quote — are the easiest and safest to automate. Tasks that require real judgment case-by-case are usually not a good first automation target.

**3. What does it cost you when it''s late or wrong?**
A missed follow-up on a new lead. A quote that goes out a day late. An invoice reminder nobody sent. These aren''t just annoying — they cost you money and reputation every time they slip.

**The three most common answers we see**

Across the small businesses we talk to, the same three processes come up again and again:

- **Lead intake and qualification** — a new inquiry comes in and sits in an inbox for hours or days before anyone responds.
- **Customer support responses** — the same five questions, answered manually, over and over.
- **Quoting, invoicing, and reminders** — built by hand each time, with follow-ups that depend on someone remembering to send them.

If one of these sounds familiar, that''s usually the right place to start — not because it''s the most exciting process to automate, but because it''s the one quietly costing you the most.

**Not sure? That''s what the Diagnostic is for**

If you''ve read this and still aren''t sure which process is your biggest opportunity, that''s exactly the gap our optional Diagnostic ($297–$497) is built to close: a short, paid review that identifies the 2–3 best automation opportunities in your specific business, before you commit to anything bigger.

[Start with the Diagnostic, or go straight to the Sprint →](/start-sprint)'
WHERE blog_post_id = 1 AND lang_code = 'en';

-- Post 1 (ES)
UPDATE cyventra.blog_post_translation SET
  title = 'Cómo Saber Qué Proceso Automatizar Primero',
  content = 'Si tienes una pequeña empresa, es probable que haya un proceso que te esté quitando mucho más tiempo del que debería — y probablemente ya ni lo notas, porque lo haces todos los días.

Aquí tienes una forma simple de identificarlo. Repasa tu semana y hazte tres preguntas sobre cada tarea que se repite:

**1. ¿Con qué frecuencia ocurre?**
Las tareas diarias y semanales se acumulan rápido. Una tarea de 20 minutos, una vez al mes, casi ni se nota. La misma tarea 10 veces por semana suma más de 8 horas al mes — un día laboral completo, perdido.

**2. ¿Requiere una decisión, o solo una repetición?**
Las tareas que siguen los mismos pasos cada vez — copiar datos de un lugar a otro, enviar el mismo tipo de correo de seguimiento, generar el mismo tipo de cotización — son las más fáciles y seguras de automatizar. Las tareas que requieren criterio caso por caso normalmente no son el mejor punto de partida.

**3. ¿Qué te cuesta cuando llega tarde o sale mal?**
Un seguimiento perdido a un lead nuevo. Una cotización que sale un día tarde. Un recordatorio de factura que nadie envió. No son solo molestias — cada vez que se te escapan, te cuestan dinero y reputación.

**Las tres respuestas más comunes que vemos**

Entre las pymes con las que hablamos, los mismos tres procesos aparecen una y otra vez:

- **Captación y calificación de leads** — llega una consulta nueva y queda en la bandeja de entrada horas o días antes de que alguien responda.
- **Respuestas de atención al cliente** — las mismas cinco preguntas, respondidas a mano, una y otra vez.
- **Cotizaciones, facturación y recordatorios** — armados a mano cada vez, con seguimientos que dependen de que alguien se acuerde de enviarlos.

Si alguno de estos te suena familiar, ese es normalmente el mejor lugar para empezar — no porque sea el proceso más emocionante de automatizar, sino porque es el que silenciosamente más te está costando.

**¿No estás seguro? Para eso está el Diagnóstico**

Si leíste todo esto y aún no tienes claro cuál es tu mayor oportunidad, exactamente para eso está nuestro Diagnóstico opcional ($297–$497): una revisión corta y paga que identifica las 2-3 mejores oportunidades de automatización en tu negocio específico, antes de comprometerte a algo más grande.

[Empieza con el Diagnóstico, o ve directo al Sprint →](/start-sprint)'
WHERE blog_post_id = 1 AND lang_code = 'es';

-- Post 2 (EN)
UPDATE cyventra.blog_post_translation SET
  title = 'What a Fixed-Price AI Automation Sprint Actually Looks Like',
  content = '"Automation" and "AI" get thrown around so often that it''s fair to be skeptical of what you''re actually buying. So here''s a plain description of what happens during a Cyventra AI Automation Sprint, step by step.

**Week 0 — Scope, in writing, before anything starts**

We agree on exactly one workflow to automate — not "your operations," not "everything," one specific process (for example: "when a new lead fills out our contact form, qualify them and notify the right person automatically"). The price ($1,500–$2,500) and the scope are fixed and written down before any work begins. If it''s not in the scope, it''s not part of this Sprint — that''s what keeps the price fixed.

**Week 1 — Build**

We connect to the tools you already use (your inbox, your CRM, your spreadsheet, your invoicing tool — whatever the workflow actually touches) and build the automation against the real scope we agreed on. You''re not evaluating a demo or a mockup; you''re seeing the actual workflow run against real inputs.

**Week 1–2 — Test with your real cases, not ours**

Before anything goes live, we run it against real examples from your business — not generic test data. This is usually where the small edge cases surface (the client who writes their name in lowercase, the lead who submits the form twice), and where we adjust before launch, not after.

**Launch — and 30 days of support**

Once it''s live, you get 30 days of support included, so if something in your business changes or an edge case shows up that we didn''t catch, it gets fixed without a new invoice.

**Then, a real decision point**

At the end of the Sprint, you have one automated workflow running, and a clear, honest view of what it''s worth to you. There''s no long contract locking you into "phase 2" — if you want to automate a second process, or move on to a larger custom software project, that''s a separate, new conversation. If you don''t, nothing renews automatically.

That''s the whole model: one process, a fixed price, a fixed scope, and a real result you can evaluate on its own before deciding what''s next.

[See the Sprint and the Diagnostic in detail →](/start-sprint)'
WHERE blog_post_id = 2 AND lang_code = 'en';

-- Post 2 (ES)
UPDATE cyventra.blog_post_translation SET
  title = 'Cómo Es en la Práctica un Sprint de Automatización con IA a Precio Fijo',
  content = '"Automatización" e "IA" se usan tanto que es válido ser escéptico sobre qué es lo que realmente estás comprando. Así que aquí va una descripción simple de qué pasa durante un Sprint de Automatización con IA de Cyventra, paso a paso.

**Semana 0 — Alcance, por escrito, antes de empezar**

Acordamos exactamente un proceso a automatizar — no "tu operación", no "todo", un proceso específico (por ejemplo: "cuando un lead nuevo llena nuestro formulario de contacto, calificarlo y notificar a la persona correcta automáticamente"). El precio ($1,500–$2,500) y el alcance quedan fijos y por escrito antes de empezar cualquier trabajo. Si no está en el alcance, no es parte de este Sprint — así es como se mantiene el precio fijo.

**Semana 1 — Construcción**

Nos conectamos a las herramientas que ya usas (tu correo, tu CRM, tu hoja de cálculo, tu herramienta de facturación — lo que sea que el proceso realmente toque) y construimos la automatización sobre el alcance real que acordamos. No estás evaluando una demo o un mockup; estás viendo el proceso real funcionando con datos reales.

**Semana 1-2 — Probamos con tus casos reales, no los nuestros**

Antes de poner algo en producción, lo probamos con ejemplos reales de tu negocio — no datos genéricos de prueba. Aquí es donde normalmente aparecen los casos límite pequeños (el cliente que escribe su nombre en minúscula, el lead que envía el formulario dos veces), y donde ajustamos antes del lanzamiento, no después.

**Lanzamiento — y 30 días de soporte**

Una vez que está en vivo, tienes 30 días de soporte incluidos, así que si algo cambia en tu negocio o aparece un caso que no contemplamos, se arregla sin una factura nueva.

**Y luego, una decisión real**

Al final del Sprint, tienes un proceso automatizado funcionando, y una visión clara y honesta de qué tan valioso es para ti. No hay un contrato largo que te ate a una "fase 2" — si quieres automatizar un segundo proceso, o pasar a un proyecto de software a la medida más grande, esa es una conversación nueva y separada. Si no quieres, nada se renueva automáticamente.

Ese es todo el modelo: un proceso, un precio fijo, un alcance fijo, y un resultado real que puedes evaluar por sí solo antes de decidir qué sigue.

[Ve el detalle del Sprint y el Diagnóstico →](/start-sprint)'
WHERE blog_post_id = 2 AND lang_code = 'es';

-- Post 3 (EN)
UPDATE cyventra.blog_post_translation SET
  title = 'Why We''re Not Afraid to Say We''re a New Company',
  content = 'Most companies pitching automation or AI services lead with logos of past clients, case studies, and numbers. We don''t have those yet — Cyventra, Inc. is a young company. We could hide that, but we''d rather explain why it doesn''t have to be a dealbreaker for you.

**A new company isn''t the same as an unverifiable one**

Cyventra, Inc. is a real, registered U.S. corporation (Florida), not a freelancer working under a personal name or an anonymous "agency" with no legal entity behind it. That''s a deliberate choice: when you engage us, you''re contracting with an actual corporation, not an individual who can disappear without a trace.

**What a new company can offer that an established one often can''t**

- **Direct access to the person actually accountable for your project** — not an account manager relaying your requests to a delivery team you''ll never talk to.
- **Full attention on a small number of clients**, instead of being one account among hundreds in someone else''s book of business.
- **A genuine incentive to get your project right** — our future case studies are the ones we''re building right now, starting with yours.

**What we ask in return**

Honesty goes both ways. We''re upfront that we''re new, and in return we ask for the same fixed, small commitment we''d ask of any client: one process, a fixed price, a fixed timeline. Not a leap of faith on a six-figure contract — a two-week bet that''s easy to evaluate on its own merits once it''s done.

Every established company you trust today was once the new company nobody had proof about yet. We''d rather earn that proof honestly, one Sprint at a time, than manufacture it with metrics we can''t back up.

[Start the conversation →](/start-sprint)'
WHERE blog_post_id = 3 AND lang_code = 'en';

-- Post 3 (ES)
UPDATE cyventra.blog_post_translation SET
  title = 'Por Qué No Nos Da Miedo Decir Que Somos una Empresa Nueva',
  content = 'La mayoría de empresas que ofrecen servicios de automatización o IA empiezan mostrando logos de clientes anteriores, casos de estudio y cifras. Nosotros todavía no tenemos eso — Cyventra, Inc. es una empresa joven. Podríamos ocultarlo, pero preferimos explicar por qué eso no tiene por qué ser un impedimento para ti.

**Una empresa nueva no es lo mismo que una empresa no verificable**

Cyventra, Inc. es una corporación de Estados Unidos real y registrada (Florida), no un freelancer trabajando bajo un nombre personal ni una "agencia" anónima sin ninguna entidad legal detrás. Esa es una decisión deliberada: cuando nos contratas, estás contratando a una corporación real, no a una persona que puede desaparecer sin dejar rastro.

**Lo que una empresa nueva puede ofrecer que una establecida muchas veces no puede**

- **Acceso directo a la persona realmente responsable de tu proyecto** — no un gerente de cuenta que traslada tus solicitudes a un equipo de entrega con el que nunca vas a hablar.
- **Atención completa a un número reducido de clientes**, en vez de ser una cuenta más entre cientos en la cartera de alguien más.
- **Un incentivo genuino de hacer bien tu proyecto** — nuestros futuros casos de estudio son los que estamos construyendo ahora mismo, empezando por el tuyo.

**Lo que pedimos a cambio**

La honestidad va en ambos sentidos. Somos directos sobre ser nuevos, y a cambio pedimos el mismo compromiso fijo y pequeño que le pediríamos a cualquier cliente: un proceso, un precio fijo, un tiempo fijo. No es un salto de fe hacia un contrato de seis cifras — es una apuesta de dos semanas fácil de evaluar por sus propios méritos una vez terminada.

Toda empresa establecida en la que confías hoy alguna vez fue la empresa nueva de la que nadie tenía pruebas todavía. Preferimos ganarnos esa prueba de forma honesta, un Sprint a la vez, en vez de fabricarla con métricas que no podemos respaldar.

[Empecemos la conversación →](/start-sprint)'
WHERE blog_post_id = 3 AND lang_code = 'es';

-- Verify
SELECT bp.id, bp.slug, bp.author, bp.published_at, bpt.lang_code, bpt.title
FROM cyventra.blog_post bp
JOIN cyventra.blog_post_translation bpt ON bpt.blog_post_id = bp.id
ORDER BY bp.id, bpt.lang_code;
