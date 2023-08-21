import { EmbedBuilder } from "discord.js";

import { Outfit } from "../interfaces/Outfit";
import { errorHandler } from "../utils/errorHandler";
import { getFileList } from "../utils/getFileList";
import { getRandomValue } from "../utils/getRandomValue";

import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random outfit.
 *
 * @returns {Promise<EmbedBuilder>} The outfit embed.
 */
export const getOutfit = async (): Promise<EmbedBuilder> => {
  try {
    const fileData = await getFileList<Outfit[]>("naomi", "outfits");
    const outfit = getRandomValue(fileData);

    const embed = new EmbedBuilder();
    embed.setTitle(outfit.name);
    embed.setDescription(outfit.description);
    embed.setImage(`https://cdn.naomi.lgbt/naomi/outfits/${outfit.fileName}`);
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
