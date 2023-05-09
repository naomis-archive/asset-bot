import { EmbedBuilder } from "@discordjs/builders";

import { Adventure } from "../interfaces/Adventure";
import { Target } from "../interfaces/Target";
import { errorHandler } from "../utils/errorHandler";
import { getFileList } from "../utils/getFileList";
import { isBecca, isNaomi, isRosalia } from "../utils/typeGuards";

import { defaultEmbed } from "./defaultEmbed";
import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random adventure.
 *
 * @param {Target} target The target to fetch.
 * @returns {Promise<EmbedBuilder>} The adventure embed.
 */
export const getAdventure = async (target: Target): Promise<EmbedBuilder> => {
  try {
    if (isNaomi(target) || isBecca(target) || isRosalia(target)) {
      const fileList = await getFileList<Adventure[]>(target, "adventures");
      const file = fileList[Math.floor(Math.random() * fileList.length)];
      const { fileName, game, description } = file;
      const embed = new EmbedBuilder();
      embed.setTitle(game);
      embed.setDescription(description);
      embed.setImage(`https://cdn.naomi.lgbt/${target}/games/${fileName}`);
      embed.setFooter({
        text: `Join our server: https://chat.naomi.lgbt`,
        iconURL: `https://cdn.nhcarrigan.com/profile.png`,
      });
      return embed;
    }

    return defaultEmbed;
  } catch (err) {
    const id = await errorHandler("getAdventure", err);
    return errorEmbed(id);
  }
};
