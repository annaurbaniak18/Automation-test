import HomePage from "../../pages/homePage";

describe("Verify Home Page Google", async()=>{
    it("Should open google page and wait for 3000 ms", async()=>{
        await browser.url("http://automationpractice.com/");
        await HomePage.moveToFbIcon();
    })
}

)