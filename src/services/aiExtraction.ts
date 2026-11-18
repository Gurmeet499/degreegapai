// Multi-Agent AI Skill Extraction Engine for DegreeGapAI
// Contains:
// 1. Curriculum Extraction Agent
// 2. Job Requirement Agent
// 3. Skill Normalization Agent
// Supports live Gemini inference with verified deterministic fallback

// Import CANONICAL_SKILLS and normalizeSkillName
import { CANONICAL_SKILLS, normalizeSkillName } from '../data/skillsTaxonomy';
// Import Course and Job types
import { Course, Job, Skill } from '../types';
// Import GeminiService
import { GeminiService } from './geminiService';

// Result interface for skill extraction
export interface ExtractedSkillResult {
  // Canonical normalized skill name
  skillName: string;
  // Category of the skill
  category: string;
  // Confidence score between 0.5 and 1.0
  confidence: number;
  // Exact source snippet or excerpt justifying this extraction
  sourceEvidence: string;
}

// 1. Curriculum Extraction Agent
export class CurriculumExtractionAgent {
  // Extract technical skills and competencies from course descriptions
  public static async extractFromCourse(course: Course): Promise<ExtractedSkillResult[]> {
    // Generate fallback extraction using deterministic matching
    const fallback = (): ExtractedSkillResult[] => {
      const results: ExtractedSkillResult[] = [];
      const combinedText = `${course.title} ${course.description}`.toLowerCase();

      // Iterate through canonical taxonomy
      for (const skill of CANONICAL_SKILLS) {
        let matched = false;
        let matchSnippet = '';

        // Check canonical name
        if (combinedText.includes(skill.name.toLowerCase())) {
          matched = true;
          matchSnippet = `Course description contains explicitly: "${skill.name}"`;
        } else {
          // Check aliases
          for (const alias of skill.aliases) {
            // Use word boundary check for short aliases
            const regex = new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
            if (regex.test(combinedText)) {
              matched = true;
              matchSnippet = `Identified alias "${alias}" in syllabus of ${course.code}`;
              break;
            }
          }
        }

        // Add to result set if matched
        if (matched) {
          results.push({
            skillName: skill.name,
            category: skill.category,
            confidence: 0.95,
            sourceEvidence: `${course.code} (${course.title}): ${matchSnippet}`,
          });
        }
      }

      // Also ensure any explicitly listed extractedSkills from the course object are included
      for (const explicitSkill of course.extractedSkills) {
        const canonical = normalizeSkillName(explicitSkill);
        if (!results.some(r => r.skillName === canonical)) {
          const found = CANONICAL_SKILLS.find(s => s.name === canonical);
          results.push({
            skillName: canonical,
            category: found?.category || 'General CS',
            confidence: 0.98,
            sourceEvidence: `Explicitly listed learning outcome in ${course.code}`,
          });
        }
      }

      return results;
    };

    // Construct Gemini prompt for live extraction if enabled
    const prompt = `You are the DegreeGapAI Curriculum Extraction Agent.
Analyze this Pakistani BSCS Course and extract technical competencies, tools, languages, and core concepts.
Course Code: ${course.code}
Title: ${course.title}
Description: ${course.description}
Respond with a JSON array of objects:
[{"skillName": "string", "category": "string", "confidence": number, "sourceEvidence": "string"}]`;

    // Execute via GeminiService with deterministic fallback
    const execution = await GeminiService.generateStructuredAnalysis(prompt, fallback);
    return execution.data;
  }
}

// 2. Job Requirement Agent
export class JobRequirementAgent {
  // Extract required and preferred skills from a software engineering job posting
  public static async extractFromJob(job: Job): Promise<ExtractedSkillResult[]> {
    // Generate fallback extraction using deterministic dictionary lookup
    const fallback = (): ExtractedSkillResult[] => {
      const results: ExtractedSkillResult[] = [];
      const combinedText = `${job.title} ${job.description} ${job.tags.join(' ')}`.toLowerCase();

      // Iterate through canonical taxonomy
      for (const skill of CANONICAL_SKILLS) {
        let matched = false;
        let matchSnippet = '';

        // Check canonical name
        if (combinedText.includes(skill.name.toLowerCase())) {
          matched = true;
          matchSnippet = `Job specification explicitly lists: "${skill.name}"`;
        } else {
          // Check aliases
          for (const alias of skill.aliases) {
            const regex = new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
            if (regex.test(combinedText)) {
              matched = true;
              matchSnippet = `Identified requirement term "${alias}" in posting`;
              break;
            }
          }
        }

        // Add to result set if matched
        if (matched) {
          results.push({
            skillName: skill.name,
            category: skill.category,
            confidence: 0.94,
            sourceEvidence: `${job.company} (${job.title}): ${matchSnippet}`,
          });
        }
      }

      // Also ensure any explicit extractedSkills are incorporated
      for (const explicitSkill of job.extractedSkills) {
        const canonical = normalizeSkillName(explicitSkill);
        if (!results.some(r => r.skillName === canonical)) {
          const found = CANONICAL_SKILLS.find(s => s.name === canonical);
          results.push({
            skillName: canonical,
            category: found?.category || 'Software Engineering',
            confidence: 0.97,
            sourceEvidence: `Explicit requirement in ${job.company} listing`,
          });
        }
      }

      return results;
    };

    // Construct Gemini prompt for live extraction if enabled
    const prompt = `You are the DegreeGapAI Job Requirement Agent.
Analyze this software engineering job vacancy from Pakistan and extract required technologies, frameworks, languages, tools, and methodologies.
Company: ${job.company}
Title: ${job.title}
Description: ${job.description}
Respond with a JSON array of objects:
[{"skillName": "string", "category": "string", "confidence": number, "sourceEvidence": "string"}]`;

    // Execute via GeminiService with deterministic fallback
    const execution = await GeminiService.generateStructuredAnalysis(prompt, fallback);
    return execution.data;
  }
}

// 3. Skill Normalization Agent
export class SkillNormalizationAgent {
  // Normalizes an array of raw skill strings into unique canonical skill representations
  public static normalizeBatch(rawSkills: string[]): Skill[] {
    // Set to prevent duplicate skills in normalized output
    const seen = new Set<string>();
    const normalizedList: Skill[] = [];

    // Iterate through input raw skills
    for (const raw of rawSkills) {
      // Find standard canonical representation
      const canonicalName = normalizeSkillName(raw);

      // Check if already processed
      if (!seen.has(canonicalName)) {
        seen.add(canonicalName);

        // Find metadata in canonical taxonomy or create default
        const existing = CANONICAL_SKILLS.find(s => s.name === canonicalName);
        if (existing) {
          normalizedList.push(existing);
        } else {
          normalizedList.push({
            id: `skill-${canonicalName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            name: canonicalName,
            category: 'General Technical Skill',
            aliases: [raw],
            source: 'both',
          });
        }
      }
    }

    return normalizedList;
  }
}
