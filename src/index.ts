import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import { scheduleJob } from "node-schedule";

import { CommandLogicMap } from "./config/CommandLogicMap";
import { Commands } from "./config/Commands";
import { defaultEmbed } from "./modules/defaultEmbed";
import { getOutfit } from "./modules/getOutfit";

async () => {
  const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

  bot.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) {
      return;
    }
    await interaction.deferReply();
    const embed =
      (await CommandLogicMap[interaction.commandName]()) || defaultEmbed;
    await interaction.editReply({ embeds: [embed] });
  });

  bot.on("ready", async () => {
    console.log(`Logged in as ${bot.user?.tag}!`);

    const rest = new REST({ version: "10" }).setToken(
      process.env.TOKEN || "what"
    );

    await rest.put(
      Routes.applicationGuildCommands(
        bot.user?.id || "oopsie",
        "778130114772598785"
      ),
      {
        body: Commands,
      }
    );
    // run daily at 9AM
    scheduleJob("0 0 9 * * *", async () => {
      const guild = bot.guilds.resolve("778130114772598785");
      if (!guild) {
        return;
      }
      const channel = guild.channels.resolve("1063307149062713405");
      if (!channel || !("send" in channel)) {
        return;
      }
      const outfit = await getOutfit();
      await channel.send({
        content: "Here is <@!465650873650118659>'s outfit of the day~!",
        embeds: [outfit],
      });
    });
  });

  await bot.login(process.env.TOKEN);
};
