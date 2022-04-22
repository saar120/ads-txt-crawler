const redisClient = require("../db/redis");
const { adsTxtParser } = require("../utils/parser");
const { getAdsTxt } = require("../utils/scraper");
const { urlGenerator } = require("../utils/strings");

const getAdsData = async (req, res) => {
  const { domain } = req.query;

  const url = urlGenerator(domain);

  if (!url) {
    return res.json({
      ok: false,
      message: "Please provide a domain",
    });
  }

  const adsTxt = await getAdsTxt(url.origin);
  if (!adsTxt) {
    return res.json({
      ok: false,
      message: "Could not get ads.txt",
    });
  }

  const adsData = adsTxtParser(adsTxt);

  if (adsData.length === 0 || !adsData) {
    return res.json({
      ok: false,
      message: "Could not parse ads.txt",
    });
  }

  redisClient.setex(domain, 3600, JSON.stringify({ data: adsData, host: url.hostname }));

  return res.json({ ok: true, host: url.hostname, data: adsData });
};

module.exports = { getAdsData };
