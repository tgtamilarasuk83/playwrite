
import {test,expect} from '@playwright/test';

import logindata from '../resources/logindata.json';

interface logindata{
    testname:string;
    username:string;
    password: string;
    expected_result: "Success"|"Failure"
    expected_message :string;
}


const details = logindata as logindata[];

 test.beforeEach(async({page})=>{
        await page.goto("https://www.demoblaze.com/")
    })

    test.afterEach(async({page})=>{
        page.close()
    })

for (const data of details) {

    test(`${data.testname}-${data.username}`, async ({ page }) => {

        await page.locator("//a[@id='login2']").click()
        await page.locator('//*[@id="loginusername"]').fill(data.username)
        await page.locator('//*[@id="loginpassword"]').fill(data.password)


        if(data.expected_result === "Failure"){
            page.on('dialog',async(dialog)=>{
                dialog.message()
                dialog.accept()
            })


        }
        await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

        if(data.expected_result ==="Success"){
            await expect(page.locator("//a[@id='nameofuser']")).toBeVisible({timeout:10000})
            await expect(page.locator("//a[@id='nameofuser']")).toContainText("Welcome " + data.username);
        }

       


    })

}
