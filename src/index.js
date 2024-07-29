const express = require("express");

const config = require("./config/server.config.js");
const logger = require("./config/logger.config.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(config.PORT, () => {
  logger.info(`Successfully started the server on PORT : ${config.PORT}`);
});
