// Job Market Database & Demand Explorer for DegreeGapAI
// Visualizes real software engineering vacancies from Pakistani tech firms
// Preserves source provenance, posting date, extracted tech stacks, and quotes

// Import React and hooks
import React, { useState } from 'react';
// Import Lucide icons
import { Briefcase, Building2, MapPin, Calendar, Search, Tag, ExternalLink, Filter } from 'lucide-react';
// Import Pakistani jobs dataset
import { PAKISTANI_JOBS } from '../data/jobs';
// Import Job type
import { Job } from '../types';

// JobMarketPage Component
export const JobMarketPage: React.FC = () => {
  // Search query state
  const [searchTerm, setSearchTerm] = useState<string>('');
  // Selected company filter
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  // Selected job for full view
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Extract unique companies for dropdown
  const companies = Array.from(new Set(PAKISTANI_JOBS.map(j => j.company)));

  // Filter jobs based on search term and company
  const filteredJobs = PAKISTANI_JOBS.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.extractedSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCompany = selectedCompany === 'all' || job.company === selectedCompany;

    return matchesSearch && matchesCompany;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER SECTION */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-semibold text-indigo-400 tracking-wider">
            Industry Evidence Base
          </span>
          <h1 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-400" />
            <span>Pakistani Software Industry Job Market</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Analyzing {PAKISTANI_JOBS.length} verified listings from leading Pakistani tech firms and remote Silicon Valley startups.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Keyword Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, role, or tool..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-3.5 py-2 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-52"
            />
          </div>

          {/* Company Filter Dropdown */}
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="px-3 py-2 rounded-xl text-xs bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Organizations</option>
            {companies.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* JOBS GRID & INSPECTOR SPLIT VIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Jobs List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs text-slate-400 font-medium">
            Showing <strong className="text-white">{filteredJobs.length}</strong> matching vacancies:
          </div>

          <div className="space-y-4">
            {filteredJobs.map(job => {
              const isSelected = selectedJob?.id === job.id;
              return (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-indigo-500 shadow-lg shadow-indigo-950/30'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800">
                          {job.company}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {job.location}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mt-1.5">{job.title}</h3>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
                      {job.postingDate}
                    </span>
                  </div>

                  {/* Skills tags preview */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {job.extractedSkills.slice(0, 5).map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.extractedSkills.length > 5 && (
                      <span className="text-[10px] text-slate-400 self-center">
                        +{job.extractedSkills.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Source: <strong className="text-slate-300">{job.source}</strong></span>
                    <span>Level: <strong className="text-slate-300">{job.experienceLevel}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Selected Job Deep-Dive Inspector */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            {selectedJob ? (
              <>
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                    <Building2 className="w-4 h-4" />
                    <span>{selectedJob.company}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-1">{selectedJob.title}</h2>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {selectedJob.postingDate}
                    </span>
                  </div>
                </div>

                {/* Extracted Skills List */}
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-300 tracking-wider mb-2.5">
                    AI-Extracted Normalized Competencies ({selectedJob.extractedSkills.length})
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedJob.extractedSkills.map(skill => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-950/40 text-indigo-300 border border-indigo-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full Raw Job Description */}
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-300 tracking-wider mb-2.5">
                    Raw Job Specification & Requirements
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed max-h-72 overflow-y-auto">
                    {selectedJob.description}
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400">
                  Data Provenance: {selectedJob.source}
                </div>
              </>
            ) : (
              <div className="py-16 text-center text-slate-400 space-y-2">
                <Briefcase className="w-10 h-10 mx-auto text-slate-400 opacity-60" />
                <p className="text-sm font-medium">Select a job posting from the left to inspect its full requirement details and extracted skills.</p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
