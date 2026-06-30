import { test, expect } from '@playwright/test';

test.describe("demoblaze", () => {

    test.describe.skip("valid", () => {

        test.only('Skip1', async ({ page }) => {

            await page.goto("https://www.demoblaze.com/");

            console.log('Current URL:', page.url());
            console.log('Title:', await page.title());

            await page.locator('//*[@id="login2"]').click();

            await page.waitForSelector('//*[@id="loginusername"]');

            await page.locator('//*[@id="loginusername"]').fill("arasu");
            await page.locator('//*[@id="loginpassword"]').fill("arasu");

            await expect.soft(page.locator("//a[@id='logout2']")).toBeVisible();

            await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();

            await expect.soft(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');
        });

        test.describe.skip("valid2", () => {

            test.only('Skip2', async ({ page }) => {

                await page.goto("https://www.demoblaze.com/");

                console.log('Current URL:', page.url());
                console.log('Title:', await page.title());

                await page.locator('//*[@id="login2"]').click();

                await page.waitForSelector('//*[@id="loginusername"]');

                await page.locator('//*[@id="loginusername"]').fill("arasu");
                await page.locator('//*[@id="loginpassword"]').fill("arasu");

                await expect.soft(page.locator("//a[@id='logout2']")).toBeVisible();

                await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();

                await expect.soft(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');
            });

        });

    });

    // Group 2
    test.describe("invalid", () => {

        test.skip('Skip1', async ({ page }) => {

            await page.goto("https://www.demoblaze.com/");

            console.log('Current URL:', page.url());
            console.log('Title:', await page.title());

            await page.locator('//*[@id="login2"]').click();

            await page.waitForSelector('//*[@id="loginusername"]');

            await page.locator('//*[@id="loginusername"]').fill("arasu");
            await page.locator('//*[@id="loginpassword"]').fill("arasu");

            await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();

            await expect.soft(page.locator("//a[@id='logout2']")).toBeVisible();
            await expect.soft(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');
        });

        test.only('Skip2', async ({ page }) => {

            await page.goto("https://www.demoblaze.com/");

            console.log('Current URL:', page.url());
            console.log('Title:', await page.title());

            await page.locator('//*[@id="login2"]').click();

            await page.waitForSelector('//*[@id="loginusername"]');

            await page.locator('//*[@id="loginusername"]').fill("arasu");
            await page.locator('//*[@id="loginpassword"]').fill("arasu");

            await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();

            await expect.soft(page.locator("//a[@id='logout2']")).toBeVisible();
            await expect.soft(page.locator("//a[@id='nameofuser']")).toContainText('Welcome');
        });

    });

});