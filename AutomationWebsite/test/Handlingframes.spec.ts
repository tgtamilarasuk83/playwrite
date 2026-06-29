import { test ,expect } from '@playwright/test';
import { assert } from 'node:console';


test("Fremes" , async({page})=>{

   await  page.goto("https://letcode.in/frame")
    const allframe = page.frames();
    console.log("No of frames :" ,allframe)

    const frame1 = page.frameLocator("iframe[name='firstFr']"); //can also use frame which returns object

    await frame1.locator("xpath=//input[@placeholder='Enter name']").fill('Tamilarasu');
    await frame1.locator("xpath=//input[@placeholder='Enter email']").fill('Tamil ');

   
    await expect(frame1.locator("//p[@class='text-sm font-semibold text-center']")).toContainText("Tamil");

    const innerframe =frame1.frameLocator('//*[@id="root"]/div/div/div/iframe');
    await innerframe.locator("//input[@placeholder='Enter email']").fill("tamilarasu@gmail.com")
  



})