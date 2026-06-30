import {test,expect} from '@playwright/test';
import { assert } from 'node:console';

test("drag and drop", async({browser , context}) =>{
  

     const contex = await browser.newContext();
     const page1 = await contex.newPage();
     const page2 = await contex.newPage();


    await page1.goto("https://the-internet.herokuapp.com/drag_and_drop")
    
    await page1.locator("//div[@id='column-a']").dragTo(page1.locator("//div[@id='column-b']"))
    await expect(page1.locator("//div[@id='column-b']")).toHaveText("A")



    await page2.goto("https://jqueryui.com/droppable/");
    const frame = page2.frameLocator(".demo-frame");
    await frame.locator("//p[normalize-space()='Drag me to my target']").dragTo(frame.locator('//*[@id="droppable"]'));
    await expect(frame.locator('//*[@id="droppable"]')).toHaveText("Dropped!");





})