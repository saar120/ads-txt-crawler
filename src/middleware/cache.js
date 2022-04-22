const redisClient = require("../cache/redis");

const checkCache = (req, res, next) => {
  const { domain } = req.query;
  redisClient.get(domain, (err, result) => {
    if (err) {
      console.error(err);
      next();
    }
    if (result !== null) {
      const { data, host } = JSON.parse(result);
      console.log("Cache hit!", host);
      return res.json({ ok: true, cached: true, host, data });
    } else {
      next();
    }
  });
};

module.exports = checkCache;
