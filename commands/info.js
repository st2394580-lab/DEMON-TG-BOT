const config = require("../config");

module.exports = {
  name: "info",

  async execute(ctx) {
    await ctx.reply(
      `🤖 BOT INFO\n\n` +
      `Name: ${config.BOT_NAME}\n` +
      `Platform: Telegram\n` +
      `Runtime: Node.js\n` +
      `Auto Reply: ${config.AUTO_REPLY ? "ON" : "OFF"}\n` +
      `Prefix: ${config.PREFIX}`
    );
  }
};
