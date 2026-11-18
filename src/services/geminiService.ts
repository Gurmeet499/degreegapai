// Gemini API Service & Intelligent Deterministic Fallback Engine
// Provides live AI extraction and reasoning via Google Gemini API
// Falls back seamlessly to offline deterministic NLP matching if API key is not configured

// Import AppConfig for safe credential extraction
import { AppConfig } from '../config/env';

// Response format for AI execution
export interface GeminiServiceResult<T> {
  // Parsed structured data result
  data: T;
  // Execution provenance mode
  mode: 'GEMINI_LIVE' | 'DETERMINISTIC_ENGINE';
  // Optional warning or debug message
  message?: string;
}

// Service class for Gemini operations
export class GeminiService {
  // Method to check if live Gemini is enabled and ready
  public static isLiveAvailable(): boolean {
    // Check key presence
    return AppConfig.hasGeminiKey();
  }

  // Generic method to call Gemini API with JSON structured prompt
  public static async generateStructuredAnalysis<T>(
    prompt: string,
    fallbackGenerator: () => T
  ): Promise<GeminiServiceResult<T>> {
    // Check if user has supplied a Gemini API key
    if (!this.isLiveAvailable()) {
      // Return deterministic fallback immediately with zero latency and 100% stability
      return {
        data: fallbackGenerator(),
        mode: 'DETERMINISTIC_ENGINE',
        message: 'Running in Deterministic Intelligence Mode (Offline & Sandbox safe)',
      };
    }

    try {
      // Build Google Gemini API endpoint URL
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${AppConfig.geminiApiKey}`;

      // Execute POST request to Gemini API
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${prompt}\n\nIMPORTANT: Respond ONLY with valid JSON. Do not wrap in markdown code blocks unless using json fence.`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            responseMimeType: 'application/json',
          },
        }),
      });

      // Check if response status is successful
      if (!response.ok) {
        throw new Error(`Gemini API returned status ${response.status}: ${response.statusText}`);
      }

      // Parse JSON response body
      const jsonResponse = await response.json();
      // Extract generated content text
      const rawText = jsonResponse.candidates?.[0]?.content?.parts?.[0]?.text;

      // Ensure content text exists
      if (!rawText) {
        throw new Error('Gemini API returned an empty completion');
      }

      // Clean potential markdown fences
      const cleanedJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      // Parse structured JSON data
      const parsedData = JSON.parse(cleanedJson) as T;

      // Return live result
      return {
        data: parsedData,
        mode: 'GEMINI_LIVE',
        message: 'Successfully generated via live Gemini 1.5 Flash agent',
      };
    } catch (error) {
      // Log warning in console without throwing fatal UI crash
      console.warn('Gemini live call encountered error, falling back to deterministic engine:', error);
      // Fallback to deterministic engine
      return {
        data: fallbackGenerator(),
        mode: 'DETERMINISTIC_ENGINE',
        message: 'Fallback triggered due to API network error: Using verified deterministic analysis',
      };
    }
  }
}
