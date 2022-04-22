const Redis = require("ioredis");

const redisClient = new Redis();

console.log("Redis client connected");

module.exports = redisClient;
