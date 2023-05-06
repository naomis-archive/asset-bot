import { Adventure } from "./Adventure";
import { Emote } from "./Emote";
import { Outfit } from "./Outfit";
import { Portrait } from "./Portrait";

export type Namespace = "naomi" | "rosalia" | "becca" | "beccalia" | "novas";

export type AssetType =
  | "adventures"
  | "emotes"
  | "outfits"
  | "portraits"
  | "poses";

export type AssetResponseType =
  | Adventure[]
  | Emote[]
  | Outfit[]
  | Portrait[]
  | string[];
