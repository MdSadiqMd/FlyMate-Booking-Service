const express = require("express");

const config = require("./config/server.config.js");
const logger = require("./config/logger.config.js");
const Queue = require("./config/queue.config.js");
const apiRoutes = require("./routes");
const { CRON } = require("./utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(config.PORT, async () => {
  logger.info(`Successfully started the server on PORT : ${config.PORT}`);
  CRON();
  await Queue.connectQueue();
});
