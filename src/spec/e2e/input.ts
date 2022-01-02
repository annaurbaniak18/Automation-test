import { homeUrl } from '../../lib/pages';
import { searchPhrase, homePageTitle } from '../../lib/wordData';

describe('Lesson 1 - Input', async () => {
	it('Should open automationpractice page', async () => {
		await browser.url(homeUrl);
		await expect(browser).toHaveUrl(homeUrl + 'index.php');
		await expect(browser).toHaveTitle(homePageTitle);
	});

	it('Should type to search input', async () => {
		const input: WebdriverIO.Element = await $('#search_query_top');
		await input.setValue(searchPhrase);
		expect(await input.getValue()).toContain(searchPhrase);
	});
	it("Should clear search input", async()=>{
		const input: WebdriverIO.Element = await $('#search_query_top');
		await input.clearValue();
		await browser.pause(3000);
		await expect(await input.getValue()).toContain("");
	})
});
