import { EmbedBuilder } from "@discordjs/builders";

import { Emote } from "../interfaces/Emote";
import { Target } from "../interfaces/Target";
import { errorHandler } from "../utils/errorHandler";
import { getFileList } from "../utils/getFileList";
import { isBecca, isNaomi } from "../utils/typeGuards";

import { defaultEmbed } from "./defaultEmbed";
import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random emote.
 *
 * @param {Target} target The target to fetch.
 * @returns {Promise<EmbedBuilder>} The emote embed.
 */
export const getEmote = async (target: Target): Promise<EmbedBuilder> => {
  try {
    if (isNaomi(target) || isBecca(target)) {
      const fileList = await getFileList<Emote[]>(target, "emotes");
      const file = fileList[Math.floor(Math.random() * fileList.length)];
      const { fileName, name, description } = file;
      const embed = new EmbedBuilder();
      embed.setTitle(name);
      embed.setDescription(description);
      if (target === "becca") {
        embed.addFields({
          name: "Art By:",
          value: `[Starfazers](https://starfazers.art)`,
        });
      }
      embed.setImage(`https://cdn.naomi.lgbt/${target}/emotes/${fileName}`);
      embed.setFooter({
        text: `Join our server: https://chat.naomi.lgbt`,
        iconURL: `https://cdn.nhcarrigan.com/profile.png`,
      });
      return embed;
    }

    return defaultEmbed;
  } catch (err) {
    const id = await errorHandler("getEmote", err);
    return errorEmbed(id);
  }
};
