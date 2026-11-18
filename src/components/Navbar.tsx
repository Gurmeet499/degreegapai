// Navigation Bar Component for DegreeGapAI
// Primary application header containing navigation links, responsive mobile drawer, and quick actions

// Import React and hooks
import React, { useState } from 'react';
// Import Lucide icons
import { GraduationCap, BarChart2, Briefcase, GitCompare, Sparkles, HelpCircle, Menu, X, UploadCloud, Layers } from 'lucide-react';

// Props interface for Navigation
interface NavbarProps {
  // Current active view
  activeTab: string;
  // State setter to switch active view
  setActiveTab: (tab: string) => void;
}

// Navbar Component
export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  // State for mobile menu open/closed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items array
  const navItems = [
    { id: 'home', label: 'Home', icon: <Layers className="w-4 h-4" /> },
    { id: 'analysis', label: 'University Analysis', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'comparison', label: 'Compare Programs', icon: <GitCompare className="w-4 h-4" /> },
    { id: 'jobs', label: 'Job Market', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'gaps', label: 'Skill Gaps', icon: <BarChart2 className="w-4 h-4" /> },
    { id: 'recommendations', label: 'Recommendations', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'ingestion', label: 'Ingest Data', icon: <UploadCloud className="w-4 h-4" /> },
    { id: 'about', label: 'About & Methodology', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  // Handler for navigation item click
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo and Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                  Degree<span className="text-sky-400">Gap</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-slate-400 -mt-0.5 hidden sm:block">
                Curriculum vs Industry Intelligence
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-850'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
