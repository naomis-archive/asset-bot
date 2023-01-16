import { EmbedBuilder } from "discord.js";

import { getAbout } from "../modules/getAbout";
import { getAdventure } from "../modules/getAdventure";
import { getEmote } from "../modules/getEmote";
import { getOutfit } from "../modules/getOutfit";
import { getPortrait } from "../modules/getPortrait";
import { getTattoo } from "../modules/getTattoo";

export const CommandLogicMap: {
  [commandName: string]: () => Promise<EmbedBuilder>;
} = {
  adventure: getAdventure,
  emote: getEmote,
  outfit: getOutfit,
  portrait: getPortrait,
  about: getAbout,
  tattoos: getTattoo,
};
