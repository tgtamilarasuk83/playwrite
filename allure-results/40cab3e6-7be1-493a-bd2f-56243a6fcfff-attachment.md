# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationWebsite\test\Handlingalerts.spec.ts >> Simple Alert
- Location: AutomationWebsite\test\Handlingalerts.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Simple Alert' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "Test Automation Central" [ref=e5] [cursor=pointer]:
        - /url: https://testautomationcentral.com/
      - navigation [ref=e6]:
        - link "Demo – Selenium Practice" [ref=e7] [cursor=pointer]:
          - /url: https://testautomationcentral.com/demo
        - link "About" [ref=e8] [cursor=pointer]:
          - /url: https://testautomationcentral.com/about/
        - link "Contact" [ref=e9] [cursor=pointer]:
          - /url: https://testautomationcentral.com/contact/
        - link "Privacy Policy" [ref=e10] [cursor=pointer]:
          - /url: https://testautomationcentral.com/privacy-policy/
  - generic [ref=e11]:
    - complementary [ref=e13]:
      - navigation [ref=e14]:
        - link "Home" [ref=e15] [cursor=pointer]:
          - /url: index.html
        - button "Forms" [ref=e17] [cursor=pointer]:
          - text: Forms
          - img [ref=e18]
        - generic [ref=e20]:
          - button "Browser Interaction" [ref=e21] [cursor=pointer]:
            - text: Browser Interaction
            - img [ref=e22]
          - generic [ref=e24]:
            - link "Alerts" [ref=e25] [cursor=pointer]:
              - /url: alerts.html
            - link "Frames and iframes" [ref=e26] [cursor=pointer]:
              - /url: frames_iframes.html
            - link "Cookies" [ref=e27] [cursor=pointer]:
              - /url: cookies.html
            - link "Session Storage" [ref=e28] [cursor=pointer]:
              - /url: session_storage.html
            - link "Local Storage" [ref=e29] [cursor=pointer]:
              - /url: local_storage.html
            - link "Web Storage" [ref=e30] [cursor=pointer]:
              - /url: web_storage.html
            - link "Browser Navigation" [ref=e31] [cursor=pointer]:
              - /url: browser_navigation.html
        - button "Dynamic Elements" [ref=e33] [cursor=pointer]:
          - text: Dynamic Elements
          - img [ref=e34]
        - button "User Interaction" [ref=e37] [cursor=pointer]:
          - text: User Interaction
          - img [ref=e38]
        - button "Forms and Validations" [ref=e41] [cursor=pointer]:
          - text: Forms and Validations
          - img [ref=e42]
        - button "Advanced Elements" [ref=e45] [cursor=pointer]:
          - text: Advanced Elements
          - img [ref=e46]
        - button "Miscellaneous" [ref=e49] [cursor=pointer]:
          - text: Miscellaneous
          - img [ref=e50]
        - generic [ref=e52]:
          - button "User Interface Elements" [ref=e53] [cursor=pointer]:
            - text: User Interface Elements
            - img [ref=e54]
          - button "List and Table Interactions" [ref=e57] [cursor=pointer]:
            - text: List and Table Interactions
            - img [ref=e58]
          - button "Media Interactions" [ref=e60] [cursor=pointer]:
            - text: Media Interactions
            - img [ref=e61]
          - button "Advanced Elements" [ref=e63] [cursor=pointer]:
            - text: Advanced Elements
            - img [ref=e64]
    - main [ref=e65]:
      - generic [ref=e66]:
        - insertion [ref=e68]:
          - generic [ref=e71]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e73]: Discover more
            - link "Data" [ref=e74] [cursor=pointer]:
              - generic "Data" [ref=e75]
              - img [ref=e77]
            - link "Development Tools" [ref=e79] [cursor=pointer]:
              - generic "Development Tools" [ref=e80]
              - img [ref=e82]
            - link "Software Utilities" [ref=e84] [cursor=pointer]:
              - generic "Software Utilities" [ref=e85]
              - img [ref=e87]
        - heading "Alerts" [level=2] [ref=e89]
        - generic [ref=e90]:
          - button "Alert" [active] [ref=e91] [cursor=pointer]
          - button "Prompt" [ref=e92] [cursor=pointer]
          - button "Confirm" [ref=e93] [cursor=pointer]
        - generic [ref=e94]:
          - heading "Alert" [level=3] [ref=e95]
          - button "Show Alert" [ref=e96] [cursor=pointer]
          - paragraph
  - generic:
    - insertion:
      - iframe [ref=e98]:
        
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test("Simple Alert", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://testautomationcentral.com/demo/alerts.html");
  6  | 
  7  |     page.once('dialog', async (dialog) => {
  8  |         console.log("Message :", dialog.message());
  9  |         console.log("Type :", dialog.type());
  10 | 
  11 |         await dialog.accept();
  12 |     });
  13 | 
> 14 |     await page.getByRole('button', { name: 'Simple Alert' }).click();
     |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 | 
  16 | });
  17 | 
  18 | test("Confirmation Alert", async ({ page }) => {
  19 | 
  20 |     await page.goto("https://testautomationcentral.com/demo/alerts.html");
  21 | 
  22 |     page.once('dialog', async (dialog) => {
  23 |         console.log("Message :", dialog.message());
  24 |         console.log("Type :", dialog.type());
  25 | 
  26 |         // Click OK
  27 |         await dialog.accept();
  28 | 
  29 |         // To click Cancel instead, use:
  30 |         // await dialog.dismiss();
  31 |     });
  32 | 
  33 |     await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  34 | 
  35 | });
  36 | 
  37 | test("Prompt Alert", async ({ page }) => {
  38 | 
  39 |     await page.goto("https://testautomationcentral.com/demo/alerts.html");
  40 | 
  41 |     page.once('dialog', async (dialog) => {
  42 |         console.log("Message :", dialog.message());
  43 |         console.log("Type :", dialog.type());
  44 | 
  45 |         await dialog.accept("Hello Playwright");
  46 |     });
  47 | 
  48 |     await page.getByRole('button', { name: 'Prompt Alert' }).click();
  49 | 
  50 | });
```