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
    .addStringOption((option) =>
      option
        .setName("target")
        .setDescription("Whose adventure do you want to see?")
        .setRequired(true)
        .addChoices(
          { name: "Naomi", value: "naomi" },
          { name: "Becca", value: "becca" },
          { name: "Rosalia", value: "rosalia" }
        )
    )
    .toJSON(),
  new SlashCommandBuilder()
    .setName("emote")
    .setDescription("Get a random emote.")
    .addStringOption((option) =>
      option
        .setName("target")
        .setDescription("Whose emotes do you want to see?")
        .setRequired(true)
        .addChoices(
          { name: "Naomi", value: "naomi" },
          { name: "Becca", value: "becca" }
        )
    )
    .toJSON(),
  new SlashCommandBuilder()
    .setName("portrait")
    .setDescription("Get a random artwork.")
    .addStringOption((option) =>
      option
        .setName("target")
        .setDescription("Whose art do you want to see?")
        .setRequired(true)
        .addChoices(
          { name: "Naomi", value: "naomi" },
          { name: "Becca", value: "becca" },
          { name: "Rosalia", value: "rosalia" },
          { name: "Beccalia", value: "beccalia" }
        )
    )
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
    .setName("koikatsu")
    .setDescription("Get a random Koikatsu scene..")
    .addStringOption((option) =>
      option
        .setName("target")
        .setDescription("Whose poses do you want to see?")
        .setRequired(true)
        .addChoices(
          { name: "Naomi", value: "naomi" },
          { name: "Becca", value: "becca" },
          { name: "Rosalia", value: "rosalia" },
          { name: "Beccalia", value: "beccalia" },
          { name: "Novas", value: "novas" }
        )
    )
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
