import { EmbedBuilder } from "@discordjs/builders";

import { Outfit } from "../interfaces/Outfit";
import { errorHandler } from "../utils/errorHandler";

import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random outfit.
 *
 * @returns {Promise<EmbedBuilder>} The outfit embed.
 */
export const getOutfit = async (): Promise<EmbedBuilder> => {
  try {
    const outfitData = await fetch(
      "https://www.naomi.lgbt/assets/data/outfits.json"
    );
    const outfits: Outfit[] = await outfitData.json();
    const outfit = outfits[Math.floor(Math.random() * outfits.length)];

    const embed = new EmbedBuilder();
    embed.setTitle(outfit.name);
    embed.setDescription(outfit.description);
    embed.setImage(`https://cdn.naomi.lgbt/outfits/${outfit.fileName}`);
    embed.setFooter({
      text: `Join our server: https://chat.naomi.lgbt`,
      iconURL: `https://cdn.nhcarrigan.com/profile.png`,
    });

    return embed;
  } catch (err) {
    const id = await errorHandler("getOutfit", err);
    return errorEmbed(id);
  }
};
