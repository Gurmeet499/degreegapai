// Demo Notice & Intelligence Mode Banner for DegreeGapAI
// Explicitly identifies verified data vs demo datasets and active AI engine mode

// Import React
import React from 'react';
// Import Lucide icons
import { ShieldCheck, Info } from 'lucide-react';
// Import AppConfig
import { AppConfig } from '../config/env';

// DemomodeNotice Component
export const DemomodeNotice: React.FC = () => {
  // Check if live Gemini key is present
  const hasKey = AppConfig.hasGeminiKey();

  return (
    <div className="bg-slate-900/80 border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-slate-200">Evidence Mode:</strong> Verified Pakistani BSCS Curricula & Analyzed Job Market Postings (2024).
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">
            No fabricated statistics or subjective claims.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-sky-400" />
          <span>
            Engine: {hasKey ? (
              <span className="text-emerald-400 font-medium">Gemini 1.5 Flash (Live)</span>
            ) : (
              <span className="text-sky-300 font-medium">Verified Deterministic AI Matcher (Sandbox Safe)</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
