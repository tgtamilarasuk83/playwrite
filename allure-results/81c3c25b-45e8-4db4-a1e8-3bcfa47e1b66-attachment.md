# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationWebsite\test\Handlingframes.spec.ts >> Fremes
- Location: AutomationWebsite\test\Handlingframes.spec.ts:5:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('iframe[name=\'firstFr\']').contentFrame().locator('//input[@placeholder=\'Enter name\']')
Expected substring: "Tamilarasu"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('iframe[name=\'firstFr\']').contentFrame().locator('//input[@placeholder=\'Enter name\']')
    13 × locator resolved to <input type="text" required="" name="fname" value="Tamilarasu" placeholder="Enter name" data-gtm-form-interact-field-id="0" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"/>
       - unexpected value ""

```

```yaml
- textbox "Enter name": Tamilarasu
```

# Test source

```ts
  1  | import { test ,expect } from '@playwright/test';
  2  | import { assert } from 'node:console';
  3  | 
  4  | 
  5  | test("Fremes" , async({page})=>{
  6  | 
  7  |    await  page.goto("https://letcode.in/frame")
  8  |     const allframe = page.frames();
  9  |     console.log("No of frames :" ,allframe)
  10 | 
  11 |     const frame1 = page.frameLocator("iframe[name='firstFr']"); //can also use frame which returns object
  12 | 
  13 |     await frame1.locator("xpath=//input[@placeholder='Enter name']").fill('Tamilarasu');
  14 |     await frame1.locator("xpath=//input[@placeholder='Enter email']").fill('Tamil ');
  15 | 
> 16 |     await expect(frame1.locator("xpath=//input[@placeholder='Enter name']")).toContainText("Tamilarasu");
     |                                                                              ^ Error: expect(locator).toContainText(expected) failed
  17 |     await expect(frame1.locator("xpath=//input[@placeholder='Enter email']")).toContainText("Tamil ");
  18 | 
  19 |     const innerframe =frame1.frameLocator('//*[@id="root"]/div/div/div/iframe');
  20 |     await innerframe.locator("//input[@placeholder='Enter email']").fill("tamilarasu@gmail.com")
  21 |     await expect(frame1.locator("//input[@placeholder='Enter email']")).toContainText("tamilarasu@gmail.com");
  22 | 
  23 | 
  24 | 
  25 | })
```