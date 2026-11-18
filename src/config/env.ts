// Environment Configuration and Credential Service
// Securely retrieves environment variables without exposing sensitive credentials in logs or client bundles

// Safe accessor function for environment variables
export const getEnv = (key: string, defaultValue: string = ''): string => {
  // Safely check if import.meta and import.meta.env exist in Vite runtime
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    // Return the variable value or fallback to default
    return (import.meta.env[key] as string) || defaultValue;
  }
  // Return the default value if environment is unavailable
  return defaultValue;
};

// Application configuration object
export const AppConfig = {
  // Gemini API Key (empty string if not provided by user)
  geminiApiKey: getEnv('VITE_GEMINI_API_KEY', ''),
  // Supabase Project URL for future cloud persistence
  supabaseUrl: getEnv('VITE_SUPABASE_URL', ''),
  // Supabase Public Anon Key
  supabaseAnonKey: getEnv('VITE_SUPABASE_ANON_KEY', ''),
  // Application execution mode
  appEnv: getEnv('VITE_APP_ENV', 'development'),
  // Helper to determine if a live Gemini key is configured
  hasGeminiKey: (): boolean => {
    // Check if key is present and contains non-whitespace characters
    return Boolean(getEnv('VITE_GEMINI_API_KEY', '').trim());
  },
  // Helper to determine if Supabase is configured
  hasSupabase: (): boolean => {
    // Check if URL and Anon Key are present
    return Boolean(getEnv('VITE_SUPABASE_URL', '').trim() && getEnv('VITE_SUPABASE_ANON_KEY', '').trim());
  },
};
