/**
 * Typeguard for the target parameter.
 *
 * @param {string} target The target option from the interaction.
 * @returns {target is "naomi" | "becca" | "rosalia" | "beccalia"} If the target is valid.
 */
export const isValidTarget = (
  target: string
): target is "naomi" | "becca" | "rosalia" | "beccalia" | "novas" => {
  return ["naomi", "becca", "rosalia", "beccalia", "novas"].includes(target);
};
