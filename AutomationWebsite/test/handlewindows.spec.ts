import { Page } from '@playwright/test';
import {test , expect } from '@playwright/test';

test("handlewindows" , async({page,context}) =>{

    await page.goto("https://demoqa.com/browser-windows");

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await newWindow.waitForLoadState();

})
