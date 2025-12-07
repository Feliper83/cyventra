-- Cyventra Database Schema
-- CREATE TABLE definitions (sin CREATE SCHEMA, eso se hace en reset.sql)

-- 1. Language table
CREATE TABLE IF NOT EXISTS cyventra.language (
    code VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Section table
CREATE TABLE IF NOT EXISTS cyventra.section (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.section_translation (
    id SERIAL PRIMARY KEY,
    section_id INTEGER REFERENCES cyventra.section(id) ON DELETE CASCADE,
    lang_code VARCHAR(10) REFERENCES cyventra.language(code),
    title VARCHAR(255),
    description TEXT,
    cta_text VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(section_id, lang_code)
);

-- 3. Service table
CREATE TABLE IF NOT EXISTS cyventra.service (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    icon_path VARCHAR(255),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.service_translation (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES cyventra.service(id) ON DELETE CASCADE,
    lang_code VARCHAR(10) REFERENCES cyventra.language(code),
    name VARCHAR(255) NOT NULL,
    summary TEXT,
    details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(service_id, lang_code)
);

-- 4. Project table
CREATE TABLE IF NOT EXISTS cyventra.project (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    image_path VARCHAR(255),
    start_date DATE,
    end_date DATE,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.project_translation (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES cyventra.project(id) ON DELETE CASCADE,
    lang_code VARCHAR(10) REFERENCES cyventra.language(code),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, lang_code)
);

-- 5. Pricing plan table
CREATE TABLE IF NOT EXISTS cyventra.pricing_plan (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.pricing_plan_translation (
    id SERIAL PRIMARY KEY,
    pricing_plan_id INTEGER REFERENCES cyventra.pricing_plan(id) ON DELETE CASCADE,
    lang_code VARCHAR(10) REFERENCES cyventra.language(code),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price_from DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(pricing_plan_id, lang_code)
);

-- 6. Contact message table
CREATE TABLE IF NOT EXISTS cyventra.contact_message (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

-- 7. Content image table
CREATE TABLE IF NOT EXISTS cyventra.content_image (
    id SERIAL PRIMARY KEY,
    section_id INTEGER REFERENCES cyventra.section(id) ON DELETE CASCADE,
    project_id INTEGER REFERENCES cyventra.project(id) ON DELETE CASCADE,
    blog_post_id INTEGER,
    about_section_id INTEGER,
    image_path VARCHAR(255) NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. About section table
CREATE TABLE IF NOT EXISTS cyventra.about_section (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.about_section_translation (
    id SERIAL PRIMARY KEY,
    about_section_id INTEGER REFERENCES cyventra.about_section(id) ON DELETE CASCADE,
    lang_code VARCHAR(10) REFERENCES cyventra.language(code),
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(about_section_id, lang_code)
);

-- 9. Blog post table
CREATE TABLE IF NOT EXISTS cyventra.blog_post (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    author VARCHAR(255),
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.blog_post_translation (
    id SERIAL PRIMARY KEY,
    blog_post_id INTEGER REFERENCES cyventra.blog_post(id) ON DELETE CASCADE,
    lang_code VARCHAR(10) REFERENCES cyventra.language(code),
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(blog_post_id, lang_code)
);

-- Add foreign keys only if they don't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_content_image_blog_post') THEN
        ALTER TABLE cyventra.content_image 
        ADD CONSTRAINT fk_content_image_blog_post 
        FOREIGN KEY (blog_post_id) REFERENCES cyventra.blog_post(id) ON DELETE CASCADE;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_content_image_about_section') THEN
        ALTER TABLE cyventra.content_image 
        ADD CONSTRAINT fk_content_image_about_section 
        FOREIGN KEY (about_section_id) REFERENCES cyventra.about_section(id) ON DELETE CASCADE;
    END IF;
END $$;

-- 10. Company table
CREATE TABLE IF NOT EXISTS cyventra.company (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    phone VARCHAR(50),
    website VARCHAR(255),
    address TEXT,
    logo_url VARCHAR(255),
    facebook VARCHAR(255),
    twitter VARCHAR(255),
    linkedin VARCHAR(255),
    instagram VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.company_translation (
    id SERIAL PRIMARY KEY,
    company_id INTEGER REFERENCES cyventra.company(id) ON DELETE CASCADE,
    language VARCHAR(10) REFERENCES cyventra.language(code),
    name VARCHAR(255) NOT NULL,
    slogan VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(company_id, language)
);

-- 11. Job table
CREATE TABLE IF NOT EXISTS cyventra.job (
    id SERIAL PRIMARY KEY,
    location VARCHAR(255),
    skills TEXT[],
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.job_translation (
    id SERIAL PRIMARY KEY,
    job_id INTEGER REFERENCES cyventra.job(id) ON DELETE CASCADE,
    language VARCHAR(10) REFERENCES cyventra.language(code),
    title VARCHAR(255) NOT NULL,
    experience VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(job_id, language)
);

-- 12. Job application table
CREATE TABLE IF NOT EXISTS cyventra.job_application (
    id SERIAL PRIMARY KEY,
    job_id INTEGER REFERENCES cyventra.job(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    "coverLetter" TEXT,
    "resumeUrl" VARCHAR(500),
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending'
);

-- 13. Benefit table
CREATE TABLE IF NOT EXISTS cyventra.benefit (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cyventra.benefit_translation (
    id SERIAL PRIMARY KEY,
    benefit_id INTEGER REFERENCES cyventra.benefit(id) ON DELETE CASCADE,
    language VARCHAR(10) REFERENCES cyventra.language(code),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(benefit_id, language)
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_section_translation_lang ON cyventra.section_translation(lang_code);
CREATE INDEX IF NOT EXISTS idx_service_translation_lang ON cyventra.service_translation(lang_code);
CREATE INDEX IF NOT EXISTS idx_blog_post_translation_lang ON cyventra.blog_post_translation(lang_code);
CREATE INDEX IF NOT EXISTS idx_job_translation_lang ON cyventra.job_translation(language);
CREATE INDEX IF NOT EXISTS idx_benefit_translation_lang ON cyventra.benefit_translation(language);
CREATE INDEX IF NOT EXISTS idx_content_image_section ON cyventra.content_image(section_id);
CREATE INDEX IF NOT EXISTS idx_content_image_blog ON cyventra.content_image(blog_post_id);

