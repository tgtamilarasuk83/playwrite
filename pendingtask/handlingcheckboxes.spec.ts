import test, { expect } from "@playwright/test";




test("handling dropdowns", async({page})=>{

    

    await page.goto("https://testautomationpractice.blogspot.com/")
     const elements = await page.locator('//*[@id="post-body-1307673142697428135"]/div[4]').textContent();
    console.log(elements)
    await page.locator('//*[@id="post-body-1307673142697428135"]/div[4]/div[1]/input').check()
    await expect(page.locator('//*[@id="post-body-1307673142697428135"]/div[4]/div[1]/input')).toBeChecked();
    
     await expect(page.locator('//*[@id="post-body-1307673142697428135"]/div[4]/div[2]/input')).not.toBeChecked();

    //  radiobutton
    await page.locator("//label[@for='male']").click()
    await expect(page.locator("//label[@for='male']")).toBeChecked();
     await page.locator("//label[@for='male']").check()
    await expect(page.locator("//label[@for='male']")).toBeChecked();
    


    






    
})