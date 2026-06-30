// import { test, expect } from '@playwright/test';

// test.describe("demoblaze @overall", () => {

//     test.describe.skip("valid @valid" , () => {

//         test.only('Skip1', async ({ page }) => {

//            {
//             tag:["@skip1" ,"@skippedtesttcases"]
//            }

//     await page.goto("https://www.demoblaze.com/");

//     console.log('Current URL:', page.url());
//     console.log('Title:', await page.title());

    
//     await page.locator('//*[@id="login2"]').click();

//     await page.waitForSelector('//*[@id="loginusername"]');

//     await page.locator('xpath=//*[@id="loginusername"]').clear();
//     await page.locator('xpath=//*[@id="loginusername"]').fill("arasu");

//     await page.locator('xpath=//*[@id="loginpassword"]').clear();
//     await page.locator('xpath=//*[@id="loginpassword"]').fill("arasu");


//      await expect.soft(page.locator("//a[@id='logout2']")).toBeVisible();
//     await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click(); 
//     await expect.soft(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');

// });


//         test.describe("valid2", ()=>{

        
//         test.only('Skip2 ', async ({ page }) => {

//     await page.goto("https://www.demoblaze.com/");

//     console.log('Current URL:', page.url());
//     console.log('Title:', await page.title());

    
//     await page.locator('//*[@id="login2"]').click();

 
//     await page.waitForSelector('//*[@id="loginusername"]');

//     await page.locator('xpath=//*[@id="loginusername"]').clear();
//     await page.locator('xpath=//*[@id="loginusername"]').fill("arasu");

//     await page.locator('xpath=//*[@id="loginpassword"]').clear();
//     await page.locator('xpath=//*[@id="loginpassword"]').fill("arasu");


//      await expect.soft(page.locator("//a[@id='logout2']")).toBeVisible();
//     await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click(); 
//     await expect.soft(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');

// });





        
//     })
//     });

//     // group 2

//     test.describe("invalid  ", ()=>{

//         {
//             tag:["@invalid group " , "@invalid"]
//         }
        
//     test.skip('Skip1 ', async ({ page }) => {

//     await page.goto("https://www.demoblaze.com/");

//     console.log('Current URL:', page.url());
//     console.log('Title:', await page.title());

    
//     await page.locator('//*[@id="login2"]').click();

 
//     await page.waitForSelector('//*[@id="loginusername"]');

//     await page.locator('xpath=//*[@id="loginusername"]').clear();
//     await page.locator('xpath=//*[@id="loginusername"]').fill("arasu");

//     await page.locator('xpath=//*[@id="loginpassword"]').clear();
//     await page.locator('xpath=//*[@id="loginpassword"]').fill("arasu");
 
//     await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
//     await expect.soft(page.locator("//a[@id='logout2']")).toBeVisible();
//     await expect.soft(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');

// });

    
//      test.only('Skip2 ', async ({ page }) => {

//     await page.goto("https://www.demoblaze.com/");

//     console.log('Current URL:', page.url());
//     console.log('Title:', await page.title());

    
//     await page.locator('//*[@id="login2"]').click();

 
//     await page.waitForSelector('//*[@id="loginusername"]');

//     await page.locator('xpath=//*[@id="loginusername"]').clear();
//     await page.locator('xpath=//*[@id="loginusername"]').fill("arasu");

//     await page.locator('xpath=//*[@id="loginpassword"]').clear();
//     await page.locator('xpath=//*[@id="loginpassword"]').fill("arasu");
 
//     await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
//     await expect.soft(page.locator("//a[@id='logout2']")).toBeVisible();
//     await expect.soft(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');

// });

    

        
//     })
  
// })
