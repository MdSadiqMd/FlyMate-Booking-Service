const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 4000,
  FLIGHT_SERVICE: process.env.FLIGHT_SERVICE || "http://localhost:3000",
  QUEUE: process.env.QUEUE || "noti-queue",
  QUEUE_CONNECTION_URL: process.env.QUEUE_CONNECTION_URL || "amqp://localhost",
};
