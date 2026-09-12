const config = require("../config");

module.exports = {
  name: "start",
  aliases: ["home"],

  async execute(ctx) {
    await ctx.reply(
      `╭━━━〔 🤖 ${config.BOT_NAME} 〕━━━╮\n` +
      `┃\n` +
      `┃ 👋 Welcome ${ctx.from.first_name || "User"}!\n` +
      `┃\n` +
      `┃ ⚡ Telegram Multi-Purpose Bot\n` +
      `┃ 🤖 Auto Reply: ${config.AUTO_REPLY ? "ON" : "OFF"}\n` +
      `┃\n` +
      `┃ 📜 /menu - Commands\n` +
      `┃ ℹ️ /help - Help\n` +
      `┃\n` +
      `╰━━━━━━━━━━━━━━━━━━━━╯`
    );
  }
};
