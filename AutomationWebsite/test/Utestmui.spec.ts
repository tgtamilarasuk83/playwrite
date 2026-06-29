import { test, expect } from "@playwright/test";

test("test checking", async ({page}) => {

       await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
       console.log(page.title())
       console.log(page.url());
       const values = await page.locator("//input[@id='user-message']").getAttribute('placeholder');
       console.log(values);

        // await page1.locator("//input[@id='user-message']").scrollIntoViewIfNeeded
    //    await page1.locator("//input[@id='user-message']").fill("i am enetering a message");
       await page.waitForTimeout(3000);
       await page.locator("//input[@id='user-message']").type("i am enetering a message");
       await page.locator("//button[text()='Get Checked Value']").click();
       await expect(page.locator("//p[@id='message']")).toContainText("i am enetering a message");    
    })

    test("testing calculator" ,async({page})=>{
         await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
         await page.waitForTimeout(3000);
         await page.locator("//input[@id='sum1']").fill("20")
         await page.waitForTimeout(3000)
         await page.locator("//input[@id='sum2']").fill("20")
         await page.locator("//button[normalize-space()='Get Sum']").click();

         await expect( page.locator("//p[@id='addmessage']")).toContainText("40")




    })


  




test("AI", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    const sum1 = page.locator("#sum1");
    const sum2 = page.locator("#sum2");
    const result = page.locator("#addmessage");

    await sum1.fill("20");
    await sum2.fill("20");

    await page.locator("button:has-text('Get Sum')").click();

    await expect(result).toContainText("40");
});



// test("Alters to be handle", async({page}) => {
//     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
//     await page.getByRole('button', {name: 'Click Me'}).nth(0).click()

//     page.once('dialog', alert => {
//         console.log("The message: ", alert.message());
//         alert.accept().catch(() => {});
//     })
// })

