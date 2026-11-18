// Skill Badge Component for DegreeGapAI
// Visualizes skill alignment classification with distinct color-coding and icons

// Import React
import React from 'react';
// Import Lucide icons
import { CheckCircle2, AlertTriangle, XCircle, Sparkles } from 'lucide-react';
// Import GapClassification type
import { GapClassification } from '../types';

// Component Props interface
interface SkillBadgeProps {
  // Canonical skill name
  skillName: string;
  // Alignment classification
  classification: GapClassification;
  // Optional job demand count to display
  jobCount?: number;
  // Click handler for opening detail drawer
  onClick?: () => void;
  // Visual size variant
  size?: 'sm' | 'md' | 'lg';
}

// SkillBadge Component
export const SkillBadge: React.FC<SkillBadgeProps> = ({
  skillName,
  classification,
  jobCount,
  onClick,
  size = 'md',
}) => {
  // Configuration mapped to classification tiers
  const tierConfig = {
    strongly_aligned: {
      bgColor: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
      label: 'Aligned',
      dotColor: 'bg-emerald-400',
    },
    partially_aligned: {
      bgColor: 'bg-amber-950/40 border-amber-500/30 text-amber-300 hover:bg-amber-900/50',
      icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
      label: 'Partial',
      dotColor: 'bg-amber-400',
    },
    missing: {
      bgColor: 'bg-rose-950/40 border-rose-500/30 text-rose-300 hover:bg-rose-900/50',
      icon: <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />,
      label: 'Missing',
      dotColor: 'bg-rose-400',
    },
    emerging: {
      bgColor: 'bg-purple-950/40 border-purple-500/30 text-purple-300 hover:bg-purple-900/50',
      icon: <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />,
      label: 'Emerging',
      dotColor: 'bg-purple-400',
    },
  }[classification];

  // Size styling
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-sm px-3 py-1.5 gap-2',
    lg: 'text-base px-4 py-2 gap-2.5 font-medium',
  }[size];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-lg border transition-all duration-150 ${tierConfig.bgColor} ${sizeClasses} ${onClick ? 'cursor-pointer hover:scale-[1.02] shadow-sm' : 'cursor-default'}`}
      title={`Click to view evidence and course mapping for ${skillName}`}
    >
      {tierConfig.icon}
      <span className="font-medium tracking-tight text-slate-100">{skillName}</span>
      {typeof jobCount === 'number' && jobCount > 0 && (
        <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
          {jobCount} jobs
        </span>
      )}
    </button>
  );
};
