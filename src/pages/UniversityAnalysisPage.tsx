// University Analysis Dashboard for DegreeGapAI
// Interactive dashboard presenting alignment score, 4-tier skill breakdown,
// category distribution, course-to-skill matrix, and drilldown modal

// Import React and hooks
import React, { useState, useEffect } from 'react';
// Import Lucide icons
import { GraduationCap, BookOpen, Layers, CheckCircle2, AlertTriangle, XCircle, Sparkles, Filter, ChevronRight, Download, RefreshCw, BarChart2 } from 'lucide-react';
// Import types
import { GapAnalysisResult, SkillMatchEvidence, University } from '../types';
// Import Pakistani curricula dataset and jobs dataset
import { PAKISTANI_CURRICULA } from '../data/curricula';
import { PAKISTANI_JOBS } from '../data/jobs';
// Import AnalysisOrchestrator
import { AnalysisOrchestrator } from '../aiAnalysis/analysisOrchestrator';
// Import components
import { AlignmentGauge } from '../components/AlignmentGauge';
import { SkillBadge } from '../components/SkillBadge';
import { SkillDetailDrawer } from '../components/SkillDetailDrawer';

// Props interface
interface UniversityAnalysisPageProps {
  // Navigation callback
  setActiveTab?: (tab: string) => void;
  // Selected university state pass-through if needed
  initialUniversityId?: string;
}

// UniversityAnalysisPage Component
export const UniversityAnalysisPage: React.FC<UniversityAnalysisPageProps> = ({
  setActiveTab,
  initialUniversityId = 'hec-national-standard',
}) => {
  // Selected university state
  const [selectedUniId, setSelectedUniId] = useState<string>(initialUniversityId);
  // Analysis execution result state
  const [analysisResult, setAnalysisResult] = useState<GapAnalysisResult | null>(null);
  // Loading state
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  // Active skill drawer evidence item
  const [selectedSkillEvidence, setSelectedSkillEvidence] = useState<SkillMatchEvidence | null>(null);
  // Active filter for skills view ('all' | 'strongly_aligned' | 'partially_aligned' | 'missing' | 'emerging')
  const [activeTierFilter, setActiveTierFilter] = useState<string>('all');
  // Semester filter for courses table
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');

  // Trigger analysis whenever selected university changes
  useEffect(() => {
    const runCurrentAnalysis = async () => {
      setIsAnalyzing(true);
      const uni = PAKISTANI_CURRICULA.find(u => u.id === selectedUniId) || PAKISTANI_CURRICULA[0];
      const result = await AnalysisOrchestrator.runAnalysis(uni, PAKISTANI_JOBS);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    };

    runCurrentAnalysis();
  }, [selectedUniId]);

  // Loading skeleton state
  if (isAnalyzing || !analysisResult) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
        <RefreshCw className="w-8 h-8 text-sky-400 animate-spin" />
        <p className="text-sm text-slate-300 font-medium">Running Agentic Gap Analysis on Curriculum...</p>
        <p className="text-xs text-slate-500">Matching syllabi against {PAKISTANI_JOBS.length} software engineering job postings</p>
      </div>
    );
  }

  // Current university object
  const uni = analysisResult.university;

  // Filter skills based on selected tab
  const getFilteredSkills = () => {
    if (activeTierFilter === 'strongly_aligned') return analysisResult.stronglyAlignedSkills;
    if (activeTierFilter === 'partially_aligned') return analysisResult.partiallyAlignedSkills;
    if (activeTierFilter === 'missing') return analysisResult.missingSkills;
    if (activeTierFilter === 'emerging') return analysisResult.emergingSkills;
    return [
      ...analysisResult.stronglyAlignedSkills,
      ...analysisResult.partiallyAlignedSkills,
      ...analysisResult.missingSkills,
      ...analysisResult.emergingSkills,
    ];
  };

  const filteredSkills = getFilteredSkills();

  // Filter courses by semester
  const filteredCourses = selectedSemester === 'all'
    ? uni.courses
    : uni.courses.filter(c => c.semester === selectedSemester);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER BAR: UNIVERSITY & DATASET SELECTOR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <span className="text-xs uppercase font-semibold text-sky-400 tracking-wider">Curriculum Evaluation</span>
          <h1 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-sky-400" />
            <span>{uni.name}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Program: <span className="text-slate-200">{uni.program}</span> ({uni.degree}) • Source Document: <span className="font-mono text-slate-300">{uni.curriculumDocument}</span>
          </p>
        </div>

        {/* University Program Dropdown Selector */}
        <div className="flex items-center gap-3">
          <label htmlFor="uni-select" className="text-xs text-slate-400 font-medium whitespace-nowrap">
            Select Program:
          </label>
          <select
            id="uni-select"
            value={selectedUniId}
            onChange={(e) => setSelectedUniId(e.target.value)}
            className="px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
          >
            {PAKISTANI_CURRICULA.map((u) => (
              <option key={u.id} value={u.id}>
                {u.shortName} — {u.campus}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* TOP ANALYTICS SECTION: GAUGE & 4 TIERS SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Alignment Gauge Card */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center">
          <AlignmentGauge score={analysisResult.overallAlignmentScore} size={170} />
          <div className="mt-4 pt-4 border-t border-slate-800 w-full text-xs text-slate-400">
            Based on <span className="text-white font-medium">{analysisResult.jobsAnalyzedCount}</span> software job postings in Pakistan
          </div>
        </div>

        {/* 4-Tier Breakdown Cards */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          
          {/* Strongly Aligned Card */}
          <div
            onClick={() => setActiveTierFilter('strongly_aligned')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTierFilter === 'strongly_aligned'
                ? 'bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-900/20'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-emerald-400">Aligned</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-3xl font-extrabold text-white font-mono">
              {analysisResult.stronglyAlignedSkills.length}
            </span>
            <p className="text-[11px] text-slate-400 mt-2 leading-tight">
              Taught in curriculum & actively demanded by employers
            </p>
          </div>

          {/* Partially Aligned Card */}
          <div
            onClick={() => setActiveTierFilter('partially_aligned')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTierFilter === 'partially_aligned'
                ? 'bg-amber-950/40 border-amber-500 shadow-md shadow-amber-900/20'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-amber-400">Partial</span>
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-3xl font-extrabold text-white font-mono">
              {analysisResult.partiallyAlignedSkills.length}
            </span>
            <p className="text-[11px] text-slate-400 mt-2 leading-tight">
              Theory covered; practical modern framework missing
            </p>
          </div>

          {/* Missing Skills Card */}
          <div
            onClick={() => setActiveTierFilter('missing')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTierFilter === 'missing'
                ? 'bg-rose-950/40 border-rose-500 shadow-md shadow-rose-900/20'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-rose-400">Missing</span>
              <XCircle className="w-4 h-4 text-rose-400" />
            </div>
            <span className="text-3xl font-extrabold text-white font-mono">
              {analysisResult.missingSkills.length}
            </span>
            <p className="text-[11px] text-slate-400 mt-2 leading-tight">
              High commercial demand, absent from degree syllabus
            </p>
          </div>

          {/* Emerging Skills Card */}
          <div
            onClick={() => setActiveTierFilter('emerging')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTierFilter === 'emerging'
                ? 'bg-purple-950/40 border-purple-500 shadow-md shadow-purple-900/20'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-purple-400">Emerging</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-3xl font-extrabold text-white font-mono">
              {analysisResult.emergingSkills.length}
            </span>
            <p className="text-[11px] text-slate-400 mt-2 leading-tight">
              Rapidly trending tools (e.g. LLM APIs, Containerization)
            </p>
          </div>

        </div>

      </div>

      {/* SKILLS EXPLORER & EVIDENCE SECTION */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-400" />
              <span>Extracted Technical Competency Evidence</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Click any skill badge to inspect its exact job evidence quotes and matched course syllabus excerpts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Evaluated' },
              { id: 'strongly_aligned', label: 'Aligned' },
              { id: 'partially_aligned', label: 'Partial' },
              { id: 'missing', label: 'Missing' },
              { id: 'emerging', label: 'Emerging' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTierFilter(tab.id)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeTierFilter === tab.id
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Badges Flex Container */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {filteredSkills.map(evidence => (
            <SkillBadge
              key={evidence.skillName}
              skillName={evidence.skillName}
              classification={evidence.classification}
              jobCount={evidence.jobDemandFrequency}
              onClick={() => setSelectedSkillEvidence(evidence)}
            />
          ))}
        </div>
      </div>

      {/* CATEGORY ALIGNMENT BREAKDOWN */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-sky-400" />
            <span>Category-Level Curriculum Coverage vs Industry Demand</span>
          </h2>
        </div>

        <div className="space-y-4 pt-2">
          {analysisResult.categoryAlignment.map(cat => (
            <div key={cat.category} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{cat.category}</span>
                <span className="text-slate-400 font-mono">
                  Curriculum: <strong className="text-sky-400">{cat.curriculumScore}%</strong> | Market Demand: <strong className="text-indigo-400">{cat.industryDemand}%</strong>
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
                <div
                  style={{ width: `${cat.curriculumScore}%` }}
                  className="h-full bg-sky-500 transition-all duration-500"
                  title={`Curriculum Coverage: ${cat.curriculumScore}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COURSE-TO-SKILL ROADMAP TABLE */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>BSCS Course-to-Skill Mapping</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {uni.courses.length} official courses identified in {uni.shortName}'s degree plan.
            </p>
          </div>

          {/* Semester Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Semester:</span>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="px-2.5 py-1 rounded-lg text-xs bg-slate-950 border border-slate-700 text-white"
            >
              <option value="all">All Semesters</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                <option key={sem} value={sem}>Semester {sem}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Courses Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="text-[11px] uppercase tracking-wider text-slate-400 bg-slate-950/60 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Code</th>
                <th className="py-3 px-4">Course Title</th>
                <th className="py-3 px-4">Credit Hours</th>
                <th className="py-3 px-4">Semester</th>
                <th className="py-3 px-4">Extracted Competencies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredCourses.map(course => (
                <tr key={course.code} className="hover:bg-slate-850/40 transition-colors">
                  <td className="py-3 px-4 font-mono font-semibold text-sky-400 whitespace-nowrap">
                    {course.code}
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-white">{course.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-2 max-w-md">
                      {course.description}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-300">
                    {course.creditHours}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-300">
                    Sem {course.semester}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {course.extractedSkills.map(skill => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Detail Modal / Drawer */}
      <SkillDetailDrawer
        evidence={selectedSkillEvidence}
        onClose={() => setSelectedSkillEvidence(null)}
      />

    </div>
  );
};
