module.exports = {
  name: "ping",

  async execute(ctx) {
    const start = Date.now();

    const msg = await ctx.reply("🏓 Pinging...");

    const ms = Date.now() - start;

    await ctx.telegram.editMessageText(
      ctx.chat.id,
      msg.message_id,
      undefined,
      `🏓 Pong!\n⚡ Response: ${ms} ms`
    );
  }
};
