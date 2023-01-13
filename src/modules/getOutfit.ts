import { EmbedBuilder } from "@discordjs/builders";

import { Outfit } from "../interfaces/Outfit";

/**
 * Fetches a random outfit.
 *
 * @returns {Promise<EmbedBuilder>} The outfit embed.
 */
export const getOutfit = async (): Promise<EmbedBuilder> => {
  const outfitData = await fetch(
    "https://www.naomi.lgbt/assets/data/outfits.json"
  );
  const outfits: Outfit[] = await outfitData.json();
  const outfit = outfits[Math.floor(Math.random() * outfits.length)];

  const embed = new EmbedBuilder();
  embed.setTitle(outfit.name);
  embed.setDescription(outfit.description);
  embed.setImage(
    `https://www.naomi.lgbt/assets/img/outfits/${outfit.fileName}`
  );
  embed.setFooter({
    text: `Donate so we can get more? https://donate.naomi.lgbt/`,
    iconURL: `https://cdn.nhcarrigan.com/profile.png`,
  });

  return embed;
};
