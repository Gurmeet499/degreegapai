// Footer Component for DegreeGapAI
// Professional academic & technology footer detailing mission, ethical data disclosures, and links

// Import React
import React from 'react';
// Import Lucide icons
import { GraduationCap, ShieldAlert, BookOpen, ExternalLink, Heart } from 'lucide-react';

// Props interface
interface FooterProps {
  // Navigation callback
  setActiveTab: (tab: string) => void;
}

// Footer Component
export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Column 1: Brand & Tagline */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Degree<span className="text-sky-400">Gap</span> AI
            </span>
          </div>
          <p className="text-sm text-slate-300 italic font-serif">
            “Discover what your degree teaches, what industry demands, and where the gap exists.”
          </p>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            An evidence-based academic intelligence platform mapping Pakistani BSCS degree syllabi against live commercial software job postings to empower students and university curriculum committees.
          </p>
        </div>

        {/* Column 2: Navigation Shortcuts */}
        <div>
          <h5 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
            Platform Modules
          </h5>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                type="button"
                onClick={() => { setActiveTab('analysis'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-sky-400 transition-colors"
              >
                University Curriculum Analysis
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => { setActiveTab('comparison'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-sky-400 transition-colors"
              >
                Multi-Program Comparison
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => { setActiveTab('jobs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-sky-400 transition-colors"
              >
                Industry Job Market Database
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => { setActiveTab('recommendations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-sky-400 transition-colors"
              >
                Student Skill Bridge Plans
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Ethical Transparency */}
        <div>
          <h5 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
            Academic Integrity
          </h5>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Neutral Evidence</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Results reflect analyzed documents strictly. DegreeGapAI does not rank universities subjectively or assign fault.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>
          © {new Date().getFullYear()} DegreeGapAI — Built by{' '}
          <a
            href="https://github.com/Gurmeet499"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <span>@Gurmeet499</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-slate-300 transition-colors"
          >
            Methodology & Provenance
          </button>
          <span>•</span>
          <span className="text-slate-400">Zero Hallucinated Metrics</span>
        </div>
      </div>
    </footer>
  );
};
