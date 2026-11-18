// React 18 Application Entry Point for DegreeGapAI
// Mounts the root React component tree into the DOM

// Import React library
import React from 'react';
// Import ReactDOM client for React 18 concurrent root rendering
import ReactDOM from 'react-dom/client';
// Import root application component
import App from './App';
// Import Tailwind CSS styles
import './index.css';

// Mount React application into #root element
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Enable React StrictMode to catch potential side-effects in development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
