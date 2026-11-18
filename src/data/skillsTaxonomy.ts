// Canonical Skill Taxonomy and Aliases for DegreeGapAI
// Maps disparate industry and curriculum representations to normalized, standard skills

// Import Skill type definition
import { Skill } from '../types';

// Normalized Skill Taxonomy Dictionary
export const CANONICAL_SKILLS: Skill[] = [
  // --- Programming Languages ---
  {
    // Unique identifier
    id: 'skill-cpp',
    // Normalized canonical name
    name: 'C++',
    // Category classification
    category: 'Programming Languages',
    // Known aliases and variants
    aliases: ['cpp', 'c plus plus', 'c/c++'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Object-oriented systems and performance programming language',
  },
  {
    // Unique identifier
    id: 'skill-c',
    // Normalized canonical name
    name: 'C',
    // Category classification
    category: 'Programming Languages',
    // Known aliases and variants
    aliases: ['c language', 'ansi c'],
    // Source attribution
    source: 'curriculum',
    // Description
    description: 'Procedural foundational systems programming language',
  },
  {
    // Unique identifier
    id: 'skill-python',
    // Normalized canonical name
    name: 'Python',
    // Category classification
    category: 'Programming Languages',
    // Known aliases and variants
    aliases: ['python3', 'py', 'python 3.x'],
    // Source attribution
    source: 'both',
    // Description
    description: 'High-level interpreted language used for backend, data, and AI',
  },
  {
    // Unique identifier
    id: 'skill-java',
    // Normalized canonical name
    name: 'Java',
    // Category classification
    category: 'Programming Languages',
    // Known aliases and variants
    aliases: ['jdk', 'core java', 'java se', 'java ee'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Object-oriented enterprise and Android programming language',
  },
  {
    // Unique identifier
    id: 'skill-javascript',
    // Normalized canonical name
    name: 'JavaScript',
    // Category classification
    category: 'Programming Languages',
    // Known aliases and variants
    aliases: ['js', 'es6', 'ecmascript', 'vanilla js'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Core web script execution language',
  },
  {
    // Unique identifier
    id: 'skill-typescript',
    // Normalized canonical name
    name: 'TypeScript',
    // Category classification
    category: 'Programming Languages',
    // Known aliases and variants
    aliases: ['ts', 'typescript.js'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'Typed superset of JavaScript widely required in modern web engineering',
  },
  {
    // Unique identifier
    id: 'skill-sql',
    // Normalized canonical name
    name: 'SQL',
    // Category classification
    category: 'Databases & Storage',
    // Known aliases and variants
    aliases: ['ansi sql', 'structured query language', 'relational queries'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Standard language for relational database query operations',
  },

  // --- Web & Frontend Engineering ---
  {
    // Unique identifier
    id: 'skill-react',
    // Normalized canonical name
    name: 'React',
    // Category classification
    category: 'Frontend Development',
    // Known aliases and variants
    aliases: ['react.js', 'reactjs', 'react 18'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'Component-driven front-end UI library',
  },
  {
    // Unique identifier
    id: 'skill-nextjs',
    // Normalized canonical name
    name: 'Next.js',
    // Category classification
    category: 'Frontend Development',
    // Known aliases and variants
    aliases: ['nextjs', 'next', 'next 14', 'next 15'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'React production framework with SSR and App Router',
  },
  {
    // Unique identifier
    id: 'skill-html-css',
    // Normalized canonical name
    name: 'HTML & CSS',
    // Category classification
    category: 'Frontend Development',
    // Known aliases and variants
    aliases: ['html5', 'css3', 'html/css', 'web fundamentals'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Hypertext markup and stylesheet formatting for web documents',
  },
  {
    // Unique identifier
    id: 'skill-tailwind',
    // Normalized canonical name
    name: 'Tailwind CSS',
    // Category classification
    category: 'Frontend Development',
    // Known aliases and variants
    aliases: ['tailwind', 'tailwindcss'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'Utility-first modern CSS framework',
  },

  // --- Backend & APIs ---
  {
    // Unique identifier
    id: 'skill-nodejs',
    // Normalized canonical name
    name: 'Node.js',
    // Category classification
    category: 'Backend Development',
    // Known aliases and variants
    aliases: ['node', 'nodejs', 'express', 'express.js'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'V8-powered asynchronous JavaScript runtime for server backend',
  },
  {
    // Unique identifier
    id: 'skill-fastapi',
    // Normalized canonical name
    name: 'FastAPI',
    // Category classification
    category: 'Backend Development',
    // Known aliases and variants
    aliases: ['fast api', 'python fastapi'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'High-performance Python web API framework',
  },
  {
    // Unique identifier
    id: 'skill-django',
    // Normalized canonical name
    name: 'Django',
    // Category classification
    category: 'Backend Development',
    // Known aliases and variants
    aliases: ['django rest framework', 'drf'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Batteries-included Python backend web framework',
  },
  {
    // Unique identifier
    id: 'skill-rest-api',
    // Normalized canonical name
    name: 'RESTful API Design',
    // Category classification
    category: 'Backend Development',
    // Known aliases and variants
    aliases: ['rest api', 'restful', 'web api', 'json api'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Standard HTTP web service architecture and resource endpoints',
  },

  // --- Databases & Caching ---
  {
    // Unique identifier
    id: 'skill-postgresql',
    // Normalized canonical name
    name: 'PostgreSQL',
    // Category classification
    category: 'Databases & Storage',
    // Known aliases and variants
    aliases: ['postgres', 'pgsql', 'postgresql 15'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'Advanced open-source relational database engine',
  },
  {
    // Unique identifier
    id: 'skill-mysql',
    // Normalized canonical name
    name: 'MySQL',
    // Category classification
    category: 'Databases & Storage',
    // Known aliases and variants
    aliases: ['my sql', 'mariadb'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Standard relational database management system',
  },
  {
    // Unique identifier
    id: 'skill-mongodb',
    // Normalized canonical name
    name: 'MongoDB',
    // Category classification
    category: 'Databases & Storage',
    // Known aliases and variants
    aliases: ['mongo', 'nosql', 'document db'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Document-oriented NoSQL database system',
  },
  {
    // Unique identifier
    id: 'skill-redis',
    // Normalized canonical name
    name: 'Redis',
    // Category classification
    category: 'Databases & Storage',
    // Known aliases and variants
    aliases: ['redis cache', 'in-memory datastore'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'In-memory data structure store used for caching and message queuing',
  },

  // --- DevOps & Cloud Infrastructure ---
  {
    // Unique identifier
    id: 'skill-docker',
    // Normalized canonical name
    name: 'Docker',
    // Category classification
    category: 'DevOps & Cloud',
    // Known aliases and variants
    aliases: ['containers', 'containerization', 'dockerfile', 'docker-compose'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'Operating-system-level virtualization for shipping containerized software',
  },
  {
    // Unique identifier
    id: 'skill-cicd',
    // Normalized canonical name
    name: 'CI/CD Pipelines',
    // Category classification
    category: 'DevOps & Cloud',
    // Known aliases and variants
    aliases: ['github actions', 'gitlab ci', 'jenkins', 'continuous integration', 'continuous deployment'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'Automated software building, testing, and deployment workflows',
  },
  {
    // Unique identifier
    id: 'skill-cloud',
    // Normalized canonical name
    name: 'Cloud Computing (AWS/GCP/Azure)',
    // Category classification
    category: 'DevOps & Cloud',
    // Known aliases and variants
    aliases: ['aws', 'amazon web services', 'gcp', 'google cloud', 'azure', 'cloud deployment'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'Cloud provider services (EC2, S3, RDS, Lambda, Cloud Run)',
  },
  {
    // Unique identifier
    id: 'skill-git',
    // Normalized canonical name
    name: 'Git & Version Control',
    // Category classification
    category: 'Software Engineering Practices',
    // Known aliases and variants
    aliases: ['git', 'github', 'version control', 'git flow', 'pull requests'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Distributed version control and team branching workflows',
  },

  // --- Core Computer Science Theory (Curriculum Heavy) ---
  {
    // Unique identifier
    id: 'skill-dsa',
    // Normalized canonical name
    name: 'Data Structures & Algorithms',
    // Category classification
    category: 'Computer Science Core',
    // Known aliases and variants
    aliases: ['dsa', 'data structures', 'algorithms', 'time complexity', 'big-o'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Algorithmic efficiency, arrays, trees, graphs, dynamic programming',
  },
  {
    // Unique identifier
    id: 'skill-oop',
    // Normalized canonical name
    name: 'Object-Oriented Programming (OOP)',
    // Category classification
    category: 'Computer Science Core',
    // Known aliases and variants
    aliases: ['oop', 'object oriented design', 'polymorphism', 'inheritance', 'encapsulation'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Software modeling using classes, objects, design patterns, and SOLID principles',
  },
  {
    // Unique identifier
    id: 'skill-os',
    // Normalized canonical name
    name: 'Operating Systems & Concurrency',
    // Category classification
    category: 'Computer Science Core',
    // Known aliases and variants
    aliases: ['os', 'operating systems', 'threads', 'processes', 'memory management', 'deadlocks'],
    // Source attribution
    source: 'curriculum',
    // Description
    description: 'OS kernels, scheduling, threads, virtual memory, synchronization',
  },
  {
    // Unique identifier
    id: 'skill-networks',
    // Normalized canonical name
    name: 'Computer Networks (TCP/IP)',
    // Category classification
    category: 'Computer Science Core',
    // Known aliases and variants
    aliases: ['computer networks', 'networking', 'tcp/ip', 'udp', 'http/https', 'dns'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Network protocol layers, sockets, transport layer, packet routing',
  },
  {
    // Unique identifier
    id: 'skill-automata',
    // Normalized canonical name
    name: 'Automata Theory & Formal Languages',
    // Category classification
    category: 'Theoretical CS',
    // Known aliases and variants
    aliases: ['theory of automata', 'computation theory', 'dfa', 'nfa', 'turing machines'],
    // Source attribution
    source: 'curriculum',
    // Description
    description: 'Mathematical foundation of computation, grammars, finite state machines',
  },
  {
    // Unique identifier
    id: 'skill-compilers',
    // Normalized canonical name
    name: 'Compiler Construction',
    // Category classification
    category: 'Theoretical CS',
    // Known aliases and variants
    aliases: ['compilers', 'lexical analysis', 'parsing', 'ast', 'code generation'],
    // Source attribution
    source: 'curriculum',
    // Description
    description: 'Translation of high-level code to assembly/machine instructions',
  },

  // --- Emerging & AI ---
  {
    // Unique identifier
    id: 'skill-genai',
    // Normalized canonical name
    name: 'GenAI & LLM Integration',
    // Category classification
    category: 'AI & Data Science',
    // Known aliases and variants
    aliases: ['llm', 'genai', 'gemini api', 'openai', 'prompt engineering', 'langchain', 'rag'],
    // Source attribution
    source: 'job_market',
    // Description
    description: 'Integration of large language models, retrieval augmented generation, and agents',
  },
  {
    // Unique identifier
    id: 'skill-machine-learning',
    // Normalized canonical name
    name: 'Machine Learning Fundamentals',
    // Category classification
    category: 'AI & Data Science',
    // Known aliases and variants
    aliases: ['ml', 'supervised learning', 'scikit-learn', 'deep learning'],
    // Source attribution
    source: 'both',
    // Description
    description: 'Statistical modeling, predictive algorithms, classification, and regression',
  },
];

// Helper function to normalize any skill string against canonical aliases
export const normalizeSkillName = (inputSkill: string): string => {
  // Trim and convert input to lowercase for case-insensitive matching
  const cleaned = inputSkill.trim().toLowerCase();
  
  // Search through all canonical skills
  for (const skill of CANONICAL_SKILLS) {
    // Check if input matches canonical name directly
    if (skill.name.toLowerCase() === cleaned) {
      return skill.name;
    }
    // Check if input matches any registered alias
    for (const alias of skill.aliases) {
      if (alias.toLowerCase() === cleaned) {
        return skill.name;
      }
    }
  }
  
  // If no match found, capitalize words cleanly and return original
  return inputSkill
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
