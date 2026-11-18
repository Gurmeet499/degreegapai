// Alignment Gauge Component for DegreeGapAI
// Renders an interactive circular progress gauge showing overall curriculum-to-industry alignment percentage

// Import React
import React from 'react';

// Component Props interface
interface AlignmentGaugeProps {
  // Quantified score between 0 and 100
  score: number;
  // Size in pixels (default: 160)
  size?: number;
  // Label to display beneath score
  label?: string;
}

// AlignmentGauge Component
export const AlignmentGauge: React.FC<AlignmentGaugeProps> = ({
  score,
  size = 160,
  label = 'Overall Alignment',
}) => {
  // Stroke thickness
  const strokeWidth = 12;
  // Radius calculation
  const radius = (size - strokeWidth) / 2;
  // Circumference
  const circumference = 2 * Math.PI * radius;
  // Arc stroke dashoffset
  const offset = circumference - (score / 100) * circumference;

  // Determine stroke color dynamically
  const getColor = (s: number) => {
    if (s >= 75) return { stroke: '#10b981', text: 'text-emerald-400', badge: 'High Alignment' };
    if (s >= 55) return { stroke: '#0ea5e9', text: 'text-sky-400', badge: 'Moderate Alignment' };
    if (s >= 40) return { stroke: '#f59e0b', text: 'text-amber-400', badge: 'Noteworthy Gap' };
    return { stroke: '#f43f5e', text: 'text-rose-400', badge: 'Severe Gap' };
  };

  const status = getColor(score);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        {/* SVG Circular Progress Meter */}
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background Track Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1e293b"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Active Progress Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={status.stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Percentage Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className={`text-4xl font-extrabold tracking-tight font-mono ${status.text}`}>
            {score}%
          </span>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-0.5">
            Aligned
          </span>
        </div>
      </div>

      {/* Label and Badge beneath meter */}
      <div className="mt-3 text-center">
        <h4 className="text-sm font-semibold text-slate-200">{label}</h4>
        <span className={`inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full font-medium bg-slate-800 text-slate-300 border border-slate-700`}>
          {status.badge}
        </span>
      </div>
    </div>
  );
};
