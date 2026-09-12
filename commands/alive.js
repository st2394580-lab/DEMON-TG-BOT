
const config = require("../config");

module.exports = {
  name: "alive",

  async execute(ctx) {
    const uptime = process.uptime();

    const h = Math.floor(uptime / 3600);
    const m = Math.floor((uptime % 3600) / 60);
    const s = Math.floor(uptime % 60);

    await ctx.reply(
      `🤖 ${config.BOT_NAME}\n\n` +
      `🟢 Status: ONLINE\n` +
      `⏱️ Uptime: ${h}h ${m}m ${s}s\n` +
      `📦 Commands: Loaded\n` +
      `⚡ Node.js: ${process.version}`
    );
  }
};
