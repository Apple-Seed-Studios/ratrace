const timeout = 5000;

describe(
  '/ (Splash Page)',
  () => {
    let page;
    beforeAll(async () => {
      page = await globalThis.__BROWSER_GLOBAL__.newPage();
      await page.goto('http://localhost:3000');
    }, timeout);

    it('should load without error', async () => {
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('Rat-race');
    });
    it('should have an about button', async () => {
      const aboutButton = await page.$('a[href="/about"]');
      expect(aboutButton).toBeTruthy();
    });
    it('should navigate to the about page', async () => {
      await page.click('a[href="/about"]');
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('We are Apple Seed Studios');
    });
  },
  timeout,
);