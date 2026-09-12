module.exports = {
  name: "coin",

  async execute(ctx) {
    const result = Math.random() < 0.5 ? "HEADS 🪙" : "TAILS 🪙";
    await ctx.reply(result);
  }
};
