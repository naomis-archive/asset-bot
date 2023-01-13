import { EmbedBuilder } from "@discordjs/builders";

import { Emote } from "../interfaces/Emote";

/**
 * Fetches a random emote.
 *
 * @returns {Promise<EmbedBuilder>} The emote embed.
 */
export const getEmote = async (): Promise<EmbedBuilder> => {
  const emoteData = await fetch(
    "https://www.naomi.lgbt/assets/data/emotes.json"
  );
  const emotes: Emote[] = await emoteData.json();
  const emote = emotes[Math.floor(Math.random() * emotes.length)];

  const embed = new EmbedBuilder();
  embed.setTitle(emote.name);
  embed.setImage(`https://www.naomi.lgbt/assets/img/emotes/${emote.fileName}`);
  embed.setFooter({
    text: `Donate so we can get more? https://donate.naomi.lgbt/`,
    iconURL: `https://cdn.nhcarrigan.com/profile.png`,
  });

  return embed;
};
