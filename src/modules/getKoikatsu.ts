import { EmbedBuilder } from "@discordjs/builders";

import { errorHandler } from "../utils/errorHandler";

import { errorEmbed } from "./errorEmbed";

const getPoseName = (fileName: string) => {
  const withoutExtension = fileName.split(".")[0];
  const [name, number] = withoutExtension.split("-");
  const titleCasedName = `${name[0].toUpperCase()}${name.slice(1)}`;
  return number ? `${titleCasedName} ${number}` : titleCasedName;
};

/**
 * Fetches a random Koikatsu scene.
 *
 * @returns {Promise<EmbedBuilder>} The Koikatsu embed.
 */
export const getKoikatsu = async (): Promise<EmbedBuilder> => {
  try {
    const koikatsuData = await fetch(
      "https://www.naomi.lgbt/assets/data/poses.json"
    );
    const koikatsus: string[] = await koikatsuData.json();
    const koikatsu = koikatsus[Math.floor(Math.random() * koikatsus.length)];

    const embed = new EmbedBuilder();
    embed.setTitle(getPoseName(koikatsu));
    embed.setImage(`https://cdn.naomi.lgbt/koikatsu/${koikatsu}`);
    embed.setFooter({
      text: `Donate so we can get more? https://donate.naomi.lgbt/`,
      iconURL: `https://cdn.nhcarrigan.com/profile.png`,
    });

    return embed;
  } catch (err) {
    const id = await errorHandler("getPortrait", err);
    return errorEmbed(id);
  }
};
