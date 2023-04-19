import { ChatInputCommandInteraction, Interaction } from "discord.js";

import {
  CommandLogicMap,
  TargetedCommandLogicMap,
} from "../config/CommandLogicMap";
import { ValidTargets } from "../config/ValidTargets";
import { defaultEmbed } from "../modules/defaultEmbed";
import { errorEmbed } from "../modules/errorEmbed";
import { getReference } from "../modules/getReference";
import { errorHandler } from "../utils/errorHandler";
import { isValidTarget } from "../utils/isValidTarget";

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
    if (ValidTargets[interaction.commandName]) {
      const target = interaction.options.getString("target", true);
      if (!isValidTarget(target)) {
        await interaction.editReply({
          embeds: [
            {
              title: "Invalid target",
              description: `The target \`${target}\` is not valid for the command \`${interaction.commandName}\`.`,
            },
          ],
        });
        return;
      }

      const embed =
        (await TargetedCommandLogicMap[interaction.commandName](target)) ||
        defaultEmbed;
      await interaction.editReply({ embeds: [embed] });
      return;
    }
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
