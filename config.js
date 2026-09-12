
module.exports = {
  BOT_NAME: process.env.BOT_NAME || "DEMON-TG-BOT",
  BOT_TOKEN: process.env.BOT_TOKEN,
  PREFIX: process.env.PREFIX || "/",
  AUTO_REPLY: process.env.AUTO_REPLY !== "false",
  OWNER_ID: process.env.OWNER_ID || ""
};
