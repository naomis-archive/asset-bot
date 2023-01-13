import { Interaction } from "discord.js";

import { CommandLogicMap } from "../config/CommandLogicMap";
import { defaultEmbed } from "../modules/defaultEmbed";

/**
 * Handles the interaction create event - runs the target command.
 *
 * @param {Interaction} interaction The interaction payload from Discord.
 */
export const interactionCreate = async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }
  await interaction.deferReply();
  const embed =
    (await CommandLogicMap[interaction.commandName]()) || defaultEmbed;
  await interaction.editReply({ embeds: [embed] });
};
