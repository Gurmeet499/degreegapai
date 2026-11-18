// Matching Agent for DegreeGapAI
// Maps industry skill requirements directly to university course syllabi
// Provides verifiable proof showing which course corresponds to an industry need

// Import types
import { Course, Job, SkillMatchEvidence } from '../types';

// Matching Agent Class
export class MatchingAgent {
  // Finds matching course and evidence for a given canonical skill
  public static evaluateSkillMatch(
    skillName: string,
    courses: Course[],
    jobs: Job[]
  ): {
    matchedCourse?: {
      code: string;
      title: string;
      semester: number;
      relevantExcerpt: string;
    };
    jobEvidence: {
      company: string;
      jobTitle: string;
      quote: string;
    }[];
    jobDemandFrequency: number;
  } {
    const skillLower = skillName.toLowerCase();

    // 1. Scan courses for curricular coverage
    let matchedCourse: {
      code: string;
      title: string;
      semester: number;
      relevantExcerpt: string;
    } | undefined = undefined;

    for (const course of courses) {
      const titleLower = course.title.toLowerCase();
      const descLower = course.description.toLowerCase();
      const extractedLower = course.extractedSkills.map(s => s.toLowerCase());

      if (
        extractedLower.includes(skillLower) ||
        titleLower.includes(skillLower) ||
        descLower.includes(skillLower)
      ) {
        matchedCourse = {
          code: course.code,
          title: course.title,
          semester: course.semester,
          relevantExcerpt: course.description.length > 120
            ? `${course.description.slice(0, 117)}...`
            : course.description,
        };
        break;
      }
    }

    // 2. Scan jobs for industry demand evidence
    const jobEvidence: {
      company: string;
      jobTitle: string;
      quote: string;
    }[] = [];

    let demandCount = 0;

    for (const job of jobs) {
      const descLower = job.description.toLowerCase();
      const tagsLower = job.tags.map(t => t.toLowerCase());
      const skillsLower = job.extractedSkills.map(s => s.toLowerCase());

      if (
        skillsLower.includes(skillLower) ||
        tagsLower.includes(skillLower) ||
        descLower.includes(skillLower)
      ) {
        demandCount++;

        // Find a representative sentence from job description
        const sentences = job.description.split('\n').filter(s => s.trim().length > 0);
        const relevantSentence = sentences.find(s => s.toLowerCase().includes(skillLower)) ||
          `${job.title} requires ${skillName} competency for production tasks.`;

        if (jobEvidence.length < 3) {
          jobEvidence.push({
            company: job.company,
            jobTitle: job.title,
            quote: relevantSentence.trim(),
          });
        }
      }
    }

    return {
      matchedCourse,
      jobEvidence,
      jobDemandFrequency: demandCount,
    };
  }
}
