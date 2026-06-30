import test, { expect } from "@playwright/test";
import { assert } from "node:console";

test("uploading file" , async({browser})=>{

   const contex = await browser.newContext();
   const page1 = await contex.newPage();



    await page1.goto("https://the-internet.herokuapp.com/upload")
    await page1.setInputFiles("//input[@id='file-upload']" ,"trace.zip")
    await page1.locator("//input[@id='file-submit']").click()

    await expect(page1.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!");



})