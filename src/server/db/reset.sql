-- Drop and recreate Cyventra schema from scratch
-- This script will delete EVERYTHING in the cyventra schema

DROP SCHEMA IF EXISTS cyventra CASCADE;

CREATE SCHEMA cyventra;

COMMENT ON SCHEMA cyventra IS 'Cyventra main application schema';

