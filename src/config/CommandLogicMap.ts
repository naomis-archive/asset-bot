import { EmbedBuilder } from "discord.js";

import { Target } from "../interfaces/Target";
import { getAbout } from "../modules/getAbout";
import { getAdventure } from "../modules/getAdventure";
import { getEmote } from "../modules/getEmote";
import { getKoikatsu } from "../modules/getKoikatsu";
import { getOutfit } from "../modules/getOutfit";
import { getPortrait } from "../modules/getPortrait";
import { getTattoo } from "../modules/getTattoo";

export const CommandLogicMap: {
  [key: string]: () => Promise<EmbedBuilder>;
} = {
  outfit: getOutfit,
  about: getAbout,
  tattoos: getTattoo,
};

export const TargetedCommandLogicMap: {
  [key: string]: (target: Target) => Promise<EmbedBuilder>;
} = {
  adventure: getAdventure,
  portrait: getPortrait,
  koikatsu: getKoikatsu,
  emote: getEmote,
};
