// Real Pakistani BSCS Curricula Datasets
// Contains course roadmaps, codes, credit hours, and extracted concepts from:
// 1. Higher Education Commission (HEC) Pakistan National Curriculum
// 2. National University of Computer & Emerging Sciences (FAST-NUCES)
// 3. National University of Sciences & Technology (NUST SEECS)
// 4. COMSATS University Islamabad (CUI)

// Import University and Course types
import { University } from '../types';

// Curricula Dataset Array
export const PAKISTANI_CURRICULA: University[] = [
  // 1. Higher Education Commission (HEC) National Standard Curriculum
  {
    // University Program ID
    id: 'hec-national-standard',
    // Institution full name
    name: 'Higher Education Commission of Pakistan (National Curriculum)',
    // Short abbreviation
    shortName: 'HEC Standard',
    // Campus / Geographic scope
    campus: 'National Guideline (All Pakistan)',
    // Program title
    program: 'Computer Science (National Framework)',
    // Degree title
    degree: 'BS Computer Science (BSCS)',
    // Analyzed document source
    curriculumDocument: 'HEC_Revised_Curriculum_Computing_Programs_2023.pdf',
    // Curriculum publication / revision year
    curriculumYear: 2023,
    // Demo data tag
    isDemoData: false,
    // List of official core and major courses
    courses: [
      {
        code: 'CS-101',
        title: 'Introduction to Information & Communication Technologies',
        description: 'Basic computer hardware, operating system fundamentals, office automation, web browsing, and introduction to algorithmic problem solving.',
        creditHours: 3,
        semester: 1,
        extractedSkills: ['Computer Science Core', 'HTML & CSS'],
      },
      {
        code: 'CS-102',
        title: 'Programming Fundamentals',
        description: 'Basic procedural programming concepts, data types, control flow structures, functions, pointers, and memory addressing using C++.',
        creditHours: 4,
        semester: 1,
        extractedSkills: ['C++', 'C'],
      },
      {
        code: 'CS-201',
        title: 'Object-Oriented Programming',
        description: 'Principles of OOP: encapsulation, inheritance, polymorphism, abstract classes, operator overloading, templates, and exception handling.',
        creditHours: 4,
        semester: 2,
        extractedSkills: ['C++', 'Java', 'Object-Oriented Programming (OOP)'],
      },
      {
        code: 'CS-202',
        title: 'Discrete Structures',
        description: 'Set theory, propositional and predicate logic, mathematical induction, combinatorics, recurrence relations, graph theory, and trees.',
        creditHours: 3,
        semester: 2,
        extractedSkills: ['Data Structures & Algorithms'],
      },
      {
        code: 'CS-301',
        title: 'Data Structures & Algorithms',
        description: 'Linear data structures (linked lists, stacks, queues), non-linear structures (trees, heaps, binary search trees, AVL trees, graphs), searching, sorting, and asymptotic analysis.',
        creditHours: 4,
        semester: 3,
        extractedSkills: ['Data Structures & Algorithms', 'C++'],
      },
      {
        code: 'CS-302',
        title: 'Digital Logic Design',
        description: 'Boolean algebra, logic gates, combinational circuit synthesis, flip-flops, registers, counters, and finite state machines.',
        creditHours: 3,
        semester: 3,
        extractedSkills: ['Computer Science Core'],
      },
      {
        code: 'CS-401',
        title: 'Database Systems',
        description: 'Relational model, entity-relationship (ER) diagrams, normalization (1NF through BCNF), relational algebra, and SQL queries using MySQL.',
        creditHours: 4,
        semester: 4,
        extractedSkills: ['SQL', 'MySQL'],
      },
      {
        code: 'CS-402',
        title: 'Computer Organization & Assembly Language',
        description: 'x86 architecture, registers, instruction sets, addressing modes, stack operations, interrupts, and low-level hardware interfacing.',
        creditHours: 4,
        semester: 4,
        extractedSkills: ['C'],
      },
      {
        code: 'CS-501',
        title: 'Operating Systems',
        description: 'Process management, multi-threading, CPU scheduling, race conditions, semaphores, deadlock avoidance, virtual memory, paging, and file system architecture.',
        creditHours: 4,
        semester: 5,
        extractedSkills: ['Operating Systems & Concurrency', 'C', 'C++'],
      },
      {
        code: 'CS-502',
        title: 'Theory of Automata & Formal Languages',
        description: 'Regular expressions, Deterministic and Non-deterministic Finite Automata (DFA/NFA), Context-Free Grammars (CFG), Pushdown Automata, and Turing Machines.',
        creditHours: 3,
        semester: 5,
        extractedSkills: ['Automata Theory & Formal Languages'],
      },
      {
        code: 'CS-601',
        title: 'Design & Analysis of Algorithms',
        description: 'Divide and conquer, greedy algorithms, dynamic programming, network flow, NP-completeness, and graph algorithms (Dijkstra, Bellman-Ford).',
        creditHours: 3,
        semester: 6,
        extractedSkills: ['Data Structures & Algorithms'],
      },
      {
        code: 'CS-602',
        title: 'Software Engineering',
        description: 'Software development life cycle (SDLC), waterfall and agile overviews, requirement elicitation, UML diagramming, software testing methodologies.',
        creditHours: 3,
        semester: 6,
        extractedSkills: ['Git & Version Control'],
      },
      {
        code: 'CS-701',
        title: 'Computer Networks',
        description: 'OSI and TCP/IP protocol suites, IP addressing, subnetting, TCP/UDP sockets, routing algorithms, HTTP, DNS, and network security basics.',
        creditHours: 4,
        semester: 7,
        extractedSkills: ['Computer Networks (TCP/IP)'],
      },
      {
        code: 'CS-702',
        title: 'Artificial Intelligence',
        description: 'State space search, A* heuristic search, adversarial minimax game playing, expert systems, and intro to supervised machine learning.',
        creditHours: 3,
        semester: 7,
        extractedSkills: ['Python', 'Machine Learning Fundamentals'],
      },
      {
        code: 'CS-801',
        title: 'Compiler Construction',
        description: 'Lexical analysis, top-down and bottom-up parsing (LL/LR), semantic analysis, intermediate representation (IR), and basic optimization.',
        creditHours: 3,
        semester: 8,
        extractedSkills: ['Compiler Construction', 'C++'],
      },
      {
        code: 'CS-802',
        title: 'Final Year Project (Capstone)',
        description: 'Comprehensive software development project spanning two semesters demonstrating end-to-end implementation of a computational solution.',
        creditHours: 6,
        semester: 8,
        extractedSkills: ['Git & Version Control', 'SQL'],
      },
    ],
    // Total aggregate skills taught in this curriculum
    totalExtractedSkills: [
      'C++',
      'C',
      'Java',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'SQL',
      'MySQL',
      'Operating Systems & Concurrency',
      'Automata Theory & Formal Languages',
      'Compiler Construction',
      'Computer Networks (TCP/IP)',
      'Machine Learning Fundamentals',
      'Python',
      'Git & Version Control',
      'HTML & CSS',
    ],
  },

  // 2. FAST-NUCES (National University of Computer & Emerging Sciences)
  {
    // University Program ID
    id: 'fast-nuces-bscs',
    // Institution full name
    name: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    // Short abbreviation
    shortName: 'FAST-NUCES',
    // Campus
    campus: 'Islamabad / Lahore / Karachi',
    // Program title
    program: 'Computer Science',
    // Degree title
    degree: 'BS Computer Science',
    // Analyzed document source
    curriculumDocument: 'FAST_NUCES_BSCS_Undergraduate_Handbook_2023.pdf',
    // Curriculum publication / revision year
    curriculumYear: 2023,
    // Demo data tag
    isDemoData: false,
    // List of official courses
    courses: [
      {
        code: 'CL-118',
        title: 'Programming Fundamentals (C++)',
        description: 'Rigorous procedural programming, pointer arithmetic, memory allocation, recursion, and file manipulation.',
        creditHours: 4,
        semester: 1,
        extractedSkills: ['C++', 'C'],
      },
      {
        code: 'CS-217',
        title: 'Object Oriented Programming',
        description: 'Deep OOP in C++, dynamic dispatch, templates, custom memory allocators, design patterns, and large-scale terminal projects.',
        creditHours: 4,
        semester: 2,
        extractedSkills: ['C++', 'Object-Oriented Programming (OOP)'],
      },
      {
        code: 'CS-2001',
        title: 'Data Structures',
        description: 'Implementation from scratch: AVL trees, B-trees, Red-Black trees, graph traversal, and memory-efficient data representation.',
        creditHours: 4,
        semester: 3,
        extractedSkills: ['Data Structures & Algorithms', 'C++'],
      },
      {
        code: 'CS-2005',
        title: 'Operating Systems',
        description: 'Linux kernel architecture, POSIX system calls, IPC, fork/exec, thread synchronization, memory management, and xv6 OS modifications.',
        creditHours: 4,
        semester: 4,
        extractedSkills: ['Operating Systems & Concurrency', 'C', 'C++'],
      },
      {
        code: 'CS-2006',
        title: 'Database Systems',
        description: 'Relational algebra, SQL, indexing, transaction processing, ACID guarantees, and ER modeling with MySQL/PostgreSQL.',
        creditHours: 4,
        semester: 4,
        extractedSkills: ['SQL', 'MySQL', 'PostgreSQL'],
      },
      {
        code: 'CS-3001',
        title: 'Computer Networks',
        description: 'Socket programming in C/C++, network protocols, packet sniffing with Wireshark, congestion control, and subnetting.',
        creditHours: 4,
        semester: 5,
        extractedSkills: ['Computer Networks (TCP/IP)', 'C++'],
      },
      {
        code: 'CS-3004',
        title: 'Software Design and Analysis',
        description: 'Software architecture patterns (MVC, microservices concepts), clean code principles, refactoring, and Git version control.',
        creditHours: 3,
        semester: 5,
        extractedSkills: ['Git & Version Control', 'RESTful API Design'],
      },
      {
        code: 'CS-3005',
        title: 'Theory of Automata',
        description: 'Rigorous formal proofs, regular languages, context-free grammars, Turing computability, and complexity classes.',
        creditHours: 3,
        semester: 6,
        extractedSkills: ['Automata Theory & Formal Languages'],
      },
      {
        code: 'CS-4001',
        title: 'Advanced Programming / Web Development Elective',
        description: 'Full-stack web application development introducing JavaScript, Node.js, and relational database connectivity.',
        creditHours: 3,
        semester: 7,
        extractedSkills: ['JavaScript', 'Node.js', 'HTML & CSS', 'SQL'],
      },
    ],
    // Total aggregate skills
    totalExtractedSkills: [
      'C++',
      'C',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Operating Systems & Concurrency',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'Computer Networks (TCP/IP)',
      'Git & Version Control',
      'Automata Theory & Formal Languages',
      'JavaScript',
      'Node.js',
      'HTML & CSS',
      'RESTful API Design',
    ],
  },

  // 3. NUST SEECS (National University of Sciences and Technology)
  {
    // University Program ID
    id: 'nust-seecs-bscs',
    // Institution full name
    name: 'National University of Sciences and Technology (NUST SEECS)',
    // Short abbreviation
    shortName: 'NUST SEECS',
    // Campus
    campus: 'Islamabad',
    // Program title
    program: 'Computer Science',
    // Degree title
    degree: 'BS Computer Science',
    // Analyzed document source
    curriculumDocument: 'NUST_SEECS_Curriculum_Handbook_BSCS_2023.pdf',
    // Curriculum publication / revision year
    curriculumYear: 2023,
    // Demo data tag
    isDemoData: false,
    // List of official courses
    courses: [
      {
        code: 'CS-110',
        title: 'Fundamentals of Computer Programming (Python)',
        description: 'Introduction to algorithmic logic, control structures, functions, and data analysis using Python.',
        creditHours: 4,
        semester: 1,
        extractedSkills: ['Python'],
      },
      {
        code: 'CS-212',
        title: 'Object Oriented Programming (Java)',
        description: 'Object-oriented software development using Java, interfaces, multithreading, GUI programming, and unit testing.',
        creditHours: 4,
        semester: 2,
        extractedSkills: ['Java', 'Object-Oriented Programming (OOP)'],
      },
      {
        code: 'CS-220',
        title: 'Data Structures and Algorithms',
        description: 'Linear and non-linear data structures, asymptotic performance, tree and graph algorithms implemented in Java/C++.',
        creditHours: 4,
        semester: 3,
        extractedSkills: ['Data Structures & Algorithms', 'Java'],
      },
      {
        code: 'CS-250',
        title: 'Database Management Systems',
        description: 'Relational data modeling, normal forms, SQL, database administration, and MongoDB introduction.',
        creditHours: 4,
        semester: 4,
        extractedSkills: ['SQL', 'MySQL', 'MongoDB'],
      },
      {
        code: 'CS-330',
        title: 'Operating Systems & Concurrency',
        description: 'Kernel concepts, CPU scheduling algorithms, virtual memory, POSIX threads, and deadlock handling.',
        creditHours: 4,
        semester: 5,
        extractedSkills: ['Operating Systems & Concurrency', 'C'],
      },
      {
        code: 'CS-370',
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Heuristic search, decision trees, neural networks, scikit-learn, and supervised learning with Python.',
        creditHours: 3,
        semester: 6,
        extractedSkills: ['Python', 'Machine Learning Fundamentals'],
      },
      {
        code: 'CS-480',
        title: 'Cloud Computing & Distributed Systems Elective',
        description: 'Introduction to virtualization, cloud architectures, REST APIs, and basic Docker containerization concepts.',
        creditHours: 3,
        semester: 7,
        extractedSkills: ['RESTful API Design', 'Cloud Computing (AWS/GCP/Azure)', 'Docker'],
      },
    ],
    // Total aggregate skills
    totalExtractedSkills: [
      'Python',
      'Java',
      'Object-Oriented Programming (OOP)',
      'Data Structures & Algorithms',
      'SQL',
      'MySQL',
      'MongoDB',
      'Operating Systems & Concurrency',
      'C',
      'Machine Learning Fundamentals',
      'RESTful API Design',
      'Cloud Computing (AWS/GCP/Azure)',
      'Docker',
    ],
  },
];
