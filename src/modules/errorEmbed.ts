import { EmbedBuilder } from "@discordjs/builders";

/**
 * Module to generate an error embed.
 *
 * @param {string} id The error ID.
 * @returns {EmbedBuilder} The error embed.
 */
export const errorEmbed = (id: string) => {
  return new EmbedBuilder()
    .setTitle("Something went wrong~!")
    .setDescription(
      `Please join our [support server](https://chat.nhcarrigan.com) and provide this error ID so we can assist you.\n\n\`${id}\``
    );
};
