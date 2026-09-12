const config = require("../config");

function setupAutoReply(bot) {
  if (!config.AUTO_REPLY) return;

  bot.on("text", async (ctx) => {
    const text = ctx.message.text.toLowerCase().trim();

    if (text === "good morning") {
      return ctx.reply("🌅 Good morning!");
    }

    if (text === "good night") {
      return ctx.reply("🌙 Good night!");
    }

    if (text === "thanks" || text === "thank you") {
      return ctx.reply("😊 You're welcome!");
    }

    if (text === "bye") {
      return ctx.reply("👋 Bye!");
    }
  });
}

module.exports = setupAutoReply;
