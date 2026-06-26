

import { expect, test } from "@playwright/test";
import { chromium } from "@playwright/test";
import { execPath } from "process";

test("Register user", async () => {

       const browser = await chromium.launch({
        headless:false
         }) 

       
      const context = await browser.newContext();
      const page1 = await context.newPage();
      await page1.goto("https://automationexercise.com/")


      // REGISTER 

       await page1.getByRole('link', { name: 'Signup / Login' }).click();
       await page1.locator('[data-qa="signup-name"]').fill('Tamilarasu');
       await page1.locator('[data-qa="signup-email"]').fill("hwfwirjwudeff1@gmail.com");
       await page1.getByRole('button', { name: 'Signup' }).click();


    await page1.locator('#id_gender2').check();

    await page1.locator('#password').fill('Test@123');

    await page1.selectOption('#days', '10');
    await page1.selectOption('#months', '5');
    await page1.selectOption('#years', '1998');

    await page1.locator('#newsletter').check();
    await page1.locator('#optin').check();

    await page1.locator('#first_name').fill('Tamilarasu');
    await page1.locator('#last_name').fill('K');
    await page1.locator('#company').fill('ABC Company');
    await page1.locator('#address1').fill('Coimbatore');

    await page1.selectOption('#country', 'India');

    await page1.locator('#city').fill('Coimbatore');
    await page1.locator('#state').fill('Tamilnadu');
    await page1.locator('#zipcode').fill('641005');
    await page1.locator('#mobile_number').fill('9876543210');

    await page1.getByRole('button', { name: 'Create Account' }).click();
    await expect(page1.getByText('Account Created!')).toBeVisible();
    await page1.getByRole('link', { name: 'Continue' }).click();
    await page1.getByRole('link', { name: 'Logout' }).click();

    // login
    const login = await context.newPage();

   await login.goto("https://automationexercise.com/login");
   await login.locator("[data-qa='login-email']").fill("hwfwirjwudeff1@gmail.com");
   await login.locator("[data-qa='login-password']").fill("Test@123");
   await login.locator("[data-qa='login-button']").click();
   // await expect(login.getByText("Logged in as")).toBeVisible();

    // add the product to the cart and checkout
  
   const cart = await context.newPage();
   await cart.goto("https://automationexercise.com");
   await expect(cart.getByText("Logged in as")).toBeVisible();
   // const product = cart.locator(".product-image-wrapper").first();
   // await product.scrollIntoViewIfNeeded();
   await cart.locator('.product-image-wrapper').first().hover();
   
    await cart.locator("//div[@class='features_items']//div[2]//div[1]//div[1]//div[2]//div[1]//a[1]").evaluate((element: HTMLButtonElement) => element.click());
   await cart.locator("//button[text()='Continue Shopping']").evaluate((element: HTMLButtonElement) => element.click());
   // await cart.getByRole('link', { name: 'Add to cart' }).first().click();
   await cart.getByRole('button', { name: 'Continue Shopping' }).click();
   await cart.getByRole('link', { name: /Cart/ }).click();
   // await expect(cart).toHaveURL(/view_cart/);

   // await cart.locator("//a[contains(@class,'check_out')]").click();
   // await expect(cart).toHaveURL(/payment/);
   await cart.locator("//a[@class='btn btn-default check_out']").click()
 
   await cart.locator("  //a[@class='btn btn-default check_out']").click()
   await cart.locator("//input[@name='name_on_card']").fill("Tamilarasu");
   await cart.locator("//input[@name='card_number']").fill("424356779854675");
   await cart.locator("//input[@name='cvc']").fill("311");
   await cart.locator("//input[@name='expiry_month']").fill("12");
   await cart.locator("//input[@name='expiry_year']").fill("2038");


   await cart.locator("#submit").click();
   await expect(cart.locator("//b[normalize-space()='Order Placed!']")).toBeVisible();








});

