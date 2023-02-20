import { EmbedBuilder } from "@discordjs/builders";

import { Portrait } from "../interfaces/Portrait";
import { errorHandler } from "../utils/errorHandler";

import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random artwork.
 *
 * @returns {Promise<EmbedBuilder>} The emote embed.
 */
export const getPortrait = async (): Promise<EmbedBuilder> => {
  try {
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
      text: `Join our server: https://discord.gg/nhcarrigan`,
      iconURL: `https://cdn.nhcarrigan.com/profile.png`,
    });

    return embed;
  } catch (err) {
    const id = await errorHandler("getPortrait", err);
    return errorEmbed(id);
  }
};
