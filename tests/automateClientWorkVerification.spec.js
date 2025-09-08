const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto('https://www.epam.com/');

  // Accept Cookies
  await page.click('button:has-text("Accept All")');

  // Click on Services
  await page.click('a:has-text("Services")');

  // Click on "Explore Our Client Work"
  await page.click('a:has-text("Learn More")');

  // Verify "Client Work" text is visible
  const clientWorkText = await page.isVisible('text=Client Work');
  if (clientWorkText) {
    console.log('Client Work text is visible');
  } else {
    console.log('Client Work text is not visible');
  }

  await browser.close();
})();