// Landing Page Component for DegreeGapAI
// Modern hero, problem statement, four-stage workflow, and feature cards

// Import React
import React from 'react';
// Import Lucide icons
import { GraduationCap, ArrowRight, BookOpen, Briefcase, Cpu, CheckCircle2, AlertTriangle, XCircle, Sparkles, ShieldCheck, Compass } from 'lucide-react';

// Props interface
interface LandingPageProps {
  // Navigation callback
  setActiveTab: (tab: string) => void;
  // Callback to select specific university
  onSelectUniversity?: (uniId: string) => void;
}

// LandingPage Component
export const LandingPage: React.FC<LandingPageProps> = ({ setActiveTab, onSelectUniversity }) => {
  return (
    <div className="space-y-24 py-8">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-16">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Evidence-Based AI Intelligence for Pakistani Computing</span>
        </div>

        {/* Primary Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Discover what your degree teaches, what industry demands, and{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
            where the gap exists.
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          DegreeGapAI compares official Pakistani BSCS university curricula with hundreds of real software engineering job listings to reveal actionable, verifiable skill gaps.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('analysis')}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02]"
          >
            <span>Launch Gap Analysis</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 transition-colors"
          >
            <span>Compare Pakistani Programs</span>
          </button>
        </div>

        {/* Verified Data Badge Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            HEC Revised National Framework (2023)
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            FAST-NUCES, NUST & COMSATS Syllabi
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Verified Job Postings (Systems Ltd, 10Pearls, Arbisoft)
          </span>
        </div>

      </section>

      {/* SECTION 2: THE PROBLEM EXPLANATION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">The Problem</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              The Reality of Computer Science Education in Pakistan
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Pakistani universities produce thousands of talented BSCS graduates every year. Students rigorously study fundamental theory: Object-Oriented Programming, Data Structures, Automata Theory, and Relational Databases.
            </p>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              However, the modern software industry in Pakistan and global remote markets now heavily expect production tooling — including TypeScript, Docker containers, CI/CD automated deployment, Next.js, and Redis caching. Without objective evidence, students are unsure what to learn, and universities struggle to measure curriculum drift.
            </p>
          </div>

          {/* Contrast Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-800">
            {/* University Curriculum Reality */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>What BSCS Programs Rigorously Teach</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Procedural & OOP Foundations in C++ and Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Algorithmic Complexity, Trees, and Graph Traversal
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Formal Language Theory, Turing Machines, Compilers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Relational Algebra & Normalization (MySQL)
                </li>
              </ul>
            </div>

            {/* Industry Demand Reality */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <Briefcase className="w-4 h-4" />
                <span>What Software Employers Immediately Expect</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  TypeScript & Modern Frameworks (React, Next.js)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Docker Containerization & Cloud Deployment (AWS)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Automated CI/CD Workflows (GitHub Actions)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Production REST APIs, Redis Caching, and ORMs
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS (FOUR-STAGE PIPELINE) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Methodology</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            How DegreeGap Evaluates Evidence
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            A deterministic and transparent 4-stage processing workflow connecting official syllabi to verified market demands.
          </p>
        </div>

        {/* 4-Step Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative hover:border-slate-700 transition-colors">
            <span className="text-3xl font-black font-mono text-slate-800 block mb-2">01</span>
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Curriculum Ingestion</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Extracts course codes, titles, credit hours, and syllabus descriptions from official undergraduate BSCS roadmaps.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative hover:border-slate-700 transition-colors">
            <span className="text-3xl font-black font-mono text-slate-800 block mb-2">02</span>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Job Market Data</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Aggregates software engineering vacancies from Pakistani tech hubs, extracting required tech stacks and methodologies.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative hover:border-slate-700 transition-colors">
            <span className="text-3xl font-black font-mono text-slate-800 block mb-2">03</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">AI Analysis & Normalization</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Normalizes synonyms (e.g. "JS" ➔ "JavaScript", "K8s" ➔ "Kubernetes") and matches syllabus lines to job requirements.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative hover:border-slate-700 transition-colors">
            <span className="text-3xl font-black font-mono text-slate-800 block mb-2">04</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Skill Gap & Bridge Plans</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Classifies skills into 4 objective tiers and generates prioritized hands-on portfolio projects for students.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: KEY FEATURES CARDS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Core Platform Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center font-bold">
              4T
            </div>
            <h3 className="text-base font-bold text-white">Four-Tier Classification</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Separates competencies into Strongly Aligned, Partially Aligned, Missing, and Emerging skills without arbitrary grades.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center font-bold">
              EV
            </div>
            <h3 className="text-base font-bold text-white">Verifiable Traceability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every identified gap links back to exact course codes and original hiring quotes from Pakistani software firms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold">
              RP
            </div>
            <h3 className="text-base font-bold text-white">Actionable Student Roadmaps</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Transforms missing requirements into concrete capstone and portfolio project blueprints with prerequisites and hours.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-sky-900/40 via-indigo-900/30 to-slate-900 border border-sky-500/20 p-8 sm:p-12 text-center relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to explore your university's curriculum alignment?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Choose from the HEC National Standard, FAST-NUCES, or NUST SEECS BSCS programs to see instant, evidence-backed gap intelligence.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('analysis')}
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center gap-2 shadow-xl shadow-sky-500/30 transition-all hover:scale-105"
            >
              <span>Start Analysis Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
