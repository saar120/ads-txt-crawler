require("dotenv").config();

const express = require("express");
const path = require("path");

const { PORT } = process.env;
const ROUTES = require("./src/constants/routes.constants");

const app = express();

const publicPath = path.join(__dirname, "client/build");

app.use(express.json());
app.use(express.static(publicPath));

app.get(ROUTES.HELLO, (req, res) => {
  res.send("Hello World!");
});

app.get(ROUTES.TRAILING_STAR, (_, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
