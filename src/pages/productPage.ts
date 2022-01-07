import { productUrl } from "../lib/pages";

class ProductPage{
    async openProductPage(){
        await browser.url(productUrl);
        await expect(browser).toHaveUrl(productUrl);
    }
}
export default new ProductPage();