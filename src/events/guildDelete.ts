import { Guild, WebhookClient } from "discord.js";

import { errorHandler } from "../utils/errorHandler";

/**
 * Logs when the bot leaves a guild.
 *
 * @param {Guild} guild The guild payload from Discord.
 */
export const guildDelete = async (guild: Guild) => {
  try {
    if (!process.env.DEBUG_HOOK) {
      return;
    }

    const debugHook = new WebhookClient({ url: process.env.DEBUG_HOOK });
    await debugHook.send({
      content: `Left guild: ${guild.name} (${guild.id})`,
    });
  } catch (err) {
    await errorHandler("guildCreate", err);
  }
};
