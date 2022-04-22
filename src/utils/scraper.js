const puppeteer = require("puppeteer");

async function getAdsTxt(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url + "/ads.txt");
    const adsTxt = await page.evaluate(() => document.body.innerText);
    await browser.close();
    return adsTxt;
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = { getAdsTxt };
