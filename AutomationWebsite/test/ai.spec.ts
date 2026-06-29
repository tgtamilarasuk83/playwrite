import { test, expect } from "@playwright/test";

// ✅ Waits until a typed value STAYS in the input (page stops resetting it)
async function stableType(page: any, selector: string, value: string) {
    await page.locator(selector).waitFor({ state: "visible" });

    // Keep trying until the value survives for 300ms after typing
    await page.waitForFunction(
        async ({ selector, value }: { selector: string; value: string }) => {
            const el = document.querySelector(selector) as HTMLInputElement;
            if (!el) return false;

            el.focus();
            el.value = value;
            el.dispatchEvent(new Event("input",  { bubbles: true }));
            el.dispatchEvent(new Event("change", { bubbles: true }));

            // Wait 300ms and check if value is still there
            await new Promise(r => setTimeout(r, 300));
            return el.value === value;
        },
        { selector, value }
    );
}

test("test checking", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    console.log(await page.title());
    console.log(page.url());

    const placeholder = await page.locator("input#user-message").getAttribute("placeholder");
    console.log(placeholder);

    // ✅ Keep typing until value stops getting reset by page JS
    await stableType(page, "input#user-message", "i am entering a message");

    console.log("Value:", await page.locator("input#user-message").inputValue());

    await page.locator("button:has-text('Get Checked Value')").click();

    await expect(page.locator("p#message").first()).toContainText("i am entering a message");
});


test("testing calculator", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    // ✅ Wait until values stop getting reset
    await stableType(page, "input#sum1", "20");
    await stableType(page, "input#sum2", "20");

    console.log("sum1:", await page.locator("input#sum1").inputValue());
    console.log("sum2:", await page.locator("input#sum2").inputValue());

    await page.locator("button:has-text('Get Sum')").click();

    await expect(page.locator("p#addmessage").first()).toContainText("40");
});


test("AI", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    const result = page.locator("p#addmessage").first();

    // ✅ Wait until values stop getting reset
    await stableType(page, "input#sum1", "20");
    await stableType(page, "input#sum2", "20");

    console.log("sum1:", await page.locator("input#sum1").inputValue());
    console.log("sum2:", await page.locator("input#sum2").inputValue());

    await page.locator("button:has-text('Get Sum')").click();

    await expect(result).toContainText("40");
});


test( "handling alerts ", async(Page)=>{

    



})