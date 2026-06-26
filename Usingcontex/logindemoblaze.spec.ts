import {chromium , expect, test} from "@playwright/test"

test("login test demo" , async() =>{

    const browser = await chromium.launch({
        headless:false
    }) 

    const contex = await browser.newContext();
    const page1 = await contex.newPage();


        await page1.locator('//*[@id="login2"]').click(); 
        await page1.waitForSelector('//*[@id="loginusername"]'); 
        await page1.locator('xpath=//*[@id="loginusername"]').clear();
        await page1.locator('xpath=//*[@id="loginusername"]').fill(process.env.dUSERNAME!);   
        await page1.locator('xpath=//*[@id="loginpassword"]').clear();
        await page1.locator('xpath=//*[@id="loginpassword"]').fill(process.env.dPASSWORD!);
        await page1.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
        await expect(page1.locator('//*[@id="nameofuser"]')).toContainText('Welcome');

    const page2 = await contex.newPage()
        await page2.locator('xpath=//*[@id="cartur"]').click //button[normalize-space()='Place Order']
        await page2.locator('xpath=//*[@id="cartur"]').click

        


    
    


})