// Supabase Architecture and Client Scaffold
// Prepared for Supabase cloud database integration without blocking the local MVP execution

// Import AppConfig to safely read Supabase connection parameters
import { AppConfig } from './env';

// Database Table Names definition matching Supabase database schemas
export const SUPABASE_TABLES = {
  // Table storing registered university programs
  UNIVERSITIES: 'universities',
  // Table storing individual courses and curriculum syllabi
  COURSES: 'courses',
  // Table storing scraped and uploaded software engineering job postings
  JOBS: 'jobs',
  // Table storing normalized skill taxonomy and aliases
  SKILLS: 'skills',
  // Table storing executed gap analysis runs and alignment scores
  ANALYSES: 'gap_analyses',
  // Table storing student recommendations
  RECOMMENDATIONS: 'recommendations',
} as const;

// Supabase client interface abstraction
export interface SupabaseClientState {
  // Flag indicating if cloud connection is active
  isConfigured: boolean;
  // Endpoint URL if configured
  url: string;
}

// Global Supabase status object
export const supabaseState: SupabaseClientState = {
  // Check if credentials exist in environment
  isConfigured: AppConfig.hasSupabase(),
  // Read configured endpoint URL
  url: AppConfig.supabaseUrl,
};

// SQL Schema Definition for easy manual or automated migration in Supabase Dashboard
export const SUPABASE_SQL_SCHEMA = `
-- DegreeGapAI Supabase Migration Schema
-- Execute in Supabase SQL Editor if cloud deployment is desired

CREATE TABLE IF NOT EXISTS universities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  campus TEXT NOT NULL,
  program TEXT NOT NULL,
  degree TEXT NOT NULL,
  curriculum_document TEXT,
  curriculum_year INT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  university_id UUID REFERENCES universities(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  credit_hours INT NOT NULL,
  semester INT NOT NULL,
  extracted_skills TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT NOT NULL,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  source TEXT NOT NULL,
  posting_date DATE,
  description TEXT NOT NULL,
  extracted_skills TEXT[] DEFAULT '{}',
  experience_level TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  aliases TEXT[] DEFAULT '{}',
  source TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS gap_analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  university_id UUID REFERENCES universities(id),
  overall_score NUMERIC(5,2) NOT NULL,
  execution_mode TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
`;
