module.exports = {
  name: "id",

  async execute(ctx) {
    const user = ctx.from;
    const chat = ctx.chat;

    await ctx.reply(
      `🆔 ID INFORMATION\n\n` +
      `👤 User ID: ${user.id}\n` +
      `💬 Chat ID: ${chat.id}\n` +
      `👨 Name: ${user.first_name || "Unknown"}\n` +
      `🔗 Username: ${user.username ? "@" + user.username : "None"}`
    );
  }
};
