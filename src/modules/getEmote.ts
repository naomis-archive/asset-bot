import { EmbedBuilder } from "@discordjs/builders";

import { Emote } from "../interfaces/Emote";
import { Target } from "../interfaces/Target";
import { errorHandler } from "../utils/errorHandler";
import { getFileList } from "../utils/getFileList";

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
    if (target === "naomi") {
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
    }

    if (target === "becca") {
      const fileList = await getFileList(`${target}/emotes`);
      const fileName = fileList[Math.floor(Math.random() * fileList.length)];
      const embed = new EmbedBuilder();
      embed.setTitle(fileName.replace("Becca", ""));
      embed.setDescription(`Art by [Starfazers](https://starfazers.art)`);
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
