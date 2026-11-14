import {test,expect} from '@playwright/test'
test('Alert Test',async({page})=>{
    await page.goto("https://techwithsuresh.lovable.app/test#alerts");

    page.once('dialog',async dialog=>{
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept("Suresh");
        //await dialog.dismiss();
    })
    await page.locator('#test-alert-button').click()
})