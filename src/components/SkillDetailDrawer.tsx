// Skill Detail Modal & Drawer for DegreeGapAI
// Displays end-to-end evidence chain:
// [Industry Evidence & Job Quotes] -> [Matched Curriculum Course] -> [Alignment Status] -> [Recommendation]

// Import React
import React from 'react';
// Import Lucide icons
import { X, Building2, BookOpen, CheckCircle, AlertTriangle, XCircle, Sparkles, ArrowRight, Lightbulb } from 'lucide-react';
// Import SkillMatchEvidence type
import { SkillMatchEvidence } from '../types';

// Component Props interface
interface SkillDetailDrawerProps {
  // Selected skill evidence item (null when drawer is closed)
  evidence: SkillMatchEvidence | null;
  // Callback when user dismisses drawer
  onClose: () => void;
}

// SkillDetailDrawer Component
export const SkillDetailDrawer: React.FC<SkillDetailDrawerProps> = ({ evidence, onClose }) => {
  // Return null if no skill is selected
  if (!evidence) return null;

  // Map classification to visual styling
  const statusConfig = {
    strongly_aligned: {
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      label: 'Strongly Aligned with Industry',
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
      desc: 'Taught directly in degree curriculum and widely required in software vacancies.',
    },
    partially_aligned: {
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      label: 'Partially Aligned / Theoretical Core',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
      desc: 'Academic foundations are covered, but modern commercial practices or tools are missing.',
    },
    missing: {
      badge: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      label: 'Missing from Core BSCS Roadmap',
      icon: <XCircle className="w-5 h-5 text-rose-400" />,
      desc: 'High commercial demand in Pakistan tech firms, but completely absent from required degree coursework.',
    },
    emerging: {
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      label: 'Emerging Industry Requirement',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      desc: 'Modern technological shift not yet integrated into standard national curricula.',
    },
  }[evidence.classification];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl p-6 md:p-8">
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
            {statusConfig.icon}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white">{evidence.skillName}</h2>
              <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${statusConfig.badge}`}>
                {statusConfig.label}
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Category: <span className="text-slate-200 font-medium">{evidence.category}</span>
            </p>
          </div>
        </div>

        {/* Four-Stage Evidence Flow Container */}
        <div className="space-y-6">
          
          {/* STAGE 1: Industry Demand Evidence */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-semibold">
                <Building2 className="w-4 h-4" />
                <span>1. Real Industry Demand Evidence</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-sky-950/60 text-sky-300 border border-sky-800 font-mono">
                {evidence.jobDemandFrequency} Job Postings
              </span>
            </div>

            {evidence.jobEvidence.length > 0 ? (
              <div className="space-y-2.5">
                {evidence.jobEvidence.map((quote, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                    <div className="font-semibold text-slate-200 mb-1 flex items-center justify-between">
                      <span>{quote.company}</span>
                      <span className="text-slate-500 font-normal">{quote.jobTitle}</span>
                    </div>
                    <p className="italic text-slate-400 border-l-2 border-sky-500 pl-2 mt-1">
                      "{quote.quote}"
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">
                Insufficient explicit textual quotes in the current sample dataset, but present in taxonomy requirements.
              </p>
            )}
          </div>

          {/* STAGE 2: Matched Curriculum Course */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-3">
              <BookOpen className="w-4 h-4" />
              <span>2. Matched University Curriculum Course</span>
            </div>

            {evidence.matchedCourse ? (
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                <div className="flex items-center justify-between font-semibold text-slate-200 mb-1.5">
                  <span className="text-emerald-300 font-mono text-sm">{evidence.matchedCourse.code}: {evidence.matchedCourse.title}</span>
                  <span className="text-slate-500">Semester {evidence.matchedCourse.semester}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  <span className="text-slate-300 font-medium">Syllabus Excerpt: </span>
                  {evidence.matchedCourse.relevantExcerpt}
                </p>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs text-rose-300">
                <span className="font-semibold block mb-0.5">No Matching Course Found</span>
                This competency is not covered as a core course in the analyzed degree curriculum roadmap.
              </div>
            )}
          </div>

          {/* STAGE 3: Objective Alignment Status */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-2">
              <ArrowRight className="w-4 h-4" />
              <span>3. Objective Alignment Analysis</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {statusConfig.desc}
            </p>
          </div>

          {/* STAGE 4: Actionable Recommendation */}
          <div className="rounded-xl border border-sky-900/40 bg-sky-950/20 p-4">
            <div className="flex items-center gap-2 text-sky-400 text-sm font-semibold mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>4. Actionable Bridge Recommendation</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {evidence.actionableRecommendation}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
