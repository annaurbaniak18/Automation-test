import { productUrl } from '../../lib/pages';
import ProductPage from "../../pages/productPage";

describe('Lesson3- Select', async () => {
	it('Should open product page and verify url', async () => {
		await ProductPage.openProductPage();
	});
	it('Should select product size', async () => {
		const select: WebdriverIO.Element = await $('#group_1');
		await select.selectByAttribute('value', '2');
		await expect(await select.getValue()).toContain('2');
	});
});
