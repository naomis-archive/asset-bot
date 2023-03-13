import { EmbedBuilder } from "@discordjs/builders";

import { ArtData } from "../config/ArtData";
import { Portrait } from "../interfaces/Portrait";
import { Target } from "../interfaces/Target";
import { errorHandler } from "../utils/errorHandler";

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
    if (target === "naomi") {
      const portraitData = await fetch(
        "https://www.naomi.lgbt/assets/data/portraits.json"
      );
      const portraits: Portrait[] = await portraitData.json();
      const filtered = portraits.filter((el) => !el.spicy);
      const portrait = filtered[Math.floor(Math.random() * filtered.length)];

      const embed = new EmbedBuilder();
      embed.setTitle("Naomi Art~!");
      embed.setImage(`https://cdn.naomi.lgbt/art/${portrait.fileName}`);
      embed.setDescription(`By [${portrait.artist}](${portrait.url})`);
      embed.setFooter({
        text: `Join our server: https://chat.naomi.lgbt`,
        iconURL: `https://cdn.nhcarrigan.com/profile.png`,
      });

      return embed;
    }

    if (["becca", "rosalia", "beccalia"].includes(target)) {
      const portraitData = ArtData[target];
      const portrait =
        portraitData[Math.floor(Math.random() * portraitData.length)];

      const embed = new EmbedBuilder();
      embed.setTitle(`${target[0].toUpperCase()}${target.slice(1)} Art~!`);
      embed.setImage(
        `https://cdn.naomi.lgbt/${target}/art/${portrait.fileName.replace(
          /\s/g,
          "%20"
        )}`
      );
      embed.setDescription(`By [${portrait.artist}](${portrait.artistUrl})`);
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
