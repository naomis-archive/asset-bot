import { EmbedBuilder } from "discord.js";

export const defaultEmbed = new EmbedBuilder()
  .setTitle("Oh no!")
  .setDescription("Something went wrong!")
  .setColor(0xff0000)
  .setFooter({
    text: "Join our server: https://chat.naomi.lgbt",
    iconURL: "https://cdn.nhcarrigan.com/profile.png",
  });
