import { Client, GatewayIntentBits } from "discord.js";

import { interactionCreate } from "./events/interactionCreate";
import { ready } from "./events/ready";

async () => {
  const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

  bot.on(
    "interactionCreate",
    async (interaction) => await interactionCreate(interaction)
  );

  bot.on("ready", async () => await ready(bot));

  await bot.login(process.env.TOKEN);
};
