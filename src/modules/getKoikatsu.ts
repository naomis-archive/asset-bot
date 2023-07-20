import { EmbedBuilder } from "discord.js";

import { Pose } from "../interfaces/Pose";
import { Target } from "../interfaces/Target";
import { errorHandler } from "../utils/errorHandler";
import { getFileList } from "../utils/getFileList";

import { defaultEmbed } from "./defaultEmbed";
import { errorEmbed } from "./errorEmbed";

/**
 * Fetches a random Koikatsu scene.
 *
 * @param {Target} target The target to fetch.
 * @returns {Promise<EmbedBuilder>} The Koikatsu embed.
 */
export const getKoikatsu = async (target: Target): Promise<EmbedBuilder> => {
  try {
    const fileList = await getFileList<Pose[]>(target, "poses");
    const file = fileList[Math.floor(Math.random() * fileList.length)];
    const { fileName, name, description } = file;
    const embed = new EmbedBuilder();
    embed.setTitle(name);
    embed.setDescription(description);
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
