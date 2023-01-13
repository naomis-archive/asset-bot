import { SlashCommandBuilder } from "discord.js";

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
];
