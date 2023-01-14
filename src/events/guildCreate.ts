import { Guild, WebhookClient } from "discord.js";

import { errorHandler } from "../utils/errorHandler";

/**
 * Logs when the bot joins a guild.
 *
 * @param {Guild} guild The guild payload from Discord.
 */
export const guildCreate = async (guild: Guild) => {
  try {
    if (!process.env.DEBUG_HOOK) {
      return;
    }

    const debugHook = new WebhookClient({ url: process.env.DEBUG_HOOK });
    await debugHook.send({
      content: `Joined guild: ${guild.name} (${guild.id}) - owned by ${await (
        await guild.fetchOwner()
      ).user.tag} (${guild.ownerId})`,
    });
  } catch (err) {
    await errorHandler("guildCreate", err);
  }
};
