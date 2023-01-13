import { EmbedBuilder } from "discord.js";

/**
 * Generates the help embed.
 *
 * @returns {Promise<EmbedBuilder>} The help embed.
 */
// We ignore this for type safety.
// eslint-disable-next-line require-await
export const getAbout = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder();
  embed.setTitle("Naomi's Asset Bot");
  embed.setDescription(
    "This bot allows you to see Naomi's various art, game screenshots, emotes, and VTuber outfits right here on Discord~!"
  );
  embed.addFields([
    {
      name: "WARNING",
      value:
        "While the assets are displayed for your reference (such as for fan art), the assets still belong to Naomi. **Please do not redistribute or repurpose them.**",
    },
    {
      name: "Donate?",
      value:
        "If you like these assets, please consider [donating so we can get more~!](https://donate.naomi.lgbt)",
    },
  ]);
  return embed;
};
