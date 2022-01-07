import { uploaderUrl } from '../../lib/pages';
const path = require('path');

describe('Lesson6 - Upolad File ', async () => {
	it('Should open uploader url, and verify url ', async () => {
		await browser.url(uploaderUrl);
		await expect(browser).toHaveUrl(uploaderUrl);
	});
	it('Should upload file and click upload button', async () => {
		const input: WebdriverIO.Element = await $('#file-upload');
		const btnUpload: WebdriverIO.Element = await $('#file-submit');
		const filePath = path.join(__dirname, '../../images/ziemia.jpg');
		const uploadedFile = await browser.uploadFile(filePath);
		await input.setValue(uploadedFile);
		await btnUpload.click();
		const h3: WebdriverIO.Element = await $('div#content h3');
        const p:WebdriverIO.Element=await $("#uploaded-files");
		await expect(await h3.getText()).toContain('File Uploaded');
        await expect(await p.getText()).toContain("ziemia.jpg");
	});
    
});
