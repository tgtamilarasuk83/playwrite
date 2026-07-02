import { defineConfig, devices } from '@playwright/test';
import { on } from 'cluster';
import dotenv from 'dotenv';
import path from 'path';

const envName = process.env.ENV || 'ninja';

dotenv.config({
  path: path.resolve(process.cwd(), `env/.env.${envName}`)
});


// console.log("BASE_URL loaded:", process.env.BASE_URL);

export default defineConfig({
  // testDir: './demoblazeapplication',

//  testMatch: '**/*.spec.ts',

// testMatch: [
//   'parameteriztion/**/*.spec.ts',
//   'pendingtask/**/*.spec.ts',
//   'softassertionandskip/**/*.spec.ts'
// ],


 
  globalTimeout: 1200000,


  
  expect: {
    timeout: 120000,
  },
 

 
  use: {
     actionTimeout: 30000,
     navigationTimeout: 60000,
   
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