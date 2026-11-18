// Gap Detection Agent for DegreeGapAI
// Objectively classifies technical competencies into 4 distinct evidence tiers:
// 1. Strongly Aligned
// 2. Partially Aligned
// 3. Missing
// 4. Industry-Emerging

// Import types
import { Course, GapClassification, Job, SkillMatchEvidence } from '../types';
import { MatchingAgent } from './matchingAgent';

// Gap Detection Agent Class
export class GapDetectionAgent {
  // Evaluates a skill against university courses and industry jobs
  public static classifySkill(
    skillName: string,
    category: string,
    courses: Course[],
    jobs: Job[],
    totalJobCount: number
  ): SkillMatchEvidence {
    // Obtain match evidence from MatchingAgent
    const match = MatchingAgent.evaluateSkillMatch(skillName, courses, jobs);
    const hasCurriculum = Boolean(match.matchedCourse);
    const jobFrequency = match.jobDemandFrequency;
    const isHighIndustryDemand = jobFrequency >= Math.max(1, Math.floor(totalJobCount * 0.35));

    let classification: GapClassification;
    let matchScore = 0;
    let actionableRecommendation = '';

    // Emerging technologies recognition list
    const emergingList = [
      'genai & llm integration',
      'redis',
      'docker',
      'next.js',
      'tailwind css',
      'fastapi',
    ];

    const isEmergingCandidate = emergingList.includes(skillName.toLowerCase());

    if (hasCurriculum && isHighIndustryDemand) {
      // Strongly Aligned: Taught in curriculum and actively required in top job vacancies
      classification = 'strongly_aligned';
      matchScore = 92;
      actionableRecommendation = `Solid academic foundation established in ${match.matchedCourse?.code}. Focus on advanced production architecture, system optimization, and real-world deployment.`;
    } else if (hasCurriculum && !isHighIndustryDemand) {
      // Partially Aligned: Academic coverage exists, but modern market uses modern variations/abstractions
      classification = 'partially_aligned';
      matchScore = 65;
      actionableRecommendation = `Foundational theory covered in ${match.matchedCourse?.code}. Bridge this into practical industry tooling (e.g. migrate basic SQL to production PostgreSQL/ORMs, or procedural C++ to modern frameworks).`;
    } else if (!hasCurriculum && isEmergingCandidate) {
      // Industry Emerging: Rapidly rising modern industry tech with limited academic tenure
      classification = 'emerging';
      matchScore = 30;
      actionableRecommendation = `Rapidly emerging in modern software engineering. Not yet standard in national roadmaps. Recommend dedicated self-paced portfolio projects or department workshop modules.`;
    } else if (!hasCurriculum && isHighIndustryDemand) {
      // Missing: Demanded in a significant portion of jobs, absent from degree roadmap
      classification = 'missing';
      matchScore = 10;
      actionableRecommendation = `Critical industry competency absent from the analyzed degree curriculum. High priority for independent student acquisition through capstone integration or targeted self-study.`;
    } else {
      // Default: Partially aligned or low-frequency specialized skill
      classification = 'partially_aligned';
      matchScore = 45;
      actionableRecommendation = `Valuable complementary skill in software engineering. Consider learning as an elective specialization.`;
    }

    return {
      skillName,
      classification,
      matchScore,
      matchedCourse: match.matchedCourse,
      jobEvidence: match.jobEvidence,
      jobDemandFrequency: jobFrequency,
      category,
      actionableRecommendation,
    };
  }
}
