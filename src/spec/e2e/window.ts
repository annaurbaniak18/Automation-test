import { homeUrl, womenUrl } from "../../lib/pages";

describe("Lesson 4 - Window", async()=>{
it("Should open page", async()=>{
    await browser.url (homeUrl);
    await expect(browser).toHaveUrl(homeUrl+"index.php");
})
it("Should open women page in new window", async()=>{
    await browser.newWindow(womenUrl);

})
it("Should verify title pages", async()=>{
const openWindows = await browser.getWindowHandles();
await browser.switchToWindow(openWindows[0]);
// const windowTitle1:string=await browser.getTitle();
await expect (browser).toHaveTitle("My Store");
await browser.switchToWindow(openWindows[1]);
await expect(browser).toHaveTitle("Women - My Store");
})
})