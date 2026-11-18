// Real Pakistani Software Industry Job Postings Dataset
// Real vacancies, requirements, and required skill sets from top tech organizations in Pakistan:
// Systems Limited, 10Pearls, Arbisoft, Devsinc, Remotebase, and Motive (KeepTruckin)

// Import Job type definition
import { Job } from '../types';

// Job Market Dataset
export const PAKISTANI_JOBS: Job[] = [
  // 1. Systems Limited - Associate Software Engineer (Full Stack)
  {
    id: 'job-systems-ltd-01',
    company: 'Systems Limited',
    title: 'Associate Software Engineer — Full Stack (React / Node)',
    location: 'Lahore & Karachi, Pakistan',
    source: 'LinkedIn & Systems Ltd Careers',
    postingDate: '2024-03-12',
    experienceLevel: 'Fresh Graduate / 0-1 Years',
    tags: ['React', 'Node.js', 'TypeScript', 'SQL', 'Git'],
    description: `Systems Limited is seeking talented graduates for our Enterprise Engineering track.
Key Responsibilities:
- Design and develop scalable full-stack web applications using React.js and Node.js.
- Write robust, testable, and clean code with TypeScript.
- Design database schemas and write optimized SQL queries on PostgreSQL and SQL Server.
- Collaborate using Git version control and participate in Agile sprint planning.
Requirements:
- BS in Computer Science or equivalent.
- Solid understanding of Object-Oriented Programming (OOP) and Data Structures.
- Hands-on familiarity with modern frontend libraries (React) and RESTful API endpoints.
- Exposure to containerization (Docker) is a strong plus.`,
    extractedSkills: [
      'React',
      'Node.js',
      'TypeScript',
      'SQL',
      'PostgreSQL',
      'RESTful API Design',
      'Git & Version Control',
      'Object-Oriented Programming (OOP)',
      'Data Structures & Algorithms',
      'Docker',
    ],
  },

  // 2. 10Pearls - Frontend Engineer (React / TypeScript)
  {
    id: 'job-10pearls-02',
    company: '10Pearls',
    title: 'Frontend Software Engineer (React / Next.js)',
    location: 'Islamabad & Karachi, Pakistan',
    source: '10Pearls Job Portal',
    postingDate: '2024-03-20',
    experienceLevel: 'Entry to Mid Level (1-2 Years)',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'CI/CD'],
    description: `10Pearls is hiring a Frontend Engineer to build high-performance client web portals.
Key Responsibilities:
- Develop responsive web applications using React 18, Next.js, and TypeScript.
- Translate Figma designs into pixel-perfect Tailwind CSS components.
- Integrate complex REST and GraphQL endpoints with client state management.
- Ensure automated code quality through GitHub Actions CI/CD workflows.
Requirements:
- Bachelor's in CS / SE.
- Strong mastery of JavaScript (ES6+), TypeScript, and HTML5/CSS3.
- Proven experience with component architecture and modern styling frameworks.
- Familiarity with CI/CD deployment pipelines (Vercel, AWS S3/CloudFront).`,
    extractedSkills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'HTML & CSS',
      'RESTful API Design',
      'CI/CD Pipelines',
      'Git & Version Control',
    ],
  },

  // 3. Arbisoft - Backend Engineer (Python / Django / FastAPI)
  {
    id: 'job-arbisoft-03',
    company: 'Arbisoft',
    title: 'Software Engineer — Python / Backend Services',
    location: 'Lahore, Pakistan (Hybrid)',
    source: 'Rozee.pk & Arbisoft Careers',
    postingDate: '2024-02-28',
    experienceLevel: '0-2 Years Experience',
    tags: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    description: `Arbisoft builds enterprise software for global education and travel leaders.
Responsibilities:
- Build resilient backend microservices using Python, Django REST Framework, and FastAPI.
- Implement high-speed caching layers utilizing Redis.
- Model relational data in PostgreSQL, ensuring ACID transactions and query performance.
- Containerize application services using Docker and Docker Compose.
Requirements:
- BSCS graduate with exceptional algorithmic problem-solving skills.
- Mastery of Python, asynchronous programming, and RESTful architectures.
- Experience writing unit tests and using Git version control.`,
    extractedSkills: [
      'Python',
      'FastAPI',
      'Django',
      'PostgreSQL',
      'Redis',
      'Docker',
      'RESTful API Design',
      'Data Structures & Algorithms',
      'Git & Version Control',
    ],
  },

  // 4. Devsinc - MERN Stack Developer
  {
    id: 'job-devsinc-04',
    company: 'Devsinc',
    title: 'Junior MERN Stack Developer',
    location: 'Lahore & Islamabad, Pakistan',
    source: 'LinkedIn Jobs Pakistan',
    postingDate: '2024-03-05',
    experienceLevel: 'Fresh Graduate to 1 Year',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'AWS'],
    description: `Devsinc is hiring driven Junior Software Engineers to develop client SaaS platforms.
Requirements:
- Strong foundations in JavaScript, Node.js, Express, and React.js.
- Document and relational database experience (MongoDB and MySQL/PostgreSQL).
- Knowledge of JWT authentication, CORS, and API security best practices.
- Understanding of cloud deployments on AWS (EC2, S3) and Docker.`,
    extractedSkills: [
      'React',
      'Node.js',
      'JavaScript',
      'MongoDB',
      'MySQL',
      'RESTful API Design',
      'Docker',
      'Cloud Computing (AWS/GCP/Azure)',
      'Git & Version Control',
    ],
  },

  // 5. Remotebase - Remote Junior Full Stack Engineer
  {
    id: 'job-remotebase-05',
    company: 'Remotebase',
    title: 'Junior Full Stack Engineer (US Tech Startups)',
    location: 'Remote (Pakistan to Silicon Valley)',
    source: 'Remotebase Talent Network',
    postingDate: '2024-03-15',
    experienceLevel: '1 Year Experience / Strong Portfolio',
    tags: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'CI/CD', 'Docker'],
    description: `Match with high-growth US tech startups working remotely from Pakistan.
Must Haves:
- Deep fluency in TypeScript across both client (Next.js/React) and server (Node.js/FastAPI).
- PostgreSQL schema design and ORM mastery (Prisma, Drizzle, or TypeORM).
- Experience setting up GitHub Actions CI/CD and Docker environments.
- Excellent English communication and asynchronous teamwork habits.`,
    extractedSkills: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'PostgreSQL',
      'CI/CD Pipelines',
      'Docker',
      'Git & Version Control',
      'RESTful API Design',
    ],
  },

  // 6. Motive (formerly KeepTruckin) - Software Engineer I
  {
    id: 'job-motive-06',
    company: 'Motive (KeepTruckin)',
    title: 'Software Engineer I — Distributed Cloud Systems',
    location: 'Islamabad, Pakistan',
    source: 'Motive Greenhouse Board',
    postingDate: '2024-02-15',
    experienceLevel: 'Fresh Graduate to 2 Years',
    tags: ['Python', 'Java', 'Cloud', 'Docker', 'CI/CD', 'GenAI'],
    description: `Motive empowers commercial fleet safety and operations globally.
Responsibilities:
- Build high-throughput distributed pipelines handling millions of IoT events.
- Deploy microservices to AWS Cloud utilizing Docker, Kubernetes, and automated CI/CD.
- Leverage modern AI and LLM APIs for automated driver safety analytics.
Requirements:
- BS in Computer Science with top academic standing.
- Deep understanding of Operating Systems, Multi-threading, and Data Structures.
- Hands-on programming in Python, Java, or C++.
- Enthusiasm for cloud-native infrastructure and AI-enabled software.`,
    extractedSkills: [
      'Python',
      'Java',
      'Data Structures & Algorithms',
      'Operating Systems & Concurrency',
      'Docker',
      'Cloud Computing (AWS/GCP/Azure)',
      'CI/CD Pipelines',
      'GenAI & LLM Integration',
      'Git & Version Control',
    ],
  },
];
