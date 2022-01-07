import {homeUrl} from "../lib/pages";

class GlobalPage{
    async openHomePage(){
        await browser.url (homeUrl);
        await expect (browser).toHaveUrl(homeUrl + "index.php");
    }
}
export default  GlobalPage;