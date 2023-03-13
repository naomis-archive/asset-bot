import { EmbedBuilder } from "@discordjs/builders";

import { Adventure } from "../interfaces/Adventure";
import { Target } from "../interfaces/Target";
import { errorHandler } from "../utils/errorHandler";
import { getFileList } from "../utils/getFileList";

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
    if (target === "naomi") {
      const adventureData = await fetch(
        "https://www.naomi.lgbt/assets/data/adventures.json"
      );
      const adventures: Adventure[] = await adventureData.json();
      const adventure =
        adventures[Math.floor(Math.random() * adventures.length)];

      const embed = new EmbedBuilder();
      embed.setTitle(adventure.game);
      embed.setImage(`https://cdn.naomi.lgbt/games/${adventure.fileName}`);
      embed.setFooter({
        text: `Join our server: https://chat.naomi.lgbt`,
        iconURL: `https://cdn.nhcarrigan.com/profile.png`,
      });

      return embed;
    }

    if (target === "becca" || target === "rosalia") {
      const fileList = await getFileList(`${target}/games`);
      const fileName = fileList[Math.floor(Math.random() * fileList.length)];
      const embed = new EmbedBuilder();
      embed.setTitle(
        fileName
          .split("-")
          .map((el) => el[0].toUpperCase() + el.slice(1))
          .join(" ")
      );
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
