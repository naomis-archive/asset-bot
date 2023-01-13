import { EmbedBuilder } from "discord.js";

export const defaultEmbed = new EmbedBuilder()
  .setTitle("Oh no!")
  .setDescription("Something went wrong!")
  .setColor(0xff0000)
  .setFooter({
    text: "Donate to help us fix it? https://donate.naomi.lgbt",
    iconURL: "https://cdn.nhcarrigan.com/profile.png",
  });
