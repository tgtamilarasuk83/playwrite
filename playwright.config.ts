import { defineConfig, devices } from '@playwright/test';
import { on } from 'cluster';
import dotenv from 'dotenv';
import path from 'path';

// const envName = process.env.ENV || 'uat';

// dotenv.config({
//   path: path.resolve(process.cwd(), `env/.env.${envName}`)
// });

// console.log("BASE_URL loaded:", process.env.BASE_URL);

export default defineConfig({
  // testDir: './demoblazeapplication',

//  testMatch: '**/*.spec.ts',
 

 
  use: {
   
    screenshot: 'only-on-failure',
    //  trace :'on'
  
  },


  reporter: [
  ['html', { open: 'never' }],
  ['allure-playwright']
],


  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});