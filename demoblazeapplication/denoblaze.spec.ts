import { test, expect } from '@playwright/test';

test.only('Demoblaze Valid Login Test', async ({ page }) => {

    console.log('BASE_URL:', process.env.dBASE_URL);
    console.log('USERNAME:', process.env.dUSERNAME);

    await page.goto(process.env.dBASE_URL!);

    console.log('Current URL:', page.url());
    console.log('Title:', await page.title());

    // Click Login link
    await page.locator('//*[@id="login2"]').click();

    // Wait for login modal
    await page.waitForSelector('//*[@id="loginusername"]');

    await page.locator('xpath=//*[@id="loginusername"]').clear();
    await page.locator('xpath=//*[@id="loginusername"]').fill(process.env.dUSERNAME!);

    await page.locator('xpath=//*[@id="loginpassword"]').clear();
    await page.locator('xpath=//*[@id="loginpassword"]').fill(process.env.dPASSWORD!);

    // Click Login button
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]')
        .click();

    // Verify login success
    await expect(page.locator('//*[@id="nameofuser"]'))
        .toContainText('Welcome');

    await page.waitForTimeout(5000);
});