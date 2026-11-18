// Vite Configuration for DegreeGapAI
// Configures React plugin, fast port binding, and icon path aliasing

// Import defineConfig from Vite
import { defineConfig } from 'vite';
// Import official React plugin
import react from '@vitejs/plugin-react';
// Import node path utility
import path from 'path';

// Export Vite configuration
export default defineConfig({
  // Plugin configuration
  plugins: [
    react(),
  ],
  // Module resolution and path aliasing
  resolve: {
    alias: {
      // Map lucide-react directly to self-contained SVG icons for instant compilation
      'lucide-react': path.resolve(__dirname, './src/components/Icons.tsx'),
    },
  },
  // Dev server configuration
  server: {
    // Port 3000
    port: 3000,
    // Do not attempt to pop browser in headless/sandbox modes
    open: false,
  },
});
