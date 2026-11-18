// Recommendation Agent for DegreeGapAI
// Generates structured, actionable learning plans for students to bridge detected skill gaps
// Categorized into HIGH PRIORITY, MEDIUM PRIORITY, and LOW PRIORITY tiers

// Import types
import { RecommendationPriority, SkillMatchEvidence, StudentRecommendation } from '../types';

// Pre-defined high-yield project templates mapped to critical skills
const PROJECT_BLUEPRINTS: Record<string, {
  title: string;
  description: string;
  deliverables: string[];
  prerequisites: string[];
  estimatedHours: number;
}> = {
  'TypeScript': {
    title: 'Type-Safe Full-Stack SaaS Dashboard',
    description: 'Convert a vanilla JavaScript application to strictly typed TypeScript with Zod runtime schema validation, interface modeling, and strict compiler settings.',
    deliverables: ['Strict tsconfig.json configuration', 'Shared client-server API types', 'Typed React hooks and state handlers'],
    prerequisites: ['JavaScript', 'Object-Oriented Programming (OOP)'],
    estimatedHours: 25,
  },
  'Docker': {
    title: 'Multi-Container Microservices Compose Environment',
    description: 'Containerize a Node.js/Python web service alongside a PostgreSQL database and Redis cache with multi-stage Docker builds and health checks.',
    deliverables: ['Production Dockerfile with Alpine multi-stage build', 'docker-compose.yml orchestration', 'Volume persistence and environment configs'],
    prerequisites: ['Operating Systems & Concurrency', 'Basic CLI / Linux'],
    estimatedHours: 20,
  },
  'CI/CD Pipelines': {
    title: 'Automated GitHub Actions Testing & Deployment Pipeline',
    description: 'Construct a continuous integration workflow that lints, runs unit tests, builds assets, and runs security audits on every Git pull request.',
    deliverables: ['.github/workflows/ci.yml configuration', 'Automated test runner step', 'Status check branch protection'],
    prerequisites: ['Git & Version Control', 'Basic Unit Testing'],
    estimatedHours: 15,
  },
  'React': {
    title: 'Component-Driven Interactive Web Application',
    description: 'Build a modular single-page application utilizing modern functional components, custom hooks, Tailwind CSS, and client-side routing.',
    deliverables: ['Reusable UI design system', 'State management with Context/Zustand', 'Asynchronous data fetching with loading states'],
    prerequisites: ['HTML & CSS', 'JavaScript'],
    estimatedHours: 35,
  },
  'PostgreSQL': {
    title: 'ACID-Compliant Relational Data Layer with Migration Engine',
    description: 'Design a normalized relational schema with foreign key cascades, complex indices, stored views, and database migrations via Prisma or Knex.',
    deliverables: ['ER diagram and normalized schema', 'Migration scripts and seeders', 'Optimized join queries with EXPLAIN ANALYZE'],
    prerequisites: ['SQL', 'Relational Database Fundamentals'],
    estimatedHours: 20,
  },
  'Redis': {
    title: 'High-Throughput In-Memory Session & Cache Layer',
    description: 'Implement a write-through caching layer and API rate-limiter using Redis commands (GET, SETEX, INCR) in front of an SQL database.',
    deliverables: ['Cache-aside pattern implementation', 'Rate-limiting middleware', 'TTL eviction strategy'],
    prerequisites: ['Node.js or Python', 'SQL'],
    estimatedHours: 15,
  },
  'GenAI & LLM Integration': {
    title: 'Evidence-Based Semantic Retrieval & Assistant Agent',
    description: 'Build an AI-powered assistant using Google Gemini API or LangChain, implementing prompt engineering, structured JSON outputs, and guardrails.',
    deliverables: ['Gemini API integration script', 'Structured schema output parser', 'Error handling and fallback offline mock'],
    prerequisites: ['Python or TypeScript', 'RESTful API Design'],
    estimatedHours: 25,
  },
};

// Recommendation Agent Class
export class RecommendationAgent {
  // Generates actionable recommendations based on missing and partially aligned skills
  public static generateRecommendations(
    gapEvidenceList: SkillMatchEvidence[],
    totalJobCount: number
  ): StudentRecommendation[] {
    const recommendations: StudentRecommendation[] = [];

    // Prioritize skills marked as 'missing' or 'partially_aligned' with notable job demand
    const actionRequiredSkills = gapEvidenceList
      .filter(s => s.classification === 'missing' || s.classification === 'partially_aligned' || s.classification === 'emerging')
      .sort((a, b) => b.jobDemandFrequency - a.jobDemandFrequency);

    for (const item of actionRequiredSkills) {
      let priority: RecommendationPriority = 'MEDIUM';

      // High priority: missing from curriculum and demanded by 40%+ of analyzed jobs
      if (item.classification === 'missing' && item.jobDemandFrequency >= Math.ceil(totalJobCount * 0.35)) {
        priority = 'HIGH';
      } else if (item.classification === 'missing' || (item.classification === 'partially_aligned' && item.jobDemandFrequency > 2)) {
        priority = 'MEDIUM';
      } else {
        priority = 'LOW';
      }

      // Check for available blueprint or generate dynamic one
      const blueprint = PROJECT_BLUEPRINTS[item.skillName] || {
        title: `Portfolio Prototype with ${item.skillName}`,
        description: `Construct an end-to-end practical project demonstrating core ${item.skillName} features integrated with your existing coursework knowledge.`,
        deliverables: [
          `Working GitHub repository with comprehensive README`,
          `Unit tests verifying ${item.skillName} functionality`,
          `Live deployment or video walkthrough`,
        ],
        prerequisites: ['Git & Version Control', 'Programming Fundamentals'],
        estimatedHours: 20,
      };

      // Construct why it matters explanation
      const whyItMatters = item.classification === 'missing'
        ? `${item.skillName} is required across commercial software engineering teams in Pakistan, but has no direct core coverage in the analyzed BSCS roadmap.`
        : `${item.skillName} is covered theoretically in coursework, but industry teams specifically require modern practical frameworks and production implementations.`;

      // Evidence string
      const jobEvidenceStr = item.jobDemandFrequency > 0
        ? `Mentioned in ${item.jobDemandFrequency} of ${totalJobCount} analyzed job postings (e.g. ${item.jobEvidence.map(e => e.company).slice(0, 2).join(', ')}).`
        : 'Insufficient evidence in the current dataset.';

      // Curriculum coverage string
      const curriculumStr = item.matchedCourse
        ? `Foundational theory introduced in ${item.matchedCourse.code} (${item.matchedCourse.title}).`
        : 'Not identified as an explicit course or learning outcome in the standard BSCS core roadmap.';

      recommendations.push({
        id: `rec-${item.skillName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        skillName: item.skillName,
        category: item.category,
        priority,
        whyItMatters,
        jobMarketEvidence: jobEvidenceStr,
        currentCurriculumCoverage: curriculumStr,
        suggestedProject: {
          title: blueprint.title,
          description: blueprint.description,
          deliverables: blueprint.deliverables,
        },
        prerequisites: blueprint.prerequisites,
        estimatedHours: blueprint.estimatedHours,
      });
    }

    return recommendations;
  }
}
