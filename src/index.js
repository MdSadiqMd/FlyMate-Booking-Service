const express = require("express");

const config = require("./config/server.config.js");
const logger = require("./config/logger.config.js");
const Queue = require("./config/queue.config.js");
const apiRoutes = require("./routes");
const { CRON } = require("./utils");
const { default: axios } = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.get("/callingFlightsService", async (req, res) => {
    const response = await axios.get('http://flymate_flights_service:3000/api/v1/info');
    console.log(response);
    return res.json(response.data);
});

app.listen(config.PORT, async () => {
    logger.info(`Successfully started the server on PORT : ${config.PORT}`);
    CRON();
    await Queue.connectQueue();
});
