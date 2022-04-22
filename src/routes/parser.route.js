const express = require("express");
const { getAdsData } = require("../controllers/parser.controller");

const router = express.Router();

router.get("/", getAdsData);

module.exports = router;
