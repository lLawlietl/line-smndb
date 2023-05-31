const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(path.join(__dirname + "/"), `.env`),
});

module.exports = {
  CHANNEL_ACCESS_TOKEN: process.env.CHANNEL_ACCESS_TOKEN,
  CHANNEL_SECRET: process.env.CHANNEL_SECRET,
};
