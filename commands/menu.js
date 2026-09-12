module.exports = {
  name: "menu",

  async execute(ctx) {
    await ctx.reply(
      `╭━━━━━━〔 🤖 DEMON MENU 〕━━━━━━╮\n\n` +
      `👤 USER\n` +
      `/id\n` +
      `/info\n\n` +

      `⚡ BOT\n` +
      `/start\n` +
      `/help\n` +
      `/ping\n` +
      `/alive\n` +
      `/menu\n\n` +

      `👥 GROUP\n` +
      `/group\n` +
      `/ban\n` +
      `/unban\n` +
      `/mute\n` +
      `/unmute\n\n` +

      `🎮 FUN\n` +
      `/coin\n` +
      `/dice\n` +
      `/roll\n\n` +

      `╰━━━━━━━━━━━━━━━━━━━━━━╯`
    );
  }
};
