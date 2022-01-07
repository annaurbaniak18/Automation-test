import {homeUrl} from "../lib/pages";
import GlobalPage from "./GlobalPage";
class HomePage extends GlobalPage{
    get fbIcon(){
        return $("div#block_top_menu a");
    }

    async openHomePage(){
        await browser.url(homeUrl);
        await expect(browser).toHaveUrl(homeUrl + "index.php");
    }
    async moveToFbIcon(){
        const icon:WebdriverIO.Element=await this.fbIcon;
        await icon.waitForDisplayed();
        await icon.moveTo();
    }
}

export default new HomePage();