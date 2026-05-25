// Vercel Speed Insights initialization
// This script imports and initializes Speed Insights for the vanilla HTML site

import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false
});
