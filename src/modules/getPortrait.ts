import { EmbedBuilder } from "@discordjs/builders";

import { Portrait } from "../interfaces/Portrait";
import { Target } from "../interfaces/Target";
import { errorHandler } from "../utils/errorHandler";
import { getFileList } from "../utils/getFileList";
import { isBecca, isBeccalia, isNaomi, isRosalia } from "../utils/typeGuards";

import { defaultEmbed } from "./defaultEmbed";
import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random artwork.
 *
 * @param {Target} target The target to fetch.
 * @returns {Promise<EmbedBuilder>} The emote embed.
 */
export const getPortrait = async (target: Target): Promise<EmbedBuilder> => {
  try {
    if (
      isNaomi(target) ||
      isBecca(target) ||
      isRosalia(target) ||
      isBeccalia(target)
    ) {
      const portraitData = await getFileList<Portrait[]>(target, "portraits");
      const portrait =
        portraitData[Math.floor(Math.random() * portraitData.length)];

      const embed = new EmbedBuilder();
      embed.setTitle(portrait.name);
      embed.setDescription(portrait.alt);
      embed.setImage(
        `https://cdn.naomi.lgbt/${target}/art/${portrait.fileName.replace(
          /\s/g,
          "%20"
        )}`
      );
      embed.addFields({
        name: "Art By:",
        value: `[${portrait.artist}](${portrait.url})`,
      });
      embed.setFooter({
        text: `Join our server: https://chat.naomi.lgbt`,
        iconURL: `https://cdn.nhcarrigan.com/profile.png`,
      });

      return embed;
    }

    return defaultEmbed;
  } catch (err) {
    const id = await errorHandler("getPortrait", err);
    return errorEmbed(id);
  }
};
