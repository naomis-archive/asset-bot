import { EmbedBuilder } from "@discordjs/builders";

import { Tattoo } from "../interfaces/Tattoo";
import { errorHandler } from "../utils/errorHandler";

import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random tattoo.
 *
 * @returns {Promise<EmbedBuilder>} The tattoo embed.
 */
export const getTattoo = async (): Promise<EmbedBuilder> => {
  try {
    const tattooData = await fetch(
      "https://www.naomi.lgbt/assets/data/tattoos.json"
    );
    const tattoos: Tattoo[] = await tattooData.json();
    const tattoo = tattoos[Math.floor(Math.random() * tattoos.length)];

    const embed = new EmbedBuilder();
    embed.setTitle(tattoo.name);
    embed.setDescription(
      "Naomi's tattoos can be hidden or visible at her whim."
    );
    embed.setImage(`https://cdn.naomi.lgbt/ref/tattoos/${tattoo.fileName}`);
    embed.setFooter({
      text: `Join our server: https://discord.gg/nhcarrigan`,
      iconURL: `https://cdn.nhcarrigan.com/profile.png`,
    });

    return embed;
  } catch (err) {
    const id = await errorHandler("getOutfit", err);
    return errorEmbed(id);
  }
};
