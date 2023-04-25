import { Client, REST, Routes } from "discord.js";
import { scheduleJob } from "node-schedule";

import { Commands } from "../config/Commands";
import { getOutfit } from "../modules/getOutfit";
import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";

/**
 * Handles the on ready event - registers the commands and schedules the daily
 * outfit post.
 *
 * @param {Client} bot The bot's Discord instance.
 */
export const ready = async (bot: Client) => {
  try {
    logHandler.log("info", `Logged in as ${bot.user?.tag}!`);

    const rest = new REST({ version: "10" }).setToken(
      process.env.TOKEN || "what"
    );

    await rest.put(Routes.applicationCommands(bot.user?.id || "oopsie"), {
      body: Commands,
    });
    // run daily at 7AM
    scheduleJob("0 0 7 * * *", async () => {
      const guild = bot.guilds.resolve("778130114772598785");
      if (!guild) {
        return;
      }
      const channel = guild.channels.resolve("1070194415013994506");
      if (!channel || !("send" in channel)) {
        return;
      }
      const outfit = await getOutfit();
      await channel.send({
        content: "Here is <@!465650873650118659>'s outfit of the day~!",
        embeds: [outfit],
      });
    });
  } catch (err) {
    await errorHandler("ready", err);
  }
};
