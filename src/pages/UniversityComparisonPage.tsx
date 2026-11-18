// Multi-Program University Comparison Engine for DegreeGapAI
// Objectively benchmarks 2+ Pakistani BSCS programs side-by-side
// Adheres strictly to neutral academic terminology without toxic "best/worst" ranking

// Import React and hooks
import React, { useState, useEffect } from 'react';
// Import Lucide icons
import { GitCompare, CheckCircle2, AlertTriangle, XCircle, Sparkles, BookOpen, Layers, ShieldCheck } from 'lucide-react';
// Import types
import { GapAnalysisResult, University } from '../types';
// Import Pakistani curricula dataset and jobs dataset
import { PAKISTANI_CURRICULA } from '../data/curricula';
import { PAKISTANI_JOBS } from '../data/jobs';
// Import AnalysisOrchestrator
import { AnalysisOrchestrator } from '../aiAnalysis/analysisOrchestrator';

// UniversityComparisonPage Component
export const UniversityComparisonPage: React.FC = () => {
  // Selected program IDs to compare (default to HEC Standard and FAST-NUCES)
  const [selectedUniIds, setSelectedUniIds] = useState<string[]>([
    'hec-national-standard',
    'fast-nuces-bscs',
  ]);

  // Comparison results state
  const [analyses, setAnalyses] = useState<GapAnalysisResult[]>([]);
  // Loading state
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Execute analyses for all selected universities
  useEffect(() => {
    const runComparisons = async () => {
      setIsLoading(true);
      const results: GapAnalysisResult[] = [];

      for (const id of selectedUniIds) {
        const uni = PAKISTANI_CURRICULA.find(u => u.id === id);
        if (uni) {
          const res = await AnalysisOrchestrator.runAnalysis(uni, PAKISTANI_JOBS);
          results.push(res);
        }
      }

      setAnalyses(results);
      setIsLoading(false);
    };

    runComparisons();
  }, [selectedUniIds]);

  // Toggle university selection handler
  const handleToggleUni = (uniId: string) => {
    if (selectedUniIds.includes(uniId)) {
      if (selectedUniIds.length > 1) {
        setSelectedUniIds(selectedUniIds.filter(id => id !== uniId));
      }
    } else {
      setSelectedUniIds([...selectedUniIds, uniId]);
    }
  };

  if (isLoading || analyses.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 space-y-3">
        <GitCompare className="w-8 h-8 text-sky-400 animate-spin" />
        <p className="text-sm text-slate-300">Comparing BSCS Program Curricula...</p>
      </div>
    );
  }

  // Calculate common skills across all selected programs
  const allSkillSets = analyses.map(a => new Set(a.stronglyAlignedSkills.map(s => s.skillName)));
  const commonSkills = Array.from(allSkillSets[0]).filter(skill =>
    allSkillSets.every(set => set.has(skill))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER SECTION */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div>
          <span className="text-xs uppercase font-semibold text-sky-400 tracking-wider">
            Comparative Academic Intelligence
          </span>
          <h1 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
            <GitCompare className="w-6 h-6 text-sky-400" />
            <span>Skill Coverage Comparison Across Pakistani BSCS Programs</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-3xl">
            Neutral, evidence-based benchmarking of BSCS roadmaps. Results represent observed alignment within the analyzed dataset and do not rank universities.
          </p>
        </div>

        {/* Multi-Select Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
          <span className="text-xs text-slate-400 font-medium mr-1">Compare Programs:</span>
          {PAKISTANI_CURRICULA.map(u => {
            const isSelected = selectedUniIds.includes(u.id);
            return (
              <button
                key={u.id}
                type="button"
                onClick={() => handleToggleUni(u.id)}
                className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-colors flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                <span>{u.shortName}</span>
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* SIDE-BY-SIDE PROGRAM MATRIX */}
      <div className={`grid grid-cols-1 md:grid-cols-${Math.min(3, analyses.length)} gap-6`}>
        {analyses.map(item => (
          <div key={item.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            
            {/* Program Title Header */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                {item.university.campus}
              </span>
              <h2 className="text-lg font-bold text-white mt-2">{item.university.name}</h2>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">{item.university.curriculumDocument}</p>
            </div>

            {/* Alignment Score Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Observed Alignment</span>
                <div className="text-2xl font-extrabold text-white font-mono mt-0.5">
                  {item.overallAlignmentScore}%
                </div>
              </div>
              <div className="text-right text-xs text-slate-400">
                <div>Courses: <strong className="text-slate-200">{item.university.courses.length}</strong></div>
                <div>Skills: <strong className="text-slate-200">{item.university.totalExtractedSkills.length}</strong></div>
              </div>
            </div>

            {/* Counts Breakdown */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-900/40">
                <span className="text-emerald-400 block font-semibold">Strongly Aligned</span>
                <span className="text-xl font-bold text-white font-mono">{item.stronglyAlignedSkills.length}</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-900/40">
                <span className="text-rose-400 block font-semibold">Missing Gaps</span>
                <span className="text-xl font-bold text-white font-mono">{item.missingSkills.length}</span>
              </div>
            </div>

            {/* Distinctive Program Strengths */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Extracted Program Strengths:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.stronglyAlignedSkills.slice(0, 6).map(s => (
                  <span key={s.skillName} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 text-slate-200 border border-slate-700">
                    {s.skillName}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Missing Skills in This Program */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                Unaddressed Industry Demands:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.missingSkills.slice(0, 5).map(s => (
                  <span key={s.skillName} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-rose-950/40 text-rose-300 border border-rose-900">
                    {s.skillName}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* COMMON CORE SYLLABUS INSIGHT */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400">
          <BookOpen className="w-5 h-5" />
          <h3 className="text-base font-bold text-white">
            Common Foundation Shared Across All Compared Programs ({commonSkills.length})
          </h3>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          These technical competencies are consistently and strongly represented across all selected Pakistani programs:
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {commonSkills.map(skill => (
            <span
              key={skill}
              className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
