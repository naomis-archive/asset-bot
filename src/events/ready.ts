import { Client, REST, Routes } from "discord.js";

import { Commands } from "../config/Commands";
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
  } catch (err) {
    await errorHandler("ready", err);
  }
};
