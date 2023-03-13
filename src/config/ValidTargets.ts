import { Target } from "../interfaces/Target";

export const ValidTargets: {
  [key: string]: Partial<Target>[];
} = {
  adventure: ["naomi", "becca", "rosalia"],
  emote: ["naomi", "becca"],
  portrait: ["naomi", "becca", "rosalia", "beccalia"],
  koikatsu: ["naomi", "becca", "rosalia", "beccalia"],
};
