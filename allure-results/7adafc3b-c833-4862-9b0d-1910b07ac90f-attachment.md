# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameteriztion\parameter.spec.ts >> Googlee search >> search for Cypress
- Location: parameteriztion\parameter.spec.ts:12:17

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('h3').first()
    - waiting for navigation to finish...
    - navigated to "https://www.google.com/search?q=Cypress&sca_esv=d9dbe7c587d79551&authuser=0&source=hp&ei=OidDatf6LaWZseMPltCfWQ&iflsig=ABILxe8AAAAAakM1Slslpv3LUk2TEmFK-PHbGLjRQX5q&ved=0ahUKEwjX_-Dq8q2VAxWlTGwGHRboJw…"
    - waiting for" https://www.google.com/search?q=Cypress&sca_esv=d9dbe7c587d79551&authuser=0&source=hp&ei=OidDatf6LaWZseMPltCfWQ&iflsig=ABILxe8AAAAAakM1Slslpv3LUk2TEmFK-PHbGLjRQX5q&ved=0ahUKEwjX_-Dq8q2VAxWlTGwGHRboJw…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DCypress%26sca_esv%3Dd9dbe7c587d79551%26authuser%3D0%26source%3Dhp%26ei%3DOidDatf6LaWZseMPltCfWQ%26iflsig%3DABILxe8AAAAA…"

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
  14 |                 await page.goto("https://www.google.com/?authuser=0&zx=1782717917773")
  15 | 
  16 |                 await page.locator("textarea[name='q']").fill(Data.keyword);
  17 |                 await page.keyboard.press("Enter")
  18 | 
  19 |                 const firstResult = page.locator("h3").first()
> 20 |                 await firstResult.click()
     |                                   ^ Error: locator.click: Target page, context or browser has been closed
  21 | 
  22 |                 await expect(page).toHaveTitle(new RegExp(Data.expectedTitle,"i"))
  23 | 
  24 |             })
  25 |         })
  26 |     })
  27 | 
  28 |     
```