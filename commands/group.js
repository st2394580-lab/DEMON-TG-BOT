
module.exports = {
  name: "group",

  async execute(ctx) {
    if (!["group", "supergroup"].includes(ctx.chat.type)) {
      return ctx.reply("❌ This command is for groups only.");
    }

    await ctx.reply(
      `👥 GROUP INFO\n\n` +
      `📛 Name: ${ctx.chat.title || "Unknown"}\n` +
      `🆔 ID: ${ctx.chat.id}\n` +
      `📦 Type: ${ctx.chat.type}`
    );
  }
};
