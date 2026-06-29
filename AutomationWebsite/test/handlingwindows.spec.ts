import test from "@playwright/test";


test("handling windows" , async({page})=>{

    await page.goto("https://demoqa.com/browser-windows")
    // await page.locator("//button[@id='tabButton']").click

    //  const totalpages = page.context().pages();
    //  console.log(totalpages.length)

    //  const page1= totalpages[1]
    //  console.log(page1.title())

    //   for (const p of totalpages) {
    //     console.log(await p.title());
    //     console.log(await p.url());
    // }



    // tab
   const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("//button[@id='tabButton']").click(),
  ]);

    await popup.waitForLoadState();
    console.log(await popup.title());
    console.log(popup.url());

    // window 
     const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator("//button[@id='windowButton']").click()
    ]);

    await newPage.waitForLoadState();

    console.log( page.url()); //parent page 
    console.log( newPage.url());


    // multiplewindows

    const[multiplewindow] =await Promise.all([
        page.context().waitForEvent('page'),
        page.locator("//button[@id='windowButton']").click()

    ])

    const pages = page.context().pages();

    for (const p of pages) {
        await p.waitForLoadState();

        console.log(await p.title());
        console.log(p.url());
    }

});