import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    home: "Home",
                    solutions: "Solutions",
                    solutions_title: "Our Solutions",
                    solutions_view: "View more",
                    about: "About Us",
                    growth: "Professional growth",
                    blog: "CybeBlog",
                    title: "Software Solutions For",
                    subtitle: "Small Business, Startups, Enterprise",
                    description:
                        "Boost your business with cutting-edge software solutions tailored to the needs of modern enterprises.",
                    button: "Learn More",
                    hero: {
                        badge: "Leading Tech Solutions in USA & LATAM",
                        title_part1: "Transforming Ideas into",
                        title_highlight: "Innovative Software",
                        description: "We develop custom technology solutions that drive your business growth. Experts in software development, cloud computing, AI and automation.",
                        cta_primary: "Start Project",
                        cta_secondary: "View Solutions"
                    },
                    stats: {
                        projects: "Completed Projects",
                        clients: "Satisfied Clients",
                        satisfaction: "Satisfaction"
                    },
                    navbar: {
                        contact_menu: "Contact"

                    },
                    blogs:{
                        lookArticle: "View article",
                        notAvailable: "There are not blogs available",
                        title: "Our Blogs",
                        subtitle: "Discover articles about technology, software development, innovation and best practices in the industry.",
                        backToBlogs: "Back to Blogs"
                    },
                    contact: {
                        title: "Contacts",
                        button_title: "Create",
                        name: "Name",
                        email: "Email",
                        phone: "Phone",
                        message: "Message",
                        subtitle: "We're here to help. Send us a message and we'll get back to you as soon as possible.",
                        name_placeholder: "Your full name",
                        email_placeholder: "your@email.com",
                        phone_placeholder: "+1 (555) 123-4567",
                        message_placeholder: "Tell us about your project...",
                        success: "Message sent successfully!",
                        optional: "optional"
                    },
                    jobs: {
                      title: "Employment opportunities",
                        applyPosition:"Apply Now"
                    },
                    benefit:{
                      title: "Benefit",
                      description: "Discover the perks of being part of our people-first team."
                    },
                    career:{
                        title: "Grow Through Transformation",
                        description: "It's good to be part of something, but being part of a great team means achieving the impossible. Join Cyventra and turn your purpose into impact.",
                        sloganTitle: "Benefits of Cyventra Team",
                        sloganDescription: "We are a family that works hard and enjoys life. We foster the professional and personal growth of our team, turning each workday into a space of well-being and value for everyone."
                    },
                    footer: {
                        about_title: "About Cyventra",
                        about_text: "We build custom software solutions for small businesses, startups, and enterprises across the USA & LATAM.",
                        about_slogan: "Trusted. Innovative. Reliable.",
                        links_title: "Quick Links",
                        link_home: "Home",
                        link_solutions: "Solutions",
                        link_abouts: "Acerca de",
                        link_careers: "Career Growth",
                        link_blogs: "Blogs",
                        contact_title: "Contact",
                        contact_cta: "Request a Quote",
                        copyright: "All Rights Reserved."
                    },
                    solution: {
                        subtitle: "Solution",
                        not_found: "Content not found.",
                        back: "Back",
                        back_to_solutions: "← Back to Solutions",
                        tag_blog: "Blog",
                        tag_technology: "Technology"
                    },
                    apply: {
                        title: "Job Application Form",
                        subtitle: "Complete the form below to apply for the position",
                        full_name: "Full Name",
                        full_name_placeholder: "Enter your full name",
                        email: "Email",
                        email_placeholder: "Enter your email",
                        phone: "Phone",
                        phone_placeholder: "Enter your phone number",
                        position: "Position Applying For",
                        position_placeholder: "Select a position",
                        resume_url: "Resume URL",
                        resume_url_placeholder: "Enter your resume URL",
                        cover_letter: "Cover Letter",
                        cover_letter_placeholder: "Write your cover letter",
                        submit: "Submit Application",
                        success: "Application sent successfully!",
                        error: "Error",
                        error_unknown: "Unknown error",
                        error_something_wrong: "Something went wrong."
                    }
                }
            },
            es: {
                translation: {
                    home: "Inicio",
                    solutions: "Soluciones",
                    solutions_title: "Nuestras Soluciones",
                    solutions_view: "Ver más",
                    about: "Sobre nosotros",
                    growth: "Crecimiento profesional",
                    blog: "CybeBlog",
                    title: "Soluciones de Software Para",
                    subtitle: "Pequeñas Empresas, Startups, Corporaciones",
                    description:
                        "Impulsa tu negocio con soluciones de software innovadoras adaptadas a las necesidades de las empresas modernas.",
                    button: "Saber más",
                    hero: {
                        badge: "Líderes en Soluciones Tecnológicas en USA & LATAM",
                        title_part1: "Transformando Ideas en",
                        title_highlight: "Software Innovador",
                        description: "Desarrollamos soluciones tecnológicas personalizadas que impulsan el crecimiento de tu negocio. Expertos en desarrollo de software, cloud computing, IA y automatización.",
                        cta_primary: "Comenzar Proyecto",
                        cta_secondary: "Ver Soluciones"
                    },
                    stats: {
                        projects: "Proyectos Completados",
                        clients: "Clientes Satisfechos",
                        satisfaction: "Satisfacción"
                    },
                    navbar: {
                        contact_menu: "Contacto"
                    },
                    blogs:{
                        lookArticle: "Ver Articulo",
                        notAvailable: "No hay blogs disponibles",
                        title: "Nuestros Blogs",
                        subtitle: "Descubre artículos sobre tecnología, desarrollo de software, innovación y mejores prácticas en la industria.",
                        backToBlogs: "Volver a Blogs"
                    },
                    contact: {
                        title: "Contactos",
                        button_title: "Crear",
                        name: "Nombre",
                        email: "Email",
                        phone: "Telefono",
                        message: "Mensaje",
                        subtitle: "Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.",
                        name_placeholder: "Tu nombre completo",
                        email_placeholder: "tu@email.com",
                        phone_placeholder: "+1 (555) 123-4567",
                        message_placeholder: "Cuéntanos sobre tu proyecto...",
                        success: "¡Mensaje enviado exitosamente!",
                        optional: "opcional"
                    },
                    jobs: {
                        title: "Opotunidades de empleo",
                        applyPosition:"Aplicar"
                    },
                    benefit:{
                        title: "Beneficios",
                        description: "Conoce los beneficios de ser parte de nuestro equipo humano."
                    },
                    career:{
                        title: "Transforma para crecer",
                        description: "Ser parte de algo es bueno, pero ser parte de un gran equipo es lograr lo que otros consideran impensable. Únete y desarrolla tu propósito en Cyventra.",
                        sloganTitle: "Beneficios de Cyventra Team",
                        sloganDescription: "Somos una familia que trabaja y disfruta la vida. Promovemos el desarrollo profesional y personal de nuestro equipo, haciendo de cada día de trabajo un espacio de bienestar y valor para todos."
                    },
                    footer: {
                        about_title: "Acerca de Cyventra",
                        about_text: "Creamos soluciones de software a medida para pequeñas empresas, startups y corporaciones en USA y LATAM.",
                        about_slogan: "Confiable. Innovadora. Segura.",
                        links_title: "Enlaces Rápidos",
                        link_home: "Inicio",
                        link_solutions: "Soluciones",
                        link_abouts: "Acerca de",
                        link_careers: "Carrera",
                        link_blogs: "Blogs",
                        contact_title: "Contacto",
                        contact_cta: "Solicitar Cotización",
                        copyright: "Todos los derechos reservados."
                    },
                    solution: {
                        subtitle: "Solución",
                        not_found: "No se encontró el contenido del artículo.",
                        back: "Volver",
                        back_to_solutions: "← Volver a Solutions",
                        tag_blog: "Blog",
                        tag_technology: "Tecnología"
                    },
                    apply: {
                        title: "Formulario de Aplicación",
                        subtitle: "Completa el formulario a continuación para aplicar a la posición",
                        full_name: "Nombre Completo",
                        full_name_placeholder: "Ingresa tu nombre completo",
                        email: "Correo Electrónico",
                        email_placeholder: "Ingresa tu correo electrónico",
                        phone: "Teléfono",
                        phone_placeholder: "Ingresa tu número de teléfono",
                        position: "Posición a la que Aplicas",
                        position_placeholder: "Selecciona una posición",
                        resume_url: "URL del Currículum",
                        resume_url_placeholder: "Ingresa la URL de tu currículum",
                        cover_letter: "Carta de Presentación",
                        cover_letter_placeholder: "Escribe tu carta de presentación",
                        submit: "Enviar Aplicación",
                        success: "¡Aplicación enviada exitosamente!",
                        error: "Error",
                        error_unknown: "Error desconocido",
                        error_something_wrong: "Algo salió mal."
                    }
                }
            }
        },
        lng: "en", // idioma inicial
        fallbackLng: "es",
        interpolation: { escapeValue: false }
    });

export default i18n;
