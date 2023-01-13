import { EmbedBuilder } from "@discordjs/builders";

import { Portrait } from "../interfaces/Portrait";

/**
 * Fetches a random artwork.
 *
 * @returns {Promise<EmbedBuilder>} The emote embed.
 */
export const getPortrait = async (): Promise<EmbedBuilder> => {
  const portraitData = await fetch(
    "https://www.naomi.lgbt/assets/data/portraits.json"
  );
  const portraits: Portrait[] = await portraitData.json();
  const filtered = portraits.filter((el) => !el.spicy);
  const portrait = filtered[Math.floor(Math.random() * filtered.length)];

  const embed = new EmbedBuilder();
  embed.setTitle("Naomi Art~!");
  embed.setImage(`https://www.naomi.lgbt/assets/img/art/${portrait.fileName}`);
  embed.setDescription(`By [${portrait.artist}](${portrait.url})`);
  embed.setFooter({
    text: `Donate so we can get more? https://donate.naomi.lgbt/`,
    iconURL: `https://cdn.nhcarrigan.com/profile.png`,
  });

  return embed;
};
