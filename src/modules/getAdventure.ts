import { EmbedBuilder } from "@discordjs/builders";

import { Adventure } from "../interfaces/Adventure";
import { errorHandler } from "../utils/errorHandler";

import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random adventure.
 *
 * @returns {Promise<EmbedBuilder>} The adventure embed.
 */
export const getAdventure = async (): Promise<EmbedBuilder> => {
  try {
    const adventureData = await fetch(
      "https://www.naomi.lgbt/assets/data/adventures.json"
    );
    const adventures: Adventure[] = await adventureData.json();
    const adventure = adventures[Math.floor(Math.random() * adventures.length)];

    const embed = new EmbedBuilder();
    embed.setTitle(adventure.game);
    embed.setImage(`https://cdn.naomi.lgbt/games/${adventure.fileName}`);
    embed.setFooter({
      text: `Join our server: https://chat.naomi.lgbt`,
      iconURL: `https://cdn.nhcarrigan.com/profile.png`,
    });

    return embed;
  } catch (err) {
    const id = await errorHandler("getAdventure", err);
    return errorEmbed(id);
  }
};
