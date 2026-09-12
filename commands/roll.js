module.exports = {
  name: "roll",

  async execute(ctx, args) {
    const max = Math.min(
      Math.max(parseInt(args[0]) || 100, 2),
      1000000
    );

    const result = Math.floor(Math.random() * max) + 1;

    await ctx.reply(`🎲 Random number: ${result}`);
  }
};
