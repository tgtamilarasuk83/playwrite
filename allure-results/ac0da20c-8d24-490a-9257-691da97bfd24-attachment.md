# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationWebsite\test\register.spec.ts >> Register user
- Location: AutomationWebsite\test\register.spec.ts:7:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /payment/
Received string:  "https://automationexercise.com/checkout"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://automationexercise.com/checkout"

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Logout":
        - /url: /logout
    - listitem:
      - link " Delete Account":
        - /url: /delete_account
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
    - listitem:  Logged in as Tamilarasu
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem: Checkout
- heading "Address Details" [level=2]
- list:
  - listitem:
    - heading "Your delivery address" [level=3]
  - listitem: Mrs. Tamilarasu K
  - listitem: ABC Company
  - listitem: Coimbatore
  - listitem
  - listitem: Coimbatore Tamilnadu 641005
  - listitem: India
  - listitem: "9876543210"
- list:
  - listitem:
    - heading "Your billing address" [level=3]
  - listitem: Mrs. Tamilarasu K
  - listitem: ABC Company
  - listitem: Coimbatore
  - listitem
  - listitem: Coimbatore Tamilnadu 641005
  - listitem: India
  - listitem: "9876543210"
- heading "Review Your Order" [level=2]
- table:
  - rowgroup:
    - row "Item Description Price Quantity Total":
      - cell "Item"
      - cell "Description"
      - cell "Price"
      - cell "Quantity"
      - cell "Total"
      - cell
  - rowgroup:
    - row "Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500":
      - cell "Product Image":
        - link "Product Image":
          - /url: ""
          - img "Product Image"
      - cell "Blue Top Women > Tops":
        - heading "Blue Top" [level=4]:
          - link "Blue Top":
            - /url: /product_details/1
        - paragraph: Women > Tops
      - cell "Rs. 500":
        - paragraph: Rs. 500
      - cell "1":
        - button "1"
      - cell "Rs. 500":
        - paragraph: Rs. 500
    - row "Total Amount Rs. 500":
      - cell
      - cell
      - cell "Total Amount":
        - heading "Total Amount" [level=4]
      - cell "Rs. 500":
        - paragraph: Rs. 500
- insertion:
  - iframe
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Development Tools"
  - link "Retail Trade"
  - link "Software"
- text: If you would like to add a comment about your order, please write it in the field below.
- textbox
- link "Place Order":
  - /url: /payment
- insertion:
  - iframe
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
```

# Test source

```ts
  1  | 
  2  | 
  3  | import { expect, test } from "@playwright/test";
  4  | import { chromium } from "@playwright/test";
  5  | import { execPath } from "process";
  6  | 
  7  | test("Register user", async () => {
  8  | 
  9  |        const browser = await chromium.launch({
  10 |         headless:false
  11 |          }) 
  12 | 
  13 |        
  14 |       const context = await browser.newContext();
  15 |    //    const page1 = await context.newPage();
  16 |    //    await page1.goto("https://automationexercise.com/")
  17 | 
  18 | 
  19 |    //    // REGISTER 
  20 | 
  21 |    //     await page1.getByRole('link', { name: 'Signup / Login' }).click();
  22 |    //     await page1.locator('[data-qa="signup-name"]').fill('Tamilarasu');
  23 |    //     await page1.locator('[data-qa="signup-email"]').fill("hwfwirjwudeff1@gmail.com");
  24 |    //     await page1.getByRole('button', { name: 'Signup' }).click();
  25 | 
  26 | 
  27 |    //  await page1.locator('#id_gender2').check();
  28 | 
  29 |    //  await page1.locator('#password').fill('Test@123');
  30 | 
  31 |    //  await page1.selectOption('#days', '10');
  32 |    //  await page1.selectOption('#months', '5');
  33 |    //  await page1.selectOption('#years', '1998');
  34 | 
  35 |    //  await page1.locator('#newsletter').check();
  36 |    //  await page1.locator('#optin').check();
  37 | 
  38 |    //  await page1.locator('#first_name').fill('Tamilarasu');
  39 |    //  await page1.locator('#last_name').fill('K');
  40 |    //  await page1.locator('#company').fill('ABC Company');
  41 |    //  await page1.locator('#address1').fill('Coimbatore');
  42 | 
  43 |    //  await page1.selectOption('#country', 'India');
  44 | 
  45 |    //  await page1.locator('#city').fill('Coimbatore');
  46 |    //  await page1.locator('#state').fill('Tamilnadu');
  47 |    //  await page1.locator('#zipcode').fill('641005');
  48 |    //  await page1.locator('#mobile_number').fill('9876543210');
  49 | 
  50 |    //  await page1.getByRole('button', { name: 'Create Account' }).click();
  51 |    //  await expect(page1.getByText('Account Created!')).toBeVisible();
  52 |    //  await page1.getByRole('link', { name: 'Continue' }).click();
  53 |    //  await page1.getByRole('link', { name: 'Logout' }).click();
  54 | 
  55 |     // login
  56 |     const login = await context.newPage();
  57 | 
  58 |    await login.goto("https://automationexercise.com/login");
  59 |    await login.locator("[data-qa='login-email']").fill("hwfwirjwudeff1@gmail.com");
  60 |    await login.locator("[data-qa='login-password']").fill("Test@123");
  61 |    await login.locator("[data-qa='login-button']").click();
  62 |    await expect(login.getByText("Logged in as")).toBeVisible();
  63 | 
  64 |     // add the product to the cart and checkout
  65 |   
  66 |    const cart = await context.newPage();
  67 |    await cart.goto("https://automationexercise.com");
  68 |    await expect(cart.getByText("Logged in as")).toBeVisible();
  69 |    await cart.locator(".product-image-wrapper").first().hover();
  70 | 
  71 |    // js click
  72 |    await cart.locator("//button[text()='Continue Shopping']").evaluate((element: HTMLButtonElement) => element.click());
  73 |  
  74 |    await cart.getByRole('link', { name: 'View Cart' }).click();
  75 |    await expect(cart).toHaveURL(/view_cart/); //used tohaveyrl
  76 |    await cart.locator("//a[contains(@class,'check_out')]").click();
> 77 |    await expect(cart).toHaveURL(/payment/);
     |                       ^ Error: expect(page).toHaveURL(expected) failed
  78 |    await cart.locator("//input[@name='name_on_card']").fill("Tamilarasu");
  79 |    await cart.locator("//input[@name='card_number']").fill("424356779854675");
  80 |    await cart.locator("//input[@name='cvc']").fill("311");
  81 |    await cart.locator("//input[@name='expiry_month']").fill("12");
  82 |    await cart.locator("//input[@name='expiry_year']").fill("2038");
  83 | 
  84 | 
  85 |    await cart.locator("#submit").click();
  86 |    await expect(cart.locator("//b[normalize-space()='Order Placed!']")).toBeVisible();
  87 | 
  88 | 
  89 | 
  90 | 
  91 | 
  92 | 
  93 | 
  94 | 
  95 | });
  96 | 
  97 | 
```