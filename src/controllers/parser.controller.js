const getAdsData = (req, res) => {
  const { domain } = req.query;
  res.send(`${domain} ads data`);
};

module.exports = { getAdsData };
