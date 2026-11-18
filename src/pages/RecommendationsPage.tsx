// Student Recommendation & Learning Roadmap Page for DegreeGapAI
// Generates personalized, evidence-grounded project roadmaps to bridge academic gaps
// Includes Priority Filters (HIGH, MEDIUM, LOW), Project Blueprints, and Exportable Report View

// Import React and hooks
import React, { useState, useEffect } from 'react';
// Import Lucide icons
import { Sparkles, Printer, CheckCircle2, Clock, Code, BookOpen, Building2, AlertCircle, ArrowRight, Download, Filter } from 'lucide-react';
// Import types
import { GapAnalysisResult, RecommendationPriority, StudentRecommendation } from '../types';
// Import datasets
import { PAKISTANI_CURRICULA } from '../data/curricula';
import { PAKISTANI_JOBS } from '../data/jobs';
// Import AnalysisOrchestrator
import { AnalysisOrchestrator } from '../aiAnalysis/analysisOrchestrator';

// RecommendationsPage Component
export const RecommendationsPage: React.FC = () => {
  // University program state
  const [selectedUniId, setSelectedUniId] = useState<string>('hec-national-standard');
  // Analysis execution state
  const [analysis, setAnalysis] = useState<GapAnalysisResult | null>(null);
  // Priority filter state
  const [priorityFilter, setPriorityFilter] = useState<'ALL' | RecommendationPriority>('ALL');

  // Trigger analysis on program change
  useEffect(() => {
    const run = async () => {
      const uni = PAKISTANI_CURRICULA.find(u => u.id === selectedUniId) || PAKISTANI_CURRICULA[0];
      const res = await AnalysisOrchestrator.runAnalysis(uni, PAKISTANI_JOBS);
      setAnalysis(res);
    };
    run();
  }, [selectedUniId]);

  if (!analysis) return null;

  // Filter recommendations
  const filteredRecs = priorityFilter === 'ALL'
    ? analysis.recommendations
    : analysis.recommendations.filter(r => r.priority === priorityFilter);

  // Print Report Handler
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER SECTION */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-semibold text-purple-400 tracking-wider">
            Personalized Student Bridge
          </span>
          <h1 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span>Actionable Skill Acquisition Roadmap</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Converting detected curriculum gaps for <strong className="text-slate-200">{analysis.university.shortName}</strong> students into concrete portfolio projects.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Program Selector */}
          <select
            value={selectedUniId}
            onChange={(e) => setSelectedUniId(e.target.value)}
            className="px-3.5 py-2 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
          >
            {PAKISTANI_CURRICULA.map(u => (
              <option key={u.id} value={u.id}>{u.shortName}</option>
            ))}
          </select>

          {/* Export / Print Report Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Export Action Report</span>
          </button>
        </div>
      </div>

      {/* PRIORITY FILTER PILLS */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Filter Priority:</span>
          <div className="flex gap-1.5">
            {[
              { id: 'ALL', label: 'All Recommendations' },
              { id: 'HIGH', label: 'High Priority (Urgent Gaps)' },
              { id: 'MEDIUM', label: 'Medium Priority' },
              { id: 'LOW', label: 'Low Priority' },
            ].map(tier => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setPriorityFilter(tier.id as any)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  priorityFilter === tier.id
                    ? 'bg-purple-600 text-white font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        <span className="text-xs text-slate-400">
          Showing <strong className="text-white">{filteredRecs.length}</strong> prioritized action plans
        </span>
      </div>

      {/* RECOMMENDATIONS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRecs.map(rec => {
          const priorityStyles = {
            HIGH: {
              badge: 'bg-rose-950/60 text-rose-300 border-rose-800',
              border: 'border-slate-800 hover:border-rose-500/50',
              accent: 'text-rose-400',
            },
            MEDIUM: {
              badge: 'bg-amber-950/60 text-amber-300 border-amber-800',
              border: 'border-slate-800 hover:border-amber-500/50',
              accent: 'text-amber-400',
            },
            LOW: {
              badge: 'bg-sky-950/60 text-sky-300 border-sky-800',
              border: 'border-slate-800 hover:border-sky-500/50',
              accent: 'text-sky-400',
            },
          }[rec.priority];

          return (
            <div
              key={rec.id}
              className={`p-6 rounded-2xl bg-slate-900 border ${priorityStyles.border} transition-all space-y-5 flex flex-col justify-between`}
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${priorityStyles.badge}`}>
                      {rec.priority} PRIORITY
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{rec.skillName}</h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>~{rec.estimatedHours} hrs</span>
                  </div>
                </div>

                {/* Why It Matters */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {rec.whyItMatters}
                </p>

                {/* Job Evidence & Curriculum Status Grid */}
                <div className="grid grid-cols-1 gap-2 pt-1">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                      <Building2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>Hiring Market Evidence</span>
                    </div>
                    <p className="italic text-slate-400">{rec.jobMarketEvidence}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Curriculum Status</span>
                    </div>
                    <p className="text-slate-400">{rec.currentCurriculumCoverage}</p>
                  </div>
                </div>
              </div>

              {/* Suggested Practical Project Box */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/40 space-y-2.5">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs">
                  <Code className="w-4 h-4" />
                  <span>Suggested Portfolio Project: {rec.suggestedProject.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {rec.suggestedProject.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-semibold uppercase text-purple-400 tracking-wider">Key Deliverables:</span>
                  {rec.suggestedProject.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                {/* Prerequisites */}
                <div className="pt-2 border-t border-purple-900/30 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-400">
                  <span className="font-semibold text-slate-300">Prerequisites:</span>
                  {rec.prerequisites.map(pre => (
                    <span key={pre} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {pre}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
