import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const envName = process.env.ENV || 'uat';

dotenv.config({
  path: path.resolve(process.cwd(), `env/.env.${envName}`)
});

console.log("BASE_URL loaded:", process.env.BASE_URL);

export default defineConfig({
  testDir: './testpractice',

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});