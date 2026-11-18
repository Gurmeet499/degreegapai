// Core TypeScript Type Definitions for DegreeGapAI
// Defines all entities, agent interfaces, and gap analysis structures

// Defines valid classifications for skill alignment between curriculum and industry
export type GapClassification = 'strongly_aligned' | 'partially_aligned' | 'missing' | 'emerging';

// Defines priority tiers for generated student learning recommendations
export type RecommendationPriority = 'HIGH' | 'MEDIUM' | 'LOW';

// Interface representing an extracted or canonical skill
export interface Skill {
  // Unique identifier for the skill
  id: string;
  // Standard canonical name of the skill (e.g., 'TypeScript', 'Docker')
  name: string;
  // Functional technical category (e.g., 'Frontend', 'DevOps', 'Theoretical CS')
  category: string;
  // Known aliases or common abbreviations (e.g., ['TS', 'Typescript.js'])
  aliases: string[];
  // Origin source of the skill (e.g., 'curriculum', 'job_market', 'both')
  source: 'curriculum' | 'job_market' | 'both';
  // Optional confidence score of extraction between 0 and 1
  confidence?: number;
  // Optional description of what this skill encompasses
  description?: string;
}

// Interface representing a single course within a BSCS curriculum
export interface Course {
  // Official course code (e.g., 'CS-101', 'CS-302')
  code: string;
  // Full descriptive title of the course
  title: string;
  // Comprehensive course description or syllabus summary
  description: string;
  // Number of credit hours (e.g., 3, 4)
  creditHours: number;
  // Semester recommended in the standard degree roadmap (1 through 8)
  semester: number;
  // List of technical skills taught or covered in this course
  extractedSkills: string[];
  // Optional list of prerequisites required for this course
  prerequisites?: string[];
}

// Interface representing a Pakistani university BSCS degree program
export interface University {
  // Unique identifier for the university program
  id: string;
  // Full name of the institution (e.g., 'National University of Computer and Emerging Sciences')
  name: string;
  // Short acronym or familiar abbreviation (e.g., 'FAST-NUCES', 'NUST', 'HEC')
  shortName: string;
  // Campus location (e.g., 'Islamabad', 'Lahore', 'Karachi', 'National Standard')
  campus: string;
  // Specific program name (e.g., 'Computer Science', 'Software Engineering')
  program: string;
  // Degree credential awarded (e.g., 'BSCS', 'BS Software Engineering')
  degree: string;
  // Reference name or URL of the analyzed curriculum document
  curriculumDocument: string;
  // Academic revision year of the curriculum (e.g., 2023, 2024)
  curriculumYear: number;
  // Array of all courses offered in this curriculum
  courses: Course[];
  // Aggregate list of all normalized skills extracted from this curriculum
  totalExtractedSkills: string[];
  // Flag indicating if this is genuine official data or labeled demo data
  isDemoData: boolean;
}

// Interface representing an industry software engineering job listing
export interface Job {
  // Unique identifier for the job post
  id: string;
  // Hiring software organization (e.g., 'Systems Ltd', '10Pearls', 'Arbisoft')
  company: string;
  // Official job title (e.g., 'Associate Software Engineer', 'Full Stack Developer')
  title: string;
  // Work location or remote policy (e.g., 'Lahore, Pakistan', 'Remote (Pakistan)')
  location: string;
  // Primary job board or listing origin (e.g., 'LinkedIn', 'Rozee.pk', 'Company Portal')
  source: string;
  // Formatted date when the job vacancy was published
  postingDate: string;
  // Full raw job description text
  description: string;
  // List of extracted normalized skills required or preferred by the role
  extractedSkills: string[];
  // Required experience level (e.g., 'Entry Level (0-1 yrs)', 'Mid Level (2-4 yrs)')
  experienceLevel: string;
  // Core tech stack tags
  tags: string[];
}

// Interface detailing an evidence-backed match between an industry requirement and curriculum
export interface SkillMatchEvidence {
  // Canonical skill name being evaluated
  skillName: string;
  // Assigned alignment classification
  classification: GapClassification;
  // Alignment score percentage (0 to 100)
  matchScore: number;
  // Code and title of matching course if found
  matchedCourse?: {
    code: string;
    title: string;
    semester: number;
    relevantExcerpt: string;
  };
  // Verifiable quotes and snippets from job descriptions demanding this skill
  jobEvidence: {
    company: string;
    jobTitle: string;
    quote: string;
  }[];
  // Frequency of this skill across the analyzed job market dataset
  jobDemandFrequency: number;
  // Category of the skill (e.g., 'Backend', 'DevOps')
  category: string;
  // Actionable advice for bridging or continuing mastery of this skill
  actionableRecommendation: string;
}

// Interface for personalized student learning recommendations
export interface StudentRecommendation {
  // Unique recommendation ID
  id: string;
  // Targeted skill name to acquire
  skillName: string;
  // Functional category
  category: string;
  // Urgency classification (HIGH, MEDIUM, LOW)
  priority: RecommendationPriority;
  // Concise explanation of commercial relevance
  whyItMatters: string;
  // Real quotes and demand percentages from analyzed jobs
  jobMarketEvidence: string;
  // Honest evaluation of existing degree curriculum coverage
  currentCurriculumCoverage: string;
  // Practical hands-on project to build for portfolio evidence
  suggestedProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
  // Foundational skills that should be learned before starting
  prerequisites: string[];
  // Estimated learning investment in hours
  estimatedHours: number;
}

// Interface representing the complete output of an agentic gap analysis
export interface GapAnalysisResult {
  // Unique analysis execution identifier
  id: string;
  // Timestamp when the analysis was performed
  timestamp: string;
  // University program analyzed
  university: University;
  // Identifier and description of the job dataset used
  jobDatasetName: string;
  // Number of job listings analyzed in this batch
  jobsAnalyzedCount: number;
  // Overall quantified curriculum-to-industry alignment score (0 - 100%)
  overallAlignmentScore: number;
  // Array of skills with strong curricular presence and high industry alignment
  stronglyAlignedSkills: SkillMatchEvidence[];
  // Array of skills with theoretical foundation but missing practical tools
  partiallyAlignedSkills: SkillMatchEvidence[];
  // Array of critical industry skills totally absent from the curriculum
  missingSkills: SkillMatchEvidence[];
  // Array of rapidly emerging technologies in modern industry
  emergingSkills: SkillMatchEvidence[];
  // Breakdown of alignment percentage by category
  categoryAlignment: {
    category: string;
    curriculumScore: number;
    industryDemand: number;
    gapScore: number;
  }[];
  // Generated personalized student recommendations
  recommendations: StudentRecommendation[];
  // Summary metadata regarding processing mode (e.g., 'Gemini Live' or 'Deterministic Engine')
  executionMode: 'GEMINI_LIVE' | 'DETERMINISTIC_ENGINE';
}

// Interface for document ingestion tracking
export interface IngestedDocument {
  // Unique document record ID
  id: string;
  // Original uploaded or loaded file name
  fileName: string;
  // Source provenance (e.g., 'HEC Official PDF', 'Rozee.pk Export')
  source: string;
  // Type classification of the document
  documentType: 'CURRICULUM_PDF' | 'CURRICULUM_TEXT' | 'JOB_CSV' | 'JOB_JSON' | 'JOB_TEXT';
  // Upload or ingestion date
  uploadDate: string;
  // Document processing lifecycle state
  processingStatus: 'PENDING' | 'EXTRACTING' | 'NORMALIZING' | 'COMPLETED' | 'FAILED';
  // Human-readable status message or error detail
  extractedTextStatus: string;
  // Raw or extracted text sample
  previewText?: string;
  // Number of entities (courses or jobs) successfully identified
  entitiesExtractedCount?: number;
  // Explicit tag indicating demo vs user provided
  isDemoData: boolean;
}
