import { test } from '@playwright/test';

test('multiple browser contexts', async ({ browser }) => {

    // Context 1 - Amazon User
    const amazonContext = await browser.newContext();
    const amazonPage = await amazonContext.newPage();

    // Context 2 - Flipkart User
    const flipkartContext = await browser.newContext();
    const flipkartPage = await flipkartContext.newPage();

    // Context 3 - Myntra User
    const myntraContext = await browser.newContext();
    const myntraPage = await myntraContext.newPage();

    // Context 4 - Meesho User
    const meeshoContext = await browser.newContext();
    const meeshoPage = await meeshoContext.newPage();

    await amazonPage.goto('https://www.amazon.in');
    await flipkartPage.goto('https://www.flipkart.com');
    await myntraPage.goto('https://www.myntra.com');
    await meeshoPage.goto('https://www.meesho.com');

    await amazonPage.bringToFront();
    await flipkartPage.bringToFront();
    await myntraPage.bringToFront();
    await meeshoPage.bringToFront();

    await amazonPage.waitForTimeout(10000);
});