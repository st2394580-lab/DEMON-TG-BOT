module.exports = {
  name: "mute",

  async execute(ctx) {
    if (!["group", "supergroup"].includes(ctx.chat.type)) {
      return ctx.reply("❌ Group only.");
    }

    if (!ctx.message.reply_to_message) {
      return ctx.reply("↩️ Reply to the user you want to mute.");
    }

    try {
      const admin = await ctx.telegram.getChatMember(
        ctx.chat.id,
        ctx.from.id
      );

      if (!["administrator", "creator"].includes(admin.status)) {
        return ctx.reply("❌ Only admins can use this.");
      }

      const target =
        ctx.message.reply_to_message.from.id;

      await ctx.telegram.restrictChatMember(
        ctx.chat.id,
        target,
        {
          permissions: {
            can_send_messages: false,
            can_send_audios: false,
            can_send_documents: false,
            can_send_photos: false,
            can_send_videos: false,
            can_send_video_notes: false,
            can_send_voice_notes: false,
            can_send_polls: false,
            can_send_other_messages: false,
            can_add_web_page_previews: false
          }
        }
      );

      await ctx.reply("🔇 User muted.");
    } catch (err) {
      console.error(err);
      await ctx.reply("❌ I need admin permission to mute users.");
    }
  }
};
