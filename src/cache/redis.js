const Redis = require("ioredis");

const redisPORT = process.env.REDIS_URL || 6379;

const redisClient = new Redis(redisPORT);

console.log("Redis client connected");

module.exports = redisClient;
