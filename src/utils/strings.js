const urlGenerator = (url) => {
  try {
    if (url.indexOf("http") !== 0) {
      url = "http://" + url;
    }
    return new URL(url);
  } catch (error) {
    return null;
  }
};

module.exports = { urlGenerator };
