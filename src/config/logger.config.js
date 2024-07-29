const winston = require("winston");
const { combine, timestamp, printf, colorize } = winston.format;

const allowedTransports = [];
allowedTransports.push(
  new winston.transports.Console({
    format: combine(
      colorize(),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    ),
  })
);

const logger = winston.createLogger({
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
