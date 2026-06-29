import { expect, test } from "@playwright/test";

test("selecttag", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    // select multiple options 
    await page.selectOption("//select[@id='colors']",['Blue','Red','yellow'])

    //   using js array 
    const options = await page.$$("//select[@id='colors']")
    console.log(options.length)

    await expect(options.length).toBe(1);

    const content = await page.locator("//select[@id='colors']").textContent();
   console.log(content)

   await page.locator("//select[@id='colors']").selectOption([])

//    using the label 
await page.locator("//select[@id='colors']").selectOption({label:"red"})
await page.locator("//select[@id='colors']").selectOption({value:"yellow"})






     
     
})