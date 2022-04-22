const puppeteer = require("puppeteer");

async function getAdsTxt(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url + "/ads.txt");
  const adsTxt = await page.content();
  await browser.close();
  return adsTxt;
}

module.exports = { getAdsTxt };
