-- Adds an optional `intent` column to cyventra.contact_message so leads from
-- /start-sprint (and Solution.jsx's per-service CTA) can record which
-- product/CTA they came from. Nullable, no default enforced -- the existing
-- /contact form (which never sends this field) is completely unaffected.
-- Conventional values used by the app: 'sprint_booking', 'diagnostic_payment',
-- or a service slug (e.g. 'ai-automation-sprint', 'custom-software-development').
-- Not a CHECK/ENUM on purpose: service slugs are already dynamic (DB-driven).

ALTER TABLE cyventra.contact_message
  ADD COLUMN IF NOT EXISTS intent VARCHAR(100);
