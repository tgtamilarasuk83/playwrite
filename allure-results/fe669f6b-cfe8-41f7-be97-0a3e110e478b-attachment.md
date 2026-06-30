# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameteriztion\parameter.spec.ts >> Googlee search >> search for TypeScript
- Location: parameteriztion\parameter.spec.ts:12:17

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.google.com/?authuser=0&zx=1782717917773", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | import {test,expect} from '@playwright/test';
  3  | const searchData = [
  4  |     { keyword: "Playwright", expectedTitle: "Playwright" },
  5  |     { keyword: "Selenium", expectedTitle: "Selenium" },
  6  |     { keyword: "Cypress", expectedTitle: "Cypress" },
  7  |     { keyword: "JavaScript", expectedTitle: "JavaScript" },
  8  |     { keyword: "TypeScript", expectedTitle: "TypeScript" }]
  9  | 
  10 |     test.describe("Googlee search",() =>{
  11 |         searchData.forEach((Data) => {
  12 |             test (`search for ${Data.keyword}`,async ({page})=>{
  13 | 
> 14 |                 await page.goto("https://www.google.com/?authuser=0&zx=1782717917773")
     |                            ^ Error: page.goto: Target page, context or browser has been closed
  15 | 
  16 |                 await page.locator("textarea[name='q']").fill(Data.keyword);
  17 |                 await page.keyboard.press("Enter")
  18 | 
  19 |                 const firstResult = page.locator("h3").first()
  20 |                 await firstResult.click()
  21 | 
  22 |                 await expect(page).toHaveTitle(new RegExp(Data.expectedTitle,"i"))
  23 | 
  24 |             })
  25 |         })
  26 |     })
  27 | 
  28 |     
```