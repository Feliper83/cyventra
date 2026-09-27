-- Replaces the 3 "talent network" tracks (a soft rename of the original fake
-- vacancies) with tracks that actually map to what Cyventra sells today:
-- AI Automation Sprint, Custom Software Development, AI Solutions. "Mobile"
-- and "Database/Data" don't correspond to any current service line -- they
-- were inherited from the pre-pivot staff-augmentation model. Keeps the same
-- 3 rows (ids 1-3) so JobApplicationForm.jsx's hardcoded `positions` dropdown
-- (values 1/2/3) still lines up with real cyventra.job ids.

BEGIN;

UPDATE cyventra.job SET
  location = 'Remote - LATAM',
  skills = ARRAY['n8n / Zapier / Make', 'LLM APIs (OpenAI, Anthropic)', 'Webhooks / REST integrations', 'Python / Node.js']
WHERE id = 1;

UPDATE cyventra.job SET
  location = 'Remote - LATAM',
  skills = ARRAY['React', 'Node.js', 'PostgreSQL', 'AWS / Serverless']
WHERE id = 2;

UPDATE cyventra.job SET
  location = 'Remote - LATAM',
  skills = ARRAY['Python', 'RAG / LLM integration', 'Machine learning', 'Cloud ML (AWS / GCP)']
WHERE id = 3;

UPDATE cyventra.job_translation SET
  title = 'AI Automation & Integration Engineer',
  experience = 'Apply anytime — we reach out when a matching project comes up'
WHERE job_id = 1 AND language = 'en';

UPDATE cyventra.job_translation SET
  title = 'Ingeniería de Automatización e Integración con IA',
  experience = 'Aplica cuando quieras — te contactamos cuando surge un proyecto que encaje'
WHERE job_id = 1 AND language = 'es';

UPDATE cyventra.job_translation SET
  title = 'Full-Stack Engineer (React / Node.js)',
  experience = 'Apply anytime — we reach out when a matching project comes up'
WHERE job_id = 2 AND language = 'en';

UPDATE cyventra.job_translation SET
  title = 'Ingeniería Full-Stack (React / Node.js)',
  experience = 'Aplica cuando quieras — te contactamos cuando surge un proyecto que encaje'
WHERE job_id = 2 AND language = 'es';

UPDATE cyventra.job_translation SET
  title = 'AI/ML Solutions Engineer',
  experience = 'Apply anytime — we reach out when a matching project comes up'
WHERE job_id = 3 AND language = 'en';

UPDATE cyventra.job_translation SET
  title = 'Ingeniería de Soluciones de IA/ML',
  experience = 'Aplica cuando quieras — te contactamos cuando surge un proyecto que encaje'
WHERE job_id = 3 AND language = 'es';

-- Verify
SELECT j.id, j.location, j.skills, jt.language, jt.title, jt.experience
FROM cyventra.job j
JOIN cyventra.job_translation jt ON jt.job_id = j.id
ORDER BY j.id, jt.language;

COMMIT;
