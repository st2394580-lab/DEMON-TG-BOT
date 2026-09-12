const { Telegraf } = require("telegraf");
const fs = require("fs");
const path = require("path");
const config = require("./config");

if (!config.BOT_TOKEN) {
  console.error("ERROR: BOT_TOKEN is missing.");
  process.exit(1);
}

const bot = new Telegraf(config.BOT_TOKEN);

const commands = new Map();

function loadCommands() {
  const dir = path.join(__dirname, "commands");

  if (!fs.existsSync(dir)) return;

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".js")) continue;

    try {
      const command = require(path.join(dir, file));

      if (command.name && typeof command.execute === "function") {
        commands.set(command.name.toLowerCase(), command);

        if (Array.isArray(command.aliases)) {
          for (const alias of command.aliases) {
            commands.set(alias.toLowerCase(), command);
          }
        }
      }
    } catch (err) {
      console.error(`Failed to load ${file}:`, err.message);
    }
  }

  console.log(`Loaded ${commands.size} command/alias entries.`);
}

loadCommands();

bot.start(async (ctx) => {
  const command = commands.get("start");
  if (command) await command.execute(ctx, []);
});

bot.command("help", async (ctx) => {
  const command = commands.get("help");
  if (command) await command.execute(ctx, []);
});

bot.command("menu", async (ctx) => {
  const command = commands.get("menu");
  if (command) await command.execute(ctx, []);
});

bot.on("text", async (ctx) => {
  const text = ctx.message.text.trim();

  if (text.startsWith("/")) {
    const parts = text.slice(1).split(/\s+/);
    const name = parts.shift().toLowerCase();

    const command = commands.get(name);

    if (!command) {
      return ctx.reply(
        `❌ Unknown command.\n\nUse /menu to see available commands.`
      );
    }

    try {
      await command.execute(ctx, parts);
    } catch (err) {
      console.error(err);
      await ctx.reply("❌ Command error.");
    }

    return;
  }

  if (!config.AUTO_REPLY) return;

  const lower = text.toLowerCase();

  if (["hi", "hello", "hey", "hii", "hlo"].includes(lower)) {
    return ctx.reply(
      `👋 Hello ${ctx.from.first_name || "there"}!\n\n` +
      `🤖 ${config.BOT_NAME} is online.\n` +
      `📜 Commands: /menu`
    );
  }

  if (lower.includes("how are you")) {
    return ctx.reply("🤖 I'm doing great! 😈");
  }

  if (lower === "bot") {
    return ctx.reply(
      `🤖 ${config.BOT_NAME}\n\n` +
      `Status: ONLINE ✅\n` +
      `Use /menu`
    );
  }

  if (lower === "ping") {
    return ctx.reply("🏓 Pong!");
  }
});

bot.catch((err, ctx) => {
  console.error("Bot error:", err);
});

bot.launch();

console.log(`${config.BOT_NAME} is starting...`);

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
