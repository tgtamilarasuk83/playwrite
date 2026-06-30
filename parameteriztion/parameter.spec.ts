
import {test,expect} from '@playwright/test';
const searchData = [
    { keyword: "Playwright", expectedTitle: "Playwright" },
    { keyword: "Selenium", expectedTitle: "Selenium" },
    { keyword: "Cypress", expectedTitle: "Cypress" },
    { keyword: "JavaScript", expectedTitle: "JavaScript" },
    { keyword: "TypeScript", expectedTitle: "TypeScript" }]

    test.describe("Googlee search",() =>{
        searchData.forEach((Data) => {
            test (`search for ${Data.keyword}`,async ({page})=>{

                await page.goto("https://www.google.com/?authuser=0&zx=1782717917773")

                await page.locator("textarea[name='q']").fill(Data.keyword);
                await page.keyboard.press("Enter")

                const firstResult = page.locator("h3").first()
                await firstResult.click()

                await expect(page).toHaveTitle(new RegExp(Data.expectedTitle,"i"))

            })
        })
    })

    