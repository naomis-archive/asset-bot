import {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
} from "discord.js";
import { scheduleJob } from "node-schedule";

import { getOutfit } from "./modules/getOutfit";

async () => {
  const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

  bot.on("interactionCreate", async (interaction) => {
    if (
      !interaction.isChatInputCommand() ||
      interaction.commandName !== "outfit"
    ) {
      return;
    }
    await interaction.deferReply();
    const outfit = await getOutfit();
    await interaction.editReply({ embeds: [outfit] });
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
        body: [
          new SlashCommandBuilder()
            .setName("outfit")
            .setDescription("Get a random outfit.")
            .toJSON(),
        ],
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
