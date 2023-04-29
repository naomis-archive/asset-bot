import { EmbedBuilder } from "discord.js";

/**
 * Generates the help embed.
 * Async just for type safety with the other functions.
 *
 * @returns {Promise<EmbedBuilder>} The help embed.
 */
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
  const result = await new Promise<EmbedBuilder>(() => embed);
  return result;
};
