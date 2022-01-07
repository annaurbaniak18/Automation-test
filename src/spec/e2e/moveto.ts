import { homeUrl } from '../../lib/pages';
import HomePage from "../../pages/homePage";

describe('Lesson7 - Moveto, MoveIntoView ', async () => {
	it('Should open automation practice page and verify url', async () => {
		await HomePage.openHomePage();
	});
	it('Should scroll into view fb icon', async () => {
		const fbIcon: WebdriverIO.Element = await $('li.facebook');
		await fbIcon.scrollIntoView();
	});
	it("Should hover on women tab", async () => {
		const tab:WebdriverIO.Element = await $("div#block_top_menu a");
        await tab.scrollIntoView();
		await tab.moveTo();
		await browser.pause(4000);
	});
});
