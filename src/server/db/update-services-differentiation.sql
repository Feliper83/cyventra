-- Script para actualizar servicios con contenido diferenciado
-- Ejecutar después de seed.sql para mejorar el contenido de servicios

-- ============================================
-- 1. SOFTWARE AUGMENTATION (service_id = 1)
-- ============================================

-- Español: Contenido mejorado con diferenciación
UPDATE cyventra.service_translation
SET 
    name = 'Software Augmentation',
    summary = 'Refuerza tu equipo sin frenar tu crecimiento. Ingenieros senior nearshore con 60% menos costo, misma zona horaria, integración en 48 horas.',
    details = 'Los proyectos tecnológicos requieren rapidez, talento y experiencia. Nuestro servicio de Software Augmentation te conecta con ingenieros especializados en desarrollo, QA, DevOps y arquitectura de software, que se integran como parte de tu equipo remoto.

**Ventajas Únicas:**
- ✅ **Misma Zona Horaria**: Trabaja durante tus horas laborales, no las de ellos
- ✅ **Ahorro de Costos**: Ingenieros senior al precio de nivel medio en USA (60% menos)
- ✅ **Integración Rápida**: 48 horas vs 2-4 semanas típicas de onboarding
- ✅ **Ajuste Cultural**: Equipos bilingües que entienden la cultura empresarial estadounidense
- ✅ **Flexibilidad**: Escala arriba/abajo sin sobrecarga de RRHH
- ✅ **Calidad**: Selección rigurosa: solo el top 10% del talento LATAM

Este modelo te permite ampliar tu capacidad de trabajo sin aumentar tus costos de contratación interna. Nos encargamos de seleccionar perfiles que se adapten a tu cultura empresarial y aporten conocimiento inmediato a los proyectos en curso.

**Tecnologías:** Java, Spring Boot, Node.js, React, Python, Go, AWS, Azure, GCP, Kubernetes, Docker, CI/CD'
WHERE service_id = 1 AND lang_code = 'es';

-- Inglés: Contenido mejorado con diferenciación
UPDATE cyventra.service_translation
SET 
    name = 'Software Augmentation',
    summary = 'Scale your team in 48 hours, not weeks. Senior engineers at 60% lower cost. Same timezone, seamless integration.',
    details = 'Technology projects require speed, talent, and experience. Our Software Augmentation service connects you with specialized engineers in development, QA, DevOps, and software architecture who integrate as part of your remote team.

**Unique Advantages:**
- ✅ **Same Timezone**: Work during your business hours, not theirs
- ✅ **Cost Savings**: Senior talent at mid-level US prices (60% less)
- ✅ **Fast Integration**: 48 hours vs typical 2-4 weeks onboarding
- ✅ **Cultural Fit**: Bilingual teams who understand US business culture
- ✅ **Flexibility**: Scale up/down without HR overhead
- ✅ **Quality**: Rigorous vetting: only top 10% of LATAM talent

This model allows you to expand your work capacity without increasing your internal hiring costs. We handle selecting profiles that fit your corporate culture and bring immediate knowledge to ongoing projects.

**Stop paying Silicon Valley rates for remote teams in different timezones.** Get enterprise-grade engineers who work when you work, at LATAM prices, with US quality standards.

**Technologies:** Java, Spring Boot, Node.js, React, Python, Go, AWS, Azure, GCP, Kubernetes, Docker, CI/CD'
WHERE service_id = 1 AND lang_code = 'en';

-- ============================================
-- 2. ARTIFICIAL INTELLIGENCE SOLUTIONS (service_id = 2)
-- ============================================

-- Español: Contenido mejorado
UPDATE cyventra.service_translation
SET 
    name = 'Soluciones de Inteligencia Artificial',
    summary = 'IA práctica para el crecimiento empresarial. De la preparación de datos al despliegue en producción en 8-12 semanas. ROI medible.',
    details = 'La Inteligencia Artificial no es solo una tendencia: es la herramienta que está redefiniendo el futuro empresarial. En Cyventra aplicamos modelos de IA que permiten automatizar procesos, detectar patrones invisibles y mejorar la toma de decisiones.

**Enfoque Práctico:**
- ✅ **IA que Funciona**: Soluciones que resuelven problemas reales de negocio, no tecnología por tecnología
- ✅ **Stack Completo**: Ingeniería de datos → Modelos ML → Despliegue en producción → Monitoreo
- ✅ **Específico por Industria**: Soluciones pre-construidas para e-commerce, salud, finanzas
- ✅ **Transparencia**: IA explicable - entiende por qué los modelos toman decisiones
- ✅ **Rentable**: IA personalizada a 40% menos que agencias estadounidenses
- ✅ **Despliegue Rápido**: MVP en 4-6 semanas, producción en 8-12 semanas

**Soluciones que Ofrecemos:**
- Asistentes virtuales inteligentes
- Motores de recomendación para e-commerce
- Modelos predictivos de demanda y comportamiento
- Análisis automatizado de grandes volúmenes de datos
- Integración con LLMs (OpenAI, Anthropic)
- Computer Vision y procesamiento de imágenes
- NLP y chatbots avanzados

**La mayoría de proyectos de IA fallan porque son demasiado complejos o costosos.** Construimos IA práctica que funciona: rápida, asequible y enfocada en tu ROI.

**Tecnologías:** TensorFlow, PyTorch, OpenAI API, Anthropic Claude, LangChain, Hugging Face, AWS SageMaker, Google Cloud AI'
WHERE service_id = 2 AND lang_code = 'es';

-- Inglés: Contenido mejorado
UPDATE cyventra.service_translation
SET 
    name = 'Artificial Intelligence Solutions',
    summary = 'Practical AI for business growth. From data preparation to production deployment in 8-12 weeks. Measurable ROI.',
    details = 'Artificial Intelligence is no longer just a trend — it''s a tool reshaping the business landscape. At Cyventra, we design AI-powered solutions that automate processes, uncover hidden patterns, and enhance decision-making.

**Practical Focus:**
- ✅ **AI That Works**: Solutions that solve real business problems, not tech for tech''s sake
- ✅ **Full-Stack AI**: Data engineering → ML models → Production deployment → Monitoring
- ✅ **Industry-Specific**: Pre-built solutions for e-commerce, healthcare, finance
- ✅ **Transparency**: Explainable AI — understand why models make decisions
- ✅ **Cost-Effective**: Custom AI at 40% less than US agencies
- ✅ **Fast Deployment**: MVP in 4-6 weeks, production in 8-12 weeks

**Solutions We Offer:**
- Intelligent virtual assistants
- E-commerce recommendation engines
- Predictive demand and behavior models
- Automated analysis of large-scale data
- LLM integration (OpenAI, Anthropic)
- Computer Vision and image processing
- Advanced NLP and chatbots

**Most AI projects fail because they''re too complex or expensive.** We build practical AI that works — fast, affordable, and focused on your ROI.

**Technologies:** TensorFlow, PyTorch, OpenAI API, Anthropic Claude, LangChain, Hugging Face, AWS SageMaker, Google Cloud AI'
WHERE service_id = 2 AND lang_code = 'en';

-- ============================================
-- 3. IDENTITY & ACCESS MANAGEMENT (service_id = 3)
-- ============================================

-- Español: Contenido mejorado
UPDATE cyventra.service_translation
SET 
    name = 'Identity & Access Management (IAM)',
    summary = 'Seguridad sin sacrificar productividad. Arquitectura zero-trust, SSO sin interrupciones, listo para cumplimiento. Desplegado en 4-6 semanas.',
    details = 'La seguridad comienza en la identidad. La seguridad de la información ya no es opcional. En Cyventra protegemos tu empresa con soluciones avanzadas de Identity & Access Management (IAM) que aseguran que solo las personas correctas tengan acceso a los recursos correctos.

**Implementación Sin Interrupciones:**
- ✅ **Zero-Downtime**: Implementa IAM sin interrumpir operaciones diarias
- ✅ **Listo para Cumplimiento**: HIPAA, SOC 2, GDPR integrados desde el inicio
- ✅ **Fácil de Usar**: SSO que los usuarios realmente quieren usar
- ✅ **Rentable**: Seguridad empresarial a precios de mercado medio
- ✅ **Implementación Rápida**: 4-6 semanas vs 3-6 meses típicos
- ✅ **Multi-Cloud**: Funciona en AWS, Azure, GCP

Implementamos autenticación multifactor, gestión de privilegios, control de acceso y monitoreo continuo — siempre alineados con estándares internacionales como HIPAA, SOC 2 y GDPR.

**La seguridad no debería significar sacrificar productividad.** Implementamos soluciones IAM que protegen tus datos mientras mantienen a tu equipo productivo.

**Tecnologías:** AWS IAM/Cognito, Azure AD/Entra ID, Okta, Auth0, Keycloak, Multi-Factor Authentication (MFA), Biometric Authentication'
WHERE service_id = 3 AND lang_code = 'es';

-- Inglés: Contenido mejorado
UPDATE cyventra.service_translation
SET 
    name = 'Identity & Access Management (IAM)',
    summary = 'Security without sacrificing productivity. Zero-trust architecture, seamless SSO, compliance-ready. Deployed in 4-6 weeks.',
    details = 'Security starts with identity. Information security is no longer optional. At Cyventra, we protect your company with advanced Identity & Access Management (IAM) solutions that ensure only the right people have access to the right resources.

**Zero-Downtime Deployment:**
- ✅ **Zero-Downtime**: Implement IAM without disrupting daily operations
- ✅ **Compliance-Ready**: HIPAA, SOC 2, GDPR compliance built-in
- ✅ **User-Friendly**: SSO that users actually want to use
- ✅ **Cost-Effective**: Enterprise security at mid-market prices
- ✅ **Fast Implementation**: 4-6 weeks vs typical 3-6 months
- ✅ **Multi-Cloud**: Works across AWS, Azure, GCP

We implement multifactor authentication, privilege management, access control, and continuous monitoring — always aligned with international standards such as HIPAA, SOC 2, and GDPR.

**Security shouldn''t mean sacrificing productivity.** We implement IAM solutions that protect your data while keeping your team productive.

**Technologies:** AWS IAM/Cognito, Azure AD/Entra ID, Okta, Auth0, Keycloak, Multi-Factor Authentication (MFA), Biometric Authentication'
WHERE service_id = 3 AND lang_code = 'en';

-- ============================================
-- 4. CUSTOM SOFTWARE DEVELOPMENT (service_id = 4)
-- ============================================

-- Español: Contenido mejorado
UPDATE cyventra.service_translation
SET 
    name = 'Desarrollo de Software Personalizado',
    summary = 'Software moderno construido correctamente. Cloud-native, escalable y mantenible. Construimos software que crece con tu negocio.',
    details = 'Cada empresa tiene procesos, metas y desafíos propios. En Cyventra diseñamos y desarrollamos software a la medida que refleja la identidad de tu organización. Nos alejamos de las soluciones genéricas y construimos plataformas que se integran con tus operaciones, evolucionan contigo y generan un impacto real en la productividad.

**Arquitectura Moderna:**
- ✅ **Stack Moderno**: React 19, Node.js 20, Serverless — tecnología de vanguardia
- ✅ **Cloud-First**: Construido para AWS, Azure, GCP desde el día uno
- ✅ **Arquitectura Escalable**: Maneja 10 usuarios o 10 millones de usuarios
- ✅ **Código Mantenible**: Código limpio que tu equipo puede entender
- ✅ **Entrega Rápida**: MVP en 4-8 semanas, desarrollo iterativo
- ✅ **Rentable**: 60% menos que agencias estadounidenses, misma calidad

**Nuestros proyectos abarcan:**
- Aplicaciones web escalables
- Sistemas empresariales internos
- Plataformas móviles
- Integraciones con APIs externas
- Modernización de sistemas heredados
- Arquitectura de microservicios
- Aplicaciones serverless

Aplicamos metodologías ágiles, lo que nos permite entregarte resultados en menos tiempo y con mayor flexibilidad.

**No construimos software que funciona hoy — construimos software que escala mañana.** Arquitectura moderna, mejores prácticas y calidad de código que resiste el paso del tiempo.

**Tecnologías:** React 19, Next.js, Node.js 20, Python, Java 17, Go, AWS Lambda, Azure Functions, GCP Cloud Run, PostgreSQL, MongoDB, Redis, Kubernetes, Docker'
WHERE service_id = 4 AND lang_code = 'es';

-- Inglés: Contenido mejorado
UPDATE cyventra.service_translation
SET 
    name = 'Custom Software Development',
    summary = 'Modern software built right. Cloud-native, scalable, and maintainable. We build software that grows with your business.',
    details = 'Every company has its own processes, goals, and challenges. At Cyventra, we design and build custom software that reflects the identity of your organization. We move away from generic solutions and create platforms that integrate seamlessly into your operations, evolve with you, and deliver measurable productivity gains.

**Modern Architecture:**
- ✅ **Modern Stack**: React 19, Node.js 20, Serverless — cutting-edge tech
- ✅ **Cloud-First**: Built for AWS, Azure, GCP from day one
- ✅ **Scalable Architecture**: Handles 10 users or 10 million users
- ✅ **Maintainable Code**: Clean code that your team can understand
- ✅ **Fast Delivery**: MVP in 4-8 weeks, iterative development
- ✅ **Cost-Effective**: 60% less than US agencies, same quality

**Our projects range from:**
- Scalable web applications
- Internal enterprise systems
- Mobile platforms
- API integrations
- Legacy system modernization
- Microservices architecture
- Serverless applications

Using agile methodologies, we deliver results faster, with more flexibility.

**We don''t build software that works today — we build software that scales tomorrow.** Modern architecture, best practices, and code quality that stands the test of time.

**Technologies:** React 19, Next.js, Node.js 20, Python, Java 17, Go, AWS Lambda, Azure Functions, GCP Cloud Run, PostgreSQL, MongoDB, Redis, Kubernetes, Docker'
WHERE service_id = 4 AND lang_code = 'en';

-- Verificar cambios
SELECT 
    st.service_id,
    s.slug,
    st.lang_code,
    st.name,
    st.summary,
    LEFT(st.details, 100) as details_preview
FROM cyventra.service_translation st
JOIN cyventra.service s ON s.id = st.service_id
ORDER BY st.service_id, st.lang_code;

