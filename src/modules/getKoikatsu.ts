import { EmbedBuilder } from "@discordjs/builders";

import { Target } from "../interfaces/Target";
import { errorHandler } from "../utils/errorHandler";
import { getFileList } from "../utils/getFileList";

import { defaultEmbed } from "./defaultEmbed";
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
 * @param {Target} target The target to fetch.
 * @returns {Promise<EmbedBuilder>} The Koikatsu embed.
 */
export const getKoikatsu = async (target: Target): Promise<EmbedBuilder> => {
  try {
    const fileList = await getFileList<string[]>(target, "poses");
    const fileName = fileList[Math.floor(Math.random() * fileList.length)];
    const embed = new EmbedBuilder();
    embed.setTitle(getPoseName(fileName));
    embed.setImage(`https://cdn.naomi.lgbt/${target}/koikatsu/${fileName}`);
    embed.setFooter({
      text: `Join our server: https://chat.naomi.lgbt`,
      iconURL: `https://cdn.nhcarrigan.com/profile.png`,
    });
    return embed;

    return defaultEmbed;
  } catch (err) {
    const id = await errorHandler("getPortrait", err);
    return errorEmbed(id);
  }
};
