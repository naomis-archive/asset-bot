import { EmbedBuilder } from "discord.js";

import { ReferenceData } from "../config/ReferenceData";

import { errorEmbed } from "./errorEmbed";

/**
 * Generates a reference image embed.
 *
 * @param {string} target The name of the reference to generate.
 * @returns {EmbedBuilder} The reference embed.
 */
export const getReference = (target: string): EmbedBuilder => {
  const reference = ReferenceData.find((ref) => ref.name === target);

  if (!reference) {
    return errorEmbed("no reference");
  }

  const embed = new EmbedBuilder();
  embed.setTitle(reference.name);
  embed.setDescription(reference.description);
  embed.setImage(`https://cdn.naomi.lgbt/ref/${reference.fileName}`);

  return embed;
};
