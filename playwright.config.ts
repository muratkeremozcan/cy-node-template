import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

const serverPort = process.env.SERVERPORT || 3001;
const baseURL = `http://localhost:${serverPort}`;

export default defineConfig({
  use: {
    baseURL,
    // You can add more Playwright options here if needed
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});