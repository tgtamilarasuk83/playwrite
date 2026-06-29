import { test } from '@playwright/test';

test("Simplealert", async ({ page }) => {

   
    await page.goto("https://testautomationcentral.com/demo/alerts.html");

    page.on('dialog', async(dialog) =>{
       console.log( dialog.message())
       console.log(dialog.type())
       dialog.accept()

    })
    await page.locator("//button[contains(text(),'Alert')]").nth(1).scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),'Alert')]").nth(1).click()
    await page.locator("//button[@class='bg-blue-500 text-white px-4 py-2 rounded']").click()
 
});


test("CONFIRMATION alert", async ({ page }) => {

   
    await page.goto("https://testautomationcentral.com/demo/alerts.html");

    page.on('dialog', async(dialog) =>{
       console.log( dialog.message())
       console.log(dialog.type())
       dialog.accept()

    })
      await page.locator("//button[contains(text(),'Confirm')]").nth(1).scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),'Confirm')]").nth(1).click()
    await page.locator("//button[@class='bg-yellow-500 text-white px-4 py-2 rounded']").click()
 
});




test("promt  alert", async ({ page }) => {

   
    await page.goto("https://testautomationcentral.com/demo/alerts.html");

    page.on('dialog', async(dialog) =>{
       console.log( dialog.message())
       console.log(dialog.type())
       dialog.accept("helllo")

    })
    await page.locator("//button[text()='Prompt']").nth(1).scrollIntoViewIfNeeded();   
    await page.locator("//button[text()='Prompt']").nth(1).click()
    await page.locator("//button[@class='bg-yellow-500 text-white px-4 py-2 rounded']").click()
 
});
