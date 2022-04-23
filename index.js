require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const parserRouter = require("./src/routes/parser.route");
const checkCache = require("./src/middleware/cache");

const { PORT } = process.env;
const { PARSER, TRAILING_STAR, HELLO } = require("./src/constants/routes.constants");

const publicPath = path.join(__dirname, "client/build");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://add-txt.herokuapp.com"],
  })
);
app.use(express.json());
app.use(express.static(publicPath));

app.get(HELLO, (_, res) => {
  res.send("Hello World!");
});

app.use(PARSER, checkCache, parserRouter);

app.get(TRAILING_STAR, (_, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
