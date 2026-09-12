module.exports = {
  name: "dice",

  async execute(ctx) {
    const number = Math.floor(Math.random() * 6) + 1;
    await ctx.reply(`🎲 You rolled: ${number}`);
  }
};
