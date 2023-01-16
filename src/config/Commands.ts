import { SlashCommandBuilder } from "discord.js";

import { ReferenceData } from "./ReferenceData";

export const Commands = [
  new SlashCommandBuilder()
    .setName("outfit")
    .setDescription("Get a random outfit.")
    .toJSON(),
  new SlashCommandBuilder()
    .setName("adventure")
    .setDescription("Get a random game screenshot.")
    .toJSON(),
  new SlashCommandBuilder()
    .setName("emote")
    .setDescription("Get a random emote.")
    .toJSON(),
  new SlashCommandBuilder()
    .setName("portrait")
    .setDescription("Get a random artwork.")
    .toJSON(),
  new SlashCommandBuilder()
    .setName("about")
    .setDescription("Get information about this bot.")
    .toJSON(),
  new SlashCommandBuilder()
    .setName("tattoos")
    .setDescription("Get a random tattoo.")
    .toJSON(),
  new SlashCommandBuilder()
    .setName("reference")
    .setDescription("Get a reference for Naomi art.")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("The type of reference to get.")
        .setRequired(true)
        .addChoices(
          ...ReferenceData.map((ref) => ({ name: ref.name, value: ref.name }))
        )
    )
    .toJSON(),
];
