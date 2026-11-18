// Main Application Controller for DegreeGapAI
// Manages global navigation state, active tab routing, and master layout assembly

// Import React and hooks
import React, { useState } from 'react';
// Import layout components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemomodeNotice } from './components/DemomodeNotice';
// Import views / pages
import { LandingPage } from './pages/LandingPage';
import { UniversityAnalysisPage } from './pages/UniversityAnalysisPage';
import { UniversityComparisonPage } from './pages/UniversityComparisonPage';
import { JobMarketPage } from './pages/JobMarketPage';
import { SkillGapsPage } from './pages/SkillGapsPage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { DataIngestionPage } from './pages/DataIngestionPage';
import { AboutPage } from './pages/AboutPage';

// App Component
export function App() {
  // Navigation active tab state ('home' | 'analysis' | 'comparison' | 'jobs' | 'gaps' | 'recommendations' | 'ingestion' | 'about')
  const [activeTab, setActiveTab] = useState<string>('home');

  // Page view renderer
  const renderCurrentView = () => {
    switch (activeTab) {
      case 'home':
        return <LandingPage setActiveTab={setActiveTab} />;
      case 'analysis':
        return <UniversityAnalysisPage setActiveTab={setActiveTab} />;
      case 'comparison':
        return <UniversityComparisonPage />;
      case 'jobs':
        return <JobMarketPage />;
      case 'gaps':
        return <SkillGapsPage />;
      case 'recommendations':
        return <RecommendationsPage />;
      case 'ingestion':
        return <DataIngestionPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <LandingPage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Top Evidence & Intelligence Mode Banner */}
      <DemomodeNotice />

      {/* Main Header Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Primary Dynamic Content Area */}
      <main className="flex-1 w-full">
        {renderCurrentView()}
      </main>

      {/* Master Academic Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

// Default export
export default App;
