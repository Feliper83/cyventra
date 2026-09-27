-- Splits the flat /solutions list into two buyer-facing concepts: "Services"
-- (quote-based custom engineering: Software Augmentation, AI Solutions, IAM,
-- Custom Software Development) and "Products" (fixed-price, self-serve: AI
-- Automation Sprint). Existing rows default to 'service'; the Sprint is the
-- only one flipped to 'product'.

BEGIN;

ALTER TABLE cyventra.service ADD COLUMN IF NOT EXISTS category VARCHAR(20) NOT NULL DEFAULT 'service';

UPDATE cyventra.service SET category = 'product' WHERE slug = 'ai-automation-sprint';

-- Verify
SELECT slug, category, display_order FROM cyventra.service ORDER BY display_order;

COMMIT;
