const amqplib = require("amqplib");

const logger = require("./logger.config");
const config = require("./server.config");

let channel, connection;

async function connectQueue() {
  try {
    connection = await amqplib.connect(config.QUEUE_CONNECTION_URL);
    channel = await connection.createChannel();
    await channel.assertQueue(config.QUEUE);
  } catch (error) {
    logger.error(`Error in connecting Queue in config: ${error}`);
  }
}

async function sendData(data) {
  try {
    await channel.sendToQueue(config.QUEUE, Buffer.from(JSON.stringify(data)));
  } catch (error) {
    logger.error(`Error in Sending Data in Queue config: ${error}`);
  }
}

module.exports = {
  connectQueue,
  sendData,
};
