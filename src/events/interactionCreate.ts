import { ChatInputCommandInteraction, Interaction } from "discord.js";

import { CommandLogicMap } from "../config/CommandLogicMap";
import { defaultEmbed } from "../modules/defaultEmbed";
import { errorEmbed } from "../modules/errorEmbed";
import { getReference } from "../modules/getReference";
import { errorHandler } from "../utils/errorHandler";

/**
 * Handles the interaction create event - runs the target command.
 *
 * @param {Interaction} interaction The interaction payload from Discord.
 */
export const interactionCreate = async (interaction: Interaction) => {
  try {
    if (!interaction.isChatInputCommand()) {
      return;
    }
    if (interaction.commandName === "reference") {
      await interaction.reply({
        embeds: [getReference(interaction.options.getString("type", true))],
      });
      return;
    }
    await interaction.deferReply();
    const embed =
      (await CommandLogicMap[interaction.commandName]()) || defaultEmbed;
    await interaction.editReply({ embeds: [embed] });
  } catch (err) {
    const id = await errorHandler("interactionCreate", err);
    await (interaction as ChatInputCommandInteraction).editReply({
      embeds: [errorEmbed(id)],
    });
  }
};
