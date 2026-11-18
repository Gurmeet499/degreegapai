// Skill Gaps Matrix & Deficit Explorer for DegreeGapAI
// Visualizes high-frequency missing and partially aligned skills ranked by employer demand

// Import React and hooks
import React, { useState, useEffect } from 'react';
// Import Lucide icons
import { BarChart2, AlertOctagon, TrendingUp, CheckCircle, XCircle, ArrowUpRight, Search, Filter } from 'lucide-react';
// Import types
import { GapAnalysisResult, SkillMatchEvidence } from '../types';
// Import datasets
import { PAKISTANI_CURRICULA } from '../data/curricula';
import { PAKISTANI_JOBS } from '../data/jobs';
// Import AnalysisOrchestrator
import { AnalysisOrchestrator } from '../aiAnalysis/analysisOrchestrator';
// Import SkillDetailDrawer
import { SkillDetailDrawer } from '../components/SkillDetailDrawer';

// SkillGapsPage Component
export const SkillGapsPage: React.FC = () => {
  // University program state
  const [selectedUniId, setSelectedUniId] = useState<string>('hec-national-standard');
  // Analysis result state
  const [analysis, setAnalysis] = useState<GapAnalysisResult | null>(null);
  // Selected category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // Active skill drawer evidence item
  const [selectedSkill, setSelectedSkill] = useState<SkillMatchEvidence | null>(null);

  // Run analysis when program selection changes
  useEffect(() => {
    const run = async () => {
      const uni = PAKISTANI_CURRICULA.find(u => u.id === selectedUniId) || PAKISTANI_CURRICULA[0];
      const res = await AnalysisOrchestrator.runAnalysis(uni, PAKISTANI_JOBS);
      setAnalysis(res);
    };
    run();
  }, [selectedUniId]);

  if (!analysis) return null;

  // Combine missing and partially aligned skills
  const gapSkills = [
    ...analysis.missingSkills,
    ...analysis.partiallyAlignedSkills,
  ].sort((a, b) => b.jobDemandFrequency - a.jobDemandFrequency);

  // Extract categories
  const categories = Array.from(new Set(gapSkills.map(s => s.category)));

  // Filter skills
  const filteredGaps = selectedCategory === 'all'
    ? gapSkills
    : gapSkills.filter(s => s.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER SECTION */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-semibold text-rose-400 tracking-wider">
            Curriculum Deficit Analysis
          </span>
          <h1 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
            <AlertOctagon className="w-6 h-6 text-rose-400" />
            <span>High-Demand Industry Skill Gaps</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Identifies competencies frequently demanded in Pakistani software firms with minimal or absent degree coverage.
          </p>
        </div>

        {/* University Program Selector */}
        <div className="flex items-center gap-3">
          <label htmlFor="uni-gap-select" className="text-xs text-slate-400 font-medium">Program:</label>
          <select
            id="uni-gap-select"
            value={selectedUniId}
            onChange={(e) => setSelectedUniId(e.target.value)}
            className="px-3.5 py-2 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-rose-500"
          >
            {PAKISTANI_CURRICULA.map(u => (
              <option key={u.id} value={u.id}>{u.shortName}</option>
            ))}
          </select>
        </div>
      </div>

      {/* TOP GAP HIGHLIGHT STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-xs font-semibold text-rose-400">Total Missing Competencies</span>
          <div className="text-3xl font-extrabold text-white font-mono">{analysis.missingSkills.length}</div>
          <p className="text-xs text-slate-400">
            Skills with zero direct course mapping in the {analysis.university.shortName} BSCS syllabus.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-xs font-semibold text-amber-400">Partially Aligned / Theory Gaps</span>
          <div className="text-3xl font-extrabold text-white font-mono">{analysis.partiallyAlignedSkills.length}</div>
          <p className="text-xs text-slate-400">
            Foundations taught; modern production frameworks or libraries absent.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <span className="text-xs font-semibold text-sky-400">Emerging Tooling Deficit</span>
          <div className="text-3xl font-extrabold text-white font-mono">{analysis.emergingSkills.length}</div>
          <p className="text-xs text-slate-400">
            Modern market tools (LLM APIs, Docker) not yet codified in the national standard.
          </p>
        </div>
      </div>

      {/* GAP RANKING TABLE & CATEGORY FILTER */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-rose-400" />
            <span>Ranked Skill Gaps (Sorted by Employer Demand)</span>
          </h2>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white"
            >
              <option value="all">All Functional Domains</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Ranked Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="text-[11px] uppercase tracking-wider text-slate-400 bg-slate-950/60 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Skill Name</th>
                <th className="py-3 px-4">Domain</th>
                <th className="py-3 px-4">Curriculum Status</th>
                <th className="py-3 px-4">Employer Demand</th>
                <th className="py-3 px-4 text-right">Evidence Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredGaps.map((gap, index) => {
                const isMissing = gap.classification === 'missing';
                return (
                  <tr key={gap.skillName} className="hover:bg-slate-850/40 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-slate-400">
                      #{index + 1}
                    </td>
                    <td className="py-3 px-4 font-semibold text-white">
                      {gap.skillName}
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      {gap.category}
                    </td>
                    <td className="py-3 px-4">
                      {isMissing ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-rose-950/50 text-rose-300 border border-rose-800">
                          <XCircle className="w-3 h-3 text-rose-400" />
                          Missing from Core
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-950/50 text-amber-300 border border-amber-800">
                          <AlertOctagon className="w-3 h-3 text-amber-400" />
                          Partial: {gap.matchedCourse?.code || 'Theory'}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-mono">
                      <span className="font-bold text-sky-400">{gap.jobDemandFrequency}</span> / {analysis.jobsAnalyzedCount} jobs
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedSkill(gap)}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-sky-300 hover:bg-slate-700 transition-colors inline-flex items-center gap-1"
                      >
                        <span>Inspect Evidence</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Drilldown Evidence Drawer */}
      <SkillDetailDrawer
        evidence={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />

    </div>
  );
};
