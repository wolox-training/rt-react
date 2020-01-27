import Faker from 'faker';
import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../../../../../config/test';

// import { FIELDS } from './constants';

const person = {
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
  email: Faker.internet.email()
};

describe('Signup Form (use FIELDS constants)', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await Puppeteer.launch();
  }); // start the browser

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto(TEST_BASE_URL);
  }); // go to root page

  it('Can submit signup form', async () => {
    await page.waitForSelector('.signup-form');
    await page.click('input[name=firstName]');
    await page.type('input[name=firstName]', 'Renzo');
    await page.click('input[name=lastName]');
    await page.type('input[name=lastName]', 'Torres');
    await page.click('input[name=email]');
    await page.type('input[name=email]', 'renzo.torres@wolox.com.ar');
    await page.click('button[type=submit]');
    await page.waitForSelector('span.result');
  });

  it(
    'Successful submit',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=firstName]');
      await page.type('input[name=firstName]', 'Renzo');
      await page.click('input[name=lastName]');
      await page.type('input[name=lastName]', 'Torres');
      await page.click('input[name=email]');
      await page.type('input[name=email]', 'renzo.torres@wolox.com.ar');
      await page.click('button[type=submit]');
      await page.waitForFunction(
        'document.querySelector("body").innerText.includes("User has been created successfully")'
      );
    },
    16000
  );

  it(
    '3 fields are required',
    async () => {
      await page.click('button[type=submit]');
      await page.waitForSelector('span.error-firstName');
      await page.waitForSelector('span.error-lastName');
      await page.waitForSelector('span.error-email');
    },
    16000
  );

  it(
    'First name is required',
    async () => {
      await page.click('button[type=submit]');
      await page.waitForSelector('span.error-firstName');
    },
    16000
  );

  it(
    'Last name is required',
    async () => {
      await page.click('button[type=submit]');
      await page.waitForSelector('span.error-lastName');
    },
    16000
  );

  it(
    'Email is required',
    async () => {
      await page.click('button[type=submit]');
      await page.waitForSelector('span.error-email');
    },
    16000
  );

  afterAll(() => {
    browser.close();
  }); // close browesr
});
