const adsTxtParser = (adsTxt) => {
  const adsTxtLines = adsTxt.split("\n");
  const adsTxtObject = {};
  adsTxtLines.forEach((line) => {
    const lineSplit = line.split(",");
    const advertiser = lineSplit[0].toLowerCase();
    if (lineSplit.length > 1) {
      adsTxtObject[advertiser] = adsTxtObject[advertiser] ? adsTxtObject[advertiser] + 1 : 1;
    }
  });

  return Object.entries(adsTxtObject); // [["google.com", 1], ["facebook.com", 1]];
};

module.exports = { adsTxtParser };
