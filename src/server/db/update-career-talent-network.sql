-- Replaces the 3 fake, stale job postings (iOS Developer / Full Stack Engineer /
-- DBA Engineer, with invented years-of-experience requirements) with 3 general
-- "talent network" tracks. Cyventra has no fixed headcount today -- engineers
-- are sourced from LATAM per-project (nearshore model) -- so specific open
-- reqs with fabricated seniority requirements were misleading. This keeps the
-- same 3 rows (ids 1-3) so JobApplicationForm.jsx's hardcoded `positions`
-- dropdown (values 1/2/3) still lines up with real cyventra.job ids.

UPDATE cyventra.job SET
  location = 'Remote - LATAM',
  skills = ARRAY['React', 'Node.js', 'Java / Spring Boot', 'REST APIs']
WHERE id = 1;

UPDATE cyventra.job SET
  location = 'Remote - LATAM',
  skills = ARRAY['Swift / SwiftUI', 'Kotlin', 'React Native']
WHERE id = 2;

UPDATE cyventra.job SET
  location = 'Remote - LATAM',
  skills = ARRAY['PostgreSQL', 'Oracle', 'Data pipelines', 'Cloud infrastructure']
WHERE id = 3;

UPDATE cyventra.job_translation SET
  title = 'Full-Stack / Web Engineering',
  experience = 'Apply anytime — we reach out when a matching project comes up'
WHERE job_id = 1 AND language = 'en';

UPDATE cyventra.job_translation SET
  title = 'Ingeniería Full-Stack / Web',
  experience = 'Aplica cuando quieras — te contactamos cuando surge un proyecto que encaje'
WHERE job_id = 1 AND language = 'es';

UPDATE cyventra.job_translation SET
  title = 'Mobile Engineering (iOS / Android)',
  experience = 'Apply anytime — we reach out when a matching project comes up'
WHERE job_id = 2 AND language = 'en';

UPDATE cyventra.job_translation SET
  title = 'Ingeniería Mobile (iOS / Android)',
  experience = 'Aplica cuando quieras — te contactamos cuando surge un proyecto que encaje'
WHERE job_id = 2 AND language = 'es';

UPDATE cyventra.job_translation SET
  title = 'Database / Data Engineering',
  experience = 'Apply anytime — we reach out when a matching project comes up'
WHERE job_id = 3 AND language = 'en';

UPDATE cyventra.job_translation SET
  title = 'Ingeniería de Bases de Datos / Data',
  experience = 'Aplica cuando quieras — te contactamos cuando surge un proyecto que encaje'
WHERE job_id = 3 AND language = 'es';

-- Verify
SELECT j.id, j.location, j.skills, jt.language, jt.title, jt.experience
FROM cyventra.job j
JOIN cyventra.job_translation jt ON jt.job_id = j.id
ORDER BY j.id, jt.language;
