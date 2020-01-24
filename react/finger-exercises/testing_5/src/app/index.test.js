import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../config/test';

describe('H1 Text', () => {
  it(
    'h1 loads correctly',
    async () => {
      const browser = await Puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(TEST_BASE_URL);
      const h1Title = await page.$eval('.app-title', e => e.innerHTML);
      expect(h1Title).toBe('Welcome to React');

      const h1SubTitle = await page.$eval('.app-subtitle', e => e.innerHTML);
      expect(h1SubTitle).toBe('This is a finger exercise');

      browser.close();
    },
    16000
  );
});
