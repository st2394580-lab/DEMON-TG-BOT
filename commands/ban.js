
module.exports = {
  name: "ban",

  async execute(ctx) {
    if (!["group", "supergroup"].includes(ctx.chat.type)) {
      return ctx.reply("❌ Group only.");
    }

    if (!ctx.message.reply_to_message) {
      return ctx.reply("↩️ Reply to the user you want to ban.");
    }

    const me = await ctx.telegram.getMe();

    try {
      const admin = await ctx.telegram.getChatMember(
        ctx.chat.id,
        ctx.from.id
      );

      if (!["administrator", "creator"].includes(admin.status)) {
        return ctx.reply("❌ Only group admins can use this.");
      }

      const target =
        ctx.message.reply_to_message.from.id;

      if (target === me.id) {
        return ctx.reply("❌ I cannot ban myself.");
      }

      await ctx.telegram.banChatMember(ctx.chat.id, target);

      await ctx.reply("🔨 User banned.");
    } catch (err) {
      console.error(err);
      await ctx.reply("❌ I need admin permission to ban users.");
    }
  }
};
