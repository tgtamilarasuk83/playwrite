import test from "@playwright/test";


test("practice actions" , async({page})=>{

    page.setDefaultNavigationTimeout(12000);
    page.setDefaultTimeout(40000);

   await page.goto("https://www.demoblaze.com/")
   await page.locator("//a[@id='login2']").dblclick();
   await page.locator('//*[@id="loginusername"]').fill("arasu")
   await page.keyboard.press('Enter');
   await page.locator('//*[@id="loginpassword"]').fill("arasu")
   await page.keyboard.press('Enter');
   await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

   await page.mouse.move(100,100);
   await page.waitForTimeout(5000)
   await page.mouse.wheel(0,1000);
   await page.waitForTimeout(5000)
   await page.mouse.down();
   await  page.waitForTimeout(5000)
    await page.mouse.up();
  

    test.setTimeout(60000);

    


    
})