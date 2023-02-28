import { EmbedBuilder } from "@discordjs/builders";

import { Emote } from "../interfaces/Emote";
import { errorHandler } from "../utils/errorHandler";

import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random emote.
 *
 * @returns {Promise<EmbedBuilder>} The emote embed.
 */
export const getEmote = async (): Promise<EmbedBuilder> => {
  try {
    const emoteData = await fetch(
      "https://www.naomi.lgbt/assets/data/emotes.json"
    );
    const emotes: Emote[] = await emoteData.json();
    const emote = emotes[Math.floor(Math.random() * emotes.length)];

    const embed = new EmbedBuilder();
    embed.setTitle(emote.name);
    embed.setImage(`https://cdn.naomi.lgbt/emotes/${emote.fileName}`);
    embed.setFooter({
      text: `Join our server: https://chat.naomi.lgbt`,
      iconURL: `https://cdn.nhcarrigan.com/profile.png`,
    });

    return embed;
  } catch (err) {
    const id = await errorHandler("getEmote", err);
    return errorEmbed(id);
  }
};
