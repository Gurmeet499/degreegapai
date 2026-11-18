// Tailwind CSS Configuration File
/** @type {import('tailwindcss').Config} */
export default {
  // Define content paths for Tailwind to purge unused CSS in production
  content: [
    // Include the main HTML entry file
    "./index.html",
    // Include all TypeScript and TSX files in the src directory
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable class-based dark mode
  darkMode: 'class',
  // Theme customization section
  theme: {
    // Extend standard Tailwind utilities with custom branding
    extend: {
      // Custom color palette tailored for academic and tech intelligence
      colors: {
        brand: {
          // Subtle background tint
          50: '#f0f7ff',
          // Light border and badge tint
          100: '#e0effe',
          // Accent highlight
          200: '#bae0fd',
          // Primary interaction hover
          500: '#0284c7',
          // Primary brand color
          600: '#0369a1',
          // Dark accent for active states
          700: '#075985',
          // Deep academic slate blue
          900: '#0c4a6e',
        },
      },
      // Custom typography font families
      fontFamily: {
        // Modern clean sans-serif stack
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  // Plugins array
  plugins: [],
};
