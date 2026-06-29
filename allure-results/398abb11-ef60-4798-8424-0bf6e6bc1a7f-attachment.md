# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationWebsite\test\Utestmui.spec.ts >> Simplealert
- Location: AutomationWebsite\test\Utestmui.spec.ts:68:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test("test checking", async ({page}) => {
  4   | 
  5   |        await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
  6   |        console.log(page.title())
  7   |        console.log(page.url());
  8   |        const values = await page.locator("//input[@id='user-message']").getAttribute('placeholder');
  9   |        console.log(values);
  10  | 
  11  |         // await page1.locator("//input[@id='user-message']").scrollIntoViewIfNeeded
  12  |     //    await page1.locator("//input[@id='user-message']").fill("i am enetering a message");
  13  |        await page.waitForTimeout(3000);
  14  |        await page.locator("//input[@id='user-message']").type("i am enetering a message");
  15  |        await page.locator("//button[text()='Get Checked Value']").click();
  16  |        await expect(page.locator("//p[@id='message']")).toContainText("i am enetering a message");    
  17  |     })
  18  | 
  19  |     test("testing calculator" ,async({page})=>{
  20  |          await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
  21  |          await page.waitForTimeout(3000);
  22  |          await page.locator("//input[@id='sum1']").fill("20")
  23  |          await page.waitForTimeout(3000)
  24  |          await page.locator("//input[@id='sum2']").fill("20")
  25  |          await page.locator("//button[normalize-space()='Get Sum']").click();
  26  | 
  27  |          await expect( page.locator("//p[@id='addmessage']")).toContainText("40")
  28  | 
  29  | 
  30  | 
  31  | 
  32  |     })
  33  | 
  34  | 
  35  |   
  36  | 
  37  | 
  38  | 
  39  | 
  40  | test("AI", async ({ page }) => {
  41  | 
  42  |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  43  | 
  44  |     const sum1 = page.locator("#sum1");
  45  |     const sum2 = page.locator("#sum2");
  46  |     const result = page.locator("#addmessage");
  47  | 
  48  |     await sum1.fill("20");
  49  |     await sum2.fill("20");
  50  | 
  51  |     await page.locator("button:has-text('Get Sum')").click();
  52  | 
  53  |     await expect(result).toContainText("40");
  54  | });
  55  | 
  56  | 
  57  | 
  58  | // test("Alters to be handle", async({page}) => {
  59  | //     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  60  | //     await page.getByRole('button', {name: 'Click Me'}).nth(0).click()
  61  | 
  62  | //     page.once('dialog', alert => {
  63  | //         console.log("The message: ", alert.message());
  64  | //         alert.accept().catch(() => {});
  65  | //     })
  66  | // })
  67  | 
  68  | test("Simplealert", async({page})=>{
  69  | 
  70  |     await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/")
  71  |     await page.locator("//button[@type='button']").nth(1).click()
  72  |     // simple alert 
> 73  |     page.waitForTimeout(5000);
      |          ^ Error: page.waitForTimeout: Test ended.
  74  |     page.once('dialog', async(alert) =>{
  75  |        
  76  |         console.log(alert.message())
  77  |         alert.accept();     
  78  |     })
  79  | 
  80  |     // await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[2]/div/p[1]/button').click();
  81  |     // // accept allert 
  82  |     // page.once('dialog', async(alert)=>{
  83  |     //     console.log(alert.message())
  84  |     //     alert.type()
  85  |     //     alert.accept()
  86  |     // })
  87  | 
  88  |     // await expect( page.locator('//*[@id="confirm-demo"]')).toContainText("You pressed OK!");
  89  | 
  90  | 
  91  |     // await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[2]/div/p[1]/button').click();
  92  |     // page.once('dialog', async(alert)=>{
  93  |     //      alert.type()
  94  |     //     console.log(alert.message())
  95  |     //     alert.dismiss()
  96  |     // })
  97  | 
  98  |     //   await expect( page.locator('//*[@id="confirm-demo"]')).toContainText("You pressed Cancel!");
  99  | 
  100 | 
  101 | 
  102 | 
  103 | })
```