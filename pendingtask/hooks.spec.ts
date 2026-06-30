import { test, expect, BrowserContext, Page } from "@playwright/test";

let context: BrowserContext;
let page: Page;

test.beforeEach(async ({ browser }) => {

    context = await browser.newContext();
    page = await context.newPage();

});

test.afterEach(async () => {

    await context.close();

});

test("uploading file", async () => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.setInputFiles("//input[@id='file-upload']", "trace.zip");

    await page.locator("//input[@id='file-submit']").click();

    await expect(
        page.locator("//h3[normalize-space()='File Uploaded!']")
    ).toHaveText("File Uploaded!");

});