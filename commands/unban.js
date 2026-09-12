module.exports = {
  name: "unban",

  async execute(ctx) {
    if (!["group", "supergroup"].includes(ctx.chat.type)) {
      return ctx.reply("❌ Group only.");
    }

    if (!ctx.message.reply_to_message) {
      return ctx.reply("↩️ Reply to a user's message.");
    }

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

      await ctx.telegram.unbanChatMember(
        ctx.chat.id,
        target,
        { only_if_banned: true }
      );

      await ctx.reply("✅ User unbanned.");
    } catch (err) {
      console.error(err);
      await ctx.reply("❌ Unable to unban.");
    }
  }
};
