module.exports = {
  name: "help",

  async execute(ctx) {
    await ctx.reply(
      `📚 HELP\n\n` +
      `/start - Start bot\n` +
      `/menu - Command menu\n` +
      `/ping - Check response\n` +
      `/alive - Bot status\n` +
      `/info - Bot information\n` +
      `/id - Your Telegram ID\n` +
      `/group - Group information\n` +
      `/ban - Ban replied user\n` +
      `/unban - Unban replied user\n` +
      `/mute - Mute replied user\n` +
      `/unmute - Unmute replied user\n\n` +
      `💡 Reply to a user's message for moderation commands.`
    );
  }
};
